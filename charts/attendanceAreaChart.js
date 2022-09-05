function setChartType(type) {
  latenessAreaChartConfig.type = type;
  console.log(latenessAreaChartConfig.type);
  latenessAreaChart.update();

  if (checkChartType("line")) {
    document.getElementById("typeSwitchButton line").style.borderColor='#000000';
  } else {
    document.getElementById("typeSwitchButton line").style.borderColor='#ffffff';
  }
  if (checkChartType("bar")) {
    document.getElementById("typeSwitchButton bar").style.borderColor='#000000';
  } else {
    document.getElementById("typeSwitchButton bar").style.borderColor='#ffffff';
  }
}

function checkChartType(value) {
  if (value == latenessAreaChartConfig.type) {return true}
  else {return false}
}

function changeFocusTime(time) {
  if (time == "am") {
    attendanceAreaChartConfig.options.scales.y.min = 480;
    attendanceAreaChartConfig.options.scales.y.max = 600;
  }
  else if (time == "pm") {
    attendanceAreaChartConfig.options.scales.y.min = 840;
    attendanceAreaChartConfig.options.scales.y.max = 960;
  }
  attendanceAreaChart.update();
}

const attendanceAreaChartData = {
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
      },
      {
        label: " ",
        data: [540, 540, 540, 540, 540, 540, 540, 540, 540, 540, 540, 540, 540, 540],
        backgroundColor: '#00000000',
        borderColor: '#00000000',
        pointHitRadius: 0,
        fill: {
          target: {value: 890},
          below: color.Green
        }
      }   
    ],
  };

  const attendanceAreaChartConfig = {
    type: "line",
    data: attendanceAreaChartData,
    options: {/*
      bands: {
        yValue: 540,
    },*/
      scales: {
        y: {
          min: 480,
          max: 960,
          ticks: {
            callback: (v, i) => this.displayDataAsString(v, i),
            stepSize: 60, 
          },
        },
      },
    },
  };

  const attendanceAreaChart = new Chart(document.getElementById("attendanceAreaChart"), attendanceAreaChartConfig);
