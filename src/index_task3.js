function calculateDiscount(price, discountPercentage) {
  var discountAmount = price * (discountPercentage / 100);
  var discountedPrice = price - discountAmount;
  return discountedPrice;
}

var price = parseFloat(prompt("Введите цену товара:"));
var discountPercentage = parseFloat(prompt("Введите процент скидки:"));

console.log("Цена с учетом скидки:", calculateDiscount(price, discountPercentage));
