function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  const outcome = students.filter((student) => student.location === city);
  return outcome;
}

export default getStudentsByLocation;
