# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a simple versioning system, increasing the number by one for each modification.

## [Unreleased]

## [61] - 2026-11-23

### Added

- **Export ISD** asks where to save first, then shows its progress in the status bar; a cancelled save writes nothing and shows no export report.

## [60] - 2026-11-23

### Added

- **Export for IED supplier**: on a real IED, saves the whole project as one file for the supplier's tool.

## [59] - 2026-11-20

### Added

- When an IED is placed or updated from an ISD, **Confirm** lists what the commit also removes beyond the changes you decided: a container the update leaves empty (a subnetwork whose last connection goes, say) and a type no longer used, each with why it goes and what goes with it, counted with the removals.

## [58] - 2026-11-20

### Added

- An open ISD can be updated from another version of itself: on its IED, **Update from another ISD version** picks the other version. The review names both versions and shows what changes, moves included, and Apply updates the open ISD in place. An ISD that is no version of the open one is refused in words, before anything is compared.

### Changed

- **Update from newer ISD** is now **Update from another ISD version**, on an S-IED placed from an ISD as on the IED of an open ISD.

## [57] - 2026-11-20

### Changed

- While an IED is placed or updated from an ISD, the progress bar no longer starts over: it only moves forward, says what is being done, and shows how long the current step has taken.

## [56] - 2026-11-20

### Added

- In **Update from newer ISD**, an element the newer ISD puts under another parent (a logical node in another logical device, a function in another bay) shows where it goes, marked **moved**. Its detail says where it comes from, **Keep in place** leaves it where it is, and Confirm and Done count the moves.

## [55] - 2026-11-20

### Fixed

- In the review of a template merge, the arrow in front of an open element points down; it points right only while the element is closed.
- The window to pick a template from the library shows its list, the chosen file and Instantiate laid out as intended, the chosen file name cut to one line.

## [54] - 2026-11-19

### Added

- Export ISD: choose the kind of ISD. **Project instance** (as before) keeps the names and identifiers of the project. **Template** writes an ISD for a frame agreement, tied to no project: the S-IED is named `SPECIFICATION`, the substation, voltage level and bay above its functions are named `TEMPLATE`, and every element gets a new identifier. The file is saved as `<S-IED>_template.isd`.

## [53] - 2026-11-19

### Added

- **Update from newer ISD**: right-click an S-IED placed from an ISD and choose **Update from newer ISD** to pick a newer version of that ISD from a library folder attached to SET or from disk. Before anything changes, the review shows what the newer ISD adds, removes or changes in the S-IED, in the functions and LNodes of its specification, in its communication and in its data types. The S-IED keeps its name, and its LNodes stay bound to the logical nodes that remain. An LNode whose logical node the newer ISD removes is reset to its specification and listed before you confirm. A change that would also affect another IED (an input subscribing to data the update removes, for example) waits for your decision: the review names that IED on the change, marks what it would lose, and Confirm lists what changes there before anything is written; leaving the change out keeps the other IED as it is. A change that needs your decision (data the update deletes that your project still uses, an LNode bound to another IED) waits for your choice before you can confirm. An ISD that is not a version of the one the S-IED came from is refused with a message; cancelling leaves the project unchanged.
- In the same review, a value your project may set (a setting, for example) keeps your value when the newer ISD changes it: it is marked **yours kept** with both values shown. **Take template's** takes the template's value for that one value, the menu of an S-IED takes it for every value of that S-IED, and **Take over all** for the whole update; a value taken over is then reviewed as any change, and **Keep current** gives yours back. Confirm says how many of your values are kept.

### Changed

- Removing an IED that is the last on a bus now also removes that bus. The confirmation names the bus before anything is removed; **Cancel** keeps both.

## [51] - 2026-11-17

### Fixed

- **Instantiate ISD** works again: clicking it failed with "no storage sources provided by the shell" instead of letting you pick an `.isd` file from a library folder or from disk.

## [49] - 2026-11-17

### Added

- Instantiate ISD: the **Instantiate ISD** button above the diagram adds the S-IED an `.isd` file describes to the project, picked from a library folder attached to SET or from disk. Before anything changes, the review shows the S-IED, the functions and LNodes of its specification and where they land in your substation (choose the voltage level or bay when several fit), its communication and the data types it adds; cancelling leaves the project unchanged. An S-IED from a template ISD is named after the file (`BCU_Feeder.isd` gives `BCU_Feeder`, numbered when the project already uses it; a space or another character a name cannot hold becomes `_`), a name you can change in the review; an ISD exported from an S-IED keeps that S-IED's name; its connection joins the subnetwork of the same name, and the project records the ISD it came from. A template ISD can be added several times, each time as a new S-IED with its own LNodes; an ISD exported from an S-IED keeps that S-IED's identity and is added once.

## [47] - 2026-11-16

### Changed

- The IED selector and the IED kind now sit in a row above the diagram instead of a left sidebar and a header, leaving more room for the diagram and the details sidebar.

## [45] - 2026-11-12

### Added

- Export ISD on an S-IED: right-click the IED and choose **Export ISD** to save the specification of that one device as an `.isd` file for its supplier. The file holds the IED, its subnetworks with only its own access points, the data types it needs, and only the part of the functions it implements, with or without labels as you choose before saving; its inputs carry the internal address and the expected data, with no source. The project is not changed.
- Once the ISD is saved, a list shows what the file left out, each line naming the element in the project: subscription supervision, references to other IEDs, inputs missing what the supplier needs to bind them, LNodes whose logical node is left out, behaviour descriptions that use LNodes of other IEDs, and links to content not in the file. Nothing is shown when nothing was left out; when the ISD cannot be written, a message says why.

