function drawChart(results) {
  const labels = [0, 10, 100, 1000, 10000, 100000];
  const colors = [
    "#FF6384", // Bubble Sort
    "#36A2EB", // Heap Sort
    "#FFCE56", // Insertion Sort
    "#4BC0C0", // Merge Sort
    "#9966FF", // Quick Sort
    "#FF9F40", // Selection Sort
  ];

  const datasets = Object.keys(results).map((algorithm, index) => ({
    label: algorithm,
    data: results[algorithm],
    borderColor: colors[index % colors.length],
    fill: false,
    borderWidth: 2,
    tension: 0.3, 
    pointRadius: 3,
  }));

  new Chart(document.getElementById("chart"), {
    type: "line",
    data: { labels, datasets },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Sorting Algorithm Performance Comparison",
          font: { size: 18, weight: "bold" },
          padding: { top: 10, bottom: 30 },
        },
        legend: {
          position: "top",
          labels: {
            font: { size: 12 },
            padding: 15,
          },
        },
      },
      scales: {
        y: {
          type: "logarithmic",
          title: {
            display: true,
            text: "Execution Time (ms)",
            font: { size: 14, weight: "bold" },
          },
          min: 0,
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value + " ms";
            },
          },
        },
        x: {
          title: {
            display: true,
            text: "Array Size",
            font: { size: 14, weight: "bold" },
          },
          min: 0,
          beginAtZero: true,
        },
      },
    },
  });
}

export default drawChart;
