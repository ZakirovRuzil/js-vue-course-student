
function getBoomerangsCount(arr) {
  var count = 0;

  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] === arr[i - 1] && arr[i] !== arr[i + 1]) {
      count++;
    }
  }

  return count;
}

console.log(getBoomerangsCount([10, 11, 12, 13]));       // 0
console.log(getBoomerangsCount([10, 11, 10, 13]));       // 1
console.log(getBoomerangsCount([9, 5, 9, 5, 1, 1, 1]));  // 2
console.log(getBoomerangsCount([9, 5, 4, 5, 4, 1, 4]));  // 3
console.log(getBoomerangsCount([]));                     // 0
