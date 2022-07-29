---
title: "Digital Citations for Physical Notes"
excerpt: "How to use GitHub issues, Python and Mail Merge to QR Code Citations"
categories:
  - Blog
tags:
  - GitHub
  - Python
  - Bullet Journal
layout: single
header:
  teaser: /assets/images/posts/2022-02-24-Teaser.webp
  image: /assets/images/posts/2022-02-24-Header.webp
  image_description: "Making notes while using laptop"
  caption: "Photo credit: [**Liza Summer**](https://www.pexels.com/@liza-summer)"
---
> My obsession with QR codes has gone to another extreme

### The Problem
A few weeks ago I started a [Bullet Journal](https://www.youtube.com/watch?v=fm15cmYU0IM) and got hooked instantly. The only problem I found was if I need to make notes about a website or video how do I reference it in my physical bullet journal?

There are a number of options that I could think of but each one had pretty major drawbacks:
1. Write the URL<br>`I am not writing out URLs and then Typing them again if I need them in the future`
2. Use a URL Shortener<br>`Still have to type a URL in the future it is just shorter, and I have to hope that the service remains active or create my own URL shortener and support that long term`
3. Use Bookmarks in Browser and reference them<br>`This may work for some people but I am not a bookmark person because I don't want to have to organise them`
4. Use a digital notetaking app and cross reference both ways<br>`Again could work for some people but I don't want to have to use another app and have to open it each time I want to access a link.`
5. Bookmarking Apps<br>`Similar to the above two issues plus it's a whole other app just for bookmarks`

### What I wanted to be able to do
**Ideal Process**
1. Save URL using my phone
2. Add a sticker to my notebook with a QR code
3. Scan the QR Code to get the link that has been saved


`So how do I do that?`

### The idea
I spent a while trying to think of technical options and ways to build something to do this then finally had the idea to start with the beggining of the process - saving a link on my phone.<br><br>
On android there are many share options but it was "GitHub - Create Issue" that stood out. Clicking on that puts the URL into the body of an issue and auto populates the name of the issue with the link title. Best of all GitHub issues all have the same URL format `https://github.com/[UserName]/[RepoName]/issues/[IssueNumber]` and the issue number just goes up by 1 with each new issue created.<br><br>
The rest of the process was pretty easy to sort out - I need to create QR codes which is easy in Python and I need to create stickers which is easy using mail merge
### What I did
1. Created a private repo called "journal-links" but it could be public or called anything you want for this to work
2. Setup a Excel file to be used in python and the mail merge with a row for each of the QR codes that need to be generated with formulas for the URls:
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/posts/2022-02-24-ExcelFile.webp)
3. Generate the QR codes using python to create a PNG for each of the links:
{% gist cde5e33b3110feb109e897beeefec976 %}
4. Create a mail merge with the generated qr codes as images in stickers (I just googled how to do this)
### How it works
So I have label sheets with 16 stickers per sheet and can set the Issue Number to where I am up to (1-16,17-32 etc.), run the Python QR code to generate the new numbers, open the mail merge and print.<nr><br>
When I want to create a citation I can select to share on my phone and create a issue in the journal-links repo or create one manually from GitHub online from my PC then add the next sticker to my bullet journal and add a description to the label. This has the added benefit of being able to add multiple links to a issue if there are several things I want to include in the citation and the links can be edited at any time.<br><be>
To view the cited links I can use google lens search to read the qr code which then opens the issue in the GitHub app and it is one click to open each link.
### Conclusion
This may be a very niche need which is why I struggled to find a solution I liked but I am very happy with the solution I have created. It is worth noting that for my needs I created the first two sheets (32 stickers) and am still only half way through the first one. If high volumes are expected - i.e. your a full time student it may be necessary to tweak the process to be able to more easily generate larger numbers of stickers at once.