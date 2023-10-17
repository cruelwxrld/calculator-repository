function calculateDistance(x1, y1, x2, y2) {
  var xDiff = x2 - x1;
  var yDiff = y2 - y1;
  
  var distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  
  return distance;
}

var x1 = parseFloat(prompt("Введите координату x первой точки:"));
var y1 = parseFloat(prompt("Введите координату y первой точки:"));
var x2 = parseFloat(prompt("Введите координату x второй точки:"));
var y2 = parseFloat(prompt("Введите координату y второй точки:"));

var result = calculateDistance(x1, y1, x2, y2);
console.log("Расстояние между точками:", result);
