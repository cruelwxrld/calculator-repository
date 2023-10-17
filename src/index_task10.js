function generateRandomEquation() {
  var a = Math.floor(Math.random() * 10) + 1; // случайное число от 1 до 10
  var b = Math.floor(Math.random() * 10) + 1;
  var c = Math.floor(Math.random() * 10) + 1;

  var equation = a + "x + " + b + " = " + c;
  return equation;
}

var randomEquation = generateRandomEquation();
console.log("Случайное уравнение:", randomEquation);

