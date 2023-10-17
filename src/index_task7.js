function countWords(sentence) {
  var words = sentence.split(" ");
  return words.length;
}

var sentence = prompt("Введите предложение:");
var result = countWords(sentence);
console.log("Количество слов в предложении:", result);

