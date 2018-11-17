---
author: steren
comments: true
date: 2010-10-28 12:55:21+00:00
layout: post
link: http://labs.steren.fr/2010/10/28/beansight-path-to-private-beta/
slug: beansight-path-to-private-beta
title: 'Beansight: the path to the private beta'
wordpress_id: 64
categories:
- Beansight
tags:
- results
- screenshot
---

[caption id="attachment_71" align="alignleft" width="300" caption="Current home page"][![](http://sterenlabs.files.wordpress.com/2010/10/beansight_new_home1.png?w=300)](http://sterenlabs.files.wordpress.com/2010/10/beansight_new_home1.png)[/caption]

It's been a week since I decided to focus on Beansight.

At that time, we had a system roughly working : insight creation, vote and user profile. You can compare the screenshot on the left with the one at the bottom of this post to notice the changes. I mostly worked to get a first usable system.

We decided to split the websites in pages when the user is connected (working from mockups, using [Balsamiq mockups](http://www.balsamiq.com/builds/mockups-web-demo/), a tool that I will not recommend and not use anymore). This was done to clearly separate our functionalities: on a page you explore insights, on another experts, on a third you keep track of what you interacted with.

A "favorite" system exists on the website. We can now "favorite" experts, it's a social network: there are directional links between users, similar to twitter's followers.

[caption id="attachment_65" align="aligncenter" width="89" caption="Agree, disagree and star widget"][![](http://sterenlabs.files.wordpress.com/2010/10/widget1.png)](http://sterenlabs.files.wordpress.com/2010/10/widget1.png)[/caption]

I worked on a icon system for the "vote" and "favorite" feature.  Of course clicking on these icons do not change the current page. Technically, an AJAX call is done when clicking, and in return changes the CSS class of the element to provide a visual feedback of the action. You can get these icons from my [openclipart account](http://www.openclipart.org/detail/91753).

[caption id="attachment_69" align="aligncenter" width="300" caption="Instead of pagination, a "more" link"][![](http://sterenlabs.files.wordpress.com/2010/10/beansight_display_more1.png?w=300)](http://sterenlabs.files.wordpress.com/2010/10/beansight_display_more1.png)[/caption]

I had to limit the number of insights displayed by lists (such as search results). A solution could have been to create a pagination system (as in Google search results). But because there will be a lot of items and only the more first are more relevant to the user, I decided to build a "more" action. When clicking on this link, the next items are dynamically appended to the bottom of the list (using an AJAX call).

[caption id="attachment_72" align="alignleft" width="300" caption="Home page, last week"][![](http://sterenlabs.files.wordpress.com/2010/10/beansight_old_home1.png?w=300)](http://sterenlabs.files.wordpress.com/2010/10/beansight_old_home1.png)[/caption]

The website is not yet ready for a private beta. But by seeing this screen from last week, you will understand that we made progress and are now close to something usable and fun.

A new visual layout is being designed by the awesome [Colorz](http://www.colorz.fr/) team.

Stay tuned, enter your email on the [Beansight waiting page](http://www.beansight.com/) to have a chance to receive invites for the private beta.
