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

document
  .getElementById("algorithmForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const maxSize = parseInt(document.getElementById("maxSize").value);
    const selectedAlgorithms = Array.from(
      document.getElementById("algorithms").selectedOptions
    ).map((option) => option.value);

    const results = await runAlgorithms(selectedAlgorithms, maxSize);

    createResultsTable(results);
    drawChart(results);
  });

document
  .getElementById("runAllButton")
  .addEventListener("click", async function () {
    const maxSize = parseInt(document.getElementById("maxSize").value);
    const allAlgorithms = Object.keys(algorithms);

    const results = await runAlgorithms(allAlgorithms, maxSize);

    createResultsTable(results);
    drawChart(results);
  });

async function runAlgorithms(algorithmsToRun, maxSize) {
  const sizes = [0, 10, 100, 1000, 10000, 100000].filter(
    (size) => size <= maxSize
  );
  const results = {};

  for (let name of algorithmsToRun) {
    results[name] = [];
    for (let size of sizes) {
      if (size === 0) {
        results[name].push(0.1);
      } else {
        const array = generateRandomArray(size);
        const time = await measureExecutionTime(algorithms[name], array);
        results[name].push(time);
      }
    }
  }
  return results;
}

function createResultsTable(results) {
  const tableBody = document.querySelector("#resultTable tbody");
  tableBody.innerHTML = "";

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
