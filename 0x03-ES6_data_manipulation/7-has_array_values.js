const hasValuesFromArray = (arr, values) => {
  const set = new Set(arr);
  return values.every((value) => set.has(value));
};

export default hasValuesFromArray;
