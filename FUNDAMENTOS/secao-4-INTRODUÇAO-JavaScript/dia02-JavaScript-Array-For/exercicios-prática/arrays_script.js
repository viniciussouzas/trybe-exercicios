let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

console.log("*********************");

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

console.log(soma);

console.log("*****************");

let arithmetic = soma / numbers.length;

console.log(arithmetic);

console.log("***************");

if (arithmetic > 20) {
  console.log("O valor é maior que 20.");
} else {
  console.log("O valor é menor ou igual a 20.");
}

console.log("*************");

let highestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > highestNumber) {
    highestNumber = numbers[index];
  }
}

console.log(highestNumber);

console.log("***************");