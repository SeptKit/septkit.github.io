# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [12] - 2026-08-19

### Added

- A "Saving…" indicator appears on the canvas while an edit is being written, so it is visible that a change has not been stored yet
- A "Not saved" indicator appears when a change could not be stored, instead of the "Saving…" indicator silently disappearing

### Fixed

- Edits made while another change is still being written are no longer dropped: changes are now stored one after another

## [11] - 2026-08-12

### Added

- Exported logic files now contain a `Parameters` and a `Vars` section: variables linked to the behaviour description become input/output parameters, all others local variables, each with its type and initial value, so another PLCopen tool can read the logic without guessing
- The size of every block, variable, connector and continuation is saved, so reopening a file restores the diagram as it was laid out

## [10] - 2026-08-10

### Added

- New input and output blocks get a unique name automatically, so no naming prompt appears
- Variable names that would break the export are rejected with a message naming the problem, both in the variables table and in the block properties dialog
- Variable names that already break the rules, for example after importing a file with duplicates, are flagged in the variables table

## [9] - 2026-08-05

### Fixed

- Dropping a comment, connector, continuation or barette now opens the editor for the block just placed, not an earlier one of the same kind

## [7] - 2026-06-30

### Fixed

- Exported file's producer-version metadata now reflects the Logic Editor version, not the IEC schema edition
- Re-saving an older logic file no longer risks reintroducing an invalid duplicate metadata block
- Exported logic now validates against the IEC 61131-10 XSD
- Re-importing an exported logic file no longer misreads output variables as inputs, which dropped their incoming connections (e.g. from a barette) on the next save

## [6] - 2026-06-29

### Fixed

- Switching between extensions no longer leaves a broken or stale view

## [5] - 2026-06-25

### Added

- Signals from the same source stacked on multiple barette lines now overlap visually at one Y position
- Selecting a stacked barette connection highlights all sibling taps in the group
- Simulation now respects negated pin modifiers

### Fixed

- Stacked barette wires no longer compound into a darker line
- Barette height no longer grows when adding a stacked (same-source) connection

## [4] - 2026-06-25

### Added

- Barette is now available
- Barette signal-path highlighting: selecting a block or wire highlights only the taps of the active line; unrelated taps are muted
- Output tap of a barette line is always included in the active highlight
- Duplicate-connection guard: the same signal can no longer be wired to the same barette line more than once

### Fixed

- All taps on a line incorrectly receiving the selected state when only one was part of the selected connection
- Tap muting not activating when path mode was off (wire-click scenario)

## [3] - 2026-06-22

### Added

- Connect-time type validation, block descriptions, SCL-link column, and a Logic/Variables tab layout
- Click-to-place blocks, "Connect to…", and right-click context menus
- Interactive simulation driven from the diagram, a +/- input-count stepper, and a barette feature flag

### Changed

- Auto-fit block widths, OpenPLC negation symbol, deterministic simulation, and FB type contracts that reset when unwired

### Fixed

- Barette length persistence, block-preview overflow, and reliable (teleported) tooltips

## [2] - 2026-06-03

### Added

- Add Logic Editor with visual FBD editing and IEC61131 block library

## [1] - 2026-05-28

### Added

- Initialize new Extension
