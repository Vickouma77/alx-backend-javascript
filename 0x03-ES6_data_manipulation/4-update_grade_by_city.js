function updateStudentGradeByCity(arr, city, newGrades) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter((item) => item.location === city).map((item) => {
    const grade = newGrades.filter((grade) => grade.studentId === item.id)[0];
    return {
      ...item,
      grade: grade ? grade.grade : 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
