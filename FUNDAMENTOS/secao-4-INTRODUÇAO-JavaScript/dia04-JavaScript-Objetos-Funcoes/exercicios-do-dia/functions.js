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

 // número que mais se repete no array

 function mostRepeats (numbers) {
  let repeats = 0;
  let numberRepeated = 0;
  let indexOfNumberRepeated = 0;

  for (let index in numbers) {
    let verifyNumber = numbers[index];
    for (let index2 in numbers) {
      if (verifyNumber === numbers[index2]) {
        repeats += 1;
      }
    }
    if (repeats > numberRepeated) {
      numberRepeated = repeats;
      indexOfNumberRepeated = index;
    }
    repeats = 0;
  }
  return numbers[indexOfNumberRepeated];
 }

 console.log(mostRepeats([37, 21, 37, 37, 24, 37, 24, 21, 76, 37, 21]));

 console.log("**************");

 // soma do número natural (1 até ele mesmo)

 function sumAllNumbers (naturalNumber) {
  let totalSum = 0;
  for (let index = 1; index <= naturalNumber; index += 1) {
    totalSum = totalSum + index;
  }
  return totalSum;
 }

 console.log(sumAllNumbers(37));

 console.log("************");

 // string word & string ending exercicio

 function verifyWordEnding (word, endingWord) {
  word = word.split('');
  endingWord = endingWord.split('');
  let verifier = true;

for (let index = 0; index < endingWord.length; index += 1) {
  if (word[word.length - endingWord.length + index] != endingWord[index]) {
    verifier = false;
    }
  }
  return verifier;
}

console.log(verifyWordEnding('vinicius', 'cius'));

console.log(verifyWordEnding('programação', 'acao'));

console.log('************');