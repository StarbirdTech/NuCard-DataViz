things = [[5,5,4,5,5],[5,5,6,5,5],[5,5,5,5,5],[5,5,5,5,5]];

const count = {
  "sleep": 0,
  "transit": 0,
  "other": 0,
  "total": 0,
}

let best = ["sleep", "transit", "other"];

function listArray(inputData, x, y) {
  this.x = x;
  this.y = y;

  for (let i = 0; i < inputData.length; i++) {
    text(inputData[i], x, y);
    this.y += textSize() + 5;
  }
}


// ✅ count the number of sleep, transit, and other
// ✅ do this for each day
// ✅ convert the data to a percentage
// ✅ map the data to the same scale

// ⬛ use function to stack datasets on top of each other
// ⬛ label y axis with % sign
// ⬛ label x axis with dates


for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].students.length; j++) {
    if (data[i].students[j].reason == "sleep") data[i].reason.sleep.count++;
    else if (data[i].students[j].reason == "transit") data[i].reason.transit.count++;
    else data[i].reason.other.count++;
    data[i].reason.total.count++;
  }
  data[i].reason.sleep.percent = percentage(data[i].reason.sleep.count);
  data[i].reason.transit.percent = percentage(data[i].reason.transit.count);
  data[i].reason.other.percent = percentage(data[i].reason.other.count);
  data[i].reason.total.percent = percentage(data[i].reason.total.count);
}

console.log("sleep: " + data[0].reason.sleep.count + "  " + data[0].reason.sleep.percent + "%");
console.log("transit: " + data[0].reason.transit.count + "  " + data[0].reason.transit.percent + "%");
console.log("other: " + data[0].reason.other.count + "  " + data[0].reason.other.percent + "%");
console.log("total: " + data[0].reason.total.count + "  " + data[0].reason.total.percent + "%");

function percentage(partialValue) {
  return (100 * partialValue) / data[0].reason.total.count;
}

const pieLineData = {
  labels: ["1", "2", "3", "4", "5"],
  datasets: [
    {
      label: "Sleep",
      //data: map_range(combineData(things, 0, 1), 0, 1, 0, 30),
      data: [data[0].reason.sleep.percent],
      backgroundColor: color.Green,
      borderColor: color.Green,
      fill: 'start',
    },
    {
      label: "Transit",
      //data: map_range(combineData(things, 0, 2), 0, 1, 0, 30),
      data: [data[0].reason.transit.percent + data[0].reason.sleep.percent],
      backgroundColor: color.Red,
      borderColor: color.Red,
      fill: '-1',
    },
    {
      label: "Other",
      //data: map_range(combineData(things, 0, 3), 0, 1, 0, 30),
      data: [data[0].reason.other.percent + data[0].reason.transit.percent + data[0].reason.sleep.percent],
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
        beginAtZero: true
      }
    }
  }
};

const mypieLineChart = new Chart(document.getElementById("pieLine"), pieLineConfig);
