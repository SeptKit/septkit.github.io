# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [4] - 2026-07-20

### Fixed

- Error line numbers now match the XML Viewer line-for-line

## [3] - 2026-06-29

### Added

- Category filter dropdown
- Element search
- Per-result collapse with one-line summary (category, element, attribute) and copy-element button
- Per-XSD schema version in the XSD source files popup and the 6-100 namespace shown in the schema list
- "File loading..." indicator while the active document name resolves (larger files)

## [2] - 2026-06-25

### Added

- Validation now also detects duplicate entries in IEC 61850-6-100 content, such as repeated identifiers or source references that must be unique.

### Changed

- 6-100 documents are now checked with two complementary passes that run together. A single failing item no longer hides the problems after it, so known IEC structural quirks no longer mask further 6-100 issues further down the document.

## [1] - 2026-06-16

### Added

- Initial validation extension: validates the active SCL document against the bundled IEC 61850 2007C5 XSD schema, fully client-side via libxml2-wasm
- Sidebar validation panel showing pattern, reference, and structural errors with line numbers and XML context snippets
- Dedicated DOM-based checks for the IEC 61850-6-100 namespace (required children, required attributes, UUID pattern), which the XSD engine cannot compile at runtime
- Explicit "edition not supported" message for non-2007C5 documents instead of validating against the wrong schema
- Schema info popup listing the bundled XSD source files and documenting 6-100 validation coverage and gaps
