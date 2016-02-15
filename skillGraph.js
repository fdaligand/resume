function editSkillGraph(image,knowledge,balise) {
var skill = d3.select(balise)
            .append("svg")
            .attr({
                "width":"100px",
                "height":"100px",
            }).append("g")
              .attr("transform","translate(50,50)");

   var img = skill.append("image")
            .attr({
              "xlink:href":image,
              "x":-40,
              "y":-50,
              "width":80,
              "height":80,
            });
    
    var arc = d3.svg.arc()
              .innerRadius(46)
              .outerRadius(50)
              .startAngle(0)
              .endAngle(function(){ return (((knowledge*3.6)*2*Math.PI)/360);});
              

        skill.append("path")
            .attr("class","arc")
            .attr("d",arc);

    var techno = skill
            .append("text")
            .attr({
              "x":-10,
              "y":40,
              "text-anchor":"start",
              "font-size":"10px",
              "fill":"black"
            })
            .text(knowledge+"%");

   
}