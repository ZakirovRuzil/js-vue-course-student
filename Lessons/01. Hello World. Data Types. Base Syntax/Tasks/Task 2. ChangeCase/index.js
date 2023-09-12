function changeCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

console.log(changeCase('Hello, World!')); // hELLO, wORLD!
console.log(changeCase('I loVe itis'));   // i LOvE ITIS