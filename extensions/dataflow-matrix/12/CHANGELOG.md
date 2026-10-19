# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [9] - 2026-09-23

### Fixed

- Implementation dataflows now map ExtRefs under LN0 to the correct LN in the matrix table

## [8] - 2026-09-22

### Changed

- Order of dataflows in sidebar details

## [7] - 2026-09-21

### Added

- Select an implementation matrix cell to inspect physical LN, ExtRef, control block, dataset, and specification details

## [6] - 2026-09-18

### Added

- Implementation mode of the dataflow matrix: showing dataflows between real LNs with dataflow type and implementation state counts

## [5] - 2026-09-09

### Added

- Filter the specification matrix by service type
- Filter the specification matrix by Function/SubFunction hierarchy

### Fixed

- Selected matrix cell now scrolls into view when it is outside the visible area

## [4] - 2026-09-07

### Added

- Toggle to only show exchanging LNodes (hide LNodes that send or receive no dataflows)

## [3] - 2026-09-03

### Added

- Click a populated matrix cell to see the specified dataflows between the two LNodes in a details sidebar

## [2] - 2026-09-02

### Added

- Dataflow Matrix View for specified Dataflows between LNodes

## [1] - 2026-09-01

### Added

- Initialize new Dataflow Matrix Extension
