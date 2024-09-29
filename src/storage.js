export function storeNewTeacher(newTeacher) {
  console.log(newTeacher);
  const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
  storedTeachers.push(newTeacher);
  localStorage.setItem("teachers", JSON.stringify(storedTeachers));
  //getStoredTeachers(newTeacher.email);
}

/*
export function getStoredTeachers(teacherEmail) {
  const storedData = JSON.parse(localStorage.getItem("teachers")) || [];
  console.log(storedData);
  const isTeacherRegistered = storedData.find(teacher => teacher.email === teacherEmail);
  
  if (isTeacherRegistered) {
    isRegistered(teacherEmail);
  }
  return storedData;
}
  */
