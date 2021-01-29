var w = 800;
var h = 500;

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
 
      {name:"MVC and JavaScript", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file1/",color:color_root_node},
      {name:"Functional vs Non-function Requirements", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file1/#functional-vs-non-function-requirements",color:color_original},
      {name:"Software Developer and Customer", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file1/#software-developer-and-customer",color:color_original},
      {name:"Model", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file1/#model",color:color_original},
      {name:"View", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file1/#view",color:color_original},
      {name:"Control", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file1/#control",color:color_original},
      {name:"Advantages of MVC Architecture", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file1/#what-are-the-advantages-of-mvc-architecture",color:color_original},
      {name:"MVC Example: Is my roommate a vampire?", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file1/#mvc-example-is-my-roommate-a-vampire",color:color_original},
      {name:"Group Homework 3 (Part 2)", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file1/#group-homework-3-part-2",color:color_original},
      {name:"Where should “Model” be deployed?", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file2/#where-should-model-be-deployed",color:color_original},
      {name:"View: JavaScript", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file2/#view-javascript",color:color_original},
      {name:"Group Activity 3", url:base_url+"/ISPeL-content-machine-learning/web-apps/MVC_JavaScript/file2/#group-activity-3-10-minutes",color:color_original},
  
      
  ],
  edges:[
      {source: 0, target: 1},
      {source: 1, target: 2},
      {source: 2, target: 3},
      {source: 2, target: 4},
      {source: 2, target: 5},
      {source: 3, target: 4},
      {source: 4, target: 5},
      {source: 3, target: 6},
      {source: 5, target: 6},
      {source: 6, target: 7},
      {source: 0, target: 8},
      {source: 3, target: 9},
      {source: 4, target: 10},
      {source: 6, target: 11}
      
      
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

