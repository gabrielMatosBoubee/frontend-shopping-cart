require('../mocks/fetchSimulator');
// const { expect } = require('chai');
// const { expect } = require('chai');
// const { expect } = require('chai');
// const { expect } = require('@jest/globals');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function')
  })
  it('testa se ao passar o parametro "computador" chama a função', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  })
  it('testa se ao passar o parametro "computador" a funçao utiliza o endpoint', async () => {
    await fetchProducts('computador')
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const test = await fetchProducts('computador')
    expect(test).toEqual(computadorSearch)
  })
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna o erro', async () => {
    try { 
      await fetchProducts('diferente')
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  })
  // fail('Teste vazio');
});
