const data = require('./data');

const fantasyOrScienceFictionAuthors = () => {
  const filtered = data.books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

  const newArray = filtered.map((book) => book.author.name);

  return newArray.sort();
};

console.log(fantasyOrScienceFictionAuthors());