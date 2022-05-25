things = [[10,5,15,5,5],[5,5,4,5,5],[5,5,5,5,5],[5,5,5,5,5]];

const pieLineData = {
  labels: ["1", "2", "3", "4", "5"],
  datasets: [
    {
      data: combineData(things, 0, 1),
      backgroundColor: color.Green,
      borderColor: color.Green,
      fill: 'start',
    },
    {
      data: combineData(things, 0, 2),
      backgroundColor: color.Red,
      borderColor: color.Red,
      fill: '-1',
    },
    {
      data: combineData(things, 0, 3),
      backgroundColor: color.Blue,
      borderColor: color.Blue,
      fill: '-1',
    },
    {
      data: combineData(things, 0, 4),
      backgroundColor: color.Black,
      borderColor: color.Black,
      fill: '-1',
    },
  ],
};

const pieLineConfig = {
  type: "line",
  data: pieLineData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      }
    },
  },
};

const mypieLineChart = new Chart(document.getElementById("pieLine"), pieLineConfig);
