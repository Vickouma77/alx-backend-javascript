const cleanSet = (set, start) => {
  const newSet = new Set();
  set.forEach((value) => {
    if (value.startsWith(start) && start !== '') {
      newSet.add(value.slice(start.length));
    }
  });
  return Array.from(newSet).join('-');
};

export default cleanSet;
