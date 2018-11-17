---
author: steren
comments: false
date: 2017-09-11 04:14:53+00:00
layout: post
link: http://labs.steren.fr/2017/09/11/scuba-diving-dashboard-using-google-data-studio/
slug: scuba-diving-dashboard-using-google-data-studio
title: Scuba Diving dashboard using Google Data Studio
wordpress_id: 1022
categories:
- Open Divers
---

As a scuba diver, I log all my dives in a dive log. For most divers, this is just a simple notebook, but some years ago, I started to also enter my dive [in a simple Google Sheet.](https://docs.google.com/spreadsheets/d/1kGkM8fpwb3f1q3H9Tf07FXHZ4JM3FFsihbDzytdUEic/edit#gid=0)

After playing a bit with [charts and the "Explore" feature of Google sheet](https://support.google.com/docs/answer/6280499?co=GENIE.Platform%3DDesktop&hl=en) to answer questions like "max depth" or "number of dives per regions", I decided to create a dashboard to better showcase some dive stats and visualizations. While you can put some charts and numbers on a new sheet in Google sheet, I think it is not really designed for this. I preferred to keep Sheet as a database and to pull this data from  somewhere else.

Using [Google Data Studio](https://www.google.com/analytics/data-studio/), I could add my dive log sheet as a data source and then put interesting visualizations and stats on a new canvas. Here is what I think make Data Studio a great tool:



	
  1. It's free. I would not have paid to build a hobby dashboard.

	
  2. Custom themes and colors

	
  3. Filters: I added interaction by allowing visitors to filter by date, location, dive center...

	
  4. The tool makes it very easy to position things on a 2D canvas.


See my [dive dashboard and log built on Google Data Studio](https://datastudio.google.com/open/0B8FSfdmUGImHVzVRRFhfMERTZXM)

The tool has its limit and will not replace a real dive log. Building a better dive log and dashboard would definitely require some code (a long time ago [I started but never finished](https://labs.steren.fr/2010/10/19/open-divers-first-screen/)).
