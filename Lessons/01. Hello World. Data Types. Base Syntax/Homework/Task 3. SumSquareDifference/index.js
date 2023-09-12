
    function sumSquareDifference(num) {
          let sumOfSquares = 0;
          let squareOfSum = 0;

          for (let i = 1; i <= num; i++) {
            sumOfSquares += i ** 2;
            squareOfSum += i;
          }

          squareOfSum = squareOfSum ** 2;

          return squareOfSum - sumOfSquares;
        }

        console.log(sumSquareDifference(10)); // 2640
        console.log(sumSquareDifference(5)); // 170
