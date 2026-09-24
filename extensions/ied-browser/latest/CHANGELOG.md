# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [Unreleased]

## [34] - 2026-09-24

### Added

- Diagram style aligned with the structure extension: siblings sharing a tag are folded into a group tile and listed as rows inside it
- The node or group member currently shown in the details sidebar is highlighted with a border in the diagram
- Hovering a node's element icons shows informing tool-tips
- Opening a creation form from the context menu (DataSet, control block, DOI/DAI, value) highlights the targeted node in the diagram

### Changed

- Clicking a diagram node or group member expands or collapses its children; the details sidebar opens only via the "Show details" button
- Grouped nodes are rows inside their group tile and no longer carry their own collapse toggle, zoom-to-children on expand, or child-type badges

## [31] - 2026-09-23

### Removed

- Manual creation and removal of `MinRequestedSCDFile` entries via right-click - the element is no longer user-editable through a dedicated UI; automatic synchronisation is not implemented yet (#2990)

## [30] - 2026-09-22

### Added

- Create a `MinRequestedSCDFile` on an IED via right-click - records the minimum SCD version an IED configuration is compatible with
- Remove a single `MinRequestedSCDFile`, or all of them at once from the IED node

### Changed

- `MinRequestedSCDFile` nodes are now labelled with their version (or revision) instead of showing an identical placeholder

## [29] - 2026-09-18

### Changed

- The details sidebar next to the diagram can now be resized and remembers its width, matching the Structure extension

## [28] - 2026-09-17

### Added

- Remove `ConnectedAP` entries from the `Communication` section when an (S-)IED is removed
- Clean up implemented dataflow (subscriber `ExtRef`s, sender control-block entries, `DataSet`, `GSE`/`SMV` communication, supervision references) and clear `SourceRef` implementation-link fields when an (S-)IED is removed
- Clean up unused DataTypeTemplates (`LNodeType`, `DOType`, `DAType`, `EnumType`) when an (S-)IED is removed

## [25] - 2026-09-10

### Added

- Reset relevant LNodes when (S-)IED is removed

## [23] - 2026-08-21

### Added

- Creation of values (`Val`) on a data attribute (`DAI`) through the context menu, with the offered values derived from the data type templates

## [21] - 2026-08-19

### Added

- Sidebar showing the current node's details and allowing edits to all attributes even when they were empty/unset
- Opens the element after creation in the sidebar for editing

## [20] - 2026-08-18

### Added

- Manual creation of data objects and data attributes (DOI/SDI/DAI) on LN and LN0 elements through the context menu

## [18] - 2026-08-11

### Changed

- ControlBlock default values and form-labels

## [17] - 2026-08-11

### Added

- Report ControlBlock creation through context menu, by right-clicking LN0 Elements

## [16] - 2026-07-30

### Added

- SMV ControlBlock creation through context menu, by right-clicking LN0 Elements

## [13] - 2026-07-14

### Added

- GSE (Goose) ControlBlock creation through context menu, by right-clicking LN0 Elements

## [12] - 2026-07-08

### Changed

- IED detail header now shows manufacturer and type as well, consistent with the IED selector

## [11] - 2026-07-06

### Changed

- IED selector shows manufacturer and type instead of the generic "Implemented IED" label

## [10] - 2026-07-02

### Added

- DataSet creation through context menu, by right-clicking LN0 Elements

## [9] - 2026-07-02

### Fixed

- Switching between extensions no longer leaves a broken or stale view

## [8] - 2026-06-22

### Added

- Remove IED option to context menu

## [7] - 2026-06-15

### Added

- Sidebar showing the current node's details and allowing edits

## [5] - 2026-05-22

### Changed

- Project oriented architecture migration

## [4] - 2026-05-21

### Changed

- Styling and UX improvements

## [3] - 2026-05-20

### Added

- Basic element tree structure

### Changed

- Use Dialecte for document handling and querying

## [2] - 2026-04-20

### Added

- searchable dropdown to select an ied

## [1] - 2026-04-16

### Added

- Initialized IED-Browser extension
