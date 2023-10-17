function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

var celsius = parseFloat(prompt("Введите температуру в градусах Цельсия:"));

console.log("Температура в градусах Фаренгейта:", celsiusToFahrenheit(celsius));
