let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Boas vindas, " + info.personagem + "!");

console.log("**********");

info['recorrente'] = 'Sim';

console.log(info);

console.log("***********");

for (let keys in info) {
  console.log(keys);
}

console.log("***********");

for (let newKeys in info) {
  console.log(info[newKeys]);
}

console.log("***********");

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

for (let joinInfos in info) {
  if (joinInfos === 'recorrente' && info[joinInfos] === 'Sim' && info2[joinInfos] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[joinInfos] + ' e ' + info2[joinInfos]);
  }
}