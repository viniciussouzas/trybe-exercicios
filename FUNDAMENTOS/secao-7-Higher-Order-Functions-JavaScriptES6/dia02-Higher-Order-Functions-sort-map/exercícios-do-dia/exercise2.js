const data = require('./data');

const expectedResult = [
  'George R. R. Martin - 1948',
  'J. R. R. Tolkien - 1892',
  'Isaac Asimov - 1920',
  'Frank Herbert - 1920',
  'Stephen King - 1947',
  'H. P. Lovecraft - 1890',
];

const formatedAuthorNamesBirth = () => {
  const newArray = data.books.map((book) => `${book.author.name} - ${book.author.birthYear}`);

  return newArray;
};

console.log(formatedAuthorNamesBirth());