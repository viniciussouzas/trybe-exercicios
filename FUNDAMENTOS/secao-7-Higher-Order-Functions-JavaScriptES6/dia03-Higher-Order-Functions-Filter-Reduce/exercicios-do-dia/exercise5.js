const data = require('./data');

const oldBooks = () => {
  const filtered = data.books.filter((book) => {
    let ageOfBook = 2023 - book.releaseYear;
    return ageOfBook >= 60;
  });

  return filtered.map((book) => book.name);
};

console.log(oldBooks());
