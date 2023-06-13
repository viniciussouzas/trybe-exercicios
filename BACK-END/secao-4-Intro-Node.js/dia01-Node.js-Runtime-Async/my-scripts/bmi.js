const readline = require('readline-sync');

const weight = readline.questionFloat('What is your weight? ');
const height = readline.questionFloat('What is your height? ');

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

const calcBmi = () => {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const bmi = weight / Math.pow(height, 2);

  return bmi;
};

const bmiResult = (bmi) => {
  const statuses = Object.keys(BMI_MAX_AND_MIN);

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status];

    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
};

const main = () => {
  const bmi = calcBmi();
  console.log(`BMI: ${bmi.toFixed(2)}`);

  const bmiResponse = bmiResult(bmi);
  console.log(bmiResponse);
}

main();