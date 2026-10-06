# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [8] - 2026-10-06

### Added

- Notes show their categories (Feedback, Instantiation, Interlock) as colored labels below the status

### Fixed

- The "Open" status label is easier to read thanks to darker text

## [6] - 2026-09-22

### Changed

- Notes now show the name of the element they belong to (e.g. `MMXU1 (LN)`) instead of a generic element type. The path leading to that element is shown above it, split into the top-level hierarchy (e.g. `IED1 >`) and the remaining context (e.g. `AP1 > Server > LD0 >`); both share one line when they fit. A tooltip reveals the full path or element name whenever it is too long to fit.
- The Notes icon in the activity bar now matches the size and colour of the other extension icons.

## [5] - 2026-06-26

### Fixed

- Switching between extensions no longer leaves a broken or stale view

## [3] - 2026-05-22

### Changed

- Project oriented architecture migration

## [2] - 2026-05-13

### Fixed

- Sidebar icon now displays correctly.

## [1] - 2026-05-04

### Added

- New notes-sidebar extension, overview of current notes inside the project, sort by date.
