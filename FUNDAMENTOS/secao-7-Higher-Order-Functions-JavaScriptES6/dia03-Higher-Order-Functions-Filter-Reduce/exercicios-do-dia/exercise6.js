const data = require('./data');

const authorWith3DotsOnName = () => {
  const found = data.books.find((book) => book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.');

  return found.name;
};

console.log(authorWith3DotsOnName());