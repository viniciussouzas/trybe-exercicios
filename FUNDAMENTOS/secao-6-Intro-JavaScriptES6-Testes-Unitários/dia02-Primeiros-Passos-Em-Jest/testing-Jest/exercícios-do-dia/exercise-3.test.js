const {encode, decode} = require('./exercise-3');

describe('Testes do exercício 3', () => {

  test('Verifica se encode é uma função', () => {
    
    expect(encode).toBeInstanceOf(Function);

  });

  test('Verifica se decode é uma função', () => {
    
    expect(decode).toBeInstanceOf(Function);

  });

  test('Verifica se encode converte as vogais em números de 1 a 5 respectivamente', () => {

    expect(encode('aeiou')).toBe('12345');
  });

  test('Verifica se decode converte os números de 1 a 5 em vogais respectivamente', () => {

    expect(decode('12345')).toBe('aeiou');
  });

  test('Verifica se encode não converte letras diferentes de vogais em números', () => {

    expect(encode('xablau')).toBe('x1bl15');
  });

  test('Verifica se decode não converte números em letras diferentes de vogais', () => {

    expect(decode('x1bl15')).toBe('xablau');
  });

  test('Verifica se encode retorna uma string com o mesmo n° de caracteres que a string parâmetro', () => {

    expect(encode('jest').length).toEqual(4);
  });
  
});