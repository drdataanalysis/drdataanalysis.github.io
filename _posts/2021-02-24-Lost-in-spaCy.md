---
title: "Lost in spaCy"
excerpt: "Post covering getting started with spaCy in Python for Natural Language Processing (NLP)"
categories:
  - Blog
tags:
  - Python
  - Natural Language Processing
  - spaCy
layout: single
header:
  image: /assets/images/posts/2021-02-24-Teaser.webp
  og_image: /assets/images/posts/2021-02-24-Teaser.webp
  teaser: /assets/images/posts/2021-02-24-Teaser.webp
  image: /assets/images/posts/2021-02-24-Header.webp
  image_description: "Astronaut waiting for a bus"
  caption: "Photo credit: [**A Koolshooter**](https://www.pexels.com/@tom-leishman)"
---
> In spaCy no one can hear you scream... <br>when you get a Syntax error.

Experiments with [spaCy](https://spacy.io/) are going well in the appropriately named Jupyter notebooks.

There are two spaCy Natural Language Processing (NLP) components I am working with:
1. Position of Speech (POS)
2. Named Entity Recognition 

[This tutorial](https://www.machinelearningplus.com/spacy-tutorial-nlp/) was really helpful in generalising the experiments I have been doing and looking at different aspects and capabilities of NLP.

The idea with this is to get a general set of tools developed in a notebook before looking at adapting the code to be used in Power BI to run NLP as a step in Power Query.

The big question is if you can load the NLP language library into Python running in Power BI (if not it is going to be tricky).

### Starting Point
So I am starting from an example here where NLP tools have been used to get an overview count of the contents of a csv of text values - which is great - but not what I need for a Power BI report to be able to explore the context of the results further so the following is simplified to just return the results of the NLP steps per result.

With the following I am assuming that you know the basics of installing modules and have done some introductory Python stuff all of which is very widely available online.


The notebook and files are available in this [GitHub Repo](https://github.com/drdataanalysis/blog_python-text-analysis)

Here is the Notebook/ Code:
{% gist a81e176f18bd11dc90f8b3ffb4b53b69 %}