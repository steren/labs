---
author: steren
comments: false
date: 2016-11-05 17:15:48+00:00
layout: post
link: http://labs.steren.fr/2016/11/05/projection-mapping-on-painting/
slug: projection-mapping-on-painting
title: Projection mapping on painting
wordpress_id: 850
categories:
- Misc.
tags:
- after effect
- deepdream
- projection mapping
- style transfer
---

[Xavier](https://twitter.com/xdoremus) has an overhead projector which points toward a painting on a wall. So obviously, we had to project on it  :)

After a bit of calibration to make sure we were projecting black outside of the painting, we tries different things:

The first thing was to feed the painting into the [Deep Dream algorithms](http://deepdreamgenerator.com/generator), in order to create those [trippy pictures](https://en.wikipedia.org/wiki/DeepDream) from neural networks. Sadly, once projected, the result was not noticeable enough.

So I tried something different: [style transfer](http://deepdreamgenerator.com/generator-style). This is an algorithm, also using machine learning, that can transfer the artistic style of an image to another. Take a look at this gallery:

[gallery ids="854,856,857,855,853" type="rectangular"]

I also worked on animations, using Adobe After effects: The painting usually represents a boring winter scene, so I created 3 different compositions, to layer on top of the original style, that represent the scene under different weather: summer, rain and snow. Each of them are color graded and animated: summer has a slowly moving trees and blue sky, I simulated raindrops and a snowfall. See the video below (sadly, the rain or snow do not render well in the recorded video):

https://www.youtube.com/watch?v=fFoC8iNgIgw

Adobe After Effects easily allows to display the current composition on a second screen, in my case the projector. This allowed real time visualization of the effects, which is always better when working on something visual, especially when the computer screen is not the final medium:

![img_20161029_192125](https://sterenlabs.files.wordpress.com/2016/11/img_20161029_192125.jpg?w=1536)
