---
author: steren
comments: true
date: 2010-12-17 01:42:16+00:00
layout: post
link: http://labs.steren.fr/2010/12/17/global-orientation/
slug: global-orientation
title: Global Orientation
wordpress_id: 254
categories:
- no-touch screen
tags:
- opencv
---

Another day of [serious work](http://www.beansight.com/) during the day, hacking in the evening.

We now have an image of the movement from which we will be able to extract descriptors. (We will use it to look for known patterns).
Of course, everything is done real-time with a pretty good frame-rate.

[caption id="attachment_255" align="aligncenter" width="700" caption="Displaying the movement and computing the global direction"][![](http://sterenlabs.files.wordpress.com/2010/12/motion_detection.png)](http://sterenlabs.files.wordpress.com/2010/12/motion_detection.png)[/caption]

Note the small line at the top left of the visualization window, it shows the global direction of the movement. In this sequence, I moved my arm toward my head.

We used [method from OpenCV](http://opencv.willowgarage.com/documentation/cpp/video_motion_analysis_and_object_tracking.html) that implement [this paper](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.46.5663&rep=rep1&type=pdf). You can always check out our [code on github](https://github.com/Steren/notouchscreen/tree/).

Canard took the time to do some code refactoring and successfully built in on Windows.
