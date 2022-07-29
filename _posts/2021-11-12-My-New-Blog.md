---
title: "Creating my New Blog!"
excerpt: "Update on my new blog and portfolio using Jekyll and GitHub"
last_modified_at: 2021-11-27
categories:
  - News
tags:
  - Jekyll
  - Ruby
  - GitHub
layout: single
header:
  teaser: /assets/images/posts/2021-11-12-Teaser.webp
  image: /assets/images/posts/2021-11-12-Header.webp
  image_description: "Laptop surrounded by wood working tools"
  caption: "Photo credit: [**Ivan Samkov**](https://www.pexels.com/@ivan-samkov)"
---

> "When Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer"

It has been a few weeks since my first commit on the .io github repo for this site and it has been a really interesting learning experience which I would highly recommend... assuming that you already have quite a good grasp of HTML.

### Github Pages
I can't remember exactly what it was that brought [GitHub](https://docs.github.com/en/pages/quickstart) Pages to my attention. I did not know that this was a feature offered and considering how powerful this is I am amazed it is completely free!

The only requirement for standard Git Hub users is that your repo for the site that you build has to be public, you can just enable Git Hub pages in the repo settings and with the [quick start guide](https://docs.github.com/en/pages/quickstart) you can get a basic blog or site spun up in a few min.

For a standard site you could write everything on GitHub online and you can choose from some of the standard themes available on github.
![image-center](https://docs.github.com/assets/images/help/pages/select-theme.png)

This is pretty amazing as a start. The default URL will be `[username].github.io/[reponame]` which is useful if you want multiple sites from multiple repos but what about if you want a landing page that is just `[username].github.io`? Well that is pretty simple - if you call your repo `[username].github.io` this sets the pages url to be just your `[username].github.io`


### Jekyll & Ruby & VS Code
While the out of the box pages functionality is great I wanted something more. Pages can still support other Jekyll themes and functionality that is published to your pages repo but you need to do that from your PC. In my case I am using VS code and GIT to connect to the repo from my Ubuntu laptop and installed the [Ruby and Jekyll dependencies](https://jekyllrb.com/docs/installation/ubuntu/#install-dependencies).

Before starting the final site I had a go at creating a clean install based on the following this [youtube guide](https://www.youtube.com/watch?v=T1itpPvFWHI&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB) to learn the fundamentals of Jekyll.

Once I had the basics I started to look at options in terms of [themes](https://github.com/topics/jekyll-theme). One that looks really good was [the agency theme](https://raviriley.github.io/agency-jekyll-theme-starter/) which I really like the look of but because I wanted to do a combined Portfolio and Blog I needed a theme that worked for both of those uses.

### Minimal Mistakes

[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) is a really popular theme that includes a lot of page styles and theme options. The documentation is also very good and it was very easy to get started and customise fom the [github repo](https://github.com/mmistakes/minimal-mistakes)

![image-center](https://mmistakes.github.io/minimal-mistakes/assets/images/dark-skin-post.png)

### Customisation

I did end up messing around in the templates to customise the theme a little and going quite deep into the [configuration](https://mmistakes.github.io/minimal-mistakes/docs/configuration/). I should probably have done that in a forked repo that I could customise but instead I brought the code into the site repo to edit which means that it is a bit of a mess... but then I am still trying to figure stuff out.

Another great thing about minimal mistakes is that it is very popular so there is quite a bit of guidance available in issues etc. One example is finding [this issue](
https://github.com/mmistakes/minimal-mistakes/issues/490) explaining how I could edit the header to make it fixed at the top of each page.

### Take Aways

I have really enjoyed learning to use Jekyll and building the site so far. It defiantly takes work and effort to get to grips with but the results are pretty immediate and rewarding. Knowing some core HTML will definitely be helpful to getting into customisation and more advanced functionality.

Of course one of the key positives is that GitHub pages are completely free as is the theme and functionality I am using which is amazing!