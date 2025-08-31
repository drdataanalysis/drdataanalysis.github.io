---
title: "Styling Mermaid Charts"
excerpt: "How to reformat Mermaid Charts"
categories:
  - Blog
tags:
  - Data Architecture
  - DevOps
  - Documentation
  - Mermaid
layout: single
header:
  # Teaser 500x275
  teaser: /assets/images/posts/2025-08-31-Teaser.webp
  # Attempt to get preview image working
  og_image: /assets/images/posts/2025-08-31-Teaser.png

  # Header 1876x500
  image: /assets/images/posts/2025-08-31-Header.webp
  image_description: "Mermaid Parade Float"
  caption: "Photo credit: [**Ivan Cuesta**](https://www.pexels.com/@ivan-cuesta-388302484/)"
toc: true
toc_label: "On this page"
toc_icon: "cog"
mermaid: true

---
> **You Got Your Own Style, Now Let It Shine Through And Remember No Matter What, You've Got To Be You.**

# Please Note
In this post I am going to be using the Mermaid markdown approach I have developed and described in my previous post about using [Mermaid Charts](/blog/Mermaid/). The styling options presented are available in the standard layout but would be more confusing than helpful if presented in this quick guide.

I am also not using more advanced custom css file styling options here because this guide relates primarily to usage in DevOps Wiki where this is not something that can be configured (or at least I have not found a way yet).

