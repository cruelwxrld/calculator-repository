function calculateBalance(incomes, expenses) {
  var totalIncome = sumValues(incomes);
  var totalExpense = sumValues(expenses);

  var balance = totalIncome - totalExpense;
  return balance;
}

function sumValues(list) {
  var values = list.split(",");

  var sum = 0;
  for (var i = 0; i < values.length; i++) {
    var value = parseFloat(values[i]);
    sum += value;
  }
  return sum;
}

var incomes = prompt("Введите список доходов (разделенных запятыми):");
var expenses = prompt("Введите список расходов (разделенных запятыми):");

var result = calculateBalance(incomes, expenses);
console.log("Баланс:", result);
