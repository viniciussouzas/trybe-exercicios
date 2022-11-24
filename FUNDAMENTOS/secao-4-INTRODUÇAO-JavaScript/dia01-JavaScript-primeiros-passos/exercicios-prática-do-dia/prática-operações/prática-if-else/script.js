const a = 2;
const b = 5;

if (a > b) {
console.log(a + " é maior que " + b + ".");
} else {
  console.log(b + " é maior que " + a + ".");
};

const c = 4;
const d = 7;
const e = 8;

if (c > d && c > e) {
  console.log(c + " é o maior dos três números.");
} else if (d > c && d > e) {
  console.log(d + " é o maior dos três números.");
} else {
  console.log(e + " é o maior dos três números.");
}

let value = 0

if (value > 0) {
  console.log("The value insert is positive.");
} else if (value < 0) {
  console.log("The value insert is negative.");
} else {
  console.log("Undefined, the value insert is zero.");
}

const firstAngle = 20;
const secondAngle = 40;
const thirdAngle = 70;

if (firstAngle > 0 && secondAngle > 0 && thirdAngle > 0 && firstAngle + secondAngle + thirdAngle == 180) {
  console.log(true);
} else if (firstAngle > 0 && secondAngle > 0 && thirdAngle > 0 && firstAngle + secondAngle + thirdAngle !== 180) {
  console.log(false);
} else {
  console.log('error');
}

let grade = 77;

if ( grade >= 90 && grade <= 100) {
  console.log("Excellent, your grade is A!");
} else if ( grade >= 80 && grade < 90) {
  console.log("Congrats, your grade is B!");
} else if ( grade >= 70 && grade < 80) {
  console.log("Good, your grade is C!");
} else if ( grade >= 60 && grade < 70) {
  console.log("Keep improving, your grade is D!");
} else if ( grade >= 50 && grade < 60) {
  console.log("Don't give up, your grade is E!");
} else if ( grade > 0 && grade < 50) {
  console.log("Keep trying, your grade is F!");
} else {
  console.log("Error, grade insert is not valid!");
}

const number1 = 32;
const number2 = 43;
const number3 = 21;

let verifyEven = false;

if ((number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0)) {
  verifyEven = true;
}

console.log(verifyEven);


const number4 = 7;
const number5 = 10;
const number6 = 13;

let verifyOdd = false;

if ((number4 % 2 !== 0 || number5 % 2 !== 0 || number6 % 2 !== 0)) {
  verifyOdd = true;
}

console.log(verifyOdd);

const productCost = 50;
const sellingPrice = 100;

if (productCost >= 0 && sellingPrice >= 0) {
  const totalCost = productCost * 1.2;
  const profit = (sellingPrice - totalCost) * 1000;
  console.log(profit);
} else {
  console.log("Error, values cannot be negative.");
}

let aliquotINSS = "";
let aliquotIR = "";

const rawSalary = 4500.00;

if (rawSalary <= 1556.94) {
  aliquotINSS = rawSalary * 0.08;
} else if (rawSalary <= 2594.92) {
  aliquotINSS = rawSalary * 0.09;
} else if (rawSalary <= 5189.82) {
  aliquotINSS = rawSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const realSalary = rawSalary - aliquotINSS;

if (realSalary <= 1903.98) {
  aliquotIR = 0;
} else if (realSalary <= 2826.65) {
  aliquotIR = (realSalary * 0.075) - 142.80;
} else if (realSalary <= 3751.05) {
  aliquotIR = (realSalary * 0.15) - 354.80;
} else if (realSalary <= 4664.68) {
  aliquotIR = (realSalary * 0.225) - 636.13;
} else if (realSalary > 4664.68) {
  aliquotIR = (realSalary * 0.275) - 869.36;
}

console.log("Your salary is " + (realSalary - aliquotIR));