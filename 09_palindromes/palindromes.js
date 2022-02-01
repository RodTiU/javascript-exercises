const palindromes = function (word) {
  word = word.toLowerCase();
  word = word.replace(/ +|\.|,|;|:|¡|!|¿|\?/g, "");
  let palindrome = "";
  for (let i = 0, len = word.length; i < len; i++) {
    palindrome += word[word.length - 1 - i];
  }
  if (palindrome === word) return true;
  if (palindrome !== word) return false;
};

// Do not edit below this line
module.exports = palindromes;
