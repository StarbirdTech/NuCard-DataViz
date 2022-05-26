const latenessDoughnutChartData = {
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
  
  const latenessDoughnutChartConfig = {
    type: "doughnut",
    data: latenessDoughnutChartData,
  };
  
  const latenessDoughnutChart = new Chart(
    document.getElementById("latenessDoughnutChart"),
    latenessDoughnutChartConfig
  );