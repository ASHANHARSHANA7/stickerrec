# Fix checklist

- [x] Support spreadsheet clipboard payloads and multi-cell tab/newline paste into the grid.
- [x] Keep plain text paste working inside a single cell.
- [x] Prevent `localStorage` quota errors from crashing the application.
- [x] Add a compact-storage fallback and clear user-facing persistence status.
- [x] Run TypeScript/build checks and capture a final preview.
- [x] Save and deliver a new checkpoint.
- [x] Permanently configure the supplied Firebase project as the app default.
- [x] Enable Analytics and connect Firestore Cloud Save/Load to the configured project.
- [x] Validate Firebase initialization, build, and deployed preview.

## Dashboard metrics revision

- [x] Recalculate FN matched percentage using only active FN lines and Sticker Report matches.
- [x] Show active FN lines that are missing from the Sticker Report.
- [x] Add a top date-range filter for monthly performance and apply it consistently to metrics and rows.
- [x] Validate the revised dashboard and save a checkpoint.

## Grouped FN closure revision

- [x] Mark a Sticker Sheet entry Closed only when every matching FN line is GRN Discrepancy Completed.
- [x] Keep mixed groups active when any matching FN line has another status.
- [x] Validate the four-line example pattern and save a checkpoint.

## Group-wide status and theme revision

- [x] Apply one status to every Sticker Report row sharing the same entry key when any matching FN line is active.
- [x] Add a top-bar Dark/Light theme toggle and preserve the current dark theme.
- [x] Validate the four-line mixed-status case, theme switch, and save a checkpoint.

## Full HTML export

- [x] Create a single-file HTML export from the latest production build.
- [x] Validate the exported HTML includes the latest app bundle and deliver it.

## Full report FN fields

- [x] Add Supplier Name and Procurement Group from matching FN rows to Download full report.
- [x] Validate the workbook export and save a checkpoint.

## Performance period date fix

- [x] Parse Excel DATE values consistently, including serial dates and mm/dd/yyyy or dd/mm/yyyy strings.
- [x] Filter Sticker Sheet rows strictly by the actual DATE column, not the entry number.
- [x] Recalculate dashboard percentages and counts whenever the selected date range changes.
- [x] Validate August 1, 2026 behavior and save a checkpoint.

## Firebase cross-PC persistence

- [x] Save the complete workspace to the configured Firebase Firestore document.
- [x] Load the shared workspace automatically when the deployed app opens.
- [x] Add a clear cloud-sync status and keep manual Save/Load controls available.
- [x] Validate multi-PC cloud persistence flow and save a checkpoint.

## Firestore permission fix

- [x] Improve Firebase error messages to specifically mention Firestore Security Rules.
- [x] Add a setup guide in the Settings modal with the required rules snippet.
- [x] Validate the updated guidance and save a final checkpoint.

## Navy theme and default selection

- [x] Add a Navy/Blue light theme matching the supplied reference.
- [x] Add a Settings option to choose the default theme and persist it.
- [x] Add Firestore permission rules guidance inside Settings.
- [x] Validate the theme flow and save a checkpoint.

## Navy theme refinement (Exact reference match)

- [x] Rework the Navy light theme to use the exact colors, borders, and shadows from the reference.
- [x] Ensure buttons, headings, and card containers follow the reference's industrial blue style.
- [x] Validate the visual alignment and save a checkpoint.

## Professional dashboard light theme

- [x] Rebuild Light Mode with a dark navy sidebar and white main workspace.
- [x] Add reference-style metric cards, blue primary accents, and soft card shadows.
- [x] Validate the new visual theme and save a checkpoint.

## Scanned Location column

- [x] Add a Scanned Location display field to each sticker row without changing the existing Location field.
- [x] Populate Scanned Location from the final matching scan record during reconciliation.
- [x] Include Scanned Location in sheet display and workbook export; it reloads from the persisted Scan Report in Firebase.
- [x] Validate matching and non-matching scan cases and save a checkpoint.
