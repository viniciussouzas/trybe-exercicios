const dataBase = require('./dataBase');

const getTotalArea = () => {
  return dataBase.countries.reduce((acc, country) => acc += country.area, 0);
};

console.log(getTotalArea());