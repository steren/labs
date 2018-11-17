---
author: steren
comments: false
date: 2018-02-19 23:35:31+00:00
layout: post
link: http://labs.steren.fr/2018/02/20/attractors/
slug: attractors
title: Attractors
wordpress_id: 1084
---

## The idea


For our _Save the date_, we had some visual ideas of what we wanted to achieve: Something relaxing and calm, inspired by the sea. We first started by picking a [color palette](http://labs.steren.fr/2016/01/25/color-palette-showcase/) and then decided to explore streams of particles, reminding streams of ocean currents.

See the final result [here](http://steren.github.io/les-ninis).


## Using code for visual design


Anne and I developed our project using JavaScript and browser technologies (see below).

It was interesting to use code to achieve something that is visual design. Part of the end result is coming from the randomness of the algorithm, like the initial positions of the attractors and of the particles, but another part of the result comes from hand picked parameter values (colors, sizes, number, speed...). The final result is in my opinion an interesting mix of pre-defined visual aesthetics and randomness.

Like any artistic tool, code can be used to achieve a certain artistic result. The drawback with most development environment is the long feedback loop: Contrary to a drawing tool where the feedback is almost instant, code demands to finish the code modification before being able to visualize it.


## The technology


We draw many particles on a [web canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). For each frame, we move the particles and draw their movement on top of the previous state. We do that at 60 frames per second.

The paths are never stored in memory, only the current position of the particles and the attractors are, what you see is just result of overlaying many many frames. The "shadow" is faked by using a transparent sprite, that we paint under each particle at each frame. This gives a nice depth effect to the end result, despite everything being in 2D.

The particles move by following the gradient of various "attractors", like particles in a magnetic field. The position, number and impact of these attractors are generated randomly, within pre-defined boundaries.

In addition to particles and attractors, we added the ability to draw text and avoid certain zones. This complexified the codebase and does not lead in my opinion to great results. But we wanted to use it a little bit in our Save the Date.




## A reusable library


Later, I moved the code responsible for painting particles in a reusable JS library. Find it [on GitHub](https://github.com/steren/attractors) and [on npm](https://www.npmjs.com/package/attractors). The code could be cleaned up, in particular, is assumes a global 'config' object, this should be passed as an argument when initializing the library.

Everything can be tweaked: text to display, the color, number of particles, size, speed... here are some videos of various settings:

https://www.youtube.com/watch?v=8Xckh9zVzU4&list=PL7Bq7_PxIAiCJ3yCgzGKgErZpBk7ipZ0I


## A 'new tab' Chrome extension


Very recently, I used the library to create a Chrome extention that replaces your 'new tab' page with this library (see [sources on GitHub](https://github.com/steren/attractors-newtab))

[Install it from the Chrome webstore](https://chrome.google.com/webstore/detail/attractors-new-tab/kalnpbpmfjnpehkhbpfikhopkoicaepi)

Here is a video of the new tab page once the extension is installed:

https://www.youtube.com/watch?v=XBr6pdDIjj8
