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
 
      {name:"Webservice and Flask", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part1/",color:color_root_node},
      {name:"What are web services?", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part1/#what-are-web-services",color:color_original},
      {name:"Differences: SOAP and JSON", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part1/#differences-soap-and-json",color:color_original},
      {name:"Similarities: SOAP and JSON", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part1/#similarities-soap-and-json",color:color_original},
      {name:"What is Service-Oriented Architecture (SOA)?", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part2/#what-is-service-oriented-architecture-soa",color:color_original},
      {name:"Flask and SOA", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part2/#flask-and-soa",color:color_original},
      {name:"SOA Advantages", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part3/#what-are-soa-advantages",color:color_original},
      {name:"SOA Disadvantages", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part3/#what-are-soa-disadvantages",color:color_original},
      {name:"Web Services Transport Protocols", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part4/#web-services-transport-protocols",color:color_original},
      {name:"HTTP Requests", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part4/#http-requests",color:color_original},
      {name:"GET", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part4/#get",color:color_original},
      {name:"/index.html", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part4/#index-html",color:color_original},
      {name:"Host", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part4/#host",color:color_original},
      {name:"HTTP Responses", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part5/#http-responses",color:color_original},
      {name:"200", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part5/#200",color:color_original},
      {name:"Date… Connection", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part5/#date-connection",color:color_original},
      {name:"!DOCTYPE", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part5/#doctype",color:color_original},
      {name:"HTTP Server Response Codes", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part6/#http-server-response-codes",color:color_original},
      {name:"HTTP Server Response Codes in Detail", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part6/#http-server-response-codes-in-detail",color:color_original},
      {name:"Template Engine: Jinja2", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part7/#template-engine-jinja2",color:color_original},
      {name:"Flask and SOA Cont.", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part7/#flask-and-soa",color:color_original},
      {name:"CS50", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part7/#cs50",color:color_original},
      {name:"Preview a CSV file", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part7/#preview-a-csv-file",color:color_original},
      {name:"Final Group Project: Part 3", url:base_url+"/ISPeL-content-machine-learning/web-apps/web_service_and_flask/part7/#final-group-project-part-3",color:color_original}
  
     
  ],
  edges:[
     
      
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

