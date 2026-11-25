# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [34] - 2026-11-25

### Added

- Mark BehaviorDescriptions with references in the selector

## [33] - 2026-11-24

### Fixed

- Show newly created Input/Output Variables in the overview
- Show only LNodes belonging to the BehaviorDescription when selecting data for a variable

## [31] - 2026-11-23

### Added

- Select BehaviorDescriptions by searching their SCL hierarchy

## [30] - 2026-11-23

### Added

- Edit a BehaviorReference target from the References list, with save progress shown while it refreshes

## [29] - 2026-11-20

### Added

- Search BehaviorDescriptions by name in the BehaviorDescription selector
- Open a referenced BehaviorDescription by clicking its name in the References section

### Changed

- Add Reference dialog picks targets in the SCL Explorer with a name search; XPath and scope controls removed
- BehaviorDescriptions that are already referenced are shown with a hint but cannot be selected

## [26] - 2026-11-16

### Changed

- Display all necessary of a behavior reference

## [25] - 2026-11-16

### Added

- Remove a BehaviorReference from the References section

## [24] - 2026-11-16

### Added

- Add a reference from a BehaviorDescription to another BehaviorDescription in a new References section

## [23] - 2026-11-15

### Added

- Automatically create missing DOS/DAS and application references for data attribute Input/Output variables

## [22] - 2026-11-13

### Changed

- The logical node list opens faster on large projects.

## [14] - 2026-06-26

### Fixed

- Switching directly to another extension now works on the first attempt

## [13] - 2026-06-12

### Fixed

- Switching the selected BehaviorDescription now updates the variables panel

## [12] - 2026-06-03

### Fixed

- Build process fix

## [11] - 2026-06-03

### Added

- Variables can now be deleted from the table

## [10] - 2026-05-27

### Changed

- Display name corrected to American spelling: "Behavior Description"

## [9] - 2026-05-27

### Changed

- Renamed package from "logic-editor" to "behavior-description"

## [8] - 2026-04-01

### Changed

- Security update

## [7] - 2025-12-12

### Added

- Include Changelog in build output

### Changed

- Changed name of widget to "Behaviour Description"

## [6] - 2025-12-02

### Changed

- Remove LNode type in labels for DA select options
- Restrict LNode selection by selected Behavior Description
- Change default selection of Output Variable to "Data Attribute"
- Fix dataName path to DOS.DAS for Input and Output Variables

## [5] - 2025-12-02

### Changed

- UI and file io package update
