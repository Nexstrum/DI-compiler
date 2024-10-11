## [4.0.1](https://github.com/wessberg/di-compiler/compare/v4.0.0...v4.0.1) (2024-10-11)

# [4.0.0](https://github.com/wessberg/di-compiler/compare/v4.0.0-beta.1...v4.0.0) (2024-10-10)

# [4.0.0-beta.1](https://github.com/wessberg/di-compiler/compare/v3.3.0...v4.0.0-beta.1) (2024-10-01)

### Features

- add TypeScript v5.6 support ([c502c7d](https://github.com/wessberg/di-compiler/commit/c502c7dc843949d5ebe95cf90584ed276085c8ca))
- make compatible with TypeScript v5.6 and Node >= 18.20, including the new loader mechanism ([9e5fe79](https://github.com/wessberg/di-compiler/commit/9e5fe79156de25a19c3ab99fc0b8634db789455f))

# [3.3.0](https://github.com/wessberg/di-compiler/compare/v3.2.0...v3.3.0) (2023-08-04)

### Bug Fixes

- run tests on Node v16.14.0 and up ([1357846](https://github.com/wessberg/di-compiler/commit/1357846d1c9bfc6e4f01f618de8e8ed57d1dce88))
- run tests on v16.15.1 instead ([b6bac40](https://github.com/wessberg/di-compiler/commit/b6bac405d50f803fbd77221a6fe07ed97d7b2b2a))

### Features

- add TypeScript v5.1 support ([3d0b582](https://github.com/wessberg/di-compiler/commit/3d0b582adee65dd54acdefed80ec337de6561809))

# [3.2.0](https://github.com/wessberg/di-compiler/compare/v3.1.0...v3.2.0) (2023-01-23)

### Features

- add .js extensions to built types to make them compatible with codebases running with Node16 or NodeNext module resolution ([87b74d1](https://github.com/wessberg/di-compiler/commit/87b74d16f0c3a431151bfb7869b914f7eba9620a))

# [3.1.0](https://github.com/wessberg/di-compiler/compare/v3.0.0...v3.1.0) (2023-01-10)

# [3.0.0](https://github.com/wessberg/di-compiler/compare/v2.2.6...v3.0.0) (2022-08-01)

### Features

- add new sponsor: scrubtheweb ([80eb1e2](https://github.com/wessberg/di-compiler/commit/80eb1e2ecee16851de867eb50c4c2e53ea00653f))
- add TypeScript v4.6 support ([7072df7](https://github.com/wessberg/di-compiler/commit/7072df7d83d93e29ad4662d39d6b6047ef84f1e5))
- migrate to ESM. Make passing a TypeScript program optional ([e4d9d0b](https://github.com/wessberg/di-compiler/commit/e4d9d0bd1b75f0d7982375d739be634651b47056))
- support operating without a Program ([d489cbc](https://github.com/wessberg/di-compiler/commit/d489cbc91b7434653f55f581295ea12843c993fd))

## [2.2.6](https://github.com/wessberg/di-compiler/compare/v2.2.5...v2.2.6) (2021-11-19)

### Features

- add TypeScript v4.5 support ([b3960ce](https://github.com/wessberg/di-compiler/commit/b3960cee9b13a36ba38a6f10d8627e43e73800df))

## [2.2.5](https://github.com/wessberg/di-compiler/compare/v2.2.4...v2.2.5) (2021-05-29)

## [2.2.4](https://github.com/wessberg/di-compiler/compare/v2.2.3...v2.2.4) (2021-05-29)

## [2.2.3](https://github.com/wessberg/di-compiler/compare/v2.2.2...v2.2.3) (2021-05-28)

## [2.2.2](https://github.com/wessberg/di-compiler/compare/v2.2.1...v2.2.2) (2021-05-28)

## [2.2.1](https://github.com/wessberg/di-compiler/compare/v2.2.0...v2.2.1) (2021-05-21)

### Bug Fixes

- don't include type arguments as part of the service identifier inside parsed constructor arguments ([3a2f3ff](https://github.com/wessberg/di-compiler/commit/3a2f3ff2f825b0f85b073310da5d16bf3f0eaf98))

# [2.2.0](https://github.com/wessberg/di-compiler/compare/v2.1.1...v2.2.0) (2021-05-21)

### Bug Fixes

- **imports:** fix a bug where registering the same implementation multiple times will generate multiple imports ([f8c388b](https://github.com/wessberg/di-compiler/commit/f8c388b07351e737b51ff021a013c867f6a3c008))
- make all tests pass on every TypeScript version in the range [3.0, 4.3-rc1] ([265ac93](https://github.com/wessberg/di-compiler/commit/265ac93282d58fab4d6ccc6ddd17e52592e27eff))
- type arguments passed to registerSingleton and registerTransient should themselves be allowed to receive type arguments, and these should not count towards the service/implementation name ([76773ab](https://github.com/wessberg/di-compiler/commit/76773ab5a0846c3858c86e111fac35656583070e))

## [2.1.1](https://github.com/wessberg/di-compiler/compare/v2.1.0...v2.1.1) (2020-06-01)

### Bug Fixes

- remove throw statement for SystemJS as compiletarget ([c8d370e](https://github.com/wessberg/di-compiler/commit/c8d370e4116d19cdd8a50276a86619ac91beb6d6))

# [2.1.0](https://github.com/wessberg/di-compiler/compare/v2.0.5...v2.1.0) (2020-05-27)

### Features

- major refactoring with support for CommonJS, AMD, and SystemJS as targets ([bfeedef](https://github.com/wessberg/di-compiler/commit/bfeedef6db6c6624f1ed861db815b53f471cef30))

## [2.0.5](https://github.com/wessberg/di-compiler/compare/v2.0.4...v2.0.5) (2019-06-21)

## [2.0.4](https://github.com/wessberg/di-compiler/compare/v2.0.3...v2.0.4) (2019-05-29)

## [2.0.3](https://github.com/wessberg/di-compiler/compare/v2.0.2...v2.0.3) (2019-05-29)

## [2.0.2](https://github.com/wessberg/di-compiler/compare/v2.0.1...v2.0.2) (2018-11-28)

## [2.0.1](https://github.com/wessberg/di-compiler/compare/v2.0.0...v2.0.1) (2018-11-14)

# [2.0.0](https://github.com/wessberg/di-compiler/compare/v1.0.76...v2.0.0) (2018-11-12)

## [1.0.76](https://github.com/wessberg/di-compiler/compare/v1.0.75...v1.0.76) (2018-09-19)

## [1.0.75](https://github.com/wessberg/di-compiler/compare/v1.0.74...v1.0.75) (2018-07-31)

## [1.0.74](https://github.com/wessberg/di-compiler/compare/v1.0.73...v1.0.74) (2018-06-21)

## [1.0.73](https://github.com/wessberg/di-compiler/compare/v1.0.72...v1.0.73) (2018-06-21)

## [1.0.72](https://github.com/wessberg/di-compiler/compare/v1.0.71...v1.0.72) (2018-06-13)

## [1.0.71](https://github.com/wessberg/di-compiler/compare/v1.0.70...v1.0.71) (2018-06-13)

## [1.0.70](https://github.com/wessberg/di-compiler/compare/v1.0.69...v1.0.70) (2018-06-08)

## [1.0.69](https://github.com/wessberg/di-compiler/compare/v1.0.68...v1.0.69) (2018-05-10)

## [1.0.68](https://github.com/wessberg/di-compiler/compare/v1.0.67...v1.0.68) (2018-04-30)

## [1.0.67](https://github.com/wessberg/di-compiler/compare/v1.0.66...v1.0.67) (2018-04-25)

## [1.0.66](https://github.com/wessberg/di-compiler/compare/v1.0.65...v1.0.66) (2018-04-18)

## [1.0.65](https://github.com/wessberg/di-compiler/compare/v1.0.64...v1.0.65) (2018-04-03)

## [1.0.64](https://github.com/wessberg/di-compiler/compare/v1.0.63...v1.0.64) (2018-03-31)

## [1.0.63](https://github.com/wessberg/di-compiler/compare/v1.0.62...v1.0.63) (2018-03-31)

## [1.0.62](https://github.com/wessberg/di-compiler/compare/v1.0.61...v1.0.62) (2018-02-03)

## [1.0.61](https://github.com/wessberg/di-compiler/compare/v1.0.60...v1.0.61) (2017-10-21)

## [1.0.60](https://github.com/wessberg/di-compiler/compare/v1.0.59...v1.0.60) (2017-09-18)

## [1.0.59](https://github.com/wessberg/di-compiler/compare/v1.0.58...v1.0.59) (2017-09-10)

## [1.0.58](https://github.com/wessberg/di-compiler/compare/v1.0.57...v1.0.58) (2017-09-10)

## [1.0.57](https://github.com/wessberg/di-compiler/compare/v1.0.56...v1.0.57) (2017-09-10)

## [1.0.56](https://github.com/wessberg/di-compiler/compare/v1.0.55...v1.0.56) (2017-09-10)

## [1.0.55](https://github.com/wessberg/di-compiler/compare/v1.0.54...v1.0.55) (2017-09-04)

## [1.0.54](https://github.com/wessberg/di-compiler/compare/v1.0.53...v1.0.54) (2017-09-04)

## [1.0.53](https://github.com/wessberg/di-compiler/compare/v1.0.52...v1.0.53) (2017-09-04)

## [1.0.52](https://github.com/wessberg/di-compiler/compare/v1.0.51...v1.0.52) (2017-09-03)

## [1.0.51](https://github.com/wessberg/di-compiler/compare/v1.0.50...v1.0.51) (2017-09-03)

## [1.0.50](https://github.com/wessberg/di-compiler/compare/v1.0.49...v1.0.50) (2017-09-03)

## [1.0.49](https://github.com/wessberg/di-compiler/compare/v1.0.48...v1.0.49) (2017-09-03)

## [1.0.48](https://github.com/wessberg/di-compiler/compare/v1.0.47...v1.0.48) (2017-09-03)

## [1.0.47](https://github.com/wessberg/di-compiler/compare/v1.0.46...v1.0.47) (2017-08-28)

## [1.0.46](https://github.com/wessberg/di-compiler/compare/v1.0.45...v1.0.46) (2017-08-28)

## [1.0.45](https://github.com/wessberg/di-compiler/compare/v1.0.44...v1.0.45) (2017-08-28)

## [1.0.44](https://github.com/wessberg/di-compiler/compare/v1.0.43...v1.0.44) (2017-08-28)

## [1.0.43](https://github.com/wessberg/di-compiler/compare/v1.0.42...v1.0.43) (2017-08-28)

## [1.0.42](https://github.com/wessberg/di-compiler/compare/v1.0.41...v1.0.42) (2017-08-28)

## [1.0.41](https://github.com/wessberg/di-compiler/compare/v1.0.40...v1.0.41) (2017-08-28)

## [1.0.40](https://github.com/wessberg/di-compiler/compare/v1.0.39...v1.0.40) (2017-08-17)

## [1.0.39](https://github.com/wessberg/di-compiler/compare/v1.0.38...v1.0.39) (2017-08-03)

## [1.0.38](https://github.com/wessberg/di-compiler/compare/v1.0.37...v1.0.38) (2017-07-28)

## [1.0.37](https://github.com/wessberg/di-compiler/compare/v1.0.36...v1.0.37) (2017-07-28)

## [1.0.36](https://github.com/wessberg/di-compiler/compare/v1.0.34...v1.0.36) (2017-07-28)

## [1.0.34](https://github.com/wessberg/di-compiler/compare/v1.0.33...v1.0.34) (2017-07-20)

## [1.0.33](https://github.com/wessberg/di-compiler/compare/v1.0.32...v1.0.33) (2017-07-19)

## [1.0.32](https://github.com/wessberg/di-compiler/compare/v1.0.31...v1.0.32) (2017-07-19)

## [1.0.31](https://github.com/wessberg/di-compiler/compare/v1.0.30...v1.0.31) (2017-07-19)

## [1.0.30](https://github.com/wessberg/di-compiler/compare/v1.0.29...v1.0.30) (2017-07-19)

## [1.0.29](https://github.com/wessberg/di-compiler/compare/v1.0.28...v1.0.29) (2017-07-19)

## [1.0.28](https://github.com/wessberg/di-compiler/compare/v1.0.27...v1.0.28) (2017-07-19)

## [1.0.27](https://github.com/wessberg/di-compiler/compare/v1.0.26...v1.0.27) (2017-07-18)

## [1.0.26](https://github.com/wessberg/di-compiler/compare/v1.0.25...v1.0.26) (2017-07-18)

## [1.0.25](https://github.com/wessberg/di-compiler/compare/v1.0.24...v1.0.25) (2017-07-06)

## [1.0.24](https://github.com/wessberg/di-compiler/compare/v1.0.23...v1.0.24) (2017-07-06)

## [1.0.23](https://github.com/wessberg/di-compiler/compare/v1.0.22...v1.0.23) (2017-07-05)

## [1.0.22](https://github.com/wessberg/di-compiler/compare/v1.0.21...v1.0.22) (2017-07-05)

## [1.0.21](https://github.com/wessberg/di-compiler/compare/v1.0.20...v1.0.21) (2017-07-05)

## [1.0.20](https://github.com/wessberg/di-compiler/compare/v1.0.19...v1.0.20) (2017-07-05)

## [1.0.19](https://github.com/wessberg/di-compiler/compare/v1.0.18...v1.0.19) (2017-07-05)

## [1.0.18](https://github.com/wessberg/di-compiler/compare/v1.0.17...v1.0.18) (2017-05-31)

## [1.0.17](https://github.com/wessberg/di-compiler/compare/v1.0.16...v1.0.17) (2017-05-31)

## [1.0.16](https://github.com/wessberg/di-compiler/compare/v1.0.15...v1.0.16) (2017-05-31)

## [1.0.15](https://github.com/wessberg/di-compiler/compare/v1.0.14...v1.0.15) (2017-05-31)

## [1.0.14](https://github.com/wessberg/di-compiler/compare/v1.0.13...v1.0.14) (2017-05-31)

## [1.0.13](https://github.com/wessberg/di-compiler/compare/v1.0.12...v1.0.13) (2017-05-31)

## [1.0.12](https://github.com/wessberg/di-compiler/compare/v1.0.11...v1.0.12) (2017-05-31)

## [1.0.11](https://github.com/wessberg/di-compiler/compare/v1.0.10...v1.0.11) (2017-05-31)

## [1.0.10](https://github.com/wessberg/di-compiler/compare/v1.0.9...v1.0.10) (2017-05-31)

## [1.0.9](https://github.com/wessberg/di-compiler/compare/v1.0.8...v1.0.9) (2017-05-31)

## [1.0.8](https://github.com/wessberg/di-compiler/compare/v1.0.7...v1.0.8) (2017-05-30)

## [1.0.7](https://github.com/wessberg/di-compiler/compare/v1.0.6...v1.0.7) (2017-05-30)

## [1.0.6](https://github.com/wessberg/di-compiler/compare/v1.0.5...v1.0.6) (2017-05-30)

## [1.0.5](https://github.com/wessberg/di-compiler/compare/v1.0.4...v1.0.5) (2017-05-30)

## [1.0.4](https://github.com/wessberg/di-compiler/compare/v1.0.3...v1.0.4) (2017-05-25)

## [1.0.3](https://github.com/wessberg/di-compiler/compare/v1.0.2...v1.0.3) (2017-05-25)

## [1.0.2](https://github.com/wessberg/di-compiler/compare/v1.0.1...v1.0.2) (2017-05-24)

## 1.0.1 (2017-05-24)
