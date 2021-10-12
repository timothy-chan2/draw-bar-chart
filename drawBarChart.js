const addChartTitle = (num, options) => {
  $("body").append(`<h2 id="title${num}">${options.title}</h2}>`);

  $(`#title${num}`).css("font-size", options.titleFontSize)
    .css("color", options.titleColor);
}

const addOuterContainer = (num, element, options, data) => {
  $("body").append(`<${element} id="outerContainer${num}"></${element}>`);

  if (typeof data[0] === 'object') {
    $(`#outerContainer${num}`).css("display", "grid")
      .css("grid-template-columns", `${options.width + 200}px 200px`)
      .css("width", `${options.width + 150}px`);
  } else {
    $(`#outerContainer${num}`).css("display", "grid")
      .css("grid-template-columns", `${options.width}px`)
      .css("width", `${options.width + 150}px`);
  }
}

const addChartContainer = (num, data, options) => {
  $(`#outerContainer${num}`).append(`<div id="chartContainer${num}"></div>`);

  $(`#chartContainer${num}`).css("display", "grid")
    .css("align-items", "end")
    .css("grid-template-columns", `repeat(${data.length + 1}, ${options.width / data.length}px)`)
    .css("margin-bottom", "50px");
}

const addChartYAxis = (num, data, options, barSum) => {
  let lenDiff, spaces;

  $(`#chartContainer${num}`).append(`<div id="yAxis${num}"></div>`);

  $(`#yAxis${num}`).css("height", `${options.height + 30}px`)
    .css("margin-bottom", "29px")
    .css("border-right", "2px solid")
    .css("display", "grid")
    .css("justify-items", "end")
    .css("align-items", "end");

  // Limit the length of the Y axis label to 5 characters long
  $(`#yAxis${num}`).append(`<div id="yAxisLabel${num}">${options.yLabel.substring(0, 5)}</div>`);

  $(`#yAxisLabel${num}`).css("margin-right", "10px")
    .css("font-size", "1.4em")
    .css("color", `${options.labelColor}`);

  $(`#yAxis${num}`).append(`<div id="yAxisValues${num}"></div>`);

  $(`#yAxisValues${num}`).css("height", `${options.height}px`)
    .css("display", "grid")
    .css("align-items", "end");

  // To ensure there's no spaces between the ticks and the Y axis of the chart by adding spaces
  if (typeof data[0] === 'number') {
    $(`#yAxisValues${num}`).append(`<div id="tick${num}4">${(Math.max(...data) * 3 / 4).toFixed(2)} _</div>`);

    lenDiff = Math.trunc(Math.max(...data) * 3 / 4).toString().length - Math.trunc(Math.max(...data) / 2).toString().length;
    if (lenDiff !== 0) {
      spaces = "";
      for (let i = 0; i < lenDiff; i++) {
        spaces += "&nbsp;&nbsp;";
      }
      $(`#yAxisValues${num}`).append(`<div id="tick${num}3">${spaces}${(Math.max(...data) / 2).toFixed(2)} _</div>`);
    } else {
      $(`#yAxisValues${num}`).append(`<div id="tick${num}3">${(Math.max(...data) / 2).toFixed(2)} _</div>`);
    }

    lenDiff = Math.trunc(Math.max(...data) * 3 / 4).toString().length - Math.trunc(Math.max(...data) / 4).toString().length;
    if (lenDiff !== 0) {
      spaces = "";
      for (let i = 0; i < lenDiff; i++) {
        spaces += "&nbsp;&nbsp;";
      }
      $(`#yAxisValues${num}`).append(`<div id="tick${num}2">${spaces}${(Math.max(...data) / 4).toFixed(2)} _</div>`);
    } else {
      $(`#yAxisValues${num}`).append(`<div id="tick${num}2">${(Math.max(...data) / 4).toFixed(2)} _</div>`);
    }

    lenDiff = Math.trunc(Math.max(...data) * 3 / 4).toString().length - 1;
    if (lenDiff !== 0) {
      spaces = "";
      for (let i = 0; i < lenDiff; i++) {
        spaces += "&nbsp;&nbsp;";
      }
      $(`#yAxisValues${num}`).append(`<div id="tick${num}1">${spaces}0.00 _</div>`);
    } else {
      $(`#yAxisValues${num}`).append(`<div id="tick${num}1">0.00 _</div>`);
    }
  } else {
    $(`#yAxisValues${num}`).append(`<div id="tick${num}4">${(Math.max(...barSum) * 3 / 4).toFixed(2)} _</div>`);

    lenDiff = Math.trunc(Math.max(...barSum) * 3 / 4).toString().length - Math.trunc(Math.max(...barSum) / 2).toString().length;
    if (lenDiff !== 0) {
      spaces = "";
      for (let i = 0; i < lenDiff; i++) {
        spaces += "&nbsp;&nbsp;";
      }
      $(`#yAxisValues${num}`).append(`<div id="tick${num}3">${spaces}${(Math.max(...barSum) / 2).toFixed(2)} _</div>`);
    } else {
      $(`#yAxisValues${num}`).append(`<div id="tick${num}3">${(Math.max(...barSum) / 2).toFixed(2)} _</div>`);
    }

    lenDiff = Math.trunc(Math.max(...barSum) * 3 / 4).toString().length - Math.trunc(Math.max(...barSum) / 4).toString().length;
    if (lenDiff !== 0) {
      spaces = "";
      for (let i = 0; i < lenDiff; i++) {
        spaces += "&nbsp;&nbsp;";
      }
      $(`#yAxisValues${num}`).append(`<div id="tick${num}2">${spaces}${(Math.max(...barSum) / 4).toFixed(2)} _</div>`);
    } else {
      $(`#yAxisValues${num}`).append(`<div id="tick${num}2">${(Math.max(...barSum) / 4).toFixed(2)} _</div>`);
    }

    lenDiff = Math.trunc(Math.max(...barSum) * 3 / 4).toString().length - 1;
    if (lenDiff !== 0) {
      spaces = "";
      for (let i = 0; i < lenDiff; i++) {
        spaces += "&nbsp;&nbsp;";
      }
      $(`#yAxisValues${num}`).append(`<div id="tick${num}1">${spaces}0.00 _</div>`);
    } else {
      $(`#yAxisValues${num}`).append(`<div id="tick${num}1">0.00 _</div>`);
    }
  }
}

