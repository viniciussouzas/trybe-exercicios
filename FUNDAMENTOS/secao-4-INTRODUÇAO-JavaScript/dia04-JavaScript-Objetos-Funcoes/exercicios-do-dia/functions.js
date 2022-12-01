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