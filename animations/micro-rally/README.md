# Micro Rally

A top-down, fixed-camera toy truck racer in the spirit of RC Pro-Am, with original tracks and trucks. One `index.html` running three.js from jsDelivr, with no build step.

## Tracks

| Track | Character | Lap length |
| --- | --- | --- |
| Backyard Blitz | Grass and a fast sweeper, good for learning | ~470 m |
| Dune Drift | Long straights into sandy hairpins | ~810 m |
| Snowcap Slalom | Tight and twisty, with less grip on snow | ~590 m |
| Neon Night | A glowing city circuit with the tightest hairpin | ~750 m |

Each track is a closed Catmull-Rom loop. The road, curbs, walls, boost pads, item boxes, oil slicks and scenery are all generated from the list of control points. To add a track, append to `TRACKS` with points, a width, a theme and item and boost positions. Check that the loop doesn't cross itself and that its parts stay more than one road width apart.

## Playing

- **Drive:** ↑ / W is gas, ↓ / S brakes and reverses, ← → steer. On touch screens, big buttons appear at the bottom.
- **Items:** drive through **?** boxes to grab one, then press **Space** (✦ on touch) to use it:
  - 🚀 Missile: homes on the nearest car ahead and spins it out
  - ⚡ Nitro: a speed burst
  - 🛢 Oil: dropped behind you to make the next car skid
- **Boost pads:** orange arrows on the road give a short burst and a hop.
- **Race:** 3 laps against BLITZ, VOLT and RUSTY. You start at the back of the grid.
- **Modes:**
  - **Championship:** all four tracks in order. You need a top-3 finish to advance, and points are 10 / 6 / 4 / 2.
  - **Single race:** any track you've unlocked.
- **Difficulty:** Rookie, Pro or Ace scales the AI's pace.
- **Saved in your browser:** best laps per track, unlocked tracks and settings.

The AI drivers follow the racing line with their own lane choices and slow for corners they see coming. They detour for item boxes and use items tactically: missiles when a car is in front, oil when one is close behind, nitro on straights. Mild rubber-banding keeps races close.

`?sim=N` runs N physics steps per frame. It's a testing aid for fast-forwarding races in slow headless browsers.
