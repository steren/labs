---
author: steren
comments: false
date: 2017-08-17 05:22:23+00:00
layout: post
link: http://labs.steren.fr/2017/08/17/extracting-all-go-regular-expressions-found-on-github/
slug: extracting-all-go-regular-expressions-found-on-github
title: Extracting all Go regular expressions found on GitHub
wordpress_id: 970
---

[Sylvain Zimmer](https://sylvainzimmer.com/) sent a proposal to the [Go programming language](https://github.com/golang/go) for [an optimization for Go's regular expression processing](https://github.com/golang/go/issues/21463). One of the first comment from the community was to give actual proof that this optimization would be useful in real life by analyzing regular expressions in a large corpus of real Go code.

Reading this, I knew this was the perfect job for [Google BigQuery](https://cloud.google.com/bigquery/) and the huge [GitHub public dataset](http://v).

BigQuery is my favorite data analysis tool. Almost every day at work, I query terabytes of data using SQL queries in seconds. The GitHub public dataset contains a snapshot of all GitHub files. That's right, all lines of all of all GitHub's files are available for direct querying. You only pay for the amount of processed data, and BigQuery has a generous free tier (the first 1 TB of data processed per month is free of charge)

Using the query bellow, I extracted a [list of all Go constant regular expressions on GitHub](https://gist.github.com/steren/27caf0eded51b10239a2309275e8d697). The query took less than a minute to process ~2.,2TB of data.

Sylvain then run his optimization on these and concluded that his change would benefit more than 30% of the regular expressions in this list, which hopefully should convince of the benefit of his change. So now, I am waiting for his Pull Request to make it into the main Go Repository :)

https://gist.github.com/steren/4e8784ba782c624be48f97a4ea808f28
