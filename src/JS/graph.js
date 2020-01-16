var chart = Highcharts.chart('line-graph', {
    chart: {
        type: 'area',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'What was your rounded Winter 2018-2019 (unweighted) G.P.A.?',
        style: {
          fontWeight: 'bold'
        }
    },
    subtitle: {
      text: '<i>Note: If respondents were between two numbers, they were instructed to round up</i><br><i>to the next closest decimal — a 5.3 G.P.A. would round to a 5.4</i>'
    },
    legend: {
        enabled: false
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>'  + 'Percentage: <b>' + (this.y/10.09).toFixed(1) + '%</b>';
        }
    },
    xAxis: {
        categories: ['6.0', '5.8', '5.6', '5.4', '5.2', '5.0', '4.8', '4.6', '4.4', '4.2', '4.0', '3.8', '3.6', '3.4', '3.2', '3.0', '2,8', '2.6', '2.4', '2.2', '<=2.0'],
    },
    yAxis: {
        title: {
            text: 'Respondents',
            style: {
              color: 'black',
              fontWeight: 'bold'
            }
        }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5,
            color: "#14195c"
        },
        dataLabels: {
          enabled: false,
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    series: [{
        name: 'Responses',
        data: [65, 119, 141, 184, 158, 119, 93, 58, 26, 12, 14, 7, 4, 4, 2, 0, 1, 0, 0, 0, 2]
    }]
});
