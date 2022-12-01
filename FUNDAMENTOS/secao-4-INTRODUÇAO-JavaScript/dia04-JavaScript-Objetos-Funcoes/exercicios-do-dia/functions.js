function verifyPalindrome (word) {
  for (let index in word) {
    if (word[index] === word[(word.length - 1) - index]) {
      return true;
    } else {
       return false;
    }
  }
}

console.log(verifyPalindrome('xablau'));

console.log("**********");

function indexOfbiggestValue (arrays) {
  let indexOfValue = 0;
  for (let index in arrays) {
    if (arrays[indexOfValue] < arrays[index]) {
      indexOfValue = index;
    }
  }
  return indexOfValue;
}

console.log(indexOfbiggestValue([2, 10, 37, 11, 28]));