---
author: steren
comments: true
date: 2012-10-24 21:43:06+00:00
layout: post
link: http://labs.steren.fr/2012/10/24/video-support-phonegap-android/
slug: video-support-phonegap-android
title: Bringing video support to Phonegap Android
wordpress_id: 384
categories:
- Phonegap
tags:
- android
- cordova
- video
---

Phonegap for Android had serious issues with inline videos: HTML <video> tag was not supported at all on Android inferior to 4. (On Android 4.X, they require the View to be hardware accelerated)

On behalf of Joshfire, I worked on the main cordova Android source code by adding elements from the original Android browser. In the end, clicking on a video on a Phonegap application starts a fullscreen video player view. Hitting the "back" button goes back to the app. This is far from perfect, but better than nothing.

After submitting my pull request, I had warm and polite feedback from [Simon Mc Donald](http://simonmacdonald.blogspot.fr/) of the Phonegap team, he helped to test my work and added the final touches before accepting the code into his branch.

Today the feature has been shipped into Phonegap 2.2.0. I had great feedback from both Phonegap creators and users. That's something very motivating.

See the final [commit](https://github.com/apache/incubator-cordova-android/commit/06aafc96c9fd55a4d98dd032710048ed211ac49e) in Phonegap's source code.
