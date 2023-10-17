function calculateEmployeeBonus(salary, performanceRating) {
  if (performanceRating > 8) {
    return salary * 0.2;
  } else {
    return salary * 0.1;
  }
}

const salary = parseFloat(prompt("Введите зарплату сотрудника:"));
const performanceRating = parseFloat(prompt("Введите рейтинг производительности:"));

const bonus = calculateEmployeeBonus(salary, performanceRating);
console.log("Бонус сотрудника составляет: " + bonus);
