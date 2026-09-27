# Vector KO

A boxing game drawn entirely in green 3D wireframe with bloom. The controls sit across the top of the screen. You face **Vector Voss**, an original fighter, over 3 rounds. One `index.html`, three.js from jsDelivr, no build step.

## Controls

| Top deck | Keys | What it does |
| --- | --- | --- |
| ◀ DODGE / DODGE ▶ | ← / → (A / D) | Slip left or right |
| BLOCK (hold) | ↓ (S) | Guard. Stops jabs, chips hooks, can't stop uppercuts |
| L JAB / R JAB | Z / X (J / K) | Punch with that glove |
| ★ UPPERCUT | Space / ↑ (W) | Spend a star on a big punch |

**P** or **Esc** pauses. When you're knocked down, tap any button fast to beat the count.

## How a fight works

- **Tells.** Before every punch, Voss's eyes flash and the attacking glove glows. It glows yellow and his whole body brightens for an uppercut. Tell hints (on by default) also spell it out.
- **Dodge rules:**
  - jab: dodge either way, or block
  - hook: dodge away from the glowing glove
  - uppercut: dodge only
- **Openings.** A clean dodge leaves him open. Punches land then, and hitting in the first 0.4 s is a **counter** worth a ★. Hitting him mid wind-up on a hook or uppercut interrupts it and also earns a ★. He also opens up when he taunts.
- **Guarding costs hearts.** Punching his guard costs ♥, and three blocked punches in a row draw a fast counter-jab. At 0 ♥ you're winded and can't punch for 2.5 s. Dodging restores hearts.
- **Knockdowns.** He gets up at a later count each time, with less health, and gets faster through phases 1 to 3. Three knockdowns is a KO. You beat the count by tapping; each knockdown needs more taps.
- **Rounds.** 3 rounds of 90 real seconds (the clock shows 3:00). If nobody is knocked out, the result is decided on points.

All timings and damage are constants at the top of the script (`ATTACKS`, `PUNCH_DMG`, `FOE_GETUP`, …).
