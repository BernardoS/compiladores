module.exports = function(root){
    var radius = 10;
var font_size = 14;
var margin = {top:17,left:22};
var panSpeed = 200;
var panBoundary = 20;

var tree = d3.layout.tree();
tree.nodeSize([radius*7,radius*7]);
var svg = d3.select("body").append("svg").append("g")
.attr("transform", `translate(${margin.left},${radius+margin.top})`);

var nodes = tree.nodes(root);
var min = Math.abs(Math.min.apply(Math,nodes.map(function(node){return node.x;})));


var diagonal = d3.svg.diagonal().projection(function(d) { return [d.x+min+radius, d.y]; });

var links = tree.links(nodes);

var i = 0;
var node = svg.selectAll("g.node").data(nodes, function(d) { return d.id || (d.id = ++i); });


//Enter the nodes.
var nodeG = node.enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) {
    return "translate(" + (d.x+min+radius) + "," + d.y + ")";
  })

nodeG.append("circle")
  .attr("r", radius)
  .style("fill", "#fff");

nodeG.append("text")
  .attr("y", function(d) {
    return d.children || d._children ? radius*-2 : radius*2; })
  .attr("dy", ".35em")
  .attr("text-anchor", "middle")
  .text(function(d) { return d.name; })
  .style("fill-opacity", 1)
  .style("font-size",font_size);



var link = svg.selectAll("path.link").data(links, function(d) { return d.target.id; });

  // Enter the links.
link.enter().insert("path", "g")
  .attr("class", "link")
  .attr("d", diagonal);


var gege = $("g")[0].getBoundingClientRect();
$("svg").height(gege.height+1);
$("svg").width(gege.width+1);
}