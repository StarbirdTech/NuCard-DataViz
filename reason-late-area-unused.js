// function to get the max of an array
function getMax(data) {
    return Math.max.apply(Math, data);
}

function getPercentage() {
  output = [];
  for (let i = 0; i < things.length; i++) {
    output.push(things[i].map(x => x / things[i].reduce((a, b) => a + b)));
  }
  return output;
}

//function to map all the data to the same scale
function mapData(data) {
  let max = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] > max) max = data[i][j];
    }
  }
  return data.map(x => x.map(y => y / max));
}

function stackValues(dIndex, rIndex) {
  return dIndex * (reasonDict.length - 1) + rIndex;
}

console.log(stackValues(2, 1));

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

//stackData();