function isThreePower(num) {
  if (num === 1) {
    return true;
  }
  
  let power = Math.log(num) / Math.log(3);
  
  return Number.isInteger(power);
}

console.log(isThreePower(1));    // true (3^0)
console.log(isThreePower(2));    // false
console.log(isThreePower(27));   // true (3^3