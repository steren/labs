---
author: steren
comments: true
date: 2013-07-19 21:57:08+00:00
layout: post
link: http://labs.steren.fr/2013/07/19/sculptfab/
slug: sculptfab
title: Sculptfab
wordpress_id: 414
categories:
- Sketchfab
tags:
- 3D
- javascript
---

This Friday, I joined [Cédric](http://plopbyte.com/), [Marc ](https://twitter.com/marchelbling)and the guys from [Little Workshop](http://littleworkshop.fr/) for a quick coding session.




It all started when I noticed a very nice project: [SculptGL](http://stephaneginier.com/sculptgl/) by Stéphane Ginier. Stéphane created a great 3D scuplting tool that implements some very nice adaptive subdivision and decimation.









[caption id="attachment_415" align="alignnone" width="300"][![Final version of Sculptfab](http://sterenlabs.files.wordpress.com/2013/12/screen-shot-2013-12-10-at-23-01-18.png?w=300)](http://sterenlabs.files.wordpress.com/2013/12/screen-shot-2013-12-10-at-23-01-18.png) Final version of Sculptfab[/caption]






We decided to refine the UI and to add the ability to directly upload to [Sketchfab](https://sketchfab.com) without leaving the tool.







On my part, I created the foundation of a small script that, when inserted, would help an application creator to upload model data to Sketchfab. it displays a model window asking for Sketchfab API key and basic information.







Then, an archive containing the model data is created on the client using [JSzip](http://stuk.github.io/jszip/) after the model has been transformed to the .obj file format. Screenshot of the current canvas is taken from the client too. and both are submitted to the [Sketchfab API](https://sketchfab.com/api).


Try Sculptfab online at [http://labs.sketchfab.com/sculptfab/](http://labs.sketchfab.com/sculptfab/)
