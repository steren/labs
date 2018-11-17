---
author: steren
comments: true
date: 2010-11-17 16:31:13+00:00
layout: post
link: http://labs.steren.fr/2010/11/17/my-fish-database/
slug: my-fish-database
title: My fish database
wordpress_id: 97
categories:
- Open Divers
tags:
- database
---

For my diving project, I will need a small fish database.



	
  * I don't want an exhaustive database (most common fishes will be OK).

	
  * I don't want to replicate an existing database, if it exists, then I should pull data from it.

	
  * If my database is built collaboratively, I don't want this process to be hard to do.

	
  * I'm a Wikipedia enthusiast, and I want people to contribute to Wikipedia.

	
  * My website is internationalized, however, I want a fishes to be shared between languages.


So I think a great system would be:

	
  1. Is the fish in my database ? If yes, use it.

	
  2. If no, look for its wikipedia page. If you find it, then create the fish in my database using this Wikipedia URL, and go to 1.

	
  3. If the wikipedia page doesn't exist, create it, then go to 2.


Let's analyse this system:

Pros:

	
  * enrich Wikipedia

	
  * do not duplicate the information

	
  * a lot of data already exists


Cons:

	
  * Wikipedia pages are text and do not provide an easily callable API for entity properties (but fish pages contain a _Taxobox_, which would facilitate the parsing)_
_


So far, I have to investigate:

	
  * Wikipedia: how to get the page content ?

	
  * Freebase: is it not too much ?

	
  * dbpedia: API ? fishes ?

	
  * fishbase.org : license ? API ?


And if I use a third party website (such as Freebase, dbpedia), then a problem is that I would have to wait for their database to be updated.
