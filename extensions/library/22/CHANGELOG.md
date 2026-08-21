# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [22] - 2026-08-21

### Added

- `AllAtLeastOneGroup(n)` sibling DOs/DAs in the LNodeType tree now render as a single multi-select with one option per candidate group (labeled with that group's member names); selecting a group enables all of its members without affecting other groups, so more than one whole group can be selected at once, and unchecking the last remaining selected group is blocked

## [21] - 2026-08-21

### Added

- `AllOnlyOneGroup(n)` sibling DOs/DAs in the LNodeType tree now render as a single combobox with one option per candidate group (labeled with that group's member names); selecting a group enables all of its members and clears any previously selected group, so no more than one whole group can ever be selected at once

## [20] - 2026-08-20

### Added

- `AtMostOne` sibling DOs/DAs in the LNodeType tree now render as a single nullable combobox instead of separate checkbox rows; selecting a member auto-deselects any previously selected one, and selecting none is a valid state
- `AllOrNonePerGroup(n)` sibling DOs/DAs in the LNodeType tree now render as a single checkbox labeled with the group's member names; checking or unchecking it enables or disables every member of the group together
- The merged `AllOrNonePerGroup(n)` checkbox row now also shows the setting FC (SP/SE/SG) dropdown when the group carries one, and changing it applies the same value to every member of the group

## [19] - 2026-08-20

### Added

- `Mmulti`/`Omulti` DOs in the LNodeType tree now show an editable instance-count number input (min=1/min=0); for `Omulti`, raising the count above 0 auto-checks the row and setting it back to 0 auto-unchecks it
- Saving now generates one numbered SCL instance per unit of the `Mmulti`/`Omulti` count (e.g. `Ind1`, `Ind2`, ...), and re-opening an existing type with saved instances restores the count instead of showing them as separate custom DOs
- `AtLeastOne(n)` sibling DOs/DAs in the LNodeType tree now render as a single multi-select group instead of separate checkbox rows, and unchecking the last remaining selected member of the group is blocked

### Fixed

- `na` (not applicable) presence condition now renders disabled/unchecked/toggle-locked like `F` (forbidden), instead of being wrongly togglable

## [18] - 2026-08-19

### Added

- `LNodeType` header display base- and extension namespace


## [17] - 2026-08-18

### Added

- Setting DOTypes (`ASG`, `CSG`, `CUG`, `CURVE`, `ENG`, `ING`, `SPG`, `TSG`, `VSG`) now show a dropdown to choose the Functional Constraint (SP/SE/SG), defaulting to SP on create and preserving the saved value on edit, instead of a silently auto-assigned FC.

## [16] - 2026-07-28

### Fixed

- Deleting an `LNodeType` now cleans up its now-orphaned `DOType`/`DAType`/`EnumType` chain instead of leaving them behind.

## [15] - 2026-07-23

### Added

- `LNClass` picker now shows which imported NSD(s) extend an `LNClass`.

### Fixed

- Custom `DOs` not have a `dataNS=Custom` flag to signal that the `DO` has been added outside of the NSD-defined structure

## [14] - 2026-07-21

### Fixed

- Creating an `LNodeType` no longer produces an invalid document when a mandatory data attribute's structure has no defined sub-attributes.

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
