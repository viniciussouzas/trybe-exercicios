const dataBase = require('./dataBase');

const getPopulation = () => {
  return dataBase.countries.reduce((acc, country) => acc += country.population, 0);
};

console.log(getPopulation());