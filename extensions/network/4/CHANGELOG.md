# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [4] - 2026-09-17

### Added

- AccessPoints that aren't connected to any SubNetwork now show up as rows in the network table, labeled "Unassigned" with an info icon explaining what that means.
- Assign an unassigned AccessPoint to a SubNetwork directly from the SubNetwork dropdown; no IP, subnet mask, gateway or redundancy protocol is set until configured separately.
- Unassign an AccessPoint from its SubNetwork via the dropdown; blocked while it still has GSE or SMV control blocks.
- A sort button on each sortable column header (SubNetwork, IED, AP, IP, subnet mask, gateway, redProt): click once to sort ascending, again for descending, a third time to go back to the table's normal order.

### Changed

- The combined "ConnectedAP" column is now two columns, "IED" and "AP", each filterable on its own.
- Assigning, reassigning, or unassigning an AccessPoint no longer re-sorts the whole table; the row you changed stays in place and only its SubNetwork value updates. The table is sorted (by SubNetwork, then IED, then AP) only when it's first loaded.

## [3] - 2026-09-15

### Added

- GSE and SMV columns in the table, listing the `cbName` of each control-block mapping under a ConnectedAP (one per line). Each control block name is its own filter option; a row matches when the filter selection includes any of its GSE/SMV names.

### Changed

- Deleting a SubNetwork that still has connected APs now reassigns those ConnectedAPs to another existing SubNetwork - chosen in the confirmation dialog - instead of deleting them, so IEDs stay connected to the network.
- Deletion is blocked when no other SubNetwork exists to reassign the connected APs to.

### Fixed

- A column filter's search box now narrows the selection to exactly the options shown, deselecting the rest; clearing the search restores the selection from before the search instead of leaving every option selected.

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
