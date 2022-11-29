let biggestPrime = 0;

for (let index = 2; index <= 50; index += 1) {
  let primeVerify = true;
  for (let indexDivisor = 2; indexDivisor < index; indexDivisor += 1) {
    if (index % indexDivisor === 0) {
      primeVerify = false;
    } 
  }
  if (primeVerify == true) {
    biggestPrime = index;
  }
}

console.log(biggestPrime);