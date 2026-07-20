# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [13] - 2026-07-20

### Added

- Data Type Templates tree shows the CDC of each Data Object type.

## [12] - 2026-07-07

### Changed

- Data Type Templates CDC categories now follow the official IEC 61850-7-3 grouping (Descriptions, Status Information, Controls, Settings).

## [11] - 2026-06-24

### Fixed

- Data Type Templates checkbox selections now keep mandatory descendants and enum values in sync.
## [10] - 2026-06-26

### Added

- NSD shows the dependency state after the import
### Fixed

- Switching between extensions no longer leaves a broken or stale view

## [9] - 2026-06-23

### Added

- Data Type Templates now groups data objects by CDC category and shows CDC context when browsing or adding data objects.

## [8] - 2026-06-24

### Changed

- Renamed the sidebar from "Namespaces" to "NSD".

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
