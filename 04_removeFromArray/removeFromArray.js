const removeFromArray = (arrayToChange, ...numbersToDelete) => {
  for (let j = 0, len = numbersToDelete.length; j < len; j++) {
    for (let i = 0, len = arrayToChange.length; i < len; i++) {
      if (arrayToChange[i] === numbersToDelete[j]) {
        arrayToChange.splice(i, 1);
      }
    }
  }
  return arrayToChange;
};

console.log(removeFromArray([1, 2, 3, 4], 2, 1));

// Do not edit below this line
module.exports = removeFromArray;
