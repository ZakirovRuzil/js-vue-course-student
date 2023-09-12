const sumSquareDifference = (num) => {
    // Начало
    let sumSquare = 0;
    let squareSum = 0;
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            sumSquare += i ** 2;
            squareSum += i;
        }
    }
    squareSum **= 2;
    return squareSum - sumSquare;
    // Конец
};

export default sumSquareDifference;