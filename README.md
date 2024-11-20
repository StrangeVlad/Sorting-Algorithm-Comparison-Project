# Sorting Algorithm Comparison Project

# Note

**You can statrt directly the test using Live Server Vscode Extension**
**Report PDF file is inside the report folder**
**if the website took too long to load try to modify the array in the main.js file from 100000 to 15000 or the opposite**

## Overview

This project compares the performance of several sorting algorithms (Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort) using JavaScript and visualizes the results with Chart.js. The analysis includes different input sizes, allowing users to observe how each algorithm scales in terms of efficiency.

## Features

- **Performance Analysis**: Measures and visualizes the runtime of various sorting algorithms across multiple input sizes.
- **Interactive Chart**: Displays performance curves using Chart.js for easy interpretation.
- **Customizable Array Generator**: Generates random arrays of varying sizes for testing.

## Technologies Used

- **JavaScript**: Core programming language for implementing the sorting algorithms and generating random arrays.
- **Chart.js**: JavaScript library used for plotting performance data.
- **npm**: For managing dependencies and setting up the project environment.

## Getting Started

### Prerequisites

To run this project, you will need:

- **Node.js and npm**: Ensure both are installed to manage dependencies and run the project. You can download them [here](https://nodejs.org/).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/sorting-algorithm-comparison.git
   cd sorting-algorithm-comparison
   ```
2. Install dependencies using npm:

   ```bash
   npm install
   ```

### Running the Project

1. Start the development server (or open index.html directly in a browser if no server setup is needed):

   ```bash
   npm start
   ```

2. Open your browser and go to http://localhost:3000 (or wherever your server runs) to see the project in action.

### Usage

- Experiment with different array sizes to observe how algorithm performance changes.
- Review performance data in the chart for insights into which algorithms perform best for various input sizes.

### Project Structure

- /src: Contains the JavaScript code for main operations (Chart.js, main.js, timing.js).
- /functions: Contains the JavaScript code for sorting algorithms.
- /data: Contains the JavaScript code for array generating.
- /report: Contains:
- - report.pdf: report of the project (.pdf)
- - /images: different chart images attempts.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
