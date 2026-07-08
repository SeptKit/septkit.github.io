# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [18] - 2026-07-08

### Added

- Filter the table by the Hierarchy, Function, LNode and Data columns to quickly find specific data
- Filter the table by every label column (Object, Acquisition, LED, Local, HMI, Remote), including a "(No label)" option to find unlabelled data
- Search within a column's filter options to locate items of interest
- Select or deselect a whole branch of filter options at once via the tree checkboxes
- Select all or clear all of a popover's options with one click; Apply is the only action that changes the table
- Active filters are highlighted on the column header, and a row count above the table always shows how many rows are visible
- Remove all active filters at once next to the always-visible row count
- A clear message with a one-click reset appears when no rows match the active filters
- Filter popovers open with the search field focused and close with the Escape key
- The table shows a loading indicator while data is being read from the file

## [17] - 2026-06-26

### Fixed

- Switching between extensions no longer leaves a broken or stale view

## [16] - 2026-06-18

### Fixed

- Recently used labels modal doesn't show a missleading delete icon

## [15] - 2026-06-15

### Fixed

- Edit form Text field now shows autocomplete suggestions (same as create form)
- Create and edit sidepanel fields are now in consistent order: Text, Instance, Language
- Label `lang` attribute is now always saved as lowercase in the SCL file
- Changing language on an existing label auto-recalculates instance to prevent duplicate id+instance+language
- `local` column now displays existing labels in the table
- EX functional constraint values are now editable

## [14] - 2026-06-02

### Added

- Added delete possibility for labels in label manager table

## [13] - 2026-06-02

### Added

- Instance field in label sidepanel is now user-editable (positive integers only)
- Language change auto-recalculates instance to next free number if current instance is already taken by the new language

## [12] - 2026-06-02

### Fixed

- Value input coloring
- Enum type input text overlap fixed
- Read-only placeholder is now "--"

## [11] - 2026-05-28

### Added

- Added possibility to add new Labels through the label manager table

## [10] - 2026-05-21

### Added

- Value column now has different input types based on bType on the label manager table

## [9] - 2026-05-21

### Added

- Project oriented architecture migration

## [8] - 2026-05-21

### Added

- Value column has editable values in the label manager table

## [7] - 2026-05-21

### Added

- Sidepanel for editing Labels
- Language, instance, and text editing in label sidepanel with SCL persistence

## [6] - 2026-04-14

### Added

- Populated Labels section of the label manager table

## [5] - 2026-04-14

### Added

- Populated data section of the table

## [3] - 2026-04-01

### Changed

- Security update

## [2] - 2026-04-01

### Added

- Labels/Values Table
- Labels

## [1] - 2026-03-23

### Added

- New Extension
