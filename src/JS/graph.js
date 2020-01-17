var chart = Highcharts.chart('senior-class', {
  chart: {
    type: 'area',
    style: {
      fontFamily: "sans-serif",
      fontSize: '15px'
    },
    backgroundColor: "white"
  },
  title: {
    text: 'Senior Class Sizes through the Years <br/>Including PGs',
    style: {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: '<i>Note: Data taken from directories at release (since then, two students in Class of 2020 have left),<br/>Abbot merger in 1973-1974</i>'
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    formatter: function() {
      return '<b>' + this.x + '</b><br>' +
        this.series.name + ': <b>' + this.y + '</b>';
    }
  },
  xAxis: {
    title: {
        text: 'Class Years',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
    },
    categories: [1972,
      1973,
      1974,
      1975,
      1976,
      1977,
      1978,
      1979,
      1980,
      1981,
      1982,
      1983,
      1984,
      1985,
      1986,
      1987,
      1988,
      1989,
      1990,
      1991,
      1992,
      1993,
      1994,
      1995,
      1996,
      1997,
      1998,
      1999,
      2000,
      2001,
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020],
  },
  yAxis: {
    title: {
      text: 'Graduating Class Size',
      style: {
        color: 'black',
        fontWeight: 'bold'
      }
    },
    plotLines: [{
      color: '#6abf8f',
      width: 2,
      value: 419,
      zIndex: 0,
      label: {
        text: "Largest class since merger: 1981 - 419 students",
        align: 'right',
        x: -10,
        style: {
          color: "#6abf8f"
        }
      }
    },
    {
      color: '#d64541',
      width: 2,
      value: 296,
      zIndex: 100,
      label: {
        text: "Smallest class since merger: 2010 - 296 students",
        align: 'left',
        verticalAlign: 'bottom',
        x: 150,
        y: 15,
        style: {
          color: "#d64541"
        }
      }
    },
    {
      color: '#4b77be',
      width: 2,
      value: 305,
      zIndex: 100,
      label: {
        text: "Class of 2020: 2020 - 305 students",
        align: 'left',
        verticalAlign: 'bottom',
        x: 150,
        style: {
          color: "#4b77be"
        }
      }
    }]
  },
  plotOptions: {
    area: {
      fillOpacity: 0.5,
      color: "#947cb0"
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
    name: 'Graduating Class Size',
    data: [260,
282,
381,
383,
393,
336,
375,
362,
392,
419,
389,
400,
417,
405,
397,
388,
399,
415,
405,
376,
377,
365,
372,
375,
355,
364,
363,
347,
334,
311,
313,
314,
316,
317,
318,
328,
307,
332,
296,
338,
315,
327,
339,
343,
324,
319,
339,
327,
305]
  }]
});
