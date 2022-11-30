let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let persons in names) {
  console.log("Olá " + names[persons] + "!");
};

console.log("*************");

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let info in car) {
  console.log(info + ": " + car[info]);
};