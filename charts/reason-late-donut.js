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
  
  const donutConfig = {
    type: "doughnut",
    data: pieData,
  };
  
  const myLineChart = new Chart(
    document.getElementById("donutGraph"),
    donutConfig
  );