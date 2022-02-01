const getTheTitles = function (books) {
  titles = [];
  for (let i = 0, len = books.length; i < len; i++) {
    titles.push(books[i].title);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
