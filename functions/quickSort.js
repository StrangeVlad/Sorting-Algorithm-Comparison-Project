function quickSort(arr) {
  let n = arr.length;
  if (n <= 1) return arr;
  const pivot = arr[n >> 1];
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);
  return quickSort(left).concat(middle, quickSort(right));
}

export default quickSort;
