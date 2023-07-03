export default function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr)) {
    return [];
  }else {
    return arr.filter((item) => item.location === city);
  }
}
