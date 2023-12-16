// Write your code here
/*
 function getStudnets
 boolean hasTechingAssistant

 hasTechingAssistant = true 
 => ["Teacher","Assistant", "student"]
 hasTechingAssistant = false
 => ["Teahcer","student"]
*/

function getStudents(classroom) {
  let {hasTeacherAssistant, classList} = classroom;
  let teacher, teachingAssistant, students;
  if(hasTeacherAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}
console.log(getStudents({
  hasTeacherAssistant: false,
  classList: ["David", "Michael", "John", "Bob"]
}));
