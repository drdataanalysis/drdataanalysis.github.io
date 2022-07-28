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
> Shapefile up or ship out!

Getting started with Power BI Report Builder and want to add a Shape File? If you are looking to use ONS files they will error without following this fix!

# The Error
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/posts/2022-07-28-Error.png)
<br>```Length of the field of type N is 24. No spatial data available. The map display contains sample spatial data.```

I have been using Power BI Report builder for about a week now and have got to the point where I wanted to start playing with maps. So I download a shapefile from the ONS geoportal, select to use a ESRI Shapefile in Power BI Report builder and get this error.

Looking online it looks to be a problem for both Power BI Report Builder and SSRS (which is not surprising given they are basically the same thing). In [this post](https://social.msdn.microsoft.com/Forums/sqlserver/en-US/0978141c-1a90-48b3-b1b0-6bcf4c7d5d87/error-loading-shapefiles-in-ssrs-maps?forum=sqlreportingservices) someone identifies the issue which is with the format of some of the fields which SSRS can't handle. There is a tool for editing the .dbf file associated with the shapefile but this 1) requires you to download a tool just for this and 2) is not freeware so I wanted to find another fix.

# The fix
[Mapshaper](https://mapshaper.org/) to the rescue! This tool really is amazing, I have used it for conversion and shape-editing in the past so though I would try editing the shape attributes. First test was to remove all of the attributes except for just the ones I needed and that worked great but after a bit of testing I have found that you can retain all of the attribute data and get a working export as long as you filter and then export (just exporting without the edit step does not work).

## Example

I am using the [NUTS Level 1](https://geoportal.statistics.gov.uk/datasets/ons::nuts-level-1-january-2018-generalised-clipped-boundaries-in-the-united-kingdom/explore?location=54.484119%2C-3.250000%2C6.74) shape file from ONS Geoportal in this example.
1. Download Shapefile Zip from the [ONS Geoportal](https://geoportal.statistics.gov.uk/)
2. Go to [https://mapshaper.org/](https://mapshaper.org/)
3. Import Zip File
<br>![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/posts/2022-07-28-Import.png)
4. Open Console
<br>![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/posts/2022-07-28-Console.png) 
5. Use the info command to identify the field names in the Attribute data section of the result
<br>![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/posts/2022-07-28-Console_Info.png)
6. Use the filter-fields command listing all of the field names (or just the ones you want to keep) - **the format is important, there should not be any spaces between the column names** ```filter-fields [field1],[field2],[field3],[ect.]```
<br>![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/posts/2022-07-28-Console_Filter-Fields.png)
7. Export as Shapefile Zip then extract the zip
8. In Power BI Report Builder open the map wizard or add a new layer to an existing map and select ESRI shapefile and load the .shp file from the folder that was just unzipped
9. The shape map should now work and instead of the error you will see a preview of your map
<br>![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/posts/2022-07-28-Working.png)
# Final Note
I don't know why this works. I assume that the filter-field command must change the field format of the .dbf file that gets generated but I am not really bothered about why it works just that it does. I assume this fix will work if you get this error in SSRS but given that Power BI report builder is virtually identical I am going to assume that it will work for both.