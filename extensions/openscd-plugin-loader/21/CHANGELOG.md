# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [21] - 2026-07-10

### Removed

- Template Generator, Template Updater and DataType Templates tabs

## [19] - 2026-06-01

### Fixed

- Switch between openscd extension after the migration

## [18] - 2026-05-22

### Changed

- Project oriented architecture migration

## [17] - 2026-05-21

### Fixed

- an issue where icons were not displayed in the supervision plugin

## [16] - 2026-05-11

### Fixed

- Handle `Insert` and `Remove` edits where `node` is a `Text` node (e.g. supervision `Val` content); previously crashed with `element.getAttribute is not a function`

## [15] - 2026-04-01

### Changed

- Security update

## [14] - 2025-12-12

### Added

- Include Changelog in build output

## [12] - 2025-12-06

### Changed

- allow relative openscd plugin urls

## [11] - 2025-12-02

### Changed

- UI and file io package update

## [10] - 2025-12-01

### Fixed

- Fix leaking text in exported XMLs

## [9] - 2025-12-01

### Changed

- OpenSCD Translation: if an element was already added to the database use that instead of
  throwing an error.

## [7] - 2025-11-10

### Changed

- Event Translation Layer now considers children of element being inserted

## [5] - 2025-10-14

### Changed

- support fileio v2.0.4
