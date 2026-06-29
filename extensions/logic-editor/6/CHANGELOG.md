# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

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
