
d3v3.csv("chart4/data.csv", function(error, data) {


  var ctx = document.getElementById("chart4").getContext("2d");
  window.myBar = new Chart(ctx, {
      type: 'bar',
      data: {
        labels:   data.map(d => d['Jahr']),
        datasets: [{
            label: 'Touristen',
            backgroundColor: "#4682b4",
            borderColor: '#4682b4',
            borderWidth: 1,
            data: data.map(d => d['Touristen'])
        }, {
            label: 'Oktoberfestbesucher',
            backgroundColor: '#FFA500',
            borderColor: '#FFA500',
            borderWidth: 1,
            data: data.map(d => d['Oktoberfestbesucher'])
        }]
      },
      options: {
          responsive: true,
          legend: {
              position: 'top',
          },
          title: {
              display: true,
              text: 'Chart.js Bar Chart'
          },
          scales: {
            yAxes: [{
                ticks: {
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
