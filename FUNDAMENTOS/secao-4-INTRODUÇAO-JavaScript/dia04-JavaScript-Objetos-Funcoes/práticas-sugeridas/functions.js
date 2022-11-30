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