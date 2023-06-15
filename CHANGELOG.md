# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]


## [0.2.4] - 2023-06-15

### Bug Fixes

- Change the Github token in the CI/CD workflow

## [0.2.3] - 2023-06-15

### Bug Fixes

- Runt `npm audit fix --force` to automatically upgrade vulnerable packages

## [0.2.2] - 2022-08-17

### Bug Fixes

- Runt `npm audit fix --force` to automatically upgrade vulnerable packages

### Changed

- Removed yarn and starting using npm by default
- Removed the `develop` branch from the repo

### Added

- Added another test case to ensure invalid channel id is handled correctly

## [0.2.1] - 2020-08-11

### Changed

- Fix `package.json` file
- update publish script for public

## [0.2.0] - 2020-08-11

### Changed

- Update Github actions CI/CD workflow
- Change package name, adding company prefix

## [0.1.1] - 2020-08-10

### Changed

- update channelId validation and tests added

## [0.1.0] - 2020-08-10

First release that works

### Added

- add youtube channel feed fetcher
