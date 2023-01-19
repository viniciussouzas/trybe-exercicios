const myRemove = require('./exercise-1');

describe('Testes do exercicio 1', () => {

  test('Verifica se myRemove retorna o array sem o item', () => {

    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);

  });

  test('Verifica se myRemove não retorna o array [1, 2, 3, 4]', () => {

    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);

  });

  test('Verifica se myRemove retorna o esperado quando o item inserido não está no array', () => {

    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    
  });
});