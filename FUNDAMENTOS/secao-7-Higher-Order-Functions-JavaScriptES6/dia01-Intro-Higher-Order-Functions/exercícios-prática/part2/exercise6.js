const { books } = require('./data');
const dataBase = require('./data')

const expectedResult = false;

const authorUnique = () => {
  return dataBase.books.every((book) => !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
};

console.log(authorUnique());