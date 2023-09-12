function getBudget(family) {
  return family.reduce(function(total, person) {
    return total + person.budget;
  }, 0);
}

const family = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
];

console.log(getBudget(family));  // 65700
