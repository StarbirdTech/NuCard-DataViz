// TODO: Lateness Reasons Area Graph
// ✅ count the number of sleep, transit, and other
// ✅ do this for each day
// ✅ convert the data to a percentage
// ✅ map the data to the same scale

// ✅ use function to stack datasets on top of each other
// ✅ label y axis with % sign
// ✅ label x axis with dates
// ✅ parse dates on x axis to improve readability
// ⬛ style chart type switch buttons

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

///////////////////////////////////////////

const dateLabels = [];

function getDates() {
  for (let i = 0; i < data.length; i++) {
    let d = new Date(data[i].date);
    dateLabels.push(d.toLocaleString("en-US", { month: "long" }) + " " + d.getDate());
  }
}

getDates();

///////////////////////////////////////////

const packagedData = [];

function packageData() {
  for (let i = 0; i < reasonDict.length-1; i++) {
    packagedData.push([]);
    for (let j = 0; j < data.length; j++) {
      packagedData[i].push(data[j].reason[i].percent);
    }
  }
}

packageData();

///////////////////////////////////////////

const latenessAreaChartData = {
  labels: dateLabels,
  datasets: [
    {
      label: "Sleep",
      data: packagedData[0],
      //data: [data[0].reason[0].percent],
      backgroundColor: color.Green,
      borderColor: color.Green,
      fill: 'start',
    },
    {
      label: "Transit",
      data: packagedData[1],
      //data: [data[0].reason[1].percent + data[0].reason[0].percent],
      backgroundColor: color.Red,
      borderColor: color.Red,
      fill: '-1',
    },
    {
      label: "Other",
      data: packagedData[2],
      //data: [data[0].reason[2].percent + data[0].reason[1].percent + data[0].reason[0].percent],
      backgroundColor: color.Blue,
      borderColor: color.Blue,
      fill: '-1',
    },
  ],
};

const latenessAreaChartConfig = {
  type: "bar",
  data: latenessAreaChartData,
  options: {
    scales: {
      y: {
        min: 0,
        max: 100,
        stacked: true,
        beginAtZero: true,
        ticks: {
          callback: function(value, index, ticks) {
            return value + '%';
          }
        }
      },
      x: {
        stacked: true,
      }
    }
  }
};

const latenessAreaChart = new Chart(document.getElementById("latenessAreaChart"), latenessAreaChartConfig);
