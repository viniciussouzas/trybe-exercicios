const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

console.log("**********");

const hello = (nome) => `Olá, ${nome}!`;

let nome = 'Ivan';
console.log(hello(nome));

console.log("**********");

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;

let nome1 = 'Ivan';
let sobrenome1 = 'Pires';

console.log(nomeCompleto(nome1, sobrenome1));