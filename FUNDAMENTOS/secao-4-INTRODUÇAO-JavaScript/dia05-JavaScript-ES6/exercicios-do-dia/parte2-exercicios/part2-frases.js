const verifyBiggestWord = (phrase) => {
  const wordOfPhrase = phrase.split(' ');
  let keepWord = 0;
  let result = '';

  for (const word of wordOfPhrase) {
    if (word.length > keepWord) {
      keepWord = word.length;
      result = word;
    }

  }
  return result;
}

console.log(verifyBiggestWord('Você sabia que a maior palavra do mundo é Pneumoultramicroscopicossilicovulcanoconiótico ?'));