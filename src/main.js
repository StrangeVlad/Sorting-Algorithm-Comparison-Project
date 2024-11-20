import bubbleSort from "../functions/bubbleSort.js";
import selectionSort from "../functions/selectionSort.js";
import insertionSort from "../functions/insertionSort.js";
import mergeSort from "../functions/mergeSort.js";
import quickSort from "../functions/quickSort.js";
import heapSort from "../functions/heapSort.js";

import generateRandomArray from "../data/sampleData.js";
import { measureExecutionTime } from "./timing.js";
import drawChart from "./chart.js";

const algorithms = {
  bubbleSort: bubbleSort,
  selectionSort: selectionSort,
  insertionSort: insertionSort,
  mergeSort: mergeSort,
  quickSort: quickSort,
  heapSort: heapSort,
};

const sizes = [0, 10, 100, 1000, 10000, 15000];
const results = {};

for (let [name, algorithm] of Object.entries(algorithms)) {
  results[name] = [];
  for (let size of sizes) {
    if (size === 0) {
      results[name].push(0.1);
    } else {
      const array = generateRandomArray(size);
      const time = await measureExecutionTime(algorithm, array);
      results[name].push(time);
    }
  }
}
// Function to create the table
function createResultsTable(results) {
  const tableBody = document.querySelector("#resultTable tbody");
  tableBody.innerHTML = ""; // Clear any previous data

  for (let [algorithm, times] of Object.entries(results)) {
    const row = document.createElement("tr");
    const algorithmCell = document.createElement("td");
    algorithmCell.textContent = algorithm;
    row.appendChild(algorithmCell);

    times.forEach((time) => {
      const timeCell = document.createElement("td");
      timeCell.textContent = `${time.toFixed(3)} ms`;
      row.appendChild(timeCell);
    });

    tableBody.appendChild(row);
  }
}

// Call the function to create the table
createResultsTable(results);
drawChart(results);
export default results;
