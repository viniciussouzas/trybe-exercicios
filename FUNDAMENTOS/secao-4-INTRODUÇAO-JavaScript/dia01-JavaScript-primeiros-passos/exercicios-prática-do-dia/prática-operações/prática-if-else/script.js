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
