---
title: "My Portfolio"
description: "My Portfolio & Blog"
layout: splash
permalink: /
header:
  image: /assets/images/logo.png
  og_image: /assets/images/Logo.png
  overlay_color: "#ffffff"
  overlay_filter: "0.6"
  overlay_image: /assets/images/header.webp
  actions:
    - label: "About Me"
      url: "/#about"
  caption: "Photo credit: [**DataKind**](https://twitter.com/datakinduk)"
excerpt: "Thank you for visiting 👍"
intro: 
  - excerpt: 'I created this site to showcase and share some of the cool stuff I am doing with data.<br>I write [blog](/blog) posts to demo tools and approaches I am developing.<br>My portfolio includes my recent [projects](/#my-latest-projects) and some background info [about me](#about)<br>[<i class="fas fa-chevron-down" aria-hidden="true"></i>](/#about)'
feature_row:
  - image_path: /assets/images/team.webp
    alt: "placeholder image 1"
    title: "Experienced Manager"
    excerpt: "I have lead high performance data teams supporting major change initiatives since **2015**. I am immensely proud of the amazing work we have delivered and our collaborative culture."
  - image_path: /assets/images/experience.webp
    alt: "placeholder image 2"
    title: "Skilled Data Professional"
    excerpt: "Nearly 15 years of experience working to unlock value from data and adopting modern and scalable tools like **Azure Synapse Analytics** and **Power BI**."
  - image_path: /assets/images/developing.webp
    title: "Always Learning"
    excerpt: "In the past few years I have been expanding my use of **Python** and am now using **pyspark** and developing my skills around **Delta Lake House**."
    url: "/about"
    btn_label: "Click here to see more..."
    btn_class: "btn--inverse"
feature_row_delta:
  - image_path: "/assets/images/delta.webp"
    alt: "Whirlpool of Books"
    title: "Delta Lakehouse Architecture and Engineering"
    excerpt: '<h3>I am currently expanding my use and knoweldge of Delta and unlocking the power of the Delta Lakehouse model.</h3><h1> 🏗️</h1>'
    url: "/tags/delta/"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row_nlp:
  - image_path: "/assets/images/nlp.webp"
    alt: "Whirlpool of Books"
    title: "Python Text Analysis in Power BI"
    excerpt: '<h3>In this project I have been adapting Python Text analysis tools for text analysis, key word/ phrase extraction, sentiment identification to be used in Power BI reports.</h3><h1> 🧑‍💻</h1>'
    url: "/tags/nlp/"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row_advanced:
  - image_path: "/assets/images/advanced.webp"
    alt: "Person touching advanced visualization"
    title: "Advanced Power BI Visuals"
    excerpt: '<h3>In this project I have been using a variety of tools to bring more advanced reporting and style capabilities to Power BI. This includes marketplace visuals, custom HTML elements and using ShapeMaps.</h3><h1> 🧑‍🔧</h1>'
    url: "/tags/advanced-visual/"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row_report-builder:
  - image_path: "/assets/images/report-builder.webp"
    alt: "Laptop in building site"
    title: "Power BI Report Builder"
    excerpt: '<h3>I have recently started using Power BI Report Builder to create Paginated Reports and have been diving into using ShapeFile maps and optimizing Ux.</h3><h1> 👷</h1>'
    url: "/tags/report-builder/"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}
## About
<table style="width: 80%; margin-left: auto; margin-right: auto;">
<tr>
<td style="width: 10%">
<div class="author__avatar">     
<img src="https://avatars.githubusercontent.com/u/43471619?s=400&u=2740f03b579edf5c1c1f6471c86f5e4808de7a51&v=4" alt="Dean Robinson" itemprop="image">
</div>
</td>
<td style="width: 90%">
<h2>Hi - I'm Dean Robinson</h2>
<br>I am an experienced Data Analyst and aspiring Data Scientist with over 10 years experience of working with data.<br>There is a more detailed <a href="/about">about page</a> if you would like to know more but here are the highlights 🙂
</td>
</tr>
<tr style="height: 10em">
<td colspan="2">
{% include feature_row %}
</td>
</tr>
</table>
<br>
## My Latest Projects
<table style="width: 100%; margin-left: auto; margin-right: auto;">
<tr>
<td>
{% include feature_row id="feature_row_delta" type="center" %}
</td>
</tr>
<tr>
<td>
{% include feature_row id="feature_row_nlp" type="center" %}
</td>
</tr>
<tr>
<td>
{% include feature_row id="feature_row_advanced" type="center" %}
</td>
</tr>
<tr>
<td>
{% include feature_row id="feature_row_report-builder" type="center" %}
</td>
</tr>
</table>
