function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter((item) => item.location === city);
}

export default getStudentsByLocation;
