function editSkillGraph(image,knowledge,balise,textArray) {
var skill = d3.select(balise)
            .append("svg")
            .attr({
                "width":"100px",
                "height":"100px",
            }).append("g")
              .attr("transform","translate(50,50)");

   if (image) {
        var img = skill.append("image")
            .attr({
              "xlink:href":image,
              "x":-30,
              "y":-40,
              "width":60,
              "height":60,
            });
  } else if ( textArray ) {

      var subText = skill.append("text")
                          .attr({
                            "x":0,
                            "y":-40,
                                })
      var lineText = subText.selectAll("tspan")
                          .data(textArray)
                          .enter()
                          .append("tspan")
                          .attr({
                            "x":0,
                            "dy":function(d,i){ return 12; },
                            "text-anchor":"middle",
                            "font-size":"10px",
                            "fill":"black",
                          })
                          .text(function(d){ return d});

  }


    var gradient = d3.selectAll("svg")
                      .append("defs")
                      .append("linearGradient")
                      .attr({
                        "id":"gradient",
                        "x1":"0%",
                        "y1":"0%",
                        "x2":"100%",
                        "y2":"100%",
                        "spreadMethod":"pad",

                      });
    gradient.append("stop")
              .attr({
                "offset":"0%",
                "stop-color":"#0c0",
              });
    gradient.append("stop")
              .attr({
                "offset":"100%",
                "stop-color":"#c00",
              });
    
    var arc = d3.svg.arc()
              .innerRadius(46)
              .outerRadius(50)
              .startAngle(0)
              .endAngle(function(){ return (((knowledge*3.6)*2*Math.PI)/360);});
              

        skill.append("path")
            .attr("class","arc")
            .attr("fill","url(#gradient)")
            .attr("d",arc);

    var techno = skill
            .append("text")
            .attr({
              "x":-10,
              "y":40,
              "text-anchor":"start",
              "font-size":"10px",
              "fill":"black",
            })
            .text(knowledge+"%");

   
}