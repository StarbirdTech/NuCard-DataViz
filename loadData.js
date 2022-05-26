calcReasonTotals();
//logReasonTotals();

function calcReasonTotals() {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].students.length; j++) {
      for (let k = 0; k < reasonDict.length-1; k++) {
        if (data[i].students[j].reason == reasonDict[k]) {
          data[i].reason[k].count += 1;
        }
      }
      data[i].reason[3].count++;
    }
    for (let j = 0; j < data[i].reason.length; j++) {
      data[i].reason[j].percent = percentage(data[i].reason[j].count, data[i].reason[3].count);
    }
  }
}

function logReasonTotals() {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].reason.length; j++) {
      console.log(i + " - " + reasonDict[j] + ": " + data[i].reason[j].count + "  " + data[i].reason[j].percent + "%");
    }
  }
}