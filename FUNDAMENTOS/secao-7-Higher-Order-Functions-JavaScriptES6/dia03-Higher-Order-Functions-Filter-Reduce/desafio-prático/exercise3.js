const dataBase = require('./dataBase');

const longestName = () => {
  return dataBase.countries.reduce((acc, country) => (acc.name.length > country.name.length ? acc : country));
};

console.log(longestName());