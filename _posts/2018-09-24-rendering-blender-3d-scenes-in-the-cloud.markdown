---
author: steren
comments: false
date: 2018-09-24 00:26:30+00:00
layout: post
link: http://labs.steren.fr/2018/09/24/rendering-blender-3d-scenes-in-the-cloud/
slug: rendering-blender-3d-scenes-in-the-cloud
title: Rendering Blender 3D scenes in the cloud
wordpress_id: 1088
categories:
- Google Cloud Platform
- Misc.
tags:
- b3d
- blender
- container
- docker
- open-source
- serverless
---

I created a simple app that renders a [Blender](https://www.blender.org/) 3D scene in the cloud: users can customize the displayed message by changing an URL parameter, and the app will return the 3D rendered image.  [Give it a try here](https://render-fu4lqx2yaq-uc.a.run.app/?scene=outrun-filter&text=OUTRUN).

The code is a very simple [Python function](https://github.com/steren/render/blob/master/function.py) that invokes the Blender open source software. It uses the [Blender API](https://docs.blender.org/api/) in order to dynamically change the value of a Text object. The function is then simply [wrapped](https://github.com/steren/render/blob/master/invoker.py) in a basic [Flask](http://flask.pocoo.org/) application in order to respond to HTTP requests. Because Blender needs to be installed, I am using a [Dockerfile](https://github.com/steren/render/blob/master/Dockerfile) that runs "apt-get install blender".

Find the [code on GitHub](https://github.com/steren/render).

This app was created to showcase the upcoming "serverless containers" product of the Google Cloud Platform. It allows to run any container "in a serverless way": developers are able to deploy and run any language or library they want, and only pay for actual resources used when it receives requests. I demoed the feature during the [Cloud Next 2017 keynote](https://youtu.be/XiGBWpxc6Lc?t=37m) and [other](https://youtu.be/iPQUdb0kssE?t=27m15s) [sessions](https://youtu.be/Y1sRy0Q2qig?t=35m26s). sign up for early access at [g.co/serverlesscontainers](http://g.co/serverlesscontainers)
