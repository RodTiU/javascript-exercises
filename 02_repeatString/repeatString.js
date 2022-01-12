const repeatString = function (stringSelection, numberOfReps) {
  if (numberOfReps >= 0) {
    return stringSelection.repeat(numberOfReps);
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
