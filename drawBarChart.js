const drawBarChart = (data, options, element) => {
  $(".xLabel").css("background-color", 'green');

  $("body").append(`<h1>${options.title}</h1}>`);
  $('h1').css("font-size", options.titleFontSize)
    .css("color", options.titleColor);

  $("body").append(`<${element} id="chartContainer"></${element}>`);

  $("#chartContainer").append(`<div id="yAxis"></div>`)
    .css("display", "grid")
    .css("align-items", "end")
    .css("grid-template-columns", `repeat(${data.length + 2}, ${options.width / data.length}px)`);

  $("#yAxis").append(`<div id="yAxisLabel">${options.yLabel.substring(0, 5)}</div>`);

  $("#yAxisLabel").css("margin-right", "10px")
    .css("font-size", "1.4em");

  $("#yAxis").append(`<div id="yAxisValues"></div>`)
    .css("height", `${options.height + 30}px`)
    .css("margin-bottom", "29px")
    .css("border-right", "2px solid")
    .css("display", "grid")
    .css("justify-items", "end")
    .css("align-items", "end");

  $("#yAxisValues").css("height", `${options.height}px`)
    .css("display", "grid")
    .css("align-items", "end")
    .append(`<div id="tick1">${(Math.max(...data) * 3 / 4).toFixed(2)} _</div>`)
    .append(`<div id="tick1">${(Math.max(...data) / 2).toFixed(2)} _</div>`)
    .append(`<div id="tick1">${(Math.max(...data) / 4).toFixed(2)} _</div>`)
    .append(`<div id="tick1">0.00 _</div>`);

  for (let i in data) {
    $("#chartContainer").append(`<div id="barContainer${i}"></div>`);

    $(`#barContainer${i}`).append(`<div id="bar${i}"></div>`)
      .css("display", "grid")
      .css("align-items", "end")
      .css("justify-items", "center");

    $(`#bar${i}`).addClass("bar")
      .css("height", `${data[Number(i)] * (options.height / Math.max(...data))}px`)
      .css("width", `${(options.width / data.length) - options.barSpace}px`)
      .css("display", "grid")
      .css("align-items", options.valuePos) // "start", "center" or "end" to place position of values in the bar
      .text(data[Number(i)]);

    $(`#barContainer${i}`).append(`<div id="xAxis${i}"></div>`)
    $(`#xAxis${i}`).css("display", "block")
      .css("width", `${options.width / data.length}px`)
      .css("border", "thin solid");

    $(`#barContainer${i}`).append(`<div id="xLab${i}">Bar ${Number(i) + 1}</div>`);
    $(`#xLab${i}`).addClass("xLabel")
      .css("margin-top", "10px");
  }

  $(".bar").css("background-color", options.barColor);
  $(".xLabel").css("color", options.labelColor);
  $("#yAxisLabel").css("color", options.labelColor);

  for (let i in data) {
    $(`#xLab${i}`).text(options.xLabels[i]);
  }
}
