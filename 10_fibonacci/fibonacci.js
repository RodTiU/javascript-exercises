const fibonacci = function (fibonacciNumber) {
  let fibonacci = [0, 1];
  if (fibonacciNumber < 0) {
    return "OOPS";
  }
  if (fibonacciNumber == 0) {
    return 0;
  }
  for (let i = 2, len = fibonacciNumber; i <= len; i++) {
    fibonacciSequence = fibonacci[i - 2] + fibonacci[i - 1];
    fibonacci.push(fibonacciSequence);
  }
  return fibonacci[fibonacci.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
