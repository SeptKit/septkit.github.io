# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [3] - 2026-09-22

### Fixed

- `MinRequestedSCDFiles` is now removed from the downgraded copy, like `IEDSourceFiles`. It was still written into the downgraded file, which is invalid in 2007B4.

## [2] - 2026-09-21

### Added

- `IEDSourceFiles` is now removed from the downgraded copy, together with the `Private` wrappers that the downgrade leaves without content.
- The report lists elements that the 2007B4 schema requires to have a child but that are empty, and says whether they were already empty in the source file or emptied by the downgrade.
- Blank lines left behind by a removal are collapsed, and the report counts them.

### Changed

- The downgrade no longer writes a `Header/History` entry. It stamps the downgrade date into `Header/@toolID` instead, and the corresponding option is gone.

### Fixed

- "Trim whitespace around element values" now takes effect in the downloaded file. Values such as `ProtNs` were written back padded across several lines.
- The downloaded file is no longer re-formatted, so it differs from the source only where the downgrade changed something.

## [1] - 2026-09-03

### Added

- Sidebar that exports the active document downgraded to SCL 2007B4 and 6-100 2019B9, with options for the `Substation` section, path rebuilding, value trimming and recording the downgrade in the file history, plus a report of all applied changes. Dropped reference uuids are turned back into path references through Dialecte.
