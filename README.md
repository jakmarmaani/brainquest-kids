# BrainQuest Heroes — Adventure Island

A touch-first children's adventure game aimed at ages 5–8, with age 6 as the main design target.

## v11 gameplay rebuild

This build focuses on a polished playable core rather than pretending that hundreds of features are finished. The child physically explores Adventure Island using an on-screen movement stick, meets friendly NPCs, collects coins, discovers surprise treasure/rainbow events, enters themed places and plays missions.

There are 50 mission definitions across 15 areas: Puzzle Castle, Mystery Forest, Space World, Pirate Island, Dinosaur Valley, Robot City, Underwater Kingdom, Racing World, Builder World, Hero Academy, Candy Land, Snake Arena, Treasure Caves, Brain Lab and Volcano Adventure.

Playable systems include scavenger exploration, guaranteed-solvable mazes with keys, Snake arcade with power-ups, touch building, animated hero battles, car/boat/rocket/dragon/dino racing variants, memory, platforming with moving platforms and rescues, pattern memory, logic, matching, hidden objects, maths, science, early word building and pattern-based boss battles.

## Exact core features implemented

- Adventure Island hub with player movement
- Touch joystick plus contextual action/jump controls; keyboard/mouse fallback
- Animated custom character, outfits, skin, hair, hats and unlockable pets
- Stars, coins, gems, crowns, badges and progression
- Dynamic clouds, birds, NPCs, water effects, animated landmarks, day/night tint and random surprise events
- Puzzle Castle missions
- Actual map-based scavenger hunts
- Snake Arena
- Platform adventures
- Builder World with actual block placement/removal
- Cartoon Hero Academy battles with reacting enemies and powers
- Racing levels with several vehicle types
- Separate music and sound-effect controls, with procedural world themes
- Optional daily challenges without streak pressure
- Parent dashboard protected by a two-button hold gate
- Local-only save data; no chat, ads, purchases, camera, microphone or location

## Architecture

- `src/data.js` — worlds, 50 levels and unlock data
- `src/progress.js` — saves, rewards and optional daily challenge state
- `src/audio.js` — procedural music, sound effects and spoken instructions
- `src/art.js` — player/world/landmark drawing and animation
- `src/minigames.js` — playable mini-game systems
- `src/main.js` — engine loop, input, hub, UI and scene management

The artwork is original procedural Canvas art plus standard Unicode symbols. It does not copy Minecraft, Roblox, Snake, superheroes or any third-party franchise characters, maps, artwork or music.
