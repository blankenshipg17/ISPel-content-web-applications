var w = 800;
var h = 800;

var color_original = '#4c72ff';
var color_root_node = '#ff0000';
var color_hover = '#93de94';

// just update this part
// input topics as nodes
// define links as edges, e.g. if you have 5 topics
// then these topics index are 0, 1, 2, 3, 4
var base_url = 'http://127.0.0.1:7000';
var dataset = {
  nodes:[
 
      {name:"Message and Flask", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part1/",color:color_root_node},
      {name:"Final Group Project: Part 3", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part1/#final-group-project-part-3",color:color_original},
      {name:"How to Store User Input", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part1/#how-to-store-user-information",color:color_original},
      {name:"Messaging Protocols", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part1/#message-protocols",color:color_original},
      {name:"XML Introduction", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part2/#a-quick-introduction-to-xml",color:color_original},
      {name:"XML Message", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part2/#an-example-of-xml-message",color:color_original},
      {name:"SOAP Introduction", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part2/#a-quick-introduction-to-soap",color:color_original},
      {name:"SOAP Messages", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part2/#soap-messages",color:color_original},
      {name:"SOAP Envelopes", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part3/#soap-envelopes",color:color_original},
      {name:"SOAP Headers", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part3/#soap-headers",color:color_original},
      {name:"SOAP Bodies", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part3/#soap-bodies",color:color_original},
      {name:"SOAP Faults", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part3/#soap-faults",color:color_original},
      {name:"JSON Introduction", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part4/#a-quick-introduction-to-json",color:color_original},
      {name:"JSON Example", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part4/#a-json-example",color:color_original},
      {name:"JSON Advantages and Disadvantages", url:base_url+"/ISPeL-content-machine-learning/web-apps/message_and_flask/part4/#advantages-vs-disadvantages",color:color_original}
      
  ],
  edges:[
     {source: 0, target: 1},
     		{source: 1, target: 2},
     		{source: 2, target: 3},
     		{source: 3, target: 4},
     		{source: 4, target: 5},
     		{source: 5, target: 6},
     		{source: 6, target: 7},
     		{source: 7, target: 8},
     		{source: 7, target: 9},
     		{source: 7, target: 10},
     		{source: 7, target: 11},
     		{source: 3, target: 12},
     		{source: 12, target: 13},
     		{source: 13, target: 14}
  ]
     		
     		
};

var force = d3.layout.force()
            .nodes(dataset.nodes)
            .links(dataset.edges)
            .size([w, h])
            .linkDistance([100])
            .charge([-750])
            .start();

// var colors = d3.scale.category10();
// var svg = d3.select("div#ontology_div")
// var svg = d3.select("div")
var svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
var edges = svg.selectAll("line")
        .data(dataset.edges)
        .enter()
        .append("line")
        .style("stroke", "#ccc")
        .style("stroke-width", 1);
// var nodes = svg.selectAll("circle")
//         .data(dataset.nodes)
//         .enter()
//         .append("circle")
//         .attr("r", 10)
//         .style("fill", function(d, i){
//           return colors(i);
//         })
//         .call(force.drag);


var nodes = svg.selectAll("circle")
        .data(dataset.nodes)
        .enter()
        .append("circle")
        .attr("r", 10)
        .style("fill", color_original)
        .call(force.drag);
        
var label = svg.selectAll(".mytext")
        .data(dataset.nodes)
        .enter()
        .append("text")
          .text(function (d) { return d.name; })
          .style("text-anchor", "middle")
          .style("fill", function (d) { return d.color; })
          .style("font-family", "Arial")
          .style("font-size", 12);

 
nodes
      .on('mouseover', function (d) {
        // Highlight the nodes: every node is green except of him
        nodes.style('fill', color_original)
        d3.select(this).style('fill', color_hover)
        // Highlight the connections
        edges
          .style('stroke', function (link_d) { return link_d.source === d.id || link_d.target === d.id ? '#69b3b2' : '#b8b8b8';})
          .style('stroke-width', function (link_d) { return link_d.source === d.id || link_d.target === d.id ? 4 : 1;})
      })
      .on('mouseout', function (d) {
        nodes.style('fill', color_original)
        edges
          .style('stroke', 'black')
          .style('stroke-width', '1')
      })
      .on('click',function(d, i){
        window.location.href = d.url;
        // console.log(d.url);
        // d3.select(this).attr('r', 25)
        //         .style("fill","lightcoral")
        //         .style("stroke","red");
      });



force.on("tick", function(){
  edges.attr("x1", function(d){ return d.source.x; })
     .attr("y1", function(d){ return d.source.y; })
     .attr("x2", function(d){ return d.target.x; })
     .attr("y2", function(d){ return d.target.y; });
  nodes.attr("cx", function(d){ return d.x; })
     .attr("cy", function(d){ return d.y; });
  label.attr("x", function(d){ return d.x; })
       .attr("y", function (d) {return d.y - 10; });

  
});

