var width_sp = 400,
    height_sp = 200;

var n_sp = 30,
    m_sp = 12,
    degrees = 180 / Math.PI;

var spermatozoa = d3v3.range(n_sp).map(function() {
  var x = Math.random() * width_sp,
      y = Math.random() * height_sp;
  return {
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1,
    path: d3v3.range(m_sp).map(function() { return [x, y]; }),
    count: 0
  };
});

var svg_sp = d3v3.select("#chart5").append("svg")
    .attr("width", width_sp)
    .attr("height", height_sp);

var g_sp = svg_sp.selectAll("g")
    .data(spermatozoa)
  .enter().append("g");

var head = g_sp.append("ellipse")
    .attr("rx", 6.5)
    .attr("ry", 4);

g_sp.append("path")
    .datum(function(d) { return d.path.slice(0, 3); })
    .attr("class", "mid");

g_sp.append("path")
    .datum(function(d) { return d.path; })
    .attr("class", "tail");

var tail = g_sp.selectAll("path")
    .style("fill", "none")
    .style("stroke", "#D8D8D8")
    .style("stroke-linecap", "round");


d3v3.timer(function() {
  for (var i = -1; ++i < n_sp;) {
    var spermatozoon = spermatozoa[i],
        path = spermatozoon.path,
        dx = spermatozoon.vx,
        dy = spermatozoon.vy,
        x = path[0][0] += dx,
        y = path[0][1] += dy,
        speed = Math.sqrt(dx * dx + dy * dy),
        count = speed * 10,
        k1 = -5 - speed / 3;

    // Bounce off the walls
    if (x < 0 || x > width_sp) spermatozoon.vx *= -1;
    if (y < 0 || y > height_sp) spermatozoon.vy *= -1;

    // Swimming
    for (var j = 0; ++j < m_sp;) {
      var vx = x - path[j][0],
          vy = y - path[j][1],
          k2 = Math.sin(((spermatozoon.count += count) + j * 3) / 300) / speed;
      path[j][0] = (x += dx / speed * k1) - dy * k2;
      path[j][1] = (y += dy / speed * k1) + dx * k2;
      speed = Math.sqrt((dx = vx) * dx + (dy = vy) * dy);
    }
  }

  head.attr("transform", headTransform);
  tail.attr("d", tailPath);
});

function headTransform(d) {
  return "translate(" + d.path[0] + ")rotate(" + Math.atan2(d.vy, d.vx) * degrees + ")";
}

function tailPath(d) {
  return "M" + d.join("L");
}
