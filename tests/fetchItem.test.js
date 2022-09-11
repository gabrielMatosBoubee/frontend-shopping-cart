require('../mocks/fetchSimulator');
// const { expect } = require('chai');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('testa se fetchProducts é uma função', () => {
    expect(typeof fetchItem).toEqual('function')
  })
  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled(); 
  })
  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    url = 'https://api.mercadolibre.com/items/MLB1615760527'
    expect(fetch).toHaveBeenCalledWith(url); 
  })
  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo', async () => {
    const test = await fetchItem('MLB1615760527')
    expect(typeof test).toEqual('object');
  })
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () =>{
    try { 
      await fetchItem()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  })
  // fail('Teste vazio');
  })
