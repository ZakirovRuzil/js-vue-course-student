const itisCool = (begin, end) => {
  // Начало
  for (let i = begin; i <= end; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("Itis Cool");
    } else if (i % 5 == 0) {
      console.log("Cool");
    } else if (i % 3 == 0) {
      console.log("Itis");
    } else {
      console.log(i);
    }
  }
  // Конец
};

export default itisCool;