Last thing to note is that I will be using flow diagrams in these examples. There will be some elements that are spesifc to that chart type and some that are universal. Please remember not all chart types currently work with DevOps wiki (including some functionality for flow charts) so if you are not sure on how to format a different chart type a useful tool is the new [mermaid playground](https://www.mermaidchart.com/play) which allows you to alter formatting etc. using a user interface. You can copy and paste the code from that tool or use it to see how to apply formatting to your existing charts.

# Connections/ Links/ Lines
When it comes to connections (links or lines) between shapes (nodes) the formatting options are in the syntax of how you create the connection. This is documented in the [mermaid guidance](https://docs.mermaidchart.com/mermaid-oss/syntax/flowchart.html?id=flowcharts-basic-syntax) under "Links between nodes".

## Line Formatting
### Line Type
Here is an example of options when it comes to lines formats.
```
flowchart LR
    %% Shapes
    id_start[Start Shape]
    id_line[Standard Line]
    id_thickline[Thick Line]
    id_dottedline[Dotted Line]
    %% Connections
    id_start---id_line
    id_start===id_thickline
    id_start-.-id_dottedline
```
>The Chart
<pre>
  <code class="language-mermaid">

graph LR   
    %% Shapes
    id_start[Start Shape]
    id_line[Standard Line]
    id_thickline[Thick Line]
    id_dottedline[Dotted Line]
    %% Connections
    id_start---id_line
    id_start===id_thickline
    id_start-.-id_dottedline

</code>
</pre>

```~~~``` is also an option which creates a connection but the line does not show. For some reason I can't get this working on this site so this may be one of the eccentricities of mermaid chart verssions you may come accross.

### Arrow Type
As the example above shows you can have a line without arrow shapes at the end. The below is an example of the available arrow shapes and how to use them
```
flowchart LR
    %% Shapes
    id_arrowright[Arrow Right]
    id_arrowrightend[Arrow Right]
    id_arrowboth[Arrow Both]
    id_arrowbothend[Arrow Both]
    id_crossboth[Cross Both]
    id_crossbothend[Cross Both]
    id_circleboth[Circle Both]
    id_circlebothend[Circle Both]
    
    %% Connections
    id_arrowright ---> id_arrowrightend
    id_arrowboth <---> id_arrowbothend
    id_crossboth x---x id_crossbothend
    id_circleboth o---o id_circlebothend
```
>The Chart
<pre>
  <code class="language-mermaid">

graph LR
    %% Shapes
    id_arrowright[Arrow Right]
    id_arrowrightend[Arrow Right]
    id_arrowboth[Arrow Both]
    id_arrowbothend[Arrow Both]
    id_crossboth[Cross Both]
    id_crossbothend[Cross Both]
    id_circleboth[Circle Both]
    id_circlebothend[Circle Both]
    
    %% Connections
    id_arrowright ---> id_arrowrightend
    id_arrowboth <---> id_arrowbothend
    id_crossboth x---x id_crossbothend
    id_circleboth o---o id_circlebothend

</code>
</pre>

### Line Length
A very useful feature if you are wanting to add emphasis or re-arrange your chart to make reading easier is the line length feature.  

```
flowchart TB
    %% Shapes
    id_three[Three Length]
    id_threeend[Three Length]
    id_four[Four Length]
    id_fourend[Four Length]
    id_five[Five Length]
    id_fiveend[Five Length]
    id_six[Six Length]
    id_sixend[Six Length]

    %% Connections
    id_three --- id_threeend
    id_four ---- id_fourend
    id_five ----- id_fiveend
    id_six ------ id_sixend
```
>The Chart
<pre>
  <code class="language-mermaid">
graph TB
    %% Shapes
    id_three[Three Length]
    id_threeend[Three Length]
    id_four[Four Length]
    id_fourend[Four Length]
    id_five[Five Length]
    id_fiveend[Five Length]
    id_six[Six Length]
    id_sixend[Six Length]

    %% Connections
    id_three --- id_threeend
    id_four ---- id_fourend
    id_five ----- id_fiveend
    id_six ------ id_sixend

    </code>
</pre>
Here is a more practical example of how this can be helpful.
```
flowchart TB
    %% Shapes
    id_decision{A, B or C}
    id_a[Process A]
    id_aend[Next A]
    id_b[Process B]
    id_bend[Next B]
    id_c[Process C]
    id_cend[Next C]

    %% Connections
    id_decision ---> id_a
    id_decision ----> id_b
    id_decision -----> id_c
    id_a ---> id_aend
    id_b ---> id_bend
    id_c ---> id_cend
```
>The Chart
<pre>
  <code class="language-mermaid">
graph TB
    %% Shapes
    id_decision{A, B or C}
    id_a[Process A]
    id_aend[Next A]
    id_b[Process B]
    id_bend[Next B]
    id_c[Process C]
    id_cend[Next C]

    %% Connections
    id_decision ---> id_a
    id_decision ----> id_b
    id_decision -----> id_c
    id_a ---> id_aend
    id_b ---> id_bend
    id_c ---> id_cend

    </code>
</pre>

## Styling Elements
### Line Shape
This feature allows for various line type selections. From experience ```stepAfter``` is the only one I have found useful as it matches the style people are used to from Visio but there are other styles that can be experimented with: ```basis, bumpX, bumpY, cardinal, catmullRom, linear, monotoneX, monotoneY, natural, step, stepAfter, and stepBefore```
```
%% This line needs to be added before your chart code
%%{ init: { 'flowchart': { 'curve': 'stepAfter' } } }%%
flowchart TB
    %% Shapes
    id_decision{A or B}
    id_a[Process A]
    id_b[Process B]

    %% Connections
    id_decision ---> id_a
    id_decision ---> id_b

```
>The Chart
<pre>
  <code class="language-mermaid">
%%{ init: { 'flowchart': { 'curve': 'stepAfter' } } }%%
graph TB
    %% Shapes
    id_decision{A or B}
    id_a[Process A]
    id_b[Process B]

    %% Connections
    id_decision ---> id_a
    id_decision ---> id_b

    </code>
</pre>

### Style Shapes
You can add styling to a shape using the syntax ```style [shape_id] [element]:[value]``` this is just like in line styling in HTML if you are familiar with that. Again using [mermaid playground](https://www.mermaidchart.com/play) can be helpful to see how styling works and what options there are.

One thing you may need to keep in mind with altering the style of shapes is that not all users will see charts the same way as you. If you are like me and are in Dark Mode everywhere keep in mind that the format will need to work for users who's default is light mode. Basically if you set a background colour to black it is worth setting the text colour to white because although that is your default in dark mode in light mode the default is black and your text will not be visible for some users.
```
flowchart LR
    %% Shapes
    id_standard[No Styling]
    id_background[Background is custom]
    id_text[Text is custom]
    id_border[Border is custom]
    id_all[Lots of custom]
    
    %%style
    style id_background fill:#FF6D00
    style id_text color:#D50000
    style id_border stroke:#AA00FF
    style id_all color:#000000,fill:#00C853,stroke:#D50000,stroke-width:4px,stroke-dasharray: 5
```
>The Chart
<pre>
  <code class="language-mermaid">

graph LR
    %% Shapes
    id_standard[No Styling]
    id_background[Background is custom]
    id_text[Text is custom]
    id_border[Border is custom]
    id_all[Lots of custom]
    %%style
    style id_background fill:#FF6D00
    style id_text color:#D50000
    style id_border stroke:#AA00FF
    style id_all color:#000000,fill:#00C853,stroke:#D50000,stroke-width:4px,stroke-dasharray: 5
</code>
</pre>
