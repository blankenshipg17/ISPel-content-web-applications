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
 
      {name:"URL and HTML", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file1/",color:color_root_node},
      {name:"Web Application", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file1/#web-application",color:color_original},
      {name:"W3C", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file1/#web-application",color:color_original},
      {name:"IP Address", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file1/#w3c",color:color_original},
      {name:"Domain Name System", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file1/#ip-address",color:color_original},
      {name:"How DNS Works", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file2/#domain-name-system",color:color_original},
      {name:"How URL's are Structured", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file2/#how-does-it-work",color:color_original},
      {name:"URLs", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file3/#how-url's-are-structured",color:color_original},
      {name:"TLD and URLs Price", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file3/#tld-and-urls-price",color:color_original},
      //{name:"Homework 1", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file3/#homework-1-part-1",color:color_original},
      {name:"W3Schools", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file4/#w3schools",color:color_original},
      {name:"HTML", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file4/#what-is-html",color:color_original},
      {name:"HTML Examples", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file4/#lets-do-this-first-example",color:color_original},
      {name:"Common Basic Tags", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file4/#common-basic-tags",color:color_original},
      {name:"Rules", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file5/#here-are-some-rules",color:color_original},
      {name:"Homework 1 (Part 1)", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file5/#homework-1-part-1",color:color_original},
      {name:"Homework 1 (Part 2)", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file5/#homework-1-part-2",color:color_original},
      {name:"How to Upload Files to Your URL", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file5/#how-to-upload-files-to-your-url",color:color_original},
      {name:"HTML DOM", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file5/#html-dom",color:color_original},
      {name:"Transport Protocols", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file6/#transport-protocols",color:color_original},
      {name:"Other HTTP Request Types", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file6/#other-http-request-types",color:color_original},
      {name:"HTTP Server Response Codes", url:base_url+"/ISPeL-content-machine-learning/web-apps/URL_and_HTML/file6/#http-server-response-codes",color:color_original}
  
      
  ],
  edges:[
      {source: 0, target: 1},
      {source: 1, target: 2},
      {source: 0, target: 3},
      {source: 3, target: 4},
      {source: 4, target: 5},
      {source: 3, target: 6},
      {source: 3, target: 7},
      {source: 7, target: 8},
      {source: 0, target: 9},
      {source: 0, target: 10},
      {source: 0, target: 14},
      {source: 14, target: 16},
      {source: 16, target: 15},
      {source: 0, target: 10},
      {source: 10, target: 11},
      {source: 10, target: 12},
      {source: 12, target: 13},
      {source: 0, target: 17},
      {source: 17, target: 18},
      {source: 17, target: 19},
      {source: 19, target: 20}
      
     
      
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

