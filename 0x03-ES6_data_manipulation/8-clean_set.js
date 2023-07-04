const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((value) => (value !== undefined ? value.startsWith(startString) : ''))
    .map((value) => (value !== undefined ? value.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;
