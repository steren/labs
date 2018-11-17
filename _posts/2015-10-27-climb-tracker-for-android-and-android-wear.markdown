---
author: steren
comments: false
date: 2015-10-27 08:11:16+00:00
layout: post
link: http://labs.steren.fr/2015/10/27/climb-tracker-for-android-and-android-wear/
slug: climb-tracker-for-android-and-android-wear
title: Climb Tracker for Android and Android wear
wordpress_id: 535
categories:
- Climb tracker
tags:
- android
- android wear
- climbing
- firebase
---

Here is how I used **Android Wear** and **[Firebase](https://www.firebase.com/)** to build from scratch an indoor climb tracker.

Install it [on Google Play](https://play.google.com/store/apps/details?id=fr.steren.climbtracker), read the [code on GitHub](https://github.com/google/climb-tracker).

I learnt a few things from [a first prototype I did](http://labs.steren.fr/2014/05/05/indoor-climbing-tracker/):



	
  * I do not want to use my phone in a climbing gym,

	
  * I should not expect to have connectivity in a climbing gym,

	
  * I care more about the grades of the routes I complete than the routes themselves,

	
  * The gym's routes are changing every few months, too quickly to maintain a database.


![watch3_framed](https://sterenlabs.files.wordpress.com/2015/10/watch3_framed.png?w=290)

So I decided simplify the app to its bare minimum by focusing on this scenario:


<blockquote>From my watch, I log the grade of the routes I complete.

After the session, I can see a list of my climbs on my phone.</blockquote>


Yes, the main scenario uses an wearable device: climbing with a smartwatch is not a problem, it's always available and does not require to manipulate a phone.

![Screenshot-phone1_framed](https://sterenlabs.files.wordpress.com/2015/10/screenshot-phone1_framed.png?w=597)

Also, it's designed **offline first**: The watch does not require a phone to be nearby, or any internet connection. Once it gets close to its phone, data is transferred from the watch to the phone (once again, no internet required). The data is then stored locally on the phone and when connectivity is available, is synced to a server.

I then added the ability to add a climb from a phone, as I suppose that the intersection between climbers and Android phone owners is bigger than between climbers and Android wear owners :)

The grading system can be selected from the Settings menu and the user's position is recorded when saving the climb, for potential future use.

[caption id="attachment_543" align="aligncenter" width="660"][![Climb Tracker architecture](https://sterenlabs.files.wordpress.com/2015/10/climb-tracker-architecture.png)](https://sterenlabs.files.wordpress.com/2015/10/climb-tracker-architecture.png) The Climb Tracker technical architecture[/caption]

Technically, it is a native Android app, mostly because I needed to use the **Wear SDK**, but also because I wanted a reliable app experience and not struggle to imitate a native look and feel using web technologies. Transmitting data from the wearable to the phone uses the Android Wear [DataApi](https://github.com/google/climb-tracker/blob/master/wear/src/main/java/fr/steren/climbtracker/ClimbConfirmation.java#L102).

The rest of the app is using the **Firebase** SDK with [offline mode enabled](https://www.firebase.com/docs/android/guide/offline-capabilities.html): Firebase is deciding by itself when to sync the data with its server. I did not write any line of data sync or server-side code. And I loved it.

The app is following the latest permissions guidelines: asking them when opening the application, and being flexible regarding the location permission: if not granted, the location is not recorded but the app keeps working.

[ ![Get it on Google Play](https://developer.android.com/images/brand/en_generic_rgb_wo_45.png)](https://play.google.com/store/apps/details?id=fr.steren.climbtracker)
The app is [released on Google Play](https://play.google.com/store/apps/details?id=fr.steren.climbtracker). It is open source and released [on GitHub](https://github.com/google/climb-tracker). Of course, I accept suggestions, bugfixes and pull-requests.

For example, would you like to [translate it in your language](https://github.com/google/climb-tracker/blob/master/mobile/src/main/res/values/strings.xml)?
