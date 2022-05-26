const color = {
  Green: "#32CD32",
  Red: "#D21404",
  Blue: "#0077be",
  Black: "#1b1b1b",
};

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

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
