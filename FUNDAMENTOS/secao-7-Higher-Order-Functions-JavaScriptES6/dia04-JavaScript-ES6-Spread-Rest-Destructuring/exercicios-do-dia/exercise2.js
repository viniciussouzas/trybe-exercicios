const sum = (...numbers) => numbers.reduce((acc, number) => acc += number);

console.log(sum(4, 10, 6));