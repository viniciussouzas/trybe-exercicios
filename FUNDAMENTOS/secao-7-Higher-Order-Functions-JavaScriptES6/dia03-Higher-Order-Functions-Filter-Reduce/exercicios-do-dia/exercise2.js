const data = require('./data');

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

const oldBooksOrdered = () => {
  const oldBooks = data.books.filter((book) => {
    let ageOfBook = anoAtual - book.releaseYear;
    return ageOfBook >= 60; 
  });

  oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);

  return oldBooks;
};

console.log(oldBooksOrdered());