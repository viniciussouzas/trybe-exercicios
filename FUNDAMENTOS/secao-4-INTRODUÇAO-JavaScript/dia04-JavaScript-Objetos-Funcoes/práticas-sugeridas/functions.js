// primeiro-exercício

const a = 6;
const b = 8;

function sum () {
  return a + b;
};

function subtraction () {
  return a - b;
};

function multiplication () {
  return a * b;
};

function division () {
  return a / b;
};

function module () {
  return a % b;
};

console.log("Soma de a + b = " + sum() + "; " + "Subtração de a - b = " + subtraction() + "; " + "Multiplicação de a * b = " + multiplication() + "; " + "Divisão de a / b = " + division() + "; " + "Módulo de a % b = " + module() + "; ");

console.log('***********');

// segundo-exercicio

const number1 = 37;
const number2 = 20;

function biggest () {
  if (number1 > number2) {
    return number1 + " é maior que " + number2 + "!";
  } else if (number2 > number1) {
    return number2 + " é maior que " + number1 + "!";
  } else {
    return number1 + " e " + number2 + " são iguais!";
  }
}

console.log(biggest());

console.log("***************");

// terceiro-exercicio

function biggestOfThree (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1 + ' é o maior dos 3 números!';
  } else if (num2 > num1 && num2 > num3) {
    return num2 + ' é o maior dos 3 números!';
  } else {
    return num3 + ' é o maior dos 3 números!';
  }
};

console.log(biggestOfThree(32, 54, 12));

console.log("***********");

// quarto-exercicio

function verifySignal (value) {
  if (value > 0) {
    return "positive";
  } else if (value < 0) {
    return "negative";
  } else {
    return "zero";
  }
};

console.log(verifySignal(0));