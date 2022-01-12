const reverseString = (str) => {
  let splitWord = str.split(""),
    reverseArray = splitWord.reverse(),
    reverseWord = reverseArray.join("");
  return reverseWord;
};
// Do not edit below this line
module.exports = reverseString;
