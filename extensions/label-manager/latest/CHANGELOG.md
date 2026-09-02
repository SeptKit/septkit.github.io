# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [27] - 2026-09-02

### Fixed

- The "Printout IEC 104 Address list" button is now disabled until the label data has finished loading, so the export always reflects the loaded rows instead of producing an empty file when clicked too early

## [26] - 2026-09-01

### Added

- Export the project-wide IEC 104 address list to an Excel file via a "Printout IEC 104 Address list" button; each row lists the IEC 104 address (casdu, ioa, type), the 61850 data model path, the sending and receiving function, and the label information

## [25] - 2026-08-31

### Fixed

- Boolean label properties are now edited with a checkbox instead of a True/False dropdown; selecting a value now reliably persists and is displayed, where previously choosing "False" appeared to do nothing

## [24] - 2026-08-25

### Changed

- The alarm temporisation and remote technical remark fields now offer suggested values in a dropdown while still accepting free input (alarm temporisation as a number in seconds)
- Reduced the label metadata to the relevant properties; less-used fields are no longer shown (they remain in the catalog and can be re-enabled later)
- Updated the selectable dropdown values and their order for the signal type, voltage range and grouping level properties
- When a data point carries several label instances (e.g. Remote_1 and Remote_2), each instance now appears on its own row with its own IEC 104 address and properties, all individually editable - previously such data was shown as "Multiple instances" and could not be edited

### Fixed

- Show and edit label metadata that is stored directly under `Labels` (without a `Private` wrapper), as produced by external tools - previously such metadata stayed invisible

## [23] - 2026-08-17

### Changed

- Editing a multi-select list property now offers a search field to narrow options, plus full keyboard navigation, instead of a plain checkbox list.

## [22] - 2026-07-23

### Added

- Edit label metadata properties (text, True/False, single- and multi-select lists) directly in the expanded label view, saved straight to the SCL file
- Edit the IEC 104 address (casdu, ioa, type) inline in the Remote view
- Fill an empty property by clicking its "..." placeholder and entering a value to create it
- See at a glance whether each property is editable or locked (read-only)
- Show a small lock icon on an individual read-only value so it is clear why a single field is locked even when its column is editable
- See a padlock icon on every property column header: open when its values are editable, closed when they are all locked (read-only)
- Remove a leftover empty metadata element via a small "x" on the field
- Show or hide individual property columns in the expanded label view via a "Columns" menu

### Changed

- A property value that is not part of the configured catalog now shows an orange warning with an explanation and, when not locked, can be replaced with a catalog value - instead of a generic "Invalid value"
- Clearing a property's value removes the element from the SCL file to keep it compact
- Existing but empty metadata elements now appear as empty fields so they are no longer overlooked
- Single-select property dropdowns offer a "..." option to clear the current selection
- Property columns share a consistent baseline width and grow only when their content needs more room
- Properties stay read-only for data that has no label in the column yet; a "No label" hint explains to create a label first

## [21] - 2026-07-22

### Fixed

- Bugfix for wrong namespace of eLabelInfo:Address element

## [20] - 2026-07-20

### Added

- Reset a single column's filter directly from its header with a one-click reset button
- The hierarchy filter opens fully expanded so every level is visible without manual expansion
- Filter the value column to only rows that have a value and/or can have a value
- Pick a language (NL/FR/EN) in a label column's filter to show only that language's labels and hide rows without one

### Changed

- Typing in a column filter search now selects only the shown (matching) options; clearing the search restores the previous selection
- Optimized filter predicate to avoid per-row allocations on label columns

## [19] - 2026-07-09

### Added

- Expand any label column (Object, Acquisition, LED, Local, HMI, Remote) to view the predefined metadata properties for each data point
- See the IEC 104 address (casdu, ioa, type) next to the Remote label's properties
- Open the label metadata catalog from a "Catalog" button to review the predefined properties available per label id

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
