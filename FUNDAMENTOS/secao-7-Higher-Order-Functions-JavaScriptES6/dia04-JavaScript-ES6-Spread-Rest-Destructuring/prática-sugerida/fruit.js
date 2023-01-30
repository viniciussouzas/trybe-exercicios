// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Strawberry', 'Kiwi', 'Mango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Melted Choco', 'Kinder', 'Cookies'];

const fruitSalad = (fruit, additional) => {
  const listFruitSalad = [...fruit, ...additional];
  return listFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));