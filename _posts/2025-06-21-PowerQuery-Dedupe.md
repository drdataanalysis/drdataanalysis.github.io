---
title: "Power Query Handling Dupes"
excerpt: "Keep one record from duplicates in Power Query"
categories:
  - Blog
tags:
  - Fabric
  - Dataflow Gen2
  - Power BI
  - Power Query
layout: single
header:
  # Teaser 500x275
  teaser: /assets/images/posts/2025-06-21-Teaser.webp
  # Attempt to get preview image working
  og_image: /assets/images/posts/2025-06-21-Teaser.png

  # Header 1876x500
  image: /assets/images/posts/2025-06-21-Header.webp
  image_description: "Circled Data"
  caption: "Photo credit: [**RDNE Stock project*](https://www.pexels.com/@rdne/)"
toc: false
toc_label: "On this page"
toc_icon: "cog"

---
> **This is not the greatest song in the world, no. This is just a tribute. Couldn't remember the greatest song in the world, no. This is a tribute**

# About
**Disclaimer** - this is not my work it is a shortcut to a couple of amazing videos by [Curbal](https://www.youtube.com/@CurbalEN) which I have to go searching for every time I come accross this tricky problem.

The problem is fairly rare but if you have the scenario where you have a source that contains duplicates with a time, version or other type of identifier and you want to keep only a certain record from the duplicates. This applies for Power Query (Excel and Power BI) and should work Dataflow Gen2 in Fabric (or even the SQL connector in Power Automate 😀).

I have used the steps of the orignal video many times over the years but have also included a couple of similar videos with alternative ways of doing the same thing that may be more efficient in certain circumstances. Again all credit should be with [Curbal](https://www.youtube.com/@CurbalEN) for this content.

# Origianal Vide
<iframe width="560" height="315" src="https://www.youtube.com/embed/7CqXdSEN2k4?si=rgM9rrctqIII-TDR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Steps
1. Open your data source and do whatever steps you need to transform it as you need it
1. Sort by the column that your duplicates can be distinguished by - i.e. a date column if you for some reason cant distiguish and just need to keep 1 distinct value ignore this step and follow the rest which will still work for you.
1. Select Group By
    1. Group by the column that is your record identier (i.e. a GUID or other key value if you don't have one you need to make a composit key column before you do this)
    1. Select "All Rows" from the operation drop down and rename the default value to something appropriate i.e. Rows
    1. Click on OK and this will transform your table to just your identifier column and a new column called whatever you called your column in the previous step (Rows for instance). The new colunn has a type that is table and each value is a grouped collection of all of the records from your original table for each identifier value.
1. Add Column> Custom Column
    1. Type: ```Table.AddIndexColumn([Rows],"Index",0,1)```
    1. Click on OK and a new table type column will be added called Custom (unless you changed the name in the previous step)
1. Remove the other columns just leaving the newest column that was added
1. Click on the expand button on the column (remember to untick the use origignal column name as prefix check box)
1. Find your index column and filter to select only 0 values

# Alternative Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/hidJ5T_DYQ0?si=kFL3ajfLi0PfMzl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Steps (I have tweeked this a little to make it so you don't need to edit any formulas)
1. Open your data source and do whatever steps you need to transform it as you need it
1. Select Group By
    1. Group by the column that is your record identier (i.e. a GUID or other key value if you don't have one you need to make a composit key column before you do this)
    1. Select Max from the operation drop down, select the number or date column that can distinguish your duplicate records and remname the default value to max (if you want the first value just switch this step to min)
    1. Add another grouping of "All Rows" from the operation drop down and give it a name like Rows
    1. Click on OK and this will transform your table to just your identifier column and a new column called whatever you called your column in the previous step (Rows for instance). The new colunn has a type that is table and each value is a grouped collection of all of the records from your original table for each identifier value.
1. Click to expand the Rows column, untick your record identifier column and untick the box that says to use original column name as prefix and click OK.
1. Add a conditional column which compares the value in the max column with the value in the column that you selected to make your max, put your value to something like "Yes" and your else value to "No" and rename column to something like "Is Max"
1. Filter the new column to select only yes values which will leave you with just the one max record per identifier
1. Clean up your table by removing the columns you don't need any more

**Please Note:** the above works great as long as your max or min value is unique per record identifier, if for instance you have multiple records for the same date and no way of telling them apprt you will need to get creative and do something like a random or index value to distinguish between them

# Updated Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/QaodJFeX49k?si=gaPeyam5sW0etPE9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Steps
1. Open your data source and do whatever steps you need to transform it as you need it
1. Select Group By
    1. Group by the column that is your record identier (i.e. a GUID or other key value if you don't have one you need to make a composit key column before you do this)
    1. Select "All Rows" from the operation drop down and rename the default value to something appropriate i.e. Rows
    1. Click on OK and this will transform your table to just your identifier column and a new column called whatever you called your column in the previous step (Rows for instance). The new colunn has a type that is table and each value is a grouped collection of all of the records from your original table for each identifier value.
1. Edit the formula for the step and remove the content after "each " to the "}})" at the end (leaving the space after each)
1. Type ```Table.Max(_, "Date")``` if your date or max column is called something else that is the name to put instead of ```"Date"``` (again change this to Min if you want the first record rather than last)
1. Press enter or tick to say you have finished editing and the Rows column will now have Records
1. Click to expand the rows column, untick your record identifier column and the box that says about using original column name as prefix and click on OK

**Please Note:** The comment on the previous video applies here so if you have more than one entry of the max value for a record you will get two rows returned unless you get creative - for both the process from the first video will ignore this issue.

# Summary
These are fantastic videos and [Curbal](https://www.youtube.com/@CurbalEN) is a really good channel to subscribe to... I do forget each time I do this exactly what steps I need to follow so this is mostly a post to give me quick written instructions so I don't need to go searching next time.