const color = {
  Green: "#32CD32",
  Red: "#D21404",
  Blue: "#0077be",
  Black: "#1b1b1b",
  White: "#FFFFFF",
};
/*
const timeData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
  datasets: [
    {
      label: 'Alice',
      data: [851,848,855,900,853,849,901,853,838,850,845,847,841,851],
      backgroundColor: [color.Red],
      borderColor: [color.Red],
    },
    {
      label: 'Bill',
      data: [900,905,855,848,858,855,905,848,850,841,851,855,857,900],
      backgroundColor: [color.Blue],
      borderColor: [color.Blue],
    }
  ]
};
*/

const timeData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ],
  datasets: [
    {
      label: "Time Start",
      data: [
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
        dateToCurrentTime(2020, 1, 1, 9, 00),
      ],
    },
    {
      label: "Time End",
      data: [
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
        dateToCurrentTime(2020, 1, 1, 14, 50),
      ],
    },
    {
      label: "Average",
      data: [
        dateToCurrentTime(2022, 6, 23, 9, 30),
        dateToCurrentTime(2022, 6, 23, 9, 00),
        dateToCurrentTime(2022, 6, 23, 9, 00),
        dateToCurrentTime(2022, 6, 23, 9, 00),
        dateToCurrentTime(2022, 6, 23, 9, 00),
        dateToCurrentTime(2022, 6, 23, 9, 00),
        dateToCurrentTime(2022, 6, 23, 9, 30),
        dateToCurrentTime(2022, 6, 23, 9, 30),
        dateToCurrentTime(2022, 6, 23, 9, 30),
        dateToCurrentTime(2022, 6, 23, 9, 30),
        dateToCurrentTime(2022, 6, 23, 9, 15),
        dateToCurrentTime(2022, 6, 23, 9, 30),
        dateToCurrentTime(2022, 6, 23, 9, 30),
        dateToCurrentTime(2022, 6, 23, 9, 30),
      ],
      backgroundColor: [color.Blue],
      borderColor: [color.Blue],
    },
    {
      label: "Your Arrival",
      data: [
        dateToCurrentTime(2022, 6, 23, 10, 30),
        dateToCurrentTime(2022, 6, 23, 8, 00),
        dateToCurrentTime(2022, 6, 23, 8, 00),
        dateToCurrentTime(2022, 6, 23, 8, 00),
        dateToCurrentTime(2022, 6, 23, 8, 00),
        dateToCurrentTime(2022, 6, 23, 8, 00),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 15),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 30),
        dateToCurrentTime(2022, 6, 23, 8, 30),
      ],
      backgroundColor: [color.Black],
      borderColor: [color.Black],
      fill: {
        target: '0',
        above: color.Red,
        below: color.Green
      }
    },
    {
      label: "Your Departure",
      data: [
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 05),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
        dateToCurrentTime(2022, 6, 23, 15, 00),
      ],
      backgroundColor: [color.Black],
      borderColor: [color.Black],
      fill: {
        target: '1',
        above: color.Green,
        below: color.Red
      }
    }
    /*,
    {
      label: 'Bill',
      data: [900,905,855,848,858,855,905,848,850,841,851,855,857,900],
      backgroundColor: [color.Blue],
      borderColor: [color.Blue],
    }*/,
  ],
};

function dateToCurrentTime(y, mo, d, h, m) {
  d = new Date(y, mo, d, h, m);
  current = d.getHours() * 60 + d.getMinutes();
  return current;
}

function displayDataAsString(v, i, t) {
  //console.log(i);
  if (v / 60 == 12) return 12 + ":" + (v % 60);
  else return  ((v / 60) % 12) + ":" + (v % 60);
}

const pieData = {
  labels: ["On Time", "Late", "Sleep", "Transportation"],
  datasets: [
    {
      data: [25, 5, 15, 5],
      backgroundColor: [
        color.Green, // On Time
        color.Red, // Late
        color.Blue, // Sleep
        color.Black, // Transportation
      ],
    },
  ],
};

const lineConfig = {
  type: "line",
  data: timeData,
  options: {
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
