# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

### Fixed

- Switching between extensions no longer leaves a broken or stale view

### Added

- Update a project from a newer SSD (system specification): changes to topology (voltage levels and bays), functions and the SSD-template dataflow are shown as decisions you review and accept selectively
- The SSD-template dataflow connections (control and process-resource references) are carried into the project and stay linked across repeated updates
- Reviewing large updates is faster: accept the suggested defaults for a whole section at once, and filter cards by pending or decided status
- Uploading an SSD that was never instantiated into the project is detected and reported instead of producing a destructive "remove everything" diff

### Changed

- The merge header now names the operation in plain terms (for example "FSD Fork" or "SSD Update -> SCD") instead of an internal profile id
- Apply is available as soon as at least one change is set to accept; the separate "confirm remaining defaults" step is gone and undecided changes keep their suggested default. When nothing is accepted, Apply stays disabled and the document is left untouched (no history entry, no template-version bump)
- Forking an FSD to main now pre-selects every change to accept - including removals - so the working copy converges on the new version by default; any single change can still be overridden in the review
- A project-specific name you give an instance is no longer reported as a change and is never overwritten by a template update; only structural and content changes are carried over

### Fixed

- When the same template is instantiated several times in a project, each instance is now compared individually against the template instead of file-to-file, so the extra instances are no longer wrongly reported as removed

## [4] - 2026-06-18

### Added

- Update a project from a newer ASD: the changed applications, roles and signal allocations are shown as decisions you review and accept selectively
- Signal dataflow connections from the ASD are carried into the project and stay linked across repeated updates instead of being duplicated

## [3] - 2026-06-18

### Added

- Card-based merge review: changes are grouped into decisions you resolve one by one, then commit in a single apply step
- FSD version comparison that links related changes into decision groups so they can be reviewed together
- Shared-type deletion guard with suffix-rename redirects to prevent breaking references when types are renamed
- ASD allocation-role handling and FSD-to-ASD update plans

## [2] - 2026-05-22

### Changed

- Project oriented architecture migration

## [1] - XXXX-XX-XX

### Added

- Initialize new Extension
