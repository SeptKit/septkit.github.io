# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [5] - 2026-10-09

### Added

- Show "Complete for n/m rules" next to the percentage of every 100% phase in the All Rules view.

## [4] - 2026-10-09

### Added

- Show HMI and Gateway label checks, REMOTE IEC104 type readiness, and distinct label counts with live findings.
- Show real-IED mapping, GOOSE/SMV ExtRef mapping and publisher-binding checks with real-IED Implementation counters.
- Show reporting (IMP-04) and unspecified-flow (IMP-06) checks for real IEDs.
- Show control-model (SPC-08), value-equality (IMP-05) and type-coverage (IMP-07) checks.
- Show GOOSE/SMV subscription supervision (IMP-08) with exact control-block matching.
- Show Network checks (NET-01 to NET-03) with Network counters and an Overall progress dial in the header that averages the phases that can be analysed.
- Name the responsible role on every check and the action that resolves a finding.
- Switch the editor between the phase view and a new all-rules view that lists every check of every phase in one scrollable, grouped list.
- Show each phase's completion state ("Needs attention", "Complete") with how many of its rules could be checked ("Complete for 2/4 rules"), an overall percentage for the Specification and Implementation phases, and "3/4 phases included" on the overall dial.

### Changed

- Accept a supervision ExtRef in an LGOS/LSVS as proof of subscription supervision (IMP-08), alongside the GoCBRef/SvCBRef setSrcRef.
- Count reporting publishers and report clients as communicating devices (NET-03).
- Skip value-equality (IMP-05) for data whose logical node type has class LPDI, LPDO, LPAI, LPAO or LPPS.

### Fixed

- Exclude unrelated vendor XML from Dashboard counts and readiness checks while preserving vendor metadata.
- Stop printing "0 blocked" on checks that cannot block.

## [3] - 2026-10-06

### Added

- Show live IED allocation and process-connection checks with Specification item counts and findings.

## [2] - 2026-10-05

### Added

- Show live Concept checks, SCL item counts, and expandable findings that refresh with the selected document.
- Add the editor-only Dashboard shell with an explicit unavailable-check state.

### Changed

- Group phase content on cards with progress dials, colored severity chips, check progress bars, and Object/Finding tables.
- Always show completed and not-applicable checks.

### Fixed

- Allow scrolling through every check and expanded finding.
