function reverseStringWithException(str, exception) {
  const words = str.split(" ");
  const reversedWords = words.map(word => {
    if (word !== exception) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });
  return reversedWords.join(" ");
}

const str = prompt("Введите строку:");
const exception = prompt("Введите слово-исключение:");

const result = reverseStringWithException(str, exception);
console.log(result);
