function calculateRectangleProperties(width, height) {
  var perimeter = 2 * (width + height);
  var area = width * height;
  var rectangleProperties = {
    perimeter: perimeter,
    area: area
  };
  return rectangleProperties;
}

var width = parseFloat(prompt("Введите ширину прямоугольника:"));
var height = parseFloat(prompt("Введите высоту прямоугольника:"));

var result = calculateRectangleProperties(width, height);
console.log("Периметр:", result.perimeter);
console.log("Площадь:", result.area);
