const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function ([...args]) {
  let sum = 0;
  args.forEach((arg) => {
    sum += arg;
  });
  return sum;
};

const multiply = function ([...args]) {
  let multiply = 1;
  args.forEach((arg) => {
    multiply *= arg;
  });
  return multiply;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 1, len = a; i <= len; i++) {
      factorial *= i;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
