const fetchItem = async (parametro) => {
  if (!parametro) {
    throw new Error('You must provide an url');
    }
    const url = `https://api.mercadolibre.com/items/${parametro}`;
    const resultado = await fetch(url);
    const data = await resultado.json();
    // const { results } = data;
    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
