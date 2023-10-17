function calculateTime(distance, speed) {
  var timeInHours = distance / speed;
  var hours = Math.floor(timeInHours);
  var minutes = Math.floor((timeInHours % 1) * 60);
  
  var timeString = hours + "ч. " + minutes + "м.";
  return timeString;
}

var distance = parseFloat(prompt("Введите расстояние (в км):"));
var speed = parseFloat(prompt("Введите скорость (в км/ч):"));

var result = calculateTime(distance, speed);
console.log("Время в пути:", result);

