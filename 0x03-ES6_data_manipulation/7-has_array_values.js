const hasValuesFromArray = (arr, values) => {
  if (!Array.isArray(arr) || !Array.isArray(values)) {
    return false;
  }
  return values.every((item) => arr.includes(item));
};

export default hasValuesFromArray;
