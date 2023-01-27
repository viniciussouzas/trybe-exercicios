const data = require('./data');

const fantasyOrScienceFiction = () => {
  return data.books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
};

console.log(fantasyOrScienceFiction());