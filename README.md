# Draw Bar Chart

## About

This project helps other developers to generate bar charts or stacked bar charts on their webpages using data that they provide. The types of data that is supported will be described in detail in the section **Feature list** below.

The programming languages used are HTML, CSS, and JavaScript including jQuery.

The signature of my project is the **drawBarChart** function found inside drawBarChart.js.

Please be sure to start off by using the HTML, CSS, and JS files of the demo page. Do not make any changes to drawBarChart.js. Replace your data inside the drawBarChart function in the `<head>` of the HTML page. Remember to add the `count++` line after each **drawBarChart** function except for the last chart so all your bar charts display properly.

## Example Screenshots



## API

**jQuery**: The jQuery API url needs to be added as a `<script>` in the `<head>` of your HTML page in order for the jQuery commands to be recognized in drawBarChart.js. Please see how it is done in the demo index.html.

## Function and the parameters

### Parameters

`data`: The data that the developer provides in the form of an array for a bar chart and a nested array for stacked bar chart (Enter numbers only)

`options`: Customizations to the bar chart in the form of an object such as width and height of the bar chart (See **Feature list** section below for all supported options)

`element`: DOM element that the chart will get rendered into

`num`: A unique ID number for each bar chart generated

`barSum`: An array only used for stacked bar charts to store the values of the sum the bar sections that make up each bar

`i`: The index of the data

`j`: The index of the data in the nested array (Only used for stacked bar charts)

### addChartTitle

`addChartTitle` function is used to add the chart title in the HTML page with the font size and color defined by the developer. It has 2 parameters: `num`, `options`.

### addOuterContainer

`addOuterContainer` function is used to add a container as the DOM element specified by the developer. Inside this container will be the chart and the legend if it's a stacked bar chart. It has 4 parameters: `num`, `element`, `options`, `data`.

### addChartContainer

`addChartContainer` function is used to add a container for the chart and defines the width of each bar container. It has 3 parameters: `num`, `data`, `options`.

### addChartYAxis

`addChartYAxis` function is used to add the Y axis, Y axis label with a max length of 5 characters, and Y axis values and ticks. It has 4 parameters: `num`, `data`, `options`, `barSum`.

### addBarContainer

`addBarContainer` function is used to add a bar container and everything inside it is centered horizontally. It has 2 parameters: `num`, `i`.

### addBar

`addBar` function is used to add a bar for a simple bar chart so that it fits within the developer defined width and height. It also positions the values appearing inside the bars and its font size. If the bar value is not an integer then it will display 2 decimal places. It has 4 parameters: `num`, `i`, `data`, `options`.

### addBarSection

`addBarSection` function is used to add a bar section for a stacked bar chart so that it fits within the developer defined width and height. It also positions the values appearing inside the bars and its font size. If the bar value is not an integer then it will display 2 decimal places. It has 6 parameters: `num`, `i`, `j`, `data`, `barSum`, `options`.

### addChartXAxis

`addChartXAxis` function is used to add the section of the X axis that fall within the area of a bar container and the default X axis label for that bar. It has 4 parameters: `num`, `i`, `data`, `options`.

### legend

`legend` function is used to add the legend for stacked bar charts. It identifies what each color of a bar section represents. It has 2 parameters: `options`, `num`.

### drawBarChart

`drawBarChart` is the main function that uses the other subfunctions to create a complete bar chart or stacked bar chart. It has 4 parameters: `data`, `options`, `element` `num`.

## Feature list

The following `options` are supported:

`width`: The width of the bar chart in px. Enter numbers only (e.g. 400)

`height`: The height of the bar chart in px. Enter numbers only (e.g. 300)

`title`: The title of a bar chart. Enter a string in single quotes (e.g. 'Chart')

`valuePos`: The position of the number value inside a bar or bar section. Enter only one of the following strings in single quotes to place the number at the top, center, or bottom of the bar respectively: 'top', 'center', 'end'

`valueFontSize`: The font size of the value inside a bar or bar section. Enter the value and units of the font in single quotes (e.g. '1.4em')

`barSpacing`: The horizontal spacing between bars. Enter numbers only (e.g. 25)

`titleFontSize`: The font size of the chart title. Enter the value and units of the font in single quotes (e.g. '1.8em')

`titleColor`: The font color of the title. Enter the name of a common color in single quotes or 'rgb(x, y, z)' where x, y and z can be a value between 0 and 255 (e.g. 'blue' or 'rgb(255, 255, 255)')

`barColor`: The color of the bars in single quotes for a simple bar chart (e.g. 'purple') or an array of colors for the bar sections of a stacked bar chart (e.g. ['pink', 'orange', 'red'])

`labelColor`: The font color of the X and Y axis labels in single quotes (e.g. 'darkblue')

`xLabels`: The X axis labels of the bars in the form of an array of strings in single quotes (e.g. ['Sushi', 'Sashimi', 'Shrimp', 'Bok Choy']). The length limit of each string that will be displayed depends on the width of each bar.

`yLabel`: The Y axis label. Enter a string in single quotes of no more than 5 characters long (e.g. '$')

`legend`: The name associated with each bar section color that is only used for stacked bar charts. Enter an array of strings in single quotes (e.g. ['America', 'Europe', 'Asia'])

## Known issues / bugs

1. Depending on the range of values displayed, the tick associated with "0" may be detached from the Y axis

2. Entering Japanese characters in the X axis labels will push up the X axis section

## Potential future features

- Add some CSS transitions and animations for extra flare

- Add more developer customization options

- Reorder the function parameters in JS file so they're listed in the same order

## Resources

W3Schools: https://www.w3schools.com/

MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/javascript

Tutorials Point: https://www.tutorialspoint.com/What-is-document-ready-equivalent-in-JavaScript

freeCodeCamp: https://www.freecodecamp.org/
