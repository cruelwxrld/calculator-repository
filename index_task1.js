function incomeTaxCalculator(income) {
  var tax = income * 0.15;
  return tax;
}

var income = parseFloat(prompt("Введите сумму дохода:"));

console.log("Сумма налога на доходы:", incomeTaxCalculator(income));
