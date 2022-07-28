---
title: "Fix Issue with Shapefile Maps"
excerpt: "How to fix issue with Shapefile spacial data in Power BI Report Builder (and SSRS)."
categories:
  - Blog
tags:
  - Power BI Report Builder
  - Geography
layout: single
header:
  teaser: /assets/images/posts/2022-07-28-Teaser.webp
  image: /assets/images/posts/2022-07-28-Header.webp
  image_description: "Metal Cut out Map"
  caption: "Photo credit: [**Aaditya Arora**](https://www.pexels.com/@aaditya-arora-188236/)"
---
# DRAFT
Length of the field of type N is 24. No spatial data available. The map display contains sample spatial data.
https://social.msdn.microsoft.com/Forums/sqlserver/en-US/0978141c-1a90-48b3-b1b0-6bcf4c7d5d87/error-loading-shapefiles-in-ssrs-maps?forum=sqlreportingservices
https://mapshaper.org/
Example:
https://geoportal.statistics.gov.uk/datasets/ons::nuts-level-1-january-2018-generalised-clipped-boundaries-in-the-united-kingdom/explore?location=54.484119%2C-3.250000%2C6.74
Download Shapefile Zip
Go to https://mapshaper.org/
Import Zip File
 
Open Console
 
Use the info command:
 
Use the filter-fields command
 
Export as Shapefile Zip then extract the zip
In Power BI Report Builder open the map wizard again or add a new layer to an existing map and select ESRI shapefile and load the .shp file from the folder that was just unzipped:
 
This will now work!
