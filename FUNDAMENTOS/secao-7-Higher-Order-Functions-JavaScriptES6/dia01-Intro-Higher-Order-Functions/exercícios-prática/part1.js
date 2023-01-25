//Nova pessoa contratada

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newEmployee = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');

  return { fullName, email: `${email}@trybe.com`};
};

console.log(newEmployees(newEmployee));

//Sorteador de loteria

const checkNumber = (numberPick, numberLottery) => numberPick === numberLottery;

const lottery = (numberPick, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(numberPick, number) ? 'Parabéns, você ganhou!' : 'Tente novamente...';
};

console.log(lottery(3, checkNumber));

//Corretor automático de exame 

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
  if (studentAnswers === rightAnswers) {
    return 1;
  } else if (studentAnswers === 'N.A') {
    return 0;
  } else {
  return -0.5;
  }
};

const score = (rightAnswers, studentAnswers, callback) => {
  let counter = 0;

  for (let index = 0; index < rightAnswers.length; index += 1) {
    const callbackReturn = callback(rightAnswers[index], studentAnswers[index]);
    counter += callbackReturn;
  }
  return `Resultado final: ${counter} pontos`;
};

console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
