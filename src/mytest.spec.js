it ("result of the sum of 2 + 2 must be 4", () => { // it recebe 2 parâmetros: 1=descrição do teste,com a expectativa de resultado; 2=função que vai executar de fato  o teste
  const a = 2;
  const b = 2;
  const result = a + b;

  expect(result).toEqual(4);

}); 