function roundAndRootNumber(number) {
  if (number < 0) {
    return 'error';
  }

  var root = Math.sqrt(number);
  var rounded = Math.floor(root * 100) / 100;
  return rounded.toString();
}

console.log(roundAndRootNumber(5843));  // 76.43
console.log(roundAndRootNumber(18248)); // 42.75
console.log(roundAndRootNumber(0));     // 0
console.log(roundAndRootNumber(5));     // 2.23
console.log(roundAndRootNumber(-100));  // 'error'