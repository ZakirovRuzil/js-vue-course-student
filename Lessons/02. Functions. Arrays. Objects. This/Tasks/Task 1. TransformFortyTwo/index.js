function transformFortyTwo(arr) {
  return arr.map(function(num) {
    if (num % 42 === 0) {
      return 'forty two!';
    } else {
      return num;
    }
  });
}

console.log(transformFortyTwo([1, 2, 7]));            // [1, 2, 7]
console.log(transformFortyTwo([12, 42, 25]));        // [12, 'forty two!', 25]
console.log(transformFortyTwo([424, 4235, 882, 32])); // [424, 4235, 'forty two!', 32]
console.log(transformFortyTwo([]));                  // []
