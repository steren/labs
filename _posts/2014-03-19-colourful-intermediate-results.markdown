---
author: steren
comments: true
date: 2014-03-19 23:24:20+00:00
layout: post
link: http://labs.steren.fr/2014/03/20/colourful-intermediate-results/
slug: colourful-intermediate-results
title: Colourful intermediate results
wordpress_id: 427
categories:
- Labyrinth
tags:
- colors
- generative art
---

While killing time in the train, we worked with Anne on a small maze generation algorithm. But what started to be a way to visualise the results, turned into a result in itself (run it yourself [here](http://steren.fr/labyrinth/#colors), be patient):

[caption id="attachment_429" align="alignnone" width="696"][![Screen Shot 2014-03-16 at 22.56.59](http://sterenlabs.files.wordpress.com/2014/03/screen-shot-2014-03-16-at-22-56-59.png?w=696)](http://sterenlabs.files.wordpress.com/2014/03/screen-shot-2014-03-16-at-22-56-59.png) It all started with a way to visualise the distance of each square in a maze. From start to end, it uses the entire color hue.[/caption]

[caption id="attachment_428" align="alignnone" width="646"][![](http://sterenlabs.files.wordpress.com/2014/03/screen-shot-2014-03-08-at-01-06-39.png)](http://sterenlabs.files.wordpress.com/2014/03/screen-shot-2014-03-08-at-01-06-39.png) Decreasing the wall size was very pleasant visually.[/caption]

[caption id="attachment_432" align="alignnone" width="696"][![Screen Shot 2014-03-17 at 00.01.09](http://sterenlabs.files.wordpress.com/2014/03/screen-shot-2014-03-17-at-00-01-09.png?w=696)](http://sterenlabs.files.wordpress.com/2014/03/screen-shot-2014-03-17-at-00-01-09.png) Visualising the progress of the construction is also very nice, like a growing organism.[/caption]

[caption id="attachment_434" align="alignnone" width="696"][![Screen Shot 2014-03-17 at 00.29.25](http://sterenlabs.files.wordpress.com/2014/03/screen-shot-2014-03-17-at-00-29-25.png?w=696)](http://sterenlabs.files.wordpress.com/2014/03/screen-shot-2014-03-17-at-00-29-25.png) Forgetting about the initial goal, here is a very nice colourful render.[/caption]

[caption id="attachment_457" align="alignnone" width="696"][![Playing with colours, adding depth](http://sterenlabs.files.wordpress.com/2014/04/screen-shot-2014-03-17-at-23-55-00.png?w=696)](http://sterenlabs.files.wordpress.com/2014/04/screen-shot-2014-03-17-at-23-55-00.png) Playing with a colour palette, adding depth by changing the color luminosity[/caption]

Technically, the rendering is done using HTML canvas. I will detail the maze generation algorithm itself in a future post.

This led me to notice that using the HSL notation when drawing on a canvas was 3 times slower than using other color notation. (I created [this JSperf](http://jsperf.com/fillstyle-css-color-value-hex-vs-rgb-vs-hsl)). I filled [a bug report](https://code.google.com/p/chromium/issues/detail?id=353761) on the Chromium bug tracker, let's hope it will be addressed in the future.

The colourful visualisation is published online, you can run [it here](http://steren.fr/labyrinth/#colors).
