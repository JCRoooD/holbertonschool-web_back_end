function getStudentsIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const reducer = (accumulator, student) => accumulator + student.id;
  return students.reduce(reducer, 0);
}

export default getStudentsIdsSum;