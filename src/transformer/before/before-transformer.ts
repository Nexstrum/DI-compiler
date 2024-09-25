import type {BaseVisitorContext, VisitorContext} from "../visitor-context.js";
import type {TS} from "../../type/type.js";
import type {BeforeVisitorOptions} from "./before-visitor-options.js";
import {visitNode} from "./visitor/visit-node.js";
import type {ImportedSymbol} from "../../type/imported-symbol.js";
import {ensureNodeFactory} from "compatfactory";

export function beforeTransformer(context: BaseVisitorContext): TS.TransformerFactory<TS.SourceFile> {
	return transformationContext => {
		const factory = ensureNodeFactory((transformationContext as {factory?: TS.NodeFactory}).factory ?? context.typescript);

		return sourceFile =>
			transformSourceFile(sourceFile, {
				...context,
				transformationContext,
				factory
			});
	};
}

export function transformSourceFile(sourceFile: TS.SourceFile, context: VisitorContext): TS.SourceFile {
	const requiredImportedSymbolSet = new Set<ImportedSymbol>();

	/**
	 * An optimization in which every imported symbol is converted into
	 * a string that can be matched against directly to guard against
	 * duplicates
	 */
	const requiredImportedSymbolSetFlags = new Set<string>();

	if (context.needsImportPreservationLogic) {
		context.sourceFileToAddTslibDefinition.set(sourceFile.fileName, false);
		context.sourceFileToRequiredImportedSymbolSet.set(sourceFile.fileName, requiredImportedSymbolSet);
	}

	const computeImportedSymbolFlag = (symbol: ImportedSymbol): string =>
		["name", "propertyName", "moduleSpecifier", "isNamespaceImport", "isDefaultImport"]
			.map(property => `${property}:${(symbol[property as keyof ImportedSymbol] as (typeof symbol)[keyof ImportedSymbol] | undefined) ?? false}`)
			.join("|");

	const visitorOptions: Omit<BeforeVisitorOptions<TS.Node>, "node" | "sourceFile"> = {
		context,

		addTslibDefinition: (): void => {
			if (!context.needsImportPreservationLogic) return;
			context.sourceFileToAddTslibDefinition.set(sourceFile.fileName, true);
		},

		requireImportedSymbol: (importedSymbol: ImportedSymbol): void => {
			if (!context.needsImportPreservationLogic) return;

			// Guard against duplicates and compute a string so we can do
			// constant time lookups to compare against existing symbols
			const flag = computeImportedSymbolFlag(importedSymbol);
			if (requiredImportedSymbolSetFlags.has(flag)) return;
			requiredImportedSymbolSetFlags.add(flag);

			requiredImportedSymbolSet.add(importedSymbol);
		},

		continuation: node =>
			visitNode({
				...visitorOptions,
				sourceFile,
				node
			}),
		childContinuation: node =>
			context.typescript.visitEachChild(
				node,
				cbNode =>
					visitNode({
						...visitorOptions,
						sourceFile,
						node: cbNode
					}),
				context.transformationContext
			)
	};

	return visitorOptions.continuation(sourceFile) as TS.SourceFile;
}
