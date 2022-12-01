// palindromo-exercicio

function verifyPalindrome (word) {
  for (let index in word) {
    if (word[index] === word[(word.length - 1) - index]) {
      return true;
    } else {
       return false;
    }
  }
};

console.log(verifyPalindrome('xablau'));

console.log("**********");

// index do maior valor do array - exercicio

function indexOfbiggestValue (arrays) {
  let indexOfBiggest = 0;
  for (let index in arrays) {
    if (arrays[indexOfBiggest] < arrays[index]) {
      indexOfBiggest = index;
    }
  }
  return indexOfBiggest;
};

console.log(indexOfbiggestValue([2, 10, 37, 11, 28]));

console.log("************");

// index do menor valor do array - exercicio

function indexOfSmallestValue (arrays) {
  let indexOfSmallest = 0;
  for (let index in arrays) {
    if (arrays[indexOfSmallest] > arrays[index]) {
      indexOfSmallest = index;
    }
  }
  return indexOfSmallest;
}

console.log(indexOfSmallestValue([12, 45, 23, 49, 7, 21]));

console.log("************");

// nome com a maior quantidade de caracteres - exercicio

 function biggestName (names) {
  let mostCaracters = names[0];
  for (let caracters in names) {
    if (mostCaracters.length < names[caracters].length) {
      mostCaracters = names[caracters];
    }
  }
  return mostCaracters;
 }

 console.log(biggestName(['Ana', 'João', 'Vinícius', 'Felipe']));

 console.log("**********");