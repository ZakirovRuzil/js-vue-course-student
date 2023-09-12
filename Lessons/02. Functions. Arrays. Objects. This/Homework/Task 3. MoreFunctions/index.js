function moreFunction(number) {
  return function(arr) {
    return arr.map(function(num) {
      return num / number;
    });
  }
}

const newFunction = moreFunction(2);
console.log(newFunction([10, 11, 12, 20])); // [5, 5.5, 6, 10]
