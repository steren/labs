---
author: steren
comments: true
date: 2013-09-23 10:42:47+00:00
layout: post
link: http://labs.steren.fr/2013/09/23/poker-tournament-tracker/
slug: poker-tournament-tracker
title: Poker tournament tracker
wordpress_id: 398
categories:
- Misc.
tags:
- google
- poker
- script
---

My parents are regularly playing poker with friends. They keep track of every game in a spreadsheet but had issues determining the overall winners and see who has the best score across games. They were either doing it by hand or using ugly Excel macros that nobody could understand.

![poker tournament](http://sterenlabs.files.wordpress.com/2013/09/screen-shot-2013-09-23-at-12-20-38-pm.png)

I quickly helped them and wrote a [Google Spreadsheet custom function](https://developers.google.com/apps-script/execution_custom_functions) that does the job. They now just have to fill in the position of every participant for each game, the final scores and stats are automatically generated.

Get the code on [this gist](https://gist.github.com/steren/6636508). To use it, you have to copy paste it in a new script linked to your spreadsheet.

I've been more and more using Google app scripts for personal or professional projects. I like the fact that they selected JavaScript as scripting language and that a lot of Google products have a script API. Very often, it avoids you creating a full web app for a simple task.
