---
author: steren
comments: true
date: 2014-04-01 08:42:51+00:00
layout: post
link: http://labs.steren.fr/2014/04/01/how-to-generate-a-maze/
slug: how-to-generate-a-maze
title: How to generate a maze?
wordpress_id: 463
categories:
- Labyrinth
tags:
- algorithm
- game
- maze
- maze generator
---

We had with Anne a 5 hours train trip and took the time to think about how we would proceed if we had to generate a maze.

First, we had to think about our problem: there are plenty of types of mazes. We decided that we would only consider mazes on a cartesian grid (no circle or bended walls). It can be different to start with a fixed start and end or just to fix the start, we decided to only fix the starting point, and to consider that the end would be the point the farest from this starting point.

[caption id="attachment_467" align="aligncenter" width="300"][![An example of generated maze.](http://sterenlabs.files.wordpress.com/2014/05/screen-shot-2014-03-18-at-00-26-43.png?w=300)](http://sterenlabs.files.wordpress.com/2014/05/screen-shot-2014-03-18-at-00-26-43.png) An example of generated maze.[/caption]

After quickly setting up the rendering using HTML canvas (it may have been smarter to use SVG by the way), I set up the data structure : matrices (double arrays) for holes, horizontal and vertical walls

Then we arrived to the interesting part: our algorithm. We decided to consider a growing strategy: We start with a filled black canvas, and “grow” tunnels starting from the start point.
We keep in memory a list of “tunnel ends”, which are the point we are currently continuing the tunnels from.
At each iteration, we determine, with some probabilities, for each “tunnel end”: if the tunnel should continue in only one direction, split in two or three (if possible), the direction the tunnel should to continue to.
If a tunnel end encounters a dead end, then we remove it from the list of tunnel ends to consider for the next iteration.
We may end up with no “tunnel end” left, in that case we pick a random point on the current maze that is next to a “black” square, and we start a new tunnel from this point. This last condition is here to make sure all the available space will be used.
For each “tunnel end”, we also keep in memory the distance from the starting point, and store this distance for all square of our maze. This allows us to select an end when the generation is done.

But what makes a maze interesting? As a human, a maze will be difficult if when you encounter an intersection, your brain cannot easily determine on which direction to go. For example if you clearly see that going left will end up in a dead end in a few blocks, then you will chose right.
To achieve this, we adjusted some parameters in order for the maze to generate long and not obvious branches. We had to set the probability to split to a low amount, and had to keep in memory the overall tunnel growing direction and to make it prevail when selecting a direction in order to prevent the tunnel to collapse on itself too often.

[caption id="attachment_468" align="aligncenter" width="696"][![Screenshot of the maze generator app.](http://sterenlabs.files.wordpress.com/2014/05/screenshot.png?w=696)](http://sterenlabs.files.wordpress.com/2014/05/screenshot.png) Screenshot of the maze generator app.[/caption]

Because something is not done until it’s pushed and shipped, I took a few more hours to [put the result online](http://steren.fr/labyrinth) and in a [Chrome Packaged application](https://chrome.google.com/webstore/detail/labyrinth/hicnnkflhccmckcedegeapcncpeignkl).

The application is very simple: it generate a maze of the size of the window. To control the difficulty (size) of the maze, just resize the window.
I may add in the future more interactions and printing features.

The code is separated in two files, a standalone [maze generator](https://github.com/steren/labyrinth/blob/master/labyrinth.js) and a [maze renderer](https://github.com/steren/labyrinth/blob/master/labyrinth-canvas-renderer.js).


**[Try it now](http://steren.fr/labyrinth)**
