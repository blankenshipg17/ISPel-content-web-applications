var w = 1500;
var h = 1500;
// just update this part
// input topics as nodes
// define links as edges, e.g. if you have 5 topics
// then these topics index are 0, 1, 2, 3, 4
var dataset = {
  nodes:[
      //intro
      {name:"Intro"},
      {name:"Supervised Learning"},
      {name:"Unsupervised Learning"},
      {name:"Examples"},
      {name:"Data Types"},
      {name:"Classification"},
      {name:"Regression"},
      
      //K_Means
      {name:"K_Means"},
      {name:"Algorithm"},
      {name:"How To Find a Good K"},
      {name:"Elbow Method"},
      
      //KNN
      {name:"KNN"},
      {name:"Step 1"},
      {name:"Step 2"},
      {name:"Step 3"},
      {name:"Step 4"},
      {name:"Step 5"},
      {name:"Confustion Matrix"},
      
      //Statistical Learning
      {name:"Statistical Learning"},
      {name:"Rf(x)"},
      {name:"Curse of Dimensionality"},
      {name:"Bias Variance TradeOff"},
      {name:"Bias"},
      {name:"Overfitting"},
      
      //Linear Regression
      {name:"Linear Regression"},
      {name:"Multiple Linear Regression"},
      {name:"Regularization"},
      {name:"Correlation vs Covariance"},
      {name:"Estimation"},
      {name:"Non-Linear"},
      {name:"L1 Lasso"},
      {name:"L2 Ridge"},
      
      //Evaluation
      {name:"Evaluation"},
      {name:"ROC Curve"},
      {name:"MAE"},
      {name:"R^2"},
      {name:"RMSE-MSE"},
      
      //Parameter Tuning
      {name:"Parameter Tuning"},
      {name:"Cross Validation"},
     
      
      //Decision Tree
      {name:"Decision Tree"},
      {name:"Split"},
      {name:"Gini"},
      {name:"Entropy"},
      {name:"Gain"},
      {name:"Greedy"},
      {name:"Ensemble"},
      {name:"Bagging"},
      {name:"Boosting"},
      
      
      //SVM
      {name:"SVM"},
      {name:"Hyperplane"},
      {name:"Maximal Margin Classifier"},
      {name:"Suppor Vector Classifiers"},
      {name:"Important Parameters"},
      {name:"Epsilon"},
      {name:"C"},
      {name:"Kernel"},
      {name:"Quadratic"},
      {name:"Polynomial"},
      {name:"Radial"},
  ],
  edges:[
  //intro
      {source: 0, target: 1},
      {source: 0, target: 2},
      {source: 0, target: 3},
      {source: 0, target: 4},
      {source: 1, target: 5},
      {source: 1, target: 6},
     
      
      //k_means
      {source: 7, target: 8},
      {source: 7, target: 9},
      {source: 9, target: 10},
      
      
      //KNN
      {source: 11, target: 12},
      {source: 11, target: 13},
      {source: 11, target: 14},
      {source: 11, target: 15},
      {source: 11, target: 16},
      {source: 11, target: 17},
      
      
      //Statistical Learning
      {source: 18, target: 19},
      {source: 18, target: 20},
      {source: 18, target: 21},
      {source: 21, target: 22},
      {source: 21, target: 23},
     
      
      //Linear Regression
      {source: 24, target: 25},
      {source: 24, target: 26},
      {source: 25, target: 27},
      {source: 27, target: 28},
      {source: 28, target: 29},
      {source: 26, target: 30},
      {source: 26, target: 31},
      
      
      //Evaluation
      {source: 32, target: 33},
      {source: 32, target: 34},
      {source: 32, target: 35},
      {source: 32, target: 36},
      
      
      //Parameter Tuning
      {source: 37, target: 38},
      
      
      //Decision Tree
      {source: 39, target: 40},
      {source: 40, target: 41},
      {source: 40, target: 42},
      {source: 41, target: 43},
      {source: 42, target: 43},
      {source: 43, target: 44},
      {source: 44, target: 45},
      {source: 45, target: 46},
      {source: 45, target: 47},
      
      //SVM
      {source: 48, target: 49},
      {source: 49, target: 50},
      {source: 50, target: 51},
      {source: 51, target: 52},
      {source: 52, target: 53},
      {source: 52, target: 54},
      {source: 51, target: 55},
      {source: 55, target: 56},
      {source: 55, target: 57},
      {source: 55, target: 58}
      
  ]
};

var force = d3.layout.force()
            .nodes(dataset.nodes)
            .links(dataset.edges)
            .size([w, h])
            .linkDistance([100])
            .charge([-750])
            .start();

var colors = d3.scale.category10();
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
var nodes = svg.selectAll("circle")
        .data(dataset.nodes)
        .enter()
        .append("circle")
        .attr("r", 10)
        .style("fill", function(d, i){
          return colors(i);
        })
        .call(force.drag);
        
var label = svg.selectAll(".mytext")
        .data(dataset.nodes)
        .enter()
        .append("text")
          .text(function (d) { return d.name; })
          .style("text-anchor", "middle")
          .style("fill", "#555")
          .style("font-family", "Arial")
          .style("font-size", 12);

 

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
