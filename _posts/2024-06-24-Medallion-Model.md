---
title: "Medallion Model"
excerpt: "Explained with Chips!"
categories:
  - Blog
tags:
  - Architecture 101
  - Delta
  - Data Lake
layout: single
header:
  teaser: /assets/images/posts/2024-06-24-Teaser.webp
  image: /assets/images/posts/2024-06-24-Header.webp
  image_description: "Metal Cut out Map"
  caption: "Photo credit: [**Leonardo Luz**](https://www.pexels.com/@leonardo-luz-338722550/)"
---
> **Oh, the noodle analogy. You guys are gonna love this.**

## Chips Analogy Video

> I have created this quick video that explains the model using the Analogy of Chips where Bronze is Dirty Potatoes, Silver is cleaned Potatoes and Gold is your final product Chips!

{% include video id="OtVFGN_uwus" provider="youtube" %}

This analogy was adapted from a book I read where they used Salad in a similar way (apologies I can't remember the source).

I also found [this databricks article](https://www.databricks.com/glossary/medallion-architecture) really helpful when getting started and there are loads of resources available online about this topic.

# What is the Model?
Medallion is the most common model used in Data Lake architecture and provides a simple and straight forward basis to help organize your data. Importantly it is not prescriptive in terms of what wording you or how you can adapt it for your needs.

In principle the idea is that you structure your data lake using Bronze, Sliver and Gold levels.

### Bronze
This is your raw data. It is the data as close to how it was captured or exported from its source and is left in that format for as long as you may need it. Because this is Data Lake this does not have to be structured data and will often be files like JSON or if you are looking at more data science projects could be images, video or audio files.

A couple of important considerations or adaptations you may need to make in Bronze may be things like encryption - if you have sensitive data you may want to encrypt that within the Bronze layer so that only authorized users/ processes can access the unencrypted data (this is a step away from the idea of matching source). You may also find the need to convert a bad format into a more usable one so for instance if a legacy system only provides data in a poor format (either in terms of file or structure) you may want to convert that into a more usable format for your data lake.

### Silver
This is your cleaned and validated data. To create your silver layer you take your raw Bronze data and transform it into a more user friendly structure while also making sure that your data conforms to the formats and content you expect and excludes or flags any duplicate records. In the case of data science uses this may be converting text into vectors and storing it in this layer - this should be where you have your data in a format that you could do all sorts of things with it.

In terms of Silver it is most common that you would now be using a memory optimized format like Parquet to store your data and even better have taken parquet to the next level and use Delta to overlay the extra capabilities. You also where possible would want to avoid doing a full re-build of any data stored in Silver where possible looking to Upsert changed or new data into your existing Silver layer (although that won't always be possible in every scenario).

### Gold
You may wonder why you would need to re-structure your data after Silver where your data is clean and ready to use. One way of thinking of this is that Silver data is ready to use but not ready to present. In Gold you take your Silver data and convert it into how you need to use the data. You may want to add in aggregations or combine several sources into a unified model that meets your business need.

Gold is all about business need - another way of thinking about it is what do your analysts need and how can you best provide the data ready for them to use. Analysts will often have access to silver data and they could use that data to model in Power BI etc. for reporting but the Gold layer provides consistency and safety that whatever business logic you need is reflected in the models being presented.

## Flexible
As mentioned a key feature of this model is that it is flexible - you can use different terms and you can also adapt the model as needed. In my experience for instance I am using medallion but have a level to record processing step output separately from the medallion model - this could be kept in Raw but because the processing is pushing data out of the lake to a source system I have kept it out of the way to avoid confusion.