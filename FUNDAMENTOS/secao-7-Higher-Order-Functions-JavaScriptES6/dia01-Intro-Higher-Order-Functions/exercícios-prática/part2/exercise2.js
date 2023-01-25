const dataBase = require('./data')

// Adicione o código do exercício aqui:
const expectedResult = 'Duna';

const smallerName = () => {
  let nameBook;

  dataBase.books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};

console.log(smallerName());