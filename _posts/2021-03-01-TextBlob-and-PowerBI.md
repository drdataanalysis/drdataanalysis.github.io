---
title: " TextBlob and Power BI"
excerpt: "How to use TextBlob in Python to bring sentiment analysis to Power BI"
categories:
  - Blog
tags:
  - Python
  - Natural Language Processing
  - Power BI
  - TextBlob
  - pandas
  - Sentiment
layout: single
header:
  teaser: /assets/images/posts/2021-03-01-Teaser.webp
  image: /assets/images/posts/2021-03-01-Header.webp
  image_description: "Eggs painted with emoji faces"
  caption: "Photo credit: [**ROMAN ODINTSOV**](https://www.pexels.com/@roman-odintsov)"
---

> TextBlob makes me polarity:1 

Expanding text capabilities with Sentiment in Power BI is one of the key things I have always wanted to be able to do. The code for this is pretty much the same as covered previously and as with all of the tools I have covered so far this is the most basic application of each tool - there is a lot more that can  be done with further customisation based on the types of data you are working with.

[TextBlob](https://textblob.readthedocs.io/en/dev/) is a Natural Language Processing tool (NLP) to identify the sentiment (polarity) of a text string on a scale of -1 (negative) to 1 (positive). As well as sentiment you can export a subjectivity score on a scale of 0 (objective) to 1 (subjective) which can be a really useful way of exploring your and the correlation between sentiment and subjectivity.
### TextBlob in Power BI
```python
    import pandas as pd
    import textblob
    from textblob import TextBlob
    data = []
    #create a for loop of the rows in the df dataframe
    for idx, row in dataset.iterrows():
        #checks to see if the value in text is a string i.e. contains data if so continue
        if not isinstance(row['text'], str):
            continue
        #blob is the results of the current text value
        blob = TextBlob(row['text'])
        row_data = (row["id"],blob.polarity,blob.subjectivity)
        data.append(row_data)
    new_df = pd.DataFrame(data, columns=['id','polarity','subjectivity'])
```

