# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

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
