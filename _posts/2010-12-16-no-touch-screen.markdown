---
author: steren
comments: true
date: 2010-12-16 10:16:12+00:00
layout: post
link: http://labs.steren.fr/2010/12/16/no-touch-screen/
slug: no-touch-screen
title: no-touch screen
wordpress_id: 243
categories:
- no-touch screen
tags:
- opencv
---

For months, I've been talking with my friend [Canard](http://lesgeorges.org/) about a project of interacting with a computer without touching it. We are convinced that it can be done with a simple webcam and that the "depth" information is not needed for simple interactions. (So no need to buy a kinect or two webcams).

Yesterday we started hacking on this. We are using [OpenCV](http://opencv.willowgarage.com/wiki/). We first discussed about the different steps of doing it. But as we explored OpenCV, we changed some of these previous decisions because we found some built-in functions.

After investigation, we decided that the first part of our system will be using a method named "_Real-time Motion Template Gradient_s" by James Davis and Gary Bradski (you can read the paper [here](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.46.5663&rep=rep1&type=pdf))

The very first step was to get the difference between two frames of the webcam video, what you can see in the next image is the movement : black means no movement, colored means there was a difference between the two frames:

[caption id="attachment_244" align="aligncenter" width="700" caption="Visualisation of the difference between frames of a real time video"][![](http://sterenlabs.files.wordpress.com/2010/12/opencv_diff.png)](http://sterenlabs.files.wordpress.com/2010/12/opencv_diff.png)[/caption]

You can check out the code (and fork us) on [our github repository](https://github.com/Steren/notouchscreen).

Stay tunned to follow our progress.
