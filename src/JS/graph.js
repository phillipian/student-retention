var chart = Highcharts.chart('senior-class', {
  chart: {
    type: 'area',
    style: {
      fontFamily: "sans-serif",
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Senior Class Sizes Including PGs through the Years',
    style: {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: '<i>Note: merged with Abbot Academy in 1973-1974; the data is based on the directory (two members of the Class of 2020 have left since)</i>'
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
        text: 'Graduating Years',
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
      text: 'Size of the Senior and PG Class',
      style: {
        color: 'black',
        fontWeight: 'bold'
      }
    }
  },
  plotOptions: {
    area: {
      fillOpacity: 0.5,
      color: "#393e85"
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
    name: 'Size of the Senior Class',
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
270,
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
