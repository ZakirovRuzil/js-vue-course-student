function getLastWordLength(str) {
  var trimmedStr = str.trim(); // Убираем лишние пробелы с помощью метода trim

  if (trimmedStr === '') {
    return 0; // Если строка после удаления пробелов пуста, возвращаем 0
  }

  var words = trimmedStr.split(' '); // Разбиваем строку на слова

  var lastWord = words[words.length - 1]; // Получаем последнее слово

  return lastWord.length; // Возвращаем длину последнего слова
}

console.log(getLastWordLength(''));                     // 0
console.log(getLastWordLength('hey, I just met you'));  // 3
console.log(getLastWordLength('hello, world!  '));      // 6