---
layout: post
author: fancyfinn9
---

Minetest, the popular voxel game, allows games, servers and players to apply their own texture packs.

The question is, does this affect the FPS of the open-source game?

### Introduction

The FPS of servers can greatly reduce the amount of players, owing to the large amounts of young children playing forks of Minetest from the Google Play store, that are pretending to be other large voxel games.  
Logically speaking, on lower-end devices like phones, the weaker processors will not be able to render larger, more detailed texture packs without affecting the FPS of the game. Is this true at all, and if so, is there that much of a toll?

In this experiment I grabbed a variety of devices I had laying around my house. All the information on them is provided with each device's results, and to make things fair, all devices were tested with the following:

- All devices were connected to an external server, running on the same WiFi network, running VoxeLibre 0.87.1.
- The two texture packs used were 1) Default VL textures (16px) and 2) [A custom texture pack](https://github.com/markopetrovi/jma-mineclone2/pull/14) (64px)
- The texture pack was applied server-side between tests.
- All devices were running Minetest 5.8.0.
- All devices were running with Minetest's default settings, including FOV (72) and render distance (190).
- Before every test the clients were given 60-120 seconds to render in the surrounding area.

### Exhibit 1: Raspberry Pi 4

- **Name:** Raspberry Pi 4 Model B
- **OS:** Raspberry Pi OS
- **MT version:** 5.8.0 installed from Flatpak

[16px](/assets/images/mtbenchmark_e1_16.gif)

### Final Results

Table format

| Device | FPS (16px) | FPS (64px) |
| --- | :---: | :---: |
| Raspberry Pi 4 | 9 | 9 |
|||
