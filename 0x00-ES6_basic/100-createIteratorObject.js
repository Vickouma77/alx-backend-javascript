export default function createIteratorObject(report) {
  const result = [];
  for (const value of Object.values(report.allEmployees)) {
    result.push(...value);
  }
  return result;
}
