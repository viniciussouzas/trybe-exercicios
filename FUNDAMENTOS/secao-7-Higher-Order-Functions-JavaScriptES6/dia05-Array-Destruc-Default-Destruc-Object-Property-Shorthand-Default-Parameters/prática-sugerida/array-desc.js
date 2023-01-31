const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

const [ firstNumber, secondNumber, thirdNumber] = primeNumbers;

sum( firstNumber, thirdNumber); // 54

//

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[ comida, animal, bebida] = [ bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

//

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares

console.log(numerosPares); // [6, 8, 10, 12];
