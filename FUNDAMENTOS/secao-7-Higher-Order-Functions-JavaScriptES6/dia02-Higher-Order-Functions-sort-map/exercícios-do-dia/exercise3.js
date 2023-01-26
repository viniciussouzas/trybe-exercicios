const data = require('./data');

const expectedResult = [
  {
    author: 'Isaac Asimov',
    age: 31,
  },
  {
    author: 'H. P. Lovecraft',
    age: 38,
  },
  {
    author: 'Stephen King',
    age: 39,
  },
  {
    author: 'George R. R. Martin',
    age: 43,
  },
  {
    author: 'Frank Herbert',
    age: 45,
  },
  {
    author: 'J. R. R. Tolkien',
    age: 62,
  },
];

const nameAndAge = () => {
  const newObjectsArray = data.books.map((book) => ({
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear,
  }));

  newObjectsArray.sort((a, b) => a.age - b.age);

  return newObjectsArray;
};

console.log(nameAndAge());