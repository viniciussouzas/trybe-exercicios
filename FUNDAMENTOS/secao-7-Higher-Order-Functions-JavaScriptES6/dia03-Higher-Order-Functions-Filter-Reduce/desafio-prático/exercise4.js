const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const allLetters = names.join('').toLowerCase().split('');

const countA = () => {
  return allLetters.reduce((acc, name) => acc += name === 'a', 0);
};

console.log(countA());