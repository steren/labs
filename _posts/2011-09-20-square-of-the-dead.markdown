---
author: steren
comments: true
date: 2011-09-20 17:28:36+00:00
layout: post
link: http://labs.steren.fr/2011/09/20/square-of-the-dead/
slug: square-of-the-dead
title: Square of the Dead
wordpress_id: 328
categories:
- Square of the Dead
tags:
- foursquare
- game
- hackathon
- mobile
- web
- zombies
---

or "_28 check-ins later_"...

This week-end, I participated to the [foursquare global hackathon](http://blog.foursquare.com/2011/08/17/announcing-the-round-the-clock-round-the-world-foursquare-hackathon/). I worked with [Jean](http://twitter.com/#!/myduchere) and [Olivier](http://twitter.com/#!/oli_bre) on
[![](http://sterenlabs.files.wordpress.com/2011/09/title_home.png?w=300)](http://squareofthedead.appspot.com/)

I've been having an idea for a long time: imagine a virtual virus that is spreading due to our social interactions. Wouldn't it be great to see it spread and to see how people react? Foursquare was the ideal product to build upon. So I pitched a crazy idea about virus and zombies, saying that a game mechanism was still to be defined.

Inspired by zombie movies, we worked a long time to define a simple game pluggable on foursquare. After a couple of iterations, we came up with a simple system:

[caption id="attachment_330" align="aligncenter" width="1024"][![](http://sterenlabs.files.wordpress.com/2011/09/rules.png?w=1024)](http://sterenlabs.files.wordpress.com/2011/09/rules.png) Square of the Dead, rules[/caption]

Players can either be survivors or zombies.



	
  * When you are a **zombie**, you contaminate every place you check into. Your goal is to spread the virus.

	
  * When you are a **survivor**, you get contaminated if you check into a contaminated place. Your goal is to survive, for this you can find guns in non-contaminated places. These guns will allow you to de-contaminate places and transform zombies from these places into survivors.


[![](http://sterenlabs.files.wordpress.com/2011/09/capture-square-of-the-dead-google-chrome.png?w=1024)](http://sterenlabs.files.wordpress.com/2011/09/capture-square-of-the-dead-google-chrome.png)

The game do not require so much actions from the players, they just have to keep using foursquare to play. We minimized the problems by adopting a cross-platform notification system that everyone is already using: **emails**.

Technically, we used the [Play! framework](http://www.playframework.org/) deployed on [App Engine](http://code.google.com/appengine/) using [Siena](http://www.sienaproject.com/index.html). I ran into [a bug](https://play.lighthouseapp.com/projects/57987-play-framework/tickets/444) that made us lost some precious hours.

We will polish the game and maybe come up with some nice other features (like a map to see the virus spreading all over the world!).
[Try "Square of the Dead" now](http://squareofthedead.appspot.com/).

Olivier, designer, also [blogged about his experience](http://olivierbrechon.com/blog-2/).

[caption id="attachment_340" align="aligncenter" width="300"][![](http://sterenlabs.files.wordpress.com/2011/09/317641_260756837297294_128085203897792_793909_288501339_n.jpg?w=300)](http://sterenlabs.files.wordpress.com/2011/09/317641_260756837297294_128085203897792_793909_288501339_n.jpg) Working on the project, picture by Le Camping[/caption]

I really enjoyed the hackathon. [Other projects](http://fshackathon.appspot.com/) were really great. here are my favorites:



	
  * [4sqBox](http://4sqbox.phpfogapp.com/): receive files when you chek-in somewhere

	
  * [fstalk2her](http://yakafokon.github.com/fstalk2her/): check the boy/girl ratio before going into a bar and see what you have in common with these people :D

	
  * [Check Me In](http://www.checkmeinhq.com/): Check-in just by facing your smartphone in front of the venue's iPad (use case: you have no network)

	
  * [Gettogether](http://www.gomesbrothers.com/gettogether/): very slick mobile app to organize something with friends.


