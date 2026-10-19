# Sticker Reconciliation — Design Direction

## Three stylistic approaches

### Theme Name: Amber Operations Console
Very Brief Intro: A dark, high-contrast operations interface built for fast spreadsheet reconciliation, with amber as the action color and crisp monospaced data cues.
Probability: 0.03

### Theme Name: Paper Ledger Modernism
Very Brief Intro: A warm, editorial ledger-inspired workspace with off-white paper tones, ink typography, and restrained red/green status marks for a calmer back-office workflow.
Probability: 0.07

### Theme Name: Warehouse Signal Board
Very Brief Intro: A practical industrial control-room aesthetic using safety yellow, slate panels, and modular status tiles to make exceptions immediately visible.
Probability: 0.02

## Selected approach: Amber Operations Console

### Design Movement
Contemporary industrial software / control-room modernism, adapted for a spreadsheet-heavy reconciliation workflow.

### Core Principles
1. **Operational clarity:** every status, action, and data state must be readable at a glance.
2. **Data-first density:** use compact tables and strong hierarchy without making the sheet feel cramped.
3. **Visible persistence:** edits should visibly acknowledge save state, whether stored locally or in Firebase.
4. **Controlled emphasis:** amber marks action and attention; status colors remain semantic and consistent.

### Color Philosophy
The charcoal base reduces glare during long reconciliation sessions. Amber signals user-owned actions such as saving, importing, exporting, and dragging a filter. Green confirms healthy reconciliation, while yellow, orange, crimson, and muted gray separate operational exceptions without relying on shape alone.

### Layout Paradigm
Use a left operational rail for files, persistence, and actions, with a wide main sheet canvas. Dashboard metrics sit above the sheet as a horizontal instrument strip. Avoid a centered marketing layout; the app should feel like a focused workbench.

### Signature Elements
1. An amber circular mark with a central signal dot in the header.
2. Monospaced column labels and save-state indicators.
3. Drag targets that brighten with an amber edge and a subtle dashed drop affordance.

### Interaction Philosophy
Interactions should be direct and reversible. Clicking a report zone opens the file chooser, dragging gives immediate visual feedback, and editing a cell updates persistence on blur. Filters can be dragged onto the sheet header or clicked as chips, so the same action works for mouse and keyboard users.

### Animation
Keep transitions below 220ms. Use opacity and transform only. Drag-over states brighten immediately, save confirmation uses a small upward fade, and row additions use a restrained 30ms stagger. Respect reduced-motion preferences and never animate the table layout itself.

### Typography System
Use **Barlow Condensed** for section labels, actions, and the product title; use **Inter** for explanatory copy; use **JetBrains Mono** for values, filenames, dates, statuses, and Firebase save states. Headings are uppercase with modest tracking; values use larger condensed numerals.

### Brand Essence
A practical reconciliation workbench for sticker and warehouse teams who need reliable, repeatable matching instead of ad-hoc spreadsheets.
Personality: **precise, resilient, accountable**.

### Brand Voice
Headlines and CTAs are short, specific, and operational. Microcopy explains what will happen rather than using generic filler.
Example lines: “Drop a status filter here to focus the sheet.” and “Workbook imported — remarks were preserved where keys matched.”

### Wordmark & Logo
Use a circular amber signal mark: an outlined ring with a centered amber dot, paired with a condensed uppercase wordmark. The symbol should stand alone as the favicon and in the persistence card.

### Signature Brand Color
**Signal Amber — #F2A93B.** It is warm enough to feel human and bright enough to remain unmistakable against the charcoal workbench.

## Implementation reminders

- Add this design direction as a comment at the top of each edited frontend file.
- Keep the supplied reconciliation rules, especially the `GRN Discrepancy Completed` closed-state condition.
- Excel export must include stable row keys so re-import can update existing rows instead of duplicating them.
- Remarks are user-owned fields and must survive reconciliation, export, import, local fallback storage, and Firebase persistence.
- Firebase configuration must be explicit and safe to replace; if it is not configured, the app must still work with browser storage.
- Never claim that data is uploaded when Firebase is not configured.

## Style Decisions

- The amber signal mark remains the header anchor and the persistence emblem, with the same ring-and-dot identity used in the favicon.
- Metrics show explicit **READY** states before the first run so the instrument strip does not feel empty.
- The filter and Remark drag actions are visible by default instead of being hidden behind an extra click.
- Signal Amber `#F2A93B` is reserved for primary actions, active navigation, drag/drop focus, save confidence, and brand identity; reconciliation status colors remain semantic.
