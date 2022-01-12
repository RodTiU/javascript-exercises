const sumAll = function (startNumber, endNumber) {
  if (startNumber > endNumber) {
    let flipNumber = endNumber;
    endNumber = startNumber;
    startNumber = flipNumber;
  } else if ((startNumber < 0) | (endNumber < 0)) {
    return "ERROR";
  } else if (
    (typeof startNumber != "number") |
    (typeof endNumber != "number")
  ) {
    return "ERROR";
  }
  let iterativeSum = 0;
  for (let i = startNumber, len = endNumber; i <= len; i++) {
    iterativeSum += i;
  }
  return iterativeSum;
};

// Do not edit below this line
module.exports = sumAll;
