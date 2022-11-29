let word = 'vinicius';
let inverter = "";

for (let index = 0; index < word.length; index += 1) {
  inverter += word[word.length-1-index];
}

console.log(inverter);