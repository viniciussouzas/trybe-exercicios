const dataBase = require('./data')

// Adicione o código do exercício aqui:
const expectedResult = 'Stephen King';

const authorBornIn1947 = () => {
   return dataBase.books.find((book) => book.author.birthYear === 1947).author.name;
};

console.log(authorBornIn1947());