---
author: steren
comments: false
date: 2016-06-18 15:09:59+00:00
layout: post
link: http://labs.steren.fr/2016/06/18/generating-a-name-tag-sheet-from-a-list-of-names/
slug: generating-a-name-tag-sheet-from-a-list-of-names
title: Generating a name tag sheet from a list of names
wordpress_id: 825
---

I needed to generate a sheet of images featuring names from a list.

So wrote a short code that takes string inputs from a JavaScript array and creates a sheet, ready to be printed. I relied on [svg.js](http://svgjs.com/) to programmatically generate the SVG file.

See and get the code in [this GitHub gist](https://gist.github.com/steren/08e7b343dabe7ea93550c9e10fa64e75#file-tags-html)

Feel free to use it:



	
  * Add your background images into a 'background folder'

	
  * Copy the code in an .html file next to this folder, and start a web server here.

	
  * Convert your list of names into a JavaScript array, you have many ways to do this, for me, I copied my list from a sheet into the [Atom text editor](https://atom.io/) and then use the multi-line editing to add the necessary characters.

	
  * Change parameters to make it yours.


