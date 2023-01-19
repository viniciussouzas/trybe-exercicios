const myFizzBuzz = require('./exercise-2');

describe('Testes do exercício 2', () => {

  test('Verifica se myFizzBuzz retorna fizzbuzz ao inserir num divisível por 3 e 5', () => {

    expect(myFizzBuzz(15)).toBe('fizzbuzz');

  });

  test('Verifica se myFizzBuzz retorna fizz ao inserir num divisível por 3', () => {

    expect(myFizzBuzz(3)).toBe('fizz');

  });

  test('Verifica se myFizzBuzz retorna buzz ao inserir num divisível por 5', ()=> {

    expect(myFizzBuzz(5)).toBe('buzz');
  });

  test('Verifica se myFizzBuzz retorna num ao inserir num que não é divisível por 3 ou 5', () => {

    expect(myFizzBuzz(2)).toBe(2);

  });

  test('Verifica se myFizzBuzz retorna false ao inserir um parâmetro que não é número', () => {

    expect(myFizzBuzz('xablau')).toBe(false);
  });
  
});