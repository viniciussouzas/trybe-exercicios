let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];

let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log("A maior palavra do array é: " + biggestWord + ". " + "E a menor palavra do array é: " + smallestWord + ". ");