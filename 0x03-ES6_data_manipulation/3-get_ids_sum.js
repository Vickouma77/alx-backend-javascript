function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.reduce((sum, item) => sum + item.id, 0);
}

export default getStudentIdsSum;
