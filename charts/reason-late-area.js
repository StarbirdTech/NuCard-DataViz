// TODO
// ✅ count the number of sleep, transit, and other
// ✅ do this for each day
// ✅ convert the data to a percentage
// ✅ map the data to the same scale

// ✅ use function to stack datasets on top of each other
// ✅ label y axis with % sign
// ✅ label x axis with dates
// ⬛ parse dates on x axis to improve readability
// ⬛ make data stacking respect data visibility

///////////////////////////////////////////

const dateLabels = [];

function getDates() {
  for (let i = 0; i < data.length; i++) {
    dateLabels.push(data[i].date);
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

const stackedData = [];

function stackData() {
  for (let day = 0; day < data.length; day++) {
    for (let i = 0; i < packagedData.length; i++) {
      let sum = 0;
      stackedData.push([]);
      for (let j = 0; j < i+1; j++) {
        sum += packagedData[j][day];
      }
      if (sum > 100) {sum = 100}
      stackedData[i].push(sum); 
    }
  }
}

stackData();

///////////////////////////////////////////

const pieLineData = {
  labels: dateLabels,
  datasets: [
    {
      label: "Sleep",
      data: stackedData[0],
      //data: [data[0].reason[0].percent],
      backgroundColor: color.Green,
      borderColor: color.Green,
      fill: 'start',
    },
    {
      label: "Transit",
      data: stackedData[1],
      //data: [data[0].reason[1].percent + data[0].reason[0].percent],
      backgroundColor: color.Red,
      borderColor: color.Red,
      fill: '-1',
    },
    {
      label: "Other",
      data: stackedData[2],
      //data: [data[0].reason[2].percent + data[0].reason[1].percent + data[0].reason[0].percent],
      backgroundColor: color.Blue,
      borderColor: color.Blue,
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
        ticks: {
          callback: function(value, index, ticks) {
            return value + '%';
          }
        }
      }
    }
  }
};

const mypieLineChart = new Chart(document.getElementById("pieLine"), pieLineConfig);
