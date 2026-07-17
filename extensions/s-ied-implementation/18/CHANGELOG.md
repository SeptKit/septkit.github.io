# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [18] - 2026-07-17

### Changed

- Sidebar and ICD tree now keep your expand/collapse state during live refreshes and reopen fully when switching S-IED context
- Sidebar LNode status badges are spaced for clearer readability

### Fixed

- LNode mapping now resolves vendor identity correctly so Data Model bindings apply to the correct vendor LN

## [17] - 2026-06-30

### Added

#### Implementation view (Data Model / Inputs / Outputs)

- New Implementation view: spec vs ICD side-by-side header, with 3 tabs — Data Model, Inputs, Outputs
- Data Model tab shows a flat, filterable path table (e.g. `Pos.stVal`) merging spec and IED columns
- Each Data Model row shows a single status badge with icon and text — Matched, New, Missing, Differs, Pending, or Applied

#### Sidebar & Explorer

- Selecting an S-IED is only a view filter for the explorer and Data Model
- Explorer tree: LNode is the deepest selectable element
- After apply, the sidebar filter switches to the newly integrated vendor IED, and the sidebar, explorer, and Data Model update live without a page reload

#### ICD loading & matching

- ICD loading with automatic LNode matching: matching runs across every S-IED placeholder at once
- Manual matches take precedence and are never overwritten by automatic ones
- Removing an ICD clears all its associated matches
- ICD LN browser opens as a push sidebar (never overlays the table)

#### Mapping session

- Session-wide mapping: switch between S-IEDs while mapping without losing matches — the plan persists for the whole session
- The plan bar and Data Model rows show which elements are already applied versus still pending, derived from the saved project so it survives reload and re-uploading the same ICD

#### Apply (vendor take-over)

- Apply bar shows a live plan summary (matched LNodes, data model, inputs/outputs, ICD count) with a one-click take-over
- Apply takes over every mapped S-IED in a single action: writes every binding, connects the AccessPoints to the default subnetwork, and removes each touched S-IED placeholder — even for a partial mapping; still-unmapped LNodes are reset to unallocated and tracked via their AllocationRole
- The vendor IED is matched on its full device identity (name, manufacturer, type, config version), so re-applying only writes the newly-matched elements and never reuses an unrelated device that shares a name
- Apply is disabled once every matched element is already written, showing "Nothing new to apply"

#### Apply confirmation

- The apply confirmation shows a session total plus expandable per-S-IED details
- After applying, the dialog stays open with a summary of integrated IEDs and bound elements, and reports any matched elements it could not bind instead of silently skipping them

## [16] - 2026-06-08

### Fixed

- Explorer now shows full structure when no S-IED is selected
- `Not assigned` filter now correctly shows only LNodes with no `iedName`

## [15] - 2026-06-05

### Added

- ICD loading: add, browse, and remove multiple ICD files per session
- ICD tree explorer dialog: full unfiltered SCL tree view per loaded ICD
- ICD count and expand/collapse in IED panel header

### Fixed

- Layout: "Validate mapping" button always visible (was cut off when ICD drawer expanded)

## [14] - 2026-06-05

### Fixed

- Filter reset filter is now working as expected

## [12] - 2026-05-21

### Added

- Comparison panels

## [11] - 2026-05-21

### Added

- Project oriented architecture migration

## [10] - 2026-05-04

### Changed

- Rework of the sidebar : S-IED selection and explorer tree

## [9] - 2026-04-01

### Changed

- Security update

## [8] - 2025-12-12

### Added

- Include Changelog in build output

## [7] - 2025-12-05

### Added

- remove s-ied `ConnectedAP` on ied implementation
- copy over `Private` elements

## [6] - 2025-12-02

### Changed

- UI and file io package update

## [4] - 2025-11-26

### Added

- Attach cloned IED from the ICD file to the default subnetwork

## [3] - 2025-11-20

### Added

- Apply mapping between selected S-IED and imported ICD
  - write new IED to current working file
  - remove S-IED

## [2] - 2025-11-12

### Added

- Validating mapping between selected S-IED and imported ICD

## [1] - 2025-10-31

### Added

- S-IED selection from sidebar (assumption based on Manufacturer === `S-IED`)
- LNode selection from sidebar
- Import ICD
