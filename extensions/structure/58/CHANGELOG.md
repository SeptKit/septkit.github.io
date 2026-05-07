# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [Unreleased]

## [58] 2026-05-07

### Fixed

- Fix crash when expanding Function nodes containing LNodes without prefix or lnInst attributes

## [57] 2026-05-06

### Changed

- Nodes use the centrally defined color

## [56] 2026-05-04

### Changed

- Redesigned diagram nodes with a children counters by type

### Added

- Ensure SignalRole "Information" is created upon Dos/Das creation

## [55] 2026-05-03

### Added

- Collapsed siblings of the same element type in the diagram are now grouped into a single container node showing `TagName (count)`

### Changed

- Notes on engineering artifacts now store author, timestamps, and status alongside the note text
- Author is editable until it can be determined by logged in user.
- Tree diagram now opens only the first 2 levels by default, preserves user expand/collapse state across re-renders, hides `Text` elements, and disables auto-follow by default

## [54] 2026-05-01

### Changed

- Parent-child relationships are now displayed as dashed step connections instead of nested containment boxes

## [53] 2026-04-30

### Added

- Engineers can add, edit, and delete free-text notes on supported engineering artifacts via a new **Notes** tab in the right sidebar

## [52] 2026-04-29

### Fixed

- Deleting the last label also removes the empty `Labels` element

## [51] 2026-04-29

### Fixed

- Deleting a label removes references to it

## [50] 2026-04-29

### Changed

- Removed predefined subcategories
- Updated function categories based on AdditionalTables

## [49] - 2026-04-24

### Fixed

- Clicking an LNode in the sidebar no longer crashes when no data object is selected
- Preserve `templateUuid` and `originUuid` attributes correctly during FSD/ASD extraction

## [48] - 2026-04-23

### Changed

- Security update

## [47] - 2026-04-23

### Changed

- ASD/FSD extraction includes all inner elements and references

### Fixed

- ASD extraction :
  - Function extraction site is now the same from source to target
  - Empty attributes are now removed at extraction

## [46] - 2026-04-17

### Fixed

- Ensure 'Save a copy' can be successfully executed after ied removal

## [45] - 2026-04-09

### Fixed

- Ensure no originUuid on LNode, SubFunction and Function elements

## [44] - 2026-03-31

## Added

- Function extraction and reference resolution added to Application extraction

## [43] - 2026-03-26

### Fixed

- Correct order of SMV FCDA dataset on export

## [42] - 2026-03-24

### Fixed

- Save Substation name change

## [41] - 2026-03-23

### Fixed

- Ensure mandatory inst attribute on LN0 during S-IED creation

## [40] - 2026-03-19

### Added

- Basic ASD export : the output shows a history entry, and the application cloned at the right place in the process section.

## [39] - 2026-03-12

### Added

- Add DOS/DAS to LNodes

## [38] - 2026-03-12

### Fixed

- Not allowing nameless function or subfunction creation

## [37] - 2026-03-11

### Added

- A predefined list of FunctionCategories and SubCategories is shown for the function Add form
- FunctionCategory and SubCategory selected from the list gets created automatically if not-existing

## [36] - 2026-03-09

### Fixed

- Update uuid and path references in all referencing elements after FSD/ASD instantiation

## [35] - 2026-03-05

### Fixed

- Extract to FSD feature :
  - `lnUuid` removed when empty
  - fixed reference between extracted `Function` and their `FunctionCatRef`
  - `LNodeSpecNaming` reset
  - `templateUuid` and `originUuid` removed on extraction root level

## [34] - 2026-03-03

### Changed

- Adapt available DAS labels

## [33] - 2026-02-26

### Changed

- Detect Application Root Function on ASD instantiation and only create a Root Function if missing

### Fixed

- Instantiate Function Categories always on Substation level during FSD/ASD instantiation
- Prevent duplicate FunctionCatRef elements after FSD/ASD instantiation
- Update FunctionRefs to new Function UUID and path on FSD/ASD instantiation
- Only transfer used Data Model Types on FSD/ASD instantiation

## [32] - 2026-02-19

### Added

- Extract `FunctionCategory` on `Function` and `SubFunction` extraction

### Changed

- Disable category selection for (Sub)Functions which are part of an Application

## [31] - 2026-02-05

### Added

- Data model extraction for `Function` and `SubFunction` extraction feature

## [30] - 2026-02-12

### Fixed

- Ensure unique Function names on FSD instantiation with possibility to edit conflicting names
- Ensure unique uuids after FSD instantiation
- Add (Sub)Function to Application on FSD instantiation

## [29] - 2026-02-05

### Added

- Clean `Function` and reset `LNode` on extraction to FSD

## [28] - 2026-02-04

### Added

- `Function` and `SubFunction` extraction to a new FSD file.

## [27] - 2026-01-29

### Added

- Instance number field for labels to allow multiple labels of the same name
- Automatic instance number recommendations based on existing labels

### Changed

- Prevention of duplicate DOS elements when creating multiple labels in same data object

## [26] - 2025-12-12

### Added

- Include Changelog in build output

### Changed

- Prefill S-IED name with AllocationRole's name when implementing an AllocationRole by S-IED

## [25] - 2025-12-10

### Added

- ProcessResource creation form and context menu
- Assign ProcessResource to Application
- Assign BehaviorDescription to Application

### Changed

- `LNodeSpecNaming` now has the correct namespace
- `Label` element are now created without a namespace
- `Label` elements have the correct `lang` attribute name

## [24]

### Changed

- update all `LNodeSpecNaming` when implementing an Allocation Role

## [23]

### Changed

- Allow SubFunction to have SubCategories

## [22]

### Changed

- Add communication to structure view

## [21]

### Changed

- show Function SubCategories when creating a function

## [20]

### Changed

- On Function creation assign function to application if it is part of an application root function
- UI and file io package update

## [19]

### Added

- Connect S-IED to Default Subnetwork on AllocationRole Implementation
- On Application creation automatically create Root Function on same level and link Function inside Application's Root Function Role
- Assignment of AllocationRoles to Functions and vice versa

### Changed

- `LNodeSpecNaming` is created with the `LNode`
- The `LNode` data model is locked if it is assigned to an (S-)IED
- The `lnType` of the `LNode` and appropriate attributes are synced to the `LNodeSpecNaming`

## [18] 2025-11-12

### Added

- Auto Follow: Follow the expanded and collapse nodes

### Changed

- Labels: Reset form validation if values change after an error state
- `DOS` and `DAS` creation: do not assume that `DO` and `DA` have `desc` attribute as it is optional.
- Disallow Application creation at SCL root level
- Fix a problem when saving the project was impossible if the user has added
  a function manually (not instantiated)

## [17] - 2025-11-06

### Added

- Create Labels for DAS in LNode Details

## [16] - 2025-11-04

### Added

- Instantiate Function from the context menu

### Removed

- Main Menu: `Instantiate/Function`, we use the context menu

## [13] - 2025-10-17

### Added

- LNode Creation

## [12] - 2025-10-15

### Changed

- support fileio v2.0.4

## [10] - 2025-09-23

### Changed

- Migration to fileio 1.1.0 to consume the one table structure

## [9] - 2025-09-17

### Added

- Create Application Element
- Create Allocation Role Element
- Create Behavior Description

### Changed

- Pinia stores for app, diagram, layout and creation forms
- Dialog container as generic component

## [8] - 2025-09-10

### Added

- Extension load unified for development and production environment

## [7] - 2025-09-12

### Added

- Adding Substation / VoltageLevel / Bay / Function / SubFunction context menu, form and element creation
