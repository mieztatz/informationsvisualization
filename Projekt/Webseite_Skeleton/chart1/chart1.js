/* implementation heavily influenced by http://bl.ocks.org/1166403 */

var year = 1885;
// define dimensions of graph
var m = [50, 50, 50, 50]; // margins
var w = 1000 - m[1] - m[3];	// width
var h = 400 - m[0] - m[2]; // height

// create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
var beerpricePerYear = [3.20, 3.30, 3.37, 3.45, 3.60, 3.77, 4.21, 4.42, 4.71, 4.89, 5.15, 5.24, 5.45, 5.60, 5.80, 6.35, 6.47, 6.75, 6.75,
7.02, 7.15, 7.42, 7.85, 8.25, 8.53, 8.79, 9.09, 9.41, 9.78, 9.98, 10.27, 10.57];

var visitorsPerYear = [54541, 53807, 51842, 50951, 51241, 54300, 54686, 48888, 51933, 52108, 50162, 52622, 55891, 54782, 60054, 64591,
48698, 57614, 62294, 61163, 61772, 68617, 69406, 64922, 66436, 71000, 79225, 74025, 77031, 76808, 75134, 66231];

var years = [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
2013, 2014, 2015, 2016, 2016];
// X scale will fit all values from data[] within pixels 0-w
var x = d3.scale.ordinal().domain(years).rangeRoundBands([0, w], 1);

// Y scale will fit values from 0-d3.max(data) within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
var y1 = d3.scale.linear().domain([0, d3.max(beerpricePerYear)]).range([h, 0]);
var y2 = d3.scale.linear().domain([0, d3.max(visitorsPerYear)]).range([h, 0]);

// create a line function that can convert data[] into x and y points
var line1 = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function(d,i) {
        // return the X coordinate where we want to plot this datapoint
        return x(i);
    })
    .y(function(d) {
        // return the Y coordinate where we want to plot this datapoint
        return y1(d);
    })

// create a line function that can convert data[] into x and y points
var line2 = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function(d,i) {
        // return the X coordinate where we want to plot this datapoint
        return x(i);
    })
    .y(function(d) {
        // return the Y coordinate where we want to plot this datapoint
        return y2(d);
    })


    // Add an SVG element with the desired dimensions and margin.
    var graph = d3.select("#chart1").append("svg:svg")
          .attr("width", w + m[1] + m[3])
          .attr("height", h + m[0] + m[2])
        .append("svg:g")
          .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

    // create yAxis
    var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(false); // True adds additional lines, which are not needed
    // Add the x-axis.
    graph.append("svg:g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + h + ")")
          .call(xAxis);

    // Updates chart1 after click on year (link) and also updates the gauge, and per_person_consumption
    d3.select(".x.axis text").classed("active", true);
    d3.selectAll(".x.axis text")
    .on("click", function(year) {
      // Set color of labels
      graph.selectAll(".x.axis text").classed("active", false);
      d3.select(this).classed("active", true);

      updateGauge(year); // in file chart2_1
    });

    // create left yAxis
    var yAxisLeft = d3.svg.axis().scale(y1).ticks(4).orient("left");
    // Add the y-axis to the left
    graph.append("svg:g")
          .attr("class", "y axis axisLeft")
          .attr("transform", "translate(-5,0)")
          .call(yAxisLeft);

    // create right yAxis
    var yAxisRight = d3.svg.axis().scale(y2).ticks(6).orient("right");
    // Add the y-axis to the right
    graph.append("svg:g")
          .attr("class", "y axis axisRight")
          .attr("transform", "translate(" + (w+5) + ",0)")
          .call(yAxisRight);

    // add lines
    // do this AFTER the axes above so that the line is above the tick-lines
    graph.append("svg:path").attr("d", line1(beerpricePerYear)).attr("class", "beerpricePerYear");
    graph.append("svg:path").attr("d", line2(visitorsPerYear)).attr("class", "visitorsPerYear");
