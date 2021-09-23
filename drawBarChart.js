const drawBarChart = (data, options, element) => {
  $("body").append(`<h1>Title</h1}>`);
  $("body").append(`<${element} id="chartContainer"></${element}>`);

  for (let i in data) {
    $("#chartContainer").append(`<div id="barContainer${i}"></div>`)
      .css("display", "grid")
      .css("align-items", "end")
      .css("grid-template-columns", `repeat(${data.length}, 60px)`);

    $(`#barContainer${i}`).append(`<div id="bar${i}" class="bar"></div>`)
      .css("display", "grid")
      .css("align-items", "end");

    $(`#bar${i}`).css("height", `${data[Number(i)] * 50}px`)
      .css("display", "grid")
      .css("align-items", "center") // "end" to place at bottom of bar
      .text(data[Number(i)]);

    $(`#barContainer${i}`).append(`<div id="xLab${i}">Bar ${Number(i) + 1}</div>`);
    $(`#xLab${i}`).css("margin-top", "10px");
  }
}
