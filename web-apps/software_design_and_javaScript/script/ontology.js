var w = 1000;
var h = 1000;

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
 
      {name:"Software Design and JavaScript", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file1/",color:color_root_node},
      {name:"JavaScript", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file1/#javascript-where",color:color_original},
      {name:"JavaScript Basic", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file4/#javascript-basic",color:color_original},
      {name:"Group Activity 4", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file4/#group-activity-4-5-minutes",color:color_original},
      {name:"Basic Data Visualization: Google Chart", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file4/#basic-data-visualization-google-chart",color:color_original},
      {name:"HW3 View Example", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file4/#basic-data-visualization-hw3-view-example",color:color_original},
      {name:"Group Activity 5", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file5/#group-activity-5-5-minutes",color:color_original},
      {name:"JavaScript Debug", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file5/#javascript-debug",color:color_original},
      {name:"JavaScript Coding Conventions", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file5/#javascript-coding-conventions",color:color_original},
      {name:"Midterm and Sample Questions", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file5/#midterm-and-sample-questions",color:color_original},
      {name:"JSON: Basic", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file5/#json-basic",color:color_original},
      {name:"JavaScript: Loop", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file5/#javascript-loop",color:color_original},
      {name:"Homework 4 (Part 1)", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file5/#homework-4-part-1",color:color_original},
      {name:"Flowchart", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file6/#flowchart",color:color_original},
      {name:"BootStrap Select List", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file6/#bootstrap-select-list",color:color_original},
      {name:"Group Activity 6", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file6/#group-activity-6-5-minutes",color:color_original},
      {name:"BootStrap Input Form", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file6/#bootstrap-input-form",color:color_original},
      {name:"Group Activity 7", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file6/#group-activity-7-7-minutes",color:color_original},
      {name:"How to Insert Rows in a Table", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file6/#how-to-insert-rows-in-a-table",color:color_original},
      {name:"Homework 4", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file6/#homework-4",color:color_original},
      {name:"Version Control Tools", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file7/#version-control-tools",color:color_original},
      {name:"Github vs Git", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file7/#github-vs-git",color:color_original},
      {name:"Final Group Project: Part 1", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file7/#final-group-project-part-1",color:color_original},
      {name:"JavaScript: Scoping", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file8/#javascript-scoping",color:color_original},
      {name:"JavaScript: Function positions", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file8/#javascript-function-positions",color:color_original},
      {name:"JavaScript: Function positions and Hoisting", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file8/#javascript-function-positions-and-hoisting",color:color_original},
      {name:"Business Listing and Content Design", url:base_url+"/ISPeL-content-machine-learning/web-apps/software_design_and_javaScript/file9/#business-listing-and-content-design",color:color_original}
  
      
  ],
  edges:[
      {source: 0, target: 1},
      {source: 1, target: 2},
      {source: 0, target: 3},
      {source: 0, target: 4},
      {source: 0, target: 5},
      {source: 3, target: 6},
      {source: 2, target: 7},
      {source: 7, target: 8},
      {source: 0, target: 9},
      {source: 0, target: 10},
      {source: 8, target: 11},
      {source: 5, target: 12},
      {source: 12, target: 13},
      {source: 6, target: 14},
      {source: 14, target: 15},
      {source: 6, target: 16},
      {source: 16, target: 17},
      {source: 12, target: 18},
      {source: 12, target: 19},
      {source: 20, target: 21},
      {source: 0, target: 22},
      {source: 2, target: 23},
      {source: 23, target: 24},
      {source: 24, target: 25}
      
      
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

