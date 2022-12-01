let status = 'desligado';

const ligarDesligar = () => (status === 'desligado') ? status = 'ligado' : status = 'desligado';

console.log(`O motor está ${ligarDesligar()}.`);
console.log(`O motor está ${ligarDesligar()}.`);