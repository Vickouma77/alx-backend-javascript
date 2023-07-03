function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((item) => item.id);
}

export default getListStudentIds;
