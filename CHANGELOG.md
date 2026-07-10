# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [50] - 2026-07-10

### Changed

- Project document lists now stay in sync automatically and remain sorted by name.

## [49] - 2026-07-07

### Fixed

- Iframe-based editors (the OpenSCD editors: Single Line Editor, Template Generator, Template Updater, DataType Templates) now follow the active document. Selecting a different file in the project tree updates the editor instead of staying stuck on the first document that was opened.

## [48] - 2026-07-05

### Added

- Project tree panel: browse, switch, and expand projects directly in the primary sidebar, always visible above the active extension widget and resizable independently of it

### Changed

- Project tree moved from the Explorer extension into the shell (previously disappeared when switching to a widget without one)

## [47] - 2026-07-02

### Added

- Close and reopen the left sidebar by clicking its active icon in the activity bar
- On small screens the sidebar starts closed and opens via the activity bar icons

### Changed

- Dragging the left sidebar below its minimum width now snaps it closed
- Improved spacing between the activity bar icons

## [46] - 2026-06-26

### Fixed

- Extension cleanup failures during a widget switch no longer abort switching to the next extension

## [45] - 2026-06-23

### Fixed

- Namespace update no longer produces invalid XML for files without an `eIEC61850-6-100` declaration, so OpenSCD-created SLD files can be opened and saved again

### Changed

- Namespace mismatch modal now shows a before/after overview table (Namespace, Loaded File, After Import, Action) with Update / Create / Keep actions
- Modal lists additional namespace declarations (e.g. `eLabelInfo`, `esld`, `sxy`) as read-only Keep rows when they carry a version/revision/release triplet

## [44] - 2026-06-22

### Added

- "All Extensions" changelog view combining recent entries from every extension, newest first

## [42] - 2026-05-19

### Added

- Project-based data management: open, switch, and restore projects across sessions

### Changed

- Menu actions renamed to project-centric (Open Project, Add Document, New Project)

### Removed

- Active SCL file info badge in navbar (replaced by project-level tracking)

## [41] - 2026-05-05

### Added

- Namespace mismatch handling on file open with dedicated update modal
- Generic `BaseModal` component and reusable dialog store/modal for alert and confirm flows
- Component and store tests for namespace update and modal interactions

### Changed

- Replaced native `window.alert` and `window.confirm` usage with app-level dialog modal flows
- New file and namespace dialogs now use the shared modal base component

## [40] - 2026-05-01

### Added

- File switcher in navbar: select dropdown lists all IndexedDB databases and allows switching the active file

## [39] - 2026-04-24

### Changed

- File import and export now use the Dialecte SCL library, improving attribute handling and schema compliance
- File picker accepts all supported SCL extensions instead of a hardcoded value
- Export flow simplified - formatting and download handled automatically

### Removed

- `@septkit/fileio` dependency replaced by `@dialecte/scl`

## [38] - 2026-04-01

### Changed

- Security update

## [37] - 2026-03-26

### Added

- Path reference to uuid equivalent resolution on import

## [36] - 2026-03-26

### Fixed

- Correct order of SMV FCDA dataset on export

## [33] - 2026-03-13

### Changed

- Add History Hitem with initial version and revision when creating a new project

## [31] - 2026-03-06

### Fixed

- PWA update

## [30] - 2026-03-02

### Fixed

- All Extensions now update correctly when switching the active file (no reload needed)

## [29] - 2026-02-24

- File IO update

## [27] - 2026-02-11

- Rename menu item "Save" to "Save a Copy"

## [26] - 2026-01-09

### Added

- Include version and changelog entries of last 30 days of every extension in Statusbar

## [25] - 2025-12-09

### Added

- Add Statusbar with current version and changelog entries of the last 30 days

## [24] - 2025-12-07

### Changed

- allow relative extension urls

## [23] - 2025-12-02

### Changed

- UI package update

## [21] - 2025-11-27

### Changed

- Adjusted the layout and background colors

## [19] - 2025-10-23

### Added

Add "Create New Project"

## [18] - 2025-10-17

### Changed

- Primary sidebar changes :
  - added reka ui splitter

### Fixed

- changing a main widget does not unmount the current sidebar widget

## [16] - 2025-10-16

### Added

- Update to lastest fileio version

## [15] - 2025-09-30

### Added

- Update to last file io version

## [14] - 2025-09-12

### Added

- Extension load unified for development and production environment

## [13] - 2025-09-12

### Changed

- Extension loader simplification

## [1] - 2025-07-09

### Added

- UI library
- Simple Navbar component showcasing proper UI library integration
