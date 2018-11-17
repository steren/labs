---
author: steren
comments: true
date: 2013-12-10 11:16:22+00:00
layout: post
link: http://labs.steren.fr/2013/12/10/mri-principle-3d-curve-browser/
slug: mri-principle-3d-curve-browser
title: 'MRI proton spin: 3D animated mathematical curve in the browser using MathBox.js'
wordpress_id: 409
categories:
- Misc.
tags:
- 3D
- javascript
- Magnetic Resonance
- Mathbox.js
- Maths
- three.js
- WebGL
---

My partner is defending her thesis today and she needed some help to produce visuals for the presentation. The goal was to illustrate the relaxation of the spin of a proton that received a radio-frequential impulsion in a constant magnetic field, which is the principle at the root of Magnetic Resonance Imagery.

The visualisation needed to be animated and in 3D. I thought it would be a good use case for [MathBox.js](https://github.com/unconed/MathBox.js/), a JavaScript library built on top of [three.js](http://threejs.org/), which is built on top of WebGL and developed by [Steven Wittens](http://acko.net/).

This library is designed for mathematical visualisations. You focus on curve expressions and not on geometrical primitives, the engine is then evaluating and interpolating them on every frame to draw them. It works in 2D, 3D space and is not restricted to cartesian space.

I created a 3 step animation. MathBox allows you to write an animation script: you define for each step what is added, removed or animated.

You can load it in your browser at [this address](http://steren.github.io/mri-spin/spin.html).
Or simply watch this youtube video:

[youtube=http://www.youtube.com/watch?v=ygwESjbb3rQ]

I am also glad to use this animation to illustrate the [Wikipedia article about MRI and MRN](https://fr.wikipedia.org/wiki/Imagerie_par_r%C3%A9sonance_magn%C3%A9tique#Rappels_de_RMN).

**Using chrome as my code editor**
I wanted to experiment with something that I think will happen more and more in the future: This short project was entirely developed inside the browser.

[![Code in Chrome dev tools](http://sterenlabs.files.wordpress.com/2013/12/screen-shot-2013-12-08-at-17-37-17.png?w=300)](http://sterenlabs.files.wordpress.com/2013/12/screen-shot-2013-12-08-at-17-37-17.png)

I had to create the local git repository and its submodules, but then I did not use an other editor than the "Source" tab of Chrome's Dev Tools. This is possible thanks to Chrome's "[Workspaces](https://developers.google.com/chrome-developer-tools/docs/settings#workspace)" that allow it to map the current page source to a specific folder of your computer. It is then possible to edit and save the resources that are usually read-only. This workflow is more streamlined, than the regular workflow of debugging in the Dev Tools, then going back to the editor, find the line to change, save, go back to Chrome and reload. Here, you do not leave the browser's window and can edit and save the JavaScript file at the same time of debugging.

Of course, this is a different approach than using an online IDE such as[ cloud9 IDE](https://c9.io/), that I also appreciate, but both are interesting and we should definitely keep an eye on these new workflows.
