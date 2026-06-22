# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [7] - 2026-06-22

### Added

- Data Type Templates editor for SSD, ASD, and SCD files to browse, create, edit, and delete `LNodeTypes`.
- Create a logical node type from a logical node class, and delete one with a confirmation prompt.
- View `LNodeType` details with its data object and attribute tree, add data objects, edit enumerations, and see which logical nodes (`LNode`) use the type.
- Filter by mandatory or optional and pick entries with checkboxes; mandatory children are selected automatically with their parent.
- Cancel create or edit, with a warning before discarding unsaved changes.
- Referenced types are locked to prevent accidental edits.
- Save in place (if not used) or create a new version based on the current `LNodeType`
- Version are visible through `#V{n}` suffix

### Changed

- Renamed the sidebar to "Namespaces".

## [6] - 2026-05-27

### Changed

- Project oriented architecture migration

## [5] - 2026-05-13

### Changed

- Support project oriented import

## [4] - 2026-04-01

### Changed

- Security update

## [2] - 2026-02-26

### Added

- Possibility to upload NSD files

## [1] - 2026-02-05

### Added

- Library extension
