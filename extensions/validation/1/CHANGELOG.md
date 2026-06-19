# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [UNRELEASED]

## [1] - 2026-06-16

### Added

- Initial validation extension: validates the active SCL document against the bundled IEC 61850 2007C5 XSD schema, fully client-side via libxml2-wasm
- Sidebar validation panel showing pattern, reference, and structural errors with line numbers and XML context snippets
- Dedicated DOM-based checks for the IEC 61850-6-100 namespace (required children, required attributes, UUID pattern), which the XSD engine cannot compile at runtime
- Explicit "edition not supported" message for non-2007C5 documents instead of validating against the wrong schema
- Schema info popup listing the bundled XSD source files and documenting 6-100 validation coverage and gaps
