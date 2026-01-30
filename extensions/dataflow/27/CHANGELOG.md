# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [27] - 2026-01-30

### Added

- Resolve regular placeholders on receiving LNode side (no type "Control")
- Create placeholders on controller LNode side for dataflow type "Control"
- Create placeholders on controlled LNode side for dataflow type "Control"

### Changed

- Set process resource path for "resourceName" attribute in dataflow placeholders (SubscriberLNode & SourceRef)

## [26] - 2025-12-16

### Added

- Include Changelog in build output

## [25] - 2025-12-12

### Changed

- Choose from existing ProcessResources when creating source or destination placeholders

## [24] - 2025-12-02

### Changed

- Fix extRefAddr path when LNode prefix is missing
- Show full path to LNode in select options

## [23] - 2025-12-02

### Changed

- UI and file io package update

## [21] - 2025-11-24

### Fixed

- LN and path labels for not implemented dataflows in popup
- Remove whitespaces from LN and path labels consistently
- Typos for "ConfRev"
- Fix counter logic for "confRev"
- Show path to LNode in dataflow overview and provide function name in LNode select options

## [20] - 2025-11-20

### Added

- Differentiate between dataflow specification and implementation view
- Indicate whether dataflow is already implemented, not yet implemented or not possible to implement
- Details in sidebar for implemented dataflows
- Show dataflow implementation details in popup

## [19] - 2025-11-12

### Added

- Check source fulfillment of placeholders
- Create connection from existing source placeholder
- Possibility to implement dataflow for GOOSE, SMV and Reporting
- Dataflow implementation includes creation of Control Blocks, DataSets, FCDAs and Communication elements

### Changed

- Add `q` and `t` `LNodeDataRef` if they are included. [#663](https://github.com/SeptKit/set/issues/663)

## [18] - 2025-10-17

### Added

- Handle additional cases for Application references for dataflows
- Bugfix: Do not create Private and LNodeInputs element twice

## [17] - 2025-10-17

### Added

- Create SignalRole, LNodeInputRef, LNodeOutputRef and LNodeDataRef elements when dataflows are created for LNodes that are part of an Application

## [16] - 2025-10-16

### Changed

- support fileio v2.0.4

## [15] - 2025-10-15

### Added

- Consistently create DOS/DAS for dataflows if not existing
- Show DOS and DAS description in sidebar details
- Add DO select dropdown with options from DataTypeTemplates to left LNode placeholder creation form

### Changed

- Small fixes
- Change radio button default to "New Input/Output" in dataflow (placeholder) creation forms
- New input/output values after dataflow (placeholder) creation are available in dropdowns without page refresh
- Provide DA from DataTypeTemplates as select options in left LNode placeholder creation form

## [14] - 2025-10-10

### Added

- Create LNodeInputs/LNodeOutputs and Private Element for dataflow (placeholder) creation if not existing
- Do not create DOS element if it already exists in controlled LNode for "control" dataflow creation
- Exclude "q" and "t" options for data attribute select inputs
- Show (controlled) connection details in sidebar on click
- Show process resource in sidebar for LNode source placeholders

## [13] - 2025-10-09

### Added

- Allow user to choose between existing inputs/outputs or create new ones during dataflow (placeholder) creation
- Calculate inputInst and outputInst
- Show description for DOs and DAs in the dropdowns during dataflow creation
- Disable creation of "Internal" dataflow
- Fix: Refresh of page not required anymore after creation of dataflow (placeholders)
- Set LNode path for SourceRef and ControlRef to support backwards compatibility and older SCL versions

## [12] - 2025-09-26

### Changed

- Migration to fileio 2.0.0 to consume the one table structure

## [8] - 2025-09-12

### Changed

- Add a test setup file to load the css via vitest

## [7] - 2025-09-10

### Added

- Extension load unified for development and production environment

## [6] - 2025-09-04

### Changed

- Move shell entrypoint script to root

## [5] - 2025-09-04

### Changed

- Removal of the css injected vite plugin, in favor of a simple script.
- Extension entrypoint points to the source to be able to use `pnpm dev`