### Changed

- An IED is shown as an S-IED unless it was added from a supplier's ICD or IID file, whatever its manufacturer; the same rule decides where Export ISD is offered.

## [42] - 2026-10-28

- Update default smpRate value for SampledValueControl

## [39] - 2026-10-01

### Fixed

- Refresh the active IED diagram after document commits so newly synced entries appear without reloading.

## [38] - 2026-10-01

### Fixed

- Close the sidebar when switching IEDs so it no longer shows details or forms from the previous IED.

## [37] - 2026-09-30

### Fixed

- IED diagram nodes now show meaningful titles for `LN0` and `Association` instead of tag placeholders.

## [36] - 2026-09-29

### Changed

- Diagram nodes and group tiles are now drawn by the shared components in `@septkit/ui`, the same ones the structure extension uses, so both diagrams look and behave alike
- Group members are now full node cards instead of simple rows: they gain, where present, child-type count capsules (the element-type icon already existed on the row layout). Members without children sit in a shorter tile than before

## [35] - 2026-09-28

### Added

- Choose communication access point during GSE and SMV control block creation

## [34] - 2026-09-24

### Added

- Diagram style aligned with the structure extension: siblings sharing a tag are folded into a group tile and listed as rows inside it
- The node or group member currently shown in the details sidebar is highlighted with a border in the diagram
- Hovering a node's element icons shows informing tool-tips
- Opening a creation form from the context menu (DataSet, control block, DOI/DAI, value) highlights the targeted node in the diagram

### Changed

- Clicking a diagram node or group member expands or collapses its children; the details sidebar opens only via the "Show details" button
- Grouped nodes are rows inside their group tile and no longer carry their own collapse toggle, zoom-to-children on expand, or child-type badges

## [31] - 2026-09-23

### Removed

- Manual creation and removal of `MinRequestedSCDFile` entries via right-click - the element is no longer user-editable through a dedicated UI; automatic synchronisation is not implemented yet (#2990)

## [30] - 2026-09-22

### Added

- Create a `MinRequestedSCDFile` on an IED via right-click - records the minimum SCD version an IED configuration is compatible with
- Remove a single `MinRequestedSCDFile`, or all of them at once from the IED node

### Changed

- `MinRequestedSCDFile` nodes are now labelled with their version (or revision) instead of showing an identical placeholder

## [29] - 2026-09-18

### Changed

- The details sidebar next to the diagram can now be resized and remembers its width, matching the Structure extension

## [28] - 2026-09-17

### Added

- Remove `ConnectedAP` entries from the `Communication` section when an (S-)IED is removed
- Clean up implemented dataflow (subscriber `ExtRef`s, sender control-block entries, `DataSet`, `GSE`/`SMV` communication, supervision references) and clear `SourceRef` implementation-link fields when an (S-)IED is removed
- Clean up unused DataTypeTemplates (`LNodeType`, `DOType`, `DAType`, `EnumType`) when an (S-)IED is removed

## [25] - 2026-09-10

### Added

- Reset relevant LNodes when (S-)IED is removed

## [23] - 2026-08-21

### Added

- Creation of values (`Val`) on a data attribute (`DAI`) through the context menu, with the offered values derived from the data type templates

## [21] - 2026-08-19

### Added

- Sidebar showing the current node's details and allowing edits to all attributes even when they were empty/unset
- Opens the element after creation in the sidebar for editing

## [20] - 2026-08-18

### Added

- Manual creation of data objects and data attributes (DOI/SDI/DAI) on LN and LN0 elements through the context menu

## [18] - 2026-08-11

### Changed

- ControlBlock default values and form-labels

## [17] - 2026-08-11

### Added

- Report ControlBlock creation through context menu, by right-clicking LN0 Elements

## [16] - 2026-07-30

### Added

- SMV ControlBlock creation through context menu, by right-clicking LN0 Elements

## [13] - 2026-07-14

### Added

- GSE (Goose) ControlBlock creation through context menu, by right-clicking LN0 Elements

## [12] - 2026-07-08

### Changed

- IED detail header now shows manufacturer and type as well, consistent with the IED selector

## [11] - 2026-07-06

### Changed

- IED selector shows manufacturer and type instead of the generic "Implemented IED" label

## [10] - 2026-07-02

### Added

- DataSet creation through context menu, by right-clicking LN0 Elements

## [9] - 2026-07-02

### Fixed

- Switching between extensions no longer leaves a broken or stale view

## [8] - 2026-06-22

### Added

- Remove IED option to context menu

## [7] - 2026-06-15

### Added

- Sidebar showing the current node's details and allowing edits

## [5] - 2026-05-22

### Changed

- Project oriented architecture migration

## [4] - 2026-05-21

### Changed

- Styling and UX improvements

## [3] - 2026-05-20

### Added

- Basic element tree structure

### Changed

- Use Dialecte for document handling and querying

## [2] - 2026-04-20

### Added

- searchable dropdown to select an ied

## [1] - 2026-04-16

### Added

- Initialized IED-Browser extension
