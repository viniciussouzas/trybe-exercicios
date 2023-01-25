const dataBase = require('./data')

// Adicione o código do exercício aqui:
const expectedResult = false;

function everyoneWasBornOnSecXX() {
 return dataBase.books.every((book) => (book.author.birthYear >= 1901 && book.author.birthYear <= 2000)); 
};

console.log(everyoneWasBornOnSecXX());