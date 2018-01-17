/* Created with chart.js*/

d3v3.csv("chart4/data.csv", function(error, data) {


  var ctx = document.getElementById("chart4").getContext("2d");
  window.myBar = new Chart(ctx, {
      type: 'bar',
      data: {
        labels:   data.map(d => d['Year']),
        datasets: [{
            label: 'Guests',
            backgroundColor: "#4682b4",
            borderColor: '#4682b4',
            borderWidth: 1,
            data: data.map(d => d['Guests'])
        },{
            label: 'Overnight Stay',
            backgroundColor: "#005399",
            borderColor: '#005399',
            borderWidth: 1,
            data: data.map(d => d['Overnight Stay'])
        }, {
            label: 'Oktoberfest visitors',
            backgroundColor: '#FFA500',
            borderColor: '#FFA500',
            borderWidth: 1,
            data: data.map(d => d['Oktoberfest visitors'])
        }]
      },
      options: {
          responsive: true,
          legend: {
              position: 'top',
          },
          title: {
              display: true,
              text: 'Tourists and Oktoberfest visitors in Munich'
          },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                        return d3.format(",.2r")(value)
                    }
                }
            }]
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItems, data) {
                debugger;
                return d3.format(",.2r")(data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index])
              }
            }
          }
      }
  });



});
