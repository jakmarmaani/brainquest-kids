# BrainQuest Heroes — Adventure Island

A touch-first adventure game for children around ages 5–8, with age 6 as the primary design target.

## v10 rebuild

This version replaces the old level-button website structure with a real playable Adventure Island hub. The child moves a character around the island and physically reaches activity zones. The game includes 50 mission definitions across 15 themed areas and 16 playable systems including scavenger hunts, mazes, Snake-style arcade play, building, hero battles, racing, memory, platforming, patterns, logic, matching, hidden objects, maths, early reading, science and boss battles.

## Controls

- Tablet/phone: on-screen analogue movement pad plus two large contextual action buttons.
- Desktop: WASD or arrow keys, `E` for the main action and Space for the second action.
- Puzzle activities also support direct tapping/clicking on the canvas.

## Safety and privacy

There is no open chat, advertising, gambling, real-money purchase system, strangers, camera, microphone or location access. Progress is stored locally in the browser. The parent dashboard is protected by a two-button hold gate.

## Architecture

- `index.html` — game shell and accessible overlays
- `styles.css` — responsive touch-first UI
- `src/data.js` — zones, 50 missions, unlockable pets/outfits
- `src/main.js` — engine, Adventure Island, input, rewards, player progress and mini-game systems
- `sw.js` — offline core cache

All game artwork in this build is drawn procedurally with Canvas primitives plus standard Unicode symbols. No third-party character or franchise artwork is copied.