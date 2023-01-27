const data = require('./data');

const booksByAuthorBirthYear = (birthYear) => {
  const filtered = data.books.filter((book) => book.author.birthYear === birthYear)

  return filtered.map((book) => book.name);
};

console.log(booksByAuthorBirthYear(1920));