# Breach

A whale-jumping duel against an AI agent. It's a three.js scene with a single `index.html` and no build step.

## How to play

- **Charge:** tap anywhere, or press **Space**. Every tap adds surge, and your whale dives to wind up. Surge drains all the time, so only fast tapping keeps it high. Each finger counts, so two thumbs help.
- **Breach:** stop tapping for 0.4 s and the whale launches. The **peak** surge sets the height, from about 4 m up to 32 m. Hitting 100% is a **MAX BREACH** bonus.
- **Angles:** each jump picks a style (nose dive, side roll or back flop). Flat landings splash bigger, and bigger splashes score more.
- **Spins:** tap while airborne to spin, up to 3 spins for style points.
- **Winning:** the first to **500** points wins.

Controls: **P** or **Esc** pauses, **M** toggles sound.

## The AI agent

The agent plays by the same physics you do. Its only limit is a capped tap rate:

| Difficulty | Max rate | Top surge it can hold |
| --- | --- | --- |
| Calm | ~6 taps/s | ~54% |
| Pod | ~8 taps/s | ~83% |
| Orca | ~10 taps/s | 100% |

Before each jump it picks a plan and shows its reasoning in the Agent panel:
- the cheapest jump that finishes the race
- a max breach when it's behind
- quick, safe jumps when it's ahead
- otherwise, a strong jump

## Tuning

All the rules are constants at the top of the script:
- `GOAL`, `G`, `DECAY`, `RELEASE`
- `surgeGain` (surge added per tap)
- `heightFor` (jump height from peak surge)
- `scoreFor` (points per jump)
- `DIFF` (agent tap rate, reaction time, air taps and how often it plays the smart finish)
