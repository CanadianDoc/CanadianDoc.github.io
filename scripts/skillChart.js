var skills = [
    { name: "Software Development", connections: ["Git", "Unity", "Database", "Server", "Programming Languages"]},
    { name: "Programming Languages", connections: ["Python", "Java", "C#", "C++", "HTML", "CSS", "PHP"]},    
    { name: "Web Development", connections: ["Node.JS", "React", "Laravel", "Programming Languages"]},
    { name: "Game Development", connections: ["Unity", "C#", "C++"]},
    { name: "Database", connections: ["MySQL", "Docker", "Server"] },
    { name: "Server", connections: ["AWS", "DigitalOcean", "Database", "Git"]},
    { name: "Git", connections: [] },
    { name: "Unity", connections: [] },
    { name: "Node.JS", connections: [] },
    { name: "React", connections: [] },
    { name: "Laravel", connections: [] },
    { name: "MySQL", connections: [] },
    { name: "Docker", connections: [] },
    { name: "AWS", connections: [] },
    { name: "DigitalOcean", connections: [] },
    { name: "Java", connections: [] },
    { name: "C#", connections: [] },
    { name: "C++", connections: [] },
    { name: "HTML", connections: [] },
    { name: "CSS", connections: [] },
    { name: "PHP", connections: [] },
    { name: "JavaScript", connections: [] },
    { name: "Python", connections: [] },
    { name: "Machine Learning", connections: ["Python"] },
];


var nodes = {};
var links = [];

const color = d3.scaleOrdinal(d3.schemeCategory10);

skills.forEach(function(skill) {
    nodes[skill.name] = { name: skill.name };
});
    
skills.forEach(function(skill) {
    skill.connections.forEach(function(connection) {
        links.push({ source: nodes[skill.name], target: nodes[connection] });
    });
});

var width = window.innerWidth;
var height = window.innerHeight;


var force = d3.forceSimulation()
    .nodes(Object.values(nodes))
    .force("link", d3.forceLink(links).distance(150).strength(1))
    .force("charge", d3.forceManyBody().strength(-500))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", tick);

var linkForce = d3.forceLink(links).id(function(d) { return d.name; }).distance(100).strength(1);
linkForce.distance(function(d) {
    var distance = Math.sqrt((d.source.x - d.target.x) ** 2 + (d.source.y - d.target.y) ** 2);
    return Math.min(200, Math.max(50, distance));
});

var collisionForce = d3.forceCollide(15);
force.force("collision", collisionForce);


var svg = d3.select(".skillChart").append("svg")
    .attr("width", width)
    .attr("height", height);

var path = svg.append("g").selectAll("path")
    .data(links)
    .enter().append("path")
    .attr("class", "link")
    .attr("stroke", "#ccc")
    .attr("stroke-width", 1);

var node = svg.selectAll(".node")
    .data(force.nodes())
    .enter().append("g")
    .attr("class", "node")
    .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
    .on("click", function(event, d) {
        event.stopPropagation();
        d3.selectAll("circle")
            .transition()
            .duration(300)
            .attr("r", 10);
        d3.selectAll("text")
            .transition()
            .duration(300)
            .style("font-size", "15px");
        d3.select(this).select("circle")
            .transition()
            .duration(300)
            .attr("r", 30);
        d3.select(this).select("text")
            .transition()
            .duration(300)
            .style("font-size", "40px");
    });

node.append("circle")
    .attr("r", 10)
    .style("fill", function(d) { return color(d.name); });


node.append("text")
    .attr("x", 10)
    .attr("dy", ".35em")
    .style("font-size", "15px")
    .text(function(d) { return d.name; });

function tick() {
    path.attr("d", function(d) {
        return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
    });
    
    node.attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
    });
}

function dragstarted(event) {
    if (!event.active) force.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
}

function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
}

function dragended(event) {
    if (!event.active) force.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
}

svg.on("click", function() {
    d3.selectAll("circle")
        .transition()
        .duration(300)
        .attr("r", 10);  
    d3.selectAll("text")
        .transition()
        .duration(300)
        .style("font-size", "15px"); 
});

window.addEventListener('resize', resize);

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;

    svg.attr('width', width).attr('height', height);
    force.force('center', d3.forceCenter(width / 2, height / 2))
    force.restart();
}