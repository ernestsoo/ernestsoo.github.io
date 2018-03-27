function init()
{

    //Initialize Dataset
    var dataset = [14,5,26,23,9];
    var limit = 10;

    d3.select("#body-text").selectAll("p")
        .data(dataset)
        .enter()
        .append("p")
        .text(function(d,i){
          if(d>limit)
          {
            return "Warning: Joe watched " + d + " cat videos today."
          }else {
            return "Joe watched " + d + " cat videos today."
          }
        })
        .style("color",function(d){
          if(d>limit)
          {
            return "red";
          }else {
            return "black";
          }
        });

    console.log(d3.selectAll("p"));


}


window.onload = init;