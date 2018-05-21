$.getJSON(
  'https://api.myjson.com/bins/11e4sy',
  function (data) {

    Highcharts.chart('container', {
      chart: {
        type: 'spline',
        parallelCoordinates: true,
        parallelAxes: {
          lineWidth: 2
        }
      },
      title: {
        text: 'Home Characteristics'
      },
      plotOptions: {
        series: {
          animation: false,
          marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
          },
          states: {
            hover: {
              halo: {
                size: 0
              }
            }
          },
          events: {
            mouseOver: function () {
              this.group.toFront();
            }
          }
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">●</span>' +
          '{series.name}: <b>{point.formattedValue}</b><br/>'
      },
      xAxis: {
        categories: [
          'HouseID',
          'Construction Type:',
          '# of Stories Above Grade',
          'Foundation Type',
          'Square Feet per Floor',
          'Window Distribution*',
          '% Window Area'
        ],
        offset: 10
      },
      yAxis: [{
        tooltipValueFormat: '{value}'
      }, {
          categories: [
            'Multi-family'
          ]
      }, {
          categories: [
            'One',
            'Two'
          ]
      }, {
          categories: [
            'Bsmt',
            'Slab'
          ]
      }, {
        tooltipValueFormat: '{value}'
      }, {
          categories: [
            'PST'
          ]
      }, {
        min: 0,
        tooltipValueFormat: '{value}'
      }],
      colors: ['rgba(11, 200, 200, 0.1)'],
      series: data.map(function (set, i) {
        return {
          name: 'Home ' + i,
          data: set,
          shadow: false
        };
      })
    });
  }
);