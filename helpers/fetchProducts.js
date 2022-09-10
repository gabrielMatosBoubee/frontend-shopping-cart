// const { createProductItemElement } = require('../script'); 

const fetchProducts = async (parametro) => {
      if (parametro !== 'computador') {
      throw new Error('You must provide an url');
      }
      const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
      const resultado = await fetch(url);
      const data = await resultado.json();
      // const { results } = data;
      return data;
}; 

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
