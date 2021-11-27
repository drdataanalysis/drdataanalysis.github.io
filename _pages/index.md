---
title: "My Portfolio"
description: "My Portfolio & Blog"
layout: splash
permalink: /
header:
  image: /assets/images/logo.webp
  og_image: /assets/images/Logo.webp
  overlay_color: "#ffffff"
  overlay_filter: "0.6"
  overlay_image: /assets/images/header.webp
  actions:
    - label: "About Me"
      url: "/#about"
  caption: "Photo credit: [**DataKind**](https://twitter.com/datakinduk)"
excerpt: "Thank you for visiting 👍"
intro: 
  - excerpt: 'I have created this site to showcase some of the cool stuff I have been up to and to host my blog which features guides and tips. I am a Microsoft fan boy so am looking at ways to use Python and data science tools within Power BI and other Azure products.<br>[<i class="fas fa-chevron-down" aria-hidden="true"></i>](/#about)'
feature_row:
  - image_path: /assets/images/team.svg
    alt: "placeholder image 1"
    title: "Experienced Manager"
    excerpt: "I have lead high performance data teams since **2015** supporting major change initiatives. I am immensely proud of the amazing progress we have made and our collaborative culture."
  - image_path: /assets/images/experience.svg
    alt: "placeholder image 2"
    title: "Skilled Data Analyst"
    excerpt: "Over a decade of experience of working with customers to understand their data. Successfully lead on moving from legacy approaches to utilizing modern and scalable tools like **Power BI**."
  - image_path: /assets/images/developing.svg
    title: "Developing Data Scientist"
    excerpt: "In the past few years I have been expanding my use of **Python** in particular for Text Analysis and Web Scraping."
    url: "/about"
    btn_label: "Click here to see more..."
    btn_class: "btn--inverse"
feature_row2:
  - image_path: "https://openclipart.org/image/800px/303266"
    alt: "placeholder image 2"
    title: ""
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row3:
  - image_path: "https://openclipart.org/image/800px/300280"
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "#test-link"
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
{% include feature_row id="feature_row3" type="right" %}
</td>
</tr>
</table>