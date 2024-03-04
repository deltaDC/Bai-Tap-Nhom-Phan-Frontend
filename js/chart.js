var options = {
    series: [{
    name: 'Kỳ thi 1',
    data: [0, 1, 1, 2, 3, 2, 1, 4, 1, 1, 1]
  }, {
    name: 'Kỳ thi 2',
    data: [0, 1, 4, 1, 1, 2, 3, 1, 3, 2, 1]
  }, {
    name: 'Kỳ thi 3',
    data: [0, 1, 1, 2, 2, 1, 4, 2, 1, 2, 1]
  }, {
    name: 'Điểm trung bình',
    data: [0, 0, 2, 2, 3, 2, 3, 2, 3, 1, 1]
  } ],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  },
  yaxis: {
    // title: {
    //   text: '$ (thousands)'
    // }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    // y: {
    //   formatter: function (val) {
    //     return "$ " + val + " thousands"
    //   }
    // }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();