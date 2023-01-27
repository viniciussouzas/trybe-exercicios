const dataBase = require('./dataBase');

const getPopulation = () => {
  return dataBase.countries.reduce((acc, country) => {
    return acc += country.population;
  }, 0)
};

console.log(getPopulation());