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
  - excerpt: 'I created this site to showcase and share some of the cool stuff I am doing with data.<br>I write [blog](/blog) posts to demo tools and approaches I am developing.<br>My portfolio includes my recent [projects](/#portfolio) and some background info [about me](#about)<br>[<i class="fas fa-chevron-down" aria-hidden="true"></i>](/#about)'
feature_row:
  - image_path: /assets/images/team.svg
    alt: "placeholder image 1"
    title: "Experienced Manager"
    excerpt: "I have lead high performance data teams supporting major change initiatives since **2015**. I am immensely proud of the amazing work we have delivered and our collaborative culture."
  - image_path: /assets/images/experience.svg
    alt: "placeholder image 2"
    title: "Skilled Data Analyst"
    excerpt: "Over a decade of experience of working with customers to understand their data. Successfully lead on moving from legacy reporting to utilizing modern and scalable tools like **Power BI**."
  - image_path: /assets/images/developing.svg
    title: "Developing Data Scientist"
    excerpt: "In the past few years I have been expanding my use of **Python** in particular for Text Analysis and Web Scraping."
    url: "/about"
    btn_label: "Click here to see more..."
    btn_class: "btn--inverse"
feature_row2:
  - image_path: "/assets/images/project1.webp"
    alt: "Open book with glasses on page"
    title: "Python Text Analysis in Power BI"
    excerpt: '> In this project I have adapted core Python text analytics tools to extract key information and sentiment within the Power BI data import processes.<br>The aim was to develop generalized versions of the code that can easily be adapted for a variety of text sources. <br>Using Power BI to extract, Python to transform, then Power BI to load and present the data means that any data analyst can use powerful data science tools.'
    url: "/tags/#natural-language-processing"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row3:
  - image_path: "/assets/images/project2.webp"
    alt: "Table with charts and notes"
    title: "Advanced Power BI Visuals"
    excerpt: '> In this project I have presented examples of customizable visual tools and how to adapt them to fit your needs. <br>In one example I have brought together guides and tools to create custom shape maps adapted from the ones produced by the office of national statistics(ONS).<br>Another example brings together guides for the Infographic Designer custom visual and looks at a few custom ideas that I have produced using the tool.'
    url: "/tags/#advanced-visual"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row4:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row5:
  - url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"

---

{% include feature_row id="intro" type="center" %}
###### About
## A bit about me
<table style="width: 80%; margin-left: auto; margin-right: auto;">
<tr>
<td>
{% include feature_row %}
</td>
</tr>
</table>
<br>
###### Portfolio
## My Latest Projects
<table style="width: 80%; margin-left: auto; margin-right: auto;">
<tr>
<td>
{% include feature_row id="feature_row2" type="left" %}
</td>
</tr>
<tr>
<td>
{% include feature_row id="feature_row3" type="left" %}
</td>
</tr>
</table>
