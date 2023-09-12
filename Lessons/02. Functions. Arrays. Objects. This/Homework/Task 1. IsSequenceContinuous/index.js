function isSequenceContinuous(sequence) {
  if (sequence.length <= 1) {
    return false;
  }

  for (var i = 1; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i - 1] + 1) {
      return false;
    }
  }

  return true;
}

console.log(isSequenceContinuous([10, 11, 12, 13]));     // true
console.log(isSequenceContinuous([-5, -4, -3]));         // true
console.log(isSequenceContinuous([10, 11, 12, 14, 15])); // false
console.log(isSequenceContinuous([1, 2, 2, 3]));         // false
console.log(isSequenceContinuous([7]));                  // false
console.log(isSequenceContinuous([]));                   // false
