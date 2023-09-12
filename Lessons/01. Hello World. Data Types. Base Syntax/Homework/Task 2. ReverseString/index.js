
function reverse(str) {
  if (str === "") {
    return "";
  }

  return reverse(str.slice(1)) + str.charAt(0);
}

console.log(reverse('javascript')); // tpircsavaj
console.log(reverse('elosnoc')); // console
    // Конец
};

