function getHammingWeight(number) {
  var binaryString = number.toString(2); // Преобразуем число в двоичную строку
  var weight = 0;

  for (var i = 0; i < binaryString.length; i++) {
    if (binaryString.charAt(i) === '1') {
      weight++;
    }
  }

  return weight;
}

console.log(getHammingWeight(0));   // 0
console.log(getHammingWeight(4));   // 1
console.log(getHammingWeight(101)); // 4