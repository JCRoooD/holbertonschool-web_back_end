function updateStudentGradeByCity(students, city, newStudents) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newStudents)) {
    return [];
  }
  const studentsByCity = students.filter((student) => student.location === city);

  const studGraded = studentsByCity.map((student) => {
    const studentGrade = newStudents.filter(
      (newStudent) => newStudent.studentId === student.id
    );

    let grade;

    if (studentGrade[0]) {
      grade = studentGrade[0].grade;
    } else {
      grade = 'N/A';
    }

    return {
      ...student,
      grade,
    };
  });

return studGraded;
}

export default updateStudentGradeByCity;
