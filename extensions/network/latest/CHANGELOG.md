# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [2] - 2026-09-10

### Added

- Manage SubNetworks directly from the network table: each row's SubNetwork column is a dropdown listing all SubNetworks with inline edit and delete actions plus an "Add SubNetwork" entry.
- Create a SubNetwork (unique name and a required type of `8-MMS`, `8-XMPP` or custom text) and edit its name, type and description via a dialog.
- Reassign a connected access point to another SubNetwork by selecting it from the row dropdown; the ConnectedAP is moved with its full address configuration.
- Delete a SubNetwork; when it still contains connected APs, a confirmation dialog offers to delete those ConnectedAP connections along with the SubNetwork.

## [1] - 2026-09-07

### Added

- Read-only communication network table: one row per connected access point showing subnetwork, connected AP (IED / access point), IP address, subnet mask, gateway and redundancy protocol, listed in document order.
- Per-column filters that combine with AND, matching the Label Manager filtering experience, including an `(empty)` option to isolate rows with blank values.
