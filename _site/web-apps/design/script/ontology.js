var w = 1500;
var h = 1500;

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
 
      {name:"Overview", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file1/#overview",color:color_root_node},
      {name:"Web Page Design", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file1/#web-page-design",color:color_original},
      {name:"Flat Design", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file1/#web-page-design-flat-design",color:color_original},
      {name:"CSS", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file2/#what-is-css",color:color_original},
      {name:"ID vs Class", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file2/#id-vs-class",color:color_original},
      {name:"How to insert CSS", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file2/#how-to-insert-css",color:color_original},
      {name:"Where to Define Style", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file2/#where-to-define-your-style",color:color_original},
      {name:"CSS Colors", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file3/#css-colors",color:color_original},
       {name:"Horizontal Navigation Bar", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file3/#css-examples-horizontal-navigation-bar",color:color_original},
      {name:"Group Activity 1", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file3/#group-activity-1-5-minutes",color:color_original},
      {name:"Vertical Navigation Bar", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file3/#css-examples-vertical-navigation-bar",color:color_original},
      {name:"Homework 2", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file3/#homework-2",color:color_original},
      {name:"Paper Prototyping", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file4/#paper-prototyping",color:color_original},
      {name:"Paper Prototyping Pros vs Cons", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file4/#paper-prototyping-pros-vs-cons",color:color_original},
      {name:"Group Homework 3 (Part 1)", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file4/#group-homework-3-part-1",color:color_original},
      {name:"BootStrap", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file5/#bootstrap-tutorial",color:color_original},
      {name:"BootStrap Grid System", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file5/#bootstrap-grid-system",color:color_original},
      {name:"BootStrap Classes", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file6/#bootstrap-classes",color:color_original},
      {name:"BootStrap Table", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file6/#bootstrap-table",color:color_original},
      {name:"Group Activity 2", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file6/#group-activity-2",color:color_original},
      {name:"BootStrap Navigation Bar", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file6/#bootstrap-navigation-bar",color:color_original},
      {name:"BootStrap Carousel", url:base_url+"/ISPeL-content-machine-learning/web-apps/design/file6/#bootstrap-carousel",color:color_original}
  
      
  ],
  edges:[
      {source: 0, target: 1},
      {source: 1, target: 2},
      {source: 0, target: 3},
      {source: 3, target: 4},
      {source: 3, target: 5},
      {source: 3, target: 6},
      {source: 5, target: 7},
      {source: 5, target: 8},
      {source: 5, target: 9},
      {source: 5, target: 10},
      {source: 0, target: 11},
      {source: 0, target: 12},
      {source: 12, target: 13},
      {source: 0, target: 14},
      {source: 0, target: 15},
      {source: 15, target: 16},
      {source: 15, target: 17},
      {source: 15, target: 18},
      {source: 15, target: 19},
      {source: 15, target: 20},
      {source: 15, target: 21}
      
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