const addBarContainer = (num, i) => {
  $(`#chartContainer${num}`).append(`<div id="barContainer${num}${i}"></div>`);

  $(`#barContainer${num}${i}`).css("display", "grid")
    .css("align-items", "end")
    .css("justify-items", "center");
}

const addBar = (num, i, data, options) => {
  $(`#barContainer${num}${i}`).append(`<div id="bar${num}${i}"></div>`);

  // Make sure all bars are shorter than the chart height defined by the user
  $(`#bar${num}${i}`).css("height", `${data[Number(i)] * (options.height / Math.max(...data))}px`)
    .css("width", `${(options.width / data.length) - options.barSpacing}px`)
    .css("display", "grid")
    .css("align-items", options.valuePos) // "start", "center" or "end" to place position of values in the bar
    .css("font-size", options.valueFontSize);

    // Show 2 digits after decimal inside the bar if value is not an integer
    if (Number.isInteger(data[Number(i)])) {
      $(`#bar${num}${i}`).text(data[Number(i)]);
    } else {
      $(`#bar${num}${i}`).text(data[Number(i)].toFixed(2));
    }

  $(`#bar${num}${i}`).addClass("bar");
}

const addBarSection = (num, i, j, data, barSum, options) => {
  $(`#barContainer${num}${i}`).append(`<div id="barSection${num}${i}${j}"></div>`);

  // Make sure sum of the bars sections are shorter than the chart height defined by the user
  $(`#barSection${num}${i}${j}`).css("height", `${data[Number(i)][Number(j)] * (options.height / Math.max(...barSum))}px`)
    .css("width", `${(options.width / data.length) - options.barSpacing}px`)
    .css("display", "grid")
    .css("align-items", options.valuePos) // "start", "center" or "end" to place position of values in the bar
    .css("font-size", options.valueFontSize);

    // Show 2 digits after decimal inside the bar if value is not an integer
    if (Number.isInteger(data[Number(i)][Number(j)])) {
      $(`#barSection${num}${i}${j}`).text(data[Number(i)][Number(j)]);
    } else {
      $(`#barSection${num}${i}${j}`).text(data[Number(i)][Number(j)].toFixed(2));
    }

  $(`#barSection${num}${i}${j}`).addClass("bar");
}

const addChartXAxis = (num, i, data, options) => {
  $(`#barContainer${num}${i}`).append(`<div id="xAxis${num}${i}"></div>`);

  $(`#xAxis${num}${i}`).css("display", "block")
    .css("width", `${options.width / data.length}px`)
    .css("border", "thin solid");

  // Default X axis labels if user does not define it
  $(`#barContainer${num}${i}`).append(`<div id="xLab${num}${i}">Bar ${Number(i) + 1}</div>`);

  $(`#xLab${num}${i}`).css("margin-top", "10px")
    .css("color", options.labelColor);

  $(`#xLab${num}${i}`).addClass("xLabel");
}

const legend = (options, num) => {
  $(`#outerContainer${num}`).append(`<div id="legendTitles${num}"></div>`);

  for (let i in options.legend) {
    $(`#legendTitles${num}`).append(`<div id="legendColor${num}${i}"></div>`)
      .append(`<div id="legendName${num}${i}"></div>`);

    $(`#legendTitles${num}`).css("display", "grid")
      .css("grid-template-columns", "30px 200px")
      .css("align-items", "center")
      .css("height", `${50 * options.legend.length}px`);

    $(`#legendColor${num}${i}`).css("height", "20px")
      .css("width", "20px")
      .css("background-color", options.barColor[i]);

    $(`#legendName${num}${i}`).text(options.legend[i])
      .css("font-size", "1.3em");
  }
}

const drawBarChart = (data, options, element, num) => {
  let barSum = [];

  // Calculate the sum of the values that make up a bar for stacked bar charts
  if (typeof data[0] === 'object') {
    for (let i in data) {
      const sum = data[i].reduce((a, b) => a + b);
      barSum.push(sum);
    }
  }

  addChartTitle(num, options);
  addOuterContainer(num, element, options, data);
  addChartContainer(num, data, options, element);
  addChartYAxis(num, data, options, barSum);

  for (let i in data) {
    addBarContainer(num, i);
    if (typeof data[i] === 'number') {
      addBar(num, i, data, options);
    } else {
      for (let j in data[i]) {
        addBarSection(num, i, j, data, barSum, options);
      }
    }
    addChartXAxis(num, i, data, options);
  }

  for (let i in data) {
    if (typeof data[0] === 'number') {
      $(`#bar${num}${i}`).css("background-color", options.barColor);
    } else {
      for (let j in options.barColor) {
        $(`#barSection${num}${i}${j}`).css("background-color", options.barColor[j]);
      }
    }
    // Limit the # of characters of each X axis label depending on the width of each bar (each char ~10px)
    $(`#xLab${num}${i}`).text(options.xLabels[i].substring(0, Math.floor(options.width / data.length / 10)));
  }

  // Only show the legend if it's a stacked bar chart
  if (typeof data[0] === 'object') {
    legend(options, num);
  }
}
