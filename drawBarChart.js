const addChartTitle = (num, options) => {
  $("body").append(`<h2 id="title${num}">${options.title}</h2}>`);

  $(`#title${num}`).css("font-size", options.titleFontSize)
    .css("color", options.titleColor);
}

const addChartContainer = (num, data, options, element) => {
  $("body").append(`<${element} id="chartContainer${num}"></${element}>`);

  $(`#chartContainer${num}`).css("display", "grid")
    .css("align-items", "end")
    .css("grid-template-columns", `repeat(${data.length + 1}, ${options.width / data.length}px)`)
    .css("margin-bottom", "50px");
}

const addChartYAxis = (num, data, options) => {
  $(`#chartContainer${num}`).append(`<div id="yAxis${num}"></div>`)

  $(`#yAxis${num}`).css("height", `${options.height + 30}px`)
    .css("margin-bottom", "29px")
    .css("border-right", "2px solid")
    .css("display", "grid")
    .css("justify-items", "end")
    .css("align-items", "end");

  $(`#yAxis${num}`).append(`<div id="yAxisLabel${num}">${options.yLabel.substring(0, 5)}</div>`);

  $(`#yAxisLabel${num}`).css("margin-right", "10px")
    .css("font-size", "1.4em")
    .css("color", `${options.labelColor}`);

  $(`#yAxis${num}`).append(`<div id="yAxisValues${num}"></div>`);

  $(`#yAxisValues${num}`).css("height", `${options.height}px`)
    .css("display", "grid")
    .css("align-items", "end");

  $(`#yAxisValues${num}`).append(`<div id="tick${num}4">${(Math.max(...data) * 3 / 4).toFixed(2)} _</div>`)
    .append(`<div id="tick${num}3">${(Math.max(...data) / 2).toFixed(2)} _</div>`)
    .append(`<div id="tick${num}2">${(Math.max(...data) / 4).toFixed(2)} _</div>`)
    .append(`<div id="tick${num}1">0.00 _</div>`);
}

const addBarContainer = (num, i) => {
  $(`#chartContainer${num}`).append(`<div id="barContainer${num}${i}"></div>`);

  $(`#barContainer${num}${i}`).css("display", "grid")
    .css("align-items", "end")
    .css("justify-items", "center");
}

const addBar = (num, i, data, options) => {
  $(`#barContainer${num}${i}`).append(`<div id="bar${num}${i}"></div>`);

  $(`#bar${num}${i}`).css("height", `${data[Number(i)] * (options.height / Math.max(...data))}px`)
    .css("width", `${(options.width / data.length) - options.barSpace}px`)
    .css("display", "grid")
    .css("align-items", options.valuePos) // "start", "center" or "end" to place position of values in the bar
    .text(data[Number(i)]);

  $(`#bar${num}${i}`).addClass("bar");
}

const addChartXAxis = (num, i, data, options) => {
  $(`#barContainer${num}${i}`).append(`<div id="xAxis${num}${i}"></div>`);

  $(`#xAxis${num}${i}`).css("display", "block")
    .css("width", `${options.width / data.length}px`)
    .css("border", "thin solid");

  $(`#barContainer${num}${i}`).append(`<div id="xLab${num}${i}">Bar ${Number(i) + 1}</div>`);

  $(`#xLab${num}${i}`).css("margin-top", "10px")
    .css("color", options.labelColor);

  $(`#xLab${num}${i}`).addClass("xLabel");
}

const drawBarChart = (data, options, element, num) => {
  addChartTitle(num, options);
  addChartContainer(num, data, options, element);
  addChartYAxis(num, data, options, element);

  for (let i in data) {
    addBarContainer(num, i);
    addBar(num, i, data, options);
    addChartXAxis(num, i, data, options);
  }

  for (let i in data) {
    $(`#bar${num}${i}`).css("background-color", options.barColor);
    $(`#xLab${num}${i}`).text(options.xLabels[i]);
  }
}
