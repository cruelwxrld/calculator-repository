function calculateAverageGrade(grades) {
  var gradesArray = grades.split(",");
  
  var sum = 0;
  for (var i = 0; i < gradesArray.length; i++) {
    var grade = parseInt(gradesArray[i]);
    sum += grade;
  }
  
  var average = sum / gradesArray.length;
  return average.toFixed(2);
}

var grades = prompt("Введите список оценок (разделенных запятыми):");
var averageGrade = calculateAverageGrade(grades);
console.log("Средняя оценка:", averageGrade);

