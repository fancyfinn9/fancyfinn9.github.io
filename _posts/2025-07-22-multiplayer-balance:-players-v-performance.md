---
layout: post
author: fancyfinn9
---

As a developer on JMA Minetest, I must make a variety of decisions.

(Yes, that's a great first line, I know.)

Most of the time these are whether to add a new feature or not, which can go pretty deep when taking my values of our Mineclone2 server into account.

This blog post is a relatively short explanation as to why I reject some suggestions that seem good on the surface, but have a rabbit hole of other consequenses...

---

Jens Bergensten, the lead developer of Minecraft, explains the concept of bad things happening in the game.

> BAD THINGS HAPPEN...\
> ... but it's technically the players' fault. Disaster is common in Minecraft, be it falling in lava or having your house blown to pieces by a creeper. The point is that these accidents happened when there were players there to see them\
> happen. Avoiding such dangers is done by playing differently and more carefully. The game should not create situations that are impossible to avoid, and when it does, they should have a reasonably small impact.\
> Making sure the player is treated fairly is one reason why the worst natural disaster is a (relatively tame) lightning strike, and the list of blocks the endermen take is limited to natural-and plentiful-blocks such as dirt and stone. If a game mechanic is going to destroy hours of players' hard work, players should be the ones initiating it, and players should be able to stop, or even prevent it entirely.\
> One practical example is how iron golems ignore creepers, because otherwise the creeper would explode and destroy buildings without any player interaction.\
> -- _Minecraft Game Design (2019) by Jens Bergensten_

This is a principle that I try my best to follow when developing JMA Mineclone2. I generally sum this up as:
> "all bad things are caused by the player, or preventable by the player"

Running a mildly-popular game server, running a demanding game on average hardware means that quite often I and the team need to make modifications that put less stress on the server. And sometimes, these require minor sacrifices from the players.

And this leads me to my main point in this blog post. (Thanks for staying with me thus far!)

A major cause of lag (particularly on Luanti servers) is items dropped on the ground. They do have a 10-minute timer after which they despawn, but within those 10 minutes they can eat up a small portion of the CPU, and this can really add up as more and more items are dropped.

The solution used on many Minecraft, and indeed Luanti, servers is to remove all dropped items from the ground periodically.

But imagine this scenario: a player dies in a remote location. They must undergo the long journey to retrieve their dropped items, in an attempt to reach them before the 10-minute window is over. But when they get there, well within the time limit, everything is gone! How could this be, as they were well within the time for recovering your items?

**This is the reason I do not agree with using item-removal plugins/mods.** Yes, they remove a large source of lag quickly. Yes, it doesn't affect gameplay too much. But it contradicts my principles for the game (see quotes above), because **something bad happened that was not the player's fault, and was not directly preventable by the player.**

(Some of you might be saying, it was preventable by not dying in the first place! Well, in my view, the timeframe for picking up your lost items is an optional way of recovering any treasured items that you were carrying, and possibly spent hours grinding for. It would suck if you died accidentally and lost weeks of hard work with no way of getting it back.)