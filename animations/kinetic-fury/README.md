# Kinetic Fury

A 2.5D arcade fighter: toon-shaded 3D fighters on a side-on stage, best-of-three rounds against a CPU. Four original fighters each have three special moves and a super. One `index.html` running three.js from jsDelivr, with no build step.

## Fighters

| Fighter | Style | Specials | Super |
| --- | --- | --- | --- |
| **Kaizen**, Storm Monk | Lightning, all-rounder | Thunder Palm (projectile), Rising Dragon (invincible anti-air uppercut), Cyclone Kick (spinning advance) | Heaven Splitter: 7-hit lightning rush ending in a lightning strike |
| **Vex**, Inferno | Fire, rushdown | Hellfire Orb (big projectile), Blazing Knee (dashing knee), Flame Pillar (eruption at range) | Inferno Rush: 9-hit flaming combo |
| **Brutus**, Ironclad | Earth, grappler (more health, slower) | Quake Stomp (low shockwave), Charging Ram (absorbs a hit), Titan Crush (command grab) | Meteor Slam: leaping grab and slam |
| **Nyx**, Shadow Blade | Shadow, speed (less health, fastest) | Shadow Star (fast projectile), Scythe Flip (overhead flip kick), Phase Step (teleport behind) | Thousand Cuts: 11-hit blade dash |

## Controls

| Action | Keyboard | Touch |
| --- | --- | --- |
| Move / jump / crouch | A D / W / S (or arrows) | Stick |
| Block | Hold back (crouch-block lows, stand-block overheads) | Hold the stick back |
| Light / Heavy | J / K | LIGHT / HEAVY |
| Special | L alone, → + L, or ↓ + L; or motions ↓↘→, →↓↘, ↓↙← + J/K | SPCL + a direction |
| Super (full meter) | I, or ↓↘→↓↘→ + J/K | SUPER |
| Throw | Forward or back + K up close | |
| Pause / sound | P / M | Buttons at the top |

Light and heavy normals cancel into specials and supers when they connect.

## The rules

- **Block heights:** lows (sweeps, the Quake Stomp) must be crouch-blocked. Air attacks and the Scythe Flip are overheads and must be stand-blocked. Grabs can't be blocked.
- **Chip damage:** blocked specials still do a little damage.
- **Combos:** damage scales down 10% per hit. Hit-stop, knockdowns, get-up invincibility and projectile clashes are all in.
- **Super meter:** fills from landing and taking hits.
- **Rounds:** 99-second rounds, first to two wins. Time-outs go to whoever has more health left.
- **Arcade ladder:** beat the other three fighters in a row to become champion. Wins are remembered per fighter.

The CPU has three difficulty levels (Easy, Normal, Brutal) that set its reaction time and how often it blocks, anti-airs and punishes. It gets a little sharper with each rung of the ladder. It zones with projectiles, jumps or blocks incoming fireballs, anti-airs jump-ins, and confirms light → heavy → special combos.

All frame data lives in `NORMALS` and each fighter's `specials` at the top of the script.
