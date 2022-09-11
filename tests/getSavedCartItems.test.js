const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () =>{
    const expect =  getSavedCartItems()
    expect(expect).toHaveBeenCalled(localStorageSimulator)
  })
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () =>{
    const expect =  getSavedCartItems('cartItem')
    expect(expect).toHaveBeenCalled(localStorageSimulator)
  })
  // fail('Teste vazio');
});
