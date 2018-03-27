function init()
{

  
  var w = 750;
  var h = 150;

  // Initalize Padding between bars
  var barPadding = 2;

  var scaleFactor = 4;

  // Initialize Dataset
  var dataset =  [[5, 20],[480, 90],[250, 50],[100, 33],[330, 95],[410, 12],[475, 44],[25, 67],[85, 21],[220, 88]];

  var svg = d3.select("#chart")
              .append("svg")
              .attr("width",w)
              .attr("height",h);


  svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", function(d, i){
         return d[0];
      })
      .attr("cy", function(d){
         return d[1];
      })
      .attr("r", 5)
      .attr("fill",function(d){
        if(d[0] == 480 && d[1] == 90)
        {
          return "red";
        }else{
          return "slategrey";
        }
      });


  svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function(d){
        return d[0] + ", " + d[1];
      })
      .attr("x", function(d, i){
         return d[0] + 2; 
      })
      .attr("y", function(d){
         return d[1] - 3;
      })
      .attr("fill", "green");



}


window.onload = init;