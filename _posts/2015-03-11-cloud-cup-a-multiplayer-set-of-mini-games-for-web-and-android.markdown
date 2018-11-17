---
author: steren
comments: false
date: 2015-03-11 22:52:33+00:00
layout: post
link: http://labs.steren.fr/2015/03/12/cloud-cup-a-multiplayer-set-of-mini-games-for-web-and-android/
slug: cloud-cup-a-multiplayer-set-of-mini-games-for-web-and-android
title: 'Cloud cup: a multiplayer set of mini games for web and Android'
wordpress_id: 510
categories:
- Multi-Device game
tags:
- android
- cloud
- firebase
- game
---

I'm glad to present the work of a week-long hackathon I did last November with three other googlers.

I've been having for a long time the idea of a real time game using phones as controller and a big screen as the main game screen. You may recall a previous blog post about a [first prototype](http://labs.steren.fr/2011/09/15/anydance/). A few years later, I could pitch the idea at an internal hackathon and gather a team around the concept. While I initially wanted to build a dancing game, I realized that this was [already done](http://www.justdancenow.com/), so we decided to go towards mini games, an idea very compatible with a hackathon timeframe.

Realizing after a day that we would not be able to have a reliable and scalable real time architecture and a fun game after just five days using regular backend technologies, we decided to focus on the game itself and to use [Firebase](https://www.firebase.com) to handle the real time and backend parts of our system. It allowed us to get familiar with this very interesting technology. I already [used Parse in the past](http://labs.steren.fr/2014/05/05/indoor-climbing-tracker/), while they both fall into the [Backend as a Service (MBaaS) category](https://en.wikipedia.org/wiki/Mobile_Backend_as_a_service), I could notice with pleasure that Firebase was able to perform as well as Parse for the regular MBaaS features (and even better to my taste, by providing an [Angukar](https://www.firebase.com/docs/web/libraries/angular/index.html) SDK) but that it also provides impressive real time capabilities.

After a single day, we had a functional prototype of our game: Android phones were interacting in real time with an Angular application in a "Shake" game. The next three days were spent creating other mini games and streamlining the game mechanism.

And we won the Fun category!

While the hackathon was internal, it was not a problem at all for Google to let us open source and release our work to the public. You can find the sources on GitHub: [Android](https://github.com/google/cloud-cup-android) and [Web](https://github.com/google/cloud-cup). Firebase [showcased the project](https://www.firebase.com/blog/2015-03-11-cloud-cup-cross-platform-demo.html) on its official blog.

**Try it now: [Install the Android app](https://play.google.com/store/apps/details?id=fr.steren.cloudcup)**, and visit **[cloudcup.firebaseapp.com](https://cloud-cup.firebaseapp.com)** to start a game.

I hope you like it.
