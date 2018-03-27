function init()
{

  var w = 500;
  var h = 150;

  // Initalize Padding between bars
  var barPadding = 2;

  var scaleFactor = 4;

  // Initialize Dataset
  var dataset = [15, 5, 29, 23,19,21,3,10,33,45];

  var svg = d3.select("#chart")
              .append("svg")
              .attr("width",w)
              .attr("height",h);


  svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", function(d,i){
        return i * (w / dataset.length);
      })
      .attr("y", function(d){
        return h - (d * scaleFactor);
      })
      .attr("width", w / dataset.length - barPadding)
      .attr("height", function(d){
        return d * scaleFactor;
      });

}


window.onload = init;