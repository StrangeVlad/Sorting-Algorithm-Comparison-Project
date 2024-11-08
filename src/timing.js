export async function measureExecutionTime(sortFunction, array) {
  const start = performance.now();
  sortFunction([...array]);
  const end = performance.now();
  return end - start;
}
