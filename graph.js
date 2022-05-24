const color = {
  Green: "#32CD32",
  Red: "#D21404",
  Blue: "#0077be",
  Black: "#1b1b1b",
};
/*
const custom_canvas_background_color = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
      scales: { x, y },
    } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = color.Green;
    ctx.fillRect(left, top*1.6, width, height*.735);
    ctx.restore();
  },
};*/

function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

console.log()

const timeData = {
  labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",],
  datasets: [
    {
      label: "Your Arrival",
      data: [
        dateToCurrentTime(2022, 6, 23, 10, 30),
        dateToCurrentTime(2022, 6, 23, 8, 40),
        dateToCurrentTime(2022, 6, 23, 8, 45),
        dateToCurrentTime(2022, 6, 23, 8, 50),
        dateToCurrentTime(2022, 6, 23, 8, 40),
        dateToCurrentTime(2022, 6, 23, 8, 50),
        dateToCurrentTime(2022, 6, 23, 8, 35),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 15),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 30),
      ],
      backgroundColor: '#00000000',
      borderColor: '#00000000',
      fill: {
        target: {value: 540},
        above: color.Red,
        below: color.Green,
      },
    },
    {
      label: "Your Departure",
      data: [
        dateToCurrentTime(2022, 6, 23, 14, 30),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 10),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 05),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 14, 30),
        dateToCurrentTime(2022, 6, 23, 15, 05),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 14, 30),
        dateToCurrentTime(2022, 6, 23, 15, 25),
      ],
      backgroundColor: '#00000000',
      borderColor: '#00000000',
      fill: {
        target: {value: 890},
        above: color.Green,
        below: color.Red
      }
    }
  ],
};

function dateToCurrentTime(y, mo, d, h, m) {
  d = new Date(y, mo, d, h, m);
  current = d.getHours() * 60 + d.getMinutes();
  return current;
}

function displayDataAsString(v, i, t) {
  //console.log(i);
  if (v / 60 == 12) return 12 + ":" + (v % 60) + '0';
  else return  ((v / 60) % 12) + ":" + (v % 60) + '0';
}

const pieData = {
  labels: ["Slept In", "Transportation Issues", "Other"],
  datasets: [
    {
      data: [25, 5, 15],
      backgroundColor: [
        color.Blue, // Late
        color.Black, // Sleep
        color.Red, // Transportation
      ],
    },
  ],
};

const lineConfig = {
  type: "line",
  data: timeData,
  //plugins: [custom_canvas_background_color],
  
  options: {
    bands: {
      yValue: 540
  },
    scales: {
      y: {
        suggestedMin: 510,
        suggestedMax: 890,
        beginAtZero: false,
        ticks: {
          callback: (v, i) => this.displayDataAsString(v, i),
          stepSize: 60, //add a tick every 5 minutes
        },
      },
    },
  },
};

const donutConfig = {
  type: "doughnut",
  data: pieData,
};

const myChart = new Chart(document.getElementById("lineGraph"), lineConfig);

const myLineChart = new Chart(
  document.getElementById("donutGraph"),
  donutConfig
);

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

function combineData(inputData, start = 0, end = inputData.length) {
  let output = [];
  for (let i = 0; i < inputData[0].length; i++) {
    let runningTotal = 0;
    for (let j = start; j < end; j++) {
      runningTotal += inputData[j][i];
    }
    output.push(runningTotal);
  }
  return output;
}

console.log(combineData(things));

const mypieLineChart = new Chart(document.getElementById("pieLine"), pieLineConfig);