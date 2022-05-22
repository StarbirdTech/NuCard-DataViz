const color = {'Green':'#32CD32', 'Red':'#D21404', 'Blue':'#0077be', 'Black':'#1b1b1b', 'White':'#FFFFFF'};

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

const data = {
  labels: ['On Time', 'Late', 'Sleep', 'Transportation'],
  datasets: [
    {
      data: [25, 5, 15, 5],
      backgroundColor: [
        color.Green, // On Time
        color.Red, // Late
        color.Blue, // Sleep
        color.Black, // Transportation
      ]
    }]
};

const lineConfig = {
  type: 'line',
  data: timeData,
}

const donutConfig = {
  type: 'doughnut',
  data: data,
}

const myChart = new Chart(
  document.getElementById('lineGraph'),
  lineConfig
)

const myLineChart = new Chart(
  document.getElementById('donutGraph'),
  donutConfig
);
