// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

const items = document.querySelector('.items');
const recuperaOl = () => { 
  const ol = document.querySelector('.cart__items');
  return ol; 
};
// const cart = document.querySelector('.cart').firstChild;
// console.log(cart);
// const itemId = 
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price, thumbnail }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  const img = document.createElement('img');
  img.className = 'imagem_cart';
  img.src = thumbnail;
  li.appendChild(img);
  li.addEventListener('click', () => {
    li.remove();
    saveCartItems(recuperaOl().innerHTML);
  });
  return li;
};
// fetchItem('123').then(console.log);
const adicionaOsProdutos = async () => {
  // fetchProducts('computador').then(({ results }) =>
  // results.map((e) => items.appendChild(createProductItemElement(e))));
  const { results } = await fetchProducts('computador');
  return results.map((e) => items.appendChild(createProductItemElement(e)));
}; 
const addCarrinho = async () => {
  const botton = document.querySelectorAll('.item__add');
  botton.forEach(async (element, index) => {
  element.addEventListener('click', async () => {
 recuperaOl().append(createCartItemElement(
    await fetchItem(getIdFromProductItem(document.querySelectorAll('.item')[index])),
    ));
    saveCartItems(recuperaOl().innerHTML); 
});
});
// recuperaOl().append({ li } = getSavedCartItems());
    // console.log(recuperaOl());
  };
//   const test = () => {

// if (filho !== null) {
//   console.log('O elemento #filho existe em #pai');
// } else {
//   console.log('O elemento #filho não existe em #pai');
// }
//   };
  const apagarReset = () => {
    const li = document.querySelectorAll('.cart__item');
  if (li.length > 1) {
  li.forEach((element, index) => element.addEventListener('click', () => {
      document.querySelectorAll('.cart__item')[index].remove();
      saveCartItems(recuperaOl().innerHTML);
    }));
  } else {
    document.querySelector('.cart__item').addEventListener('click', () => 
    document.querySelector('.cart__item').remove());
    saveCartItems(recuperaOl().innerHTML)
  }
  };
  window.onload = async () => {
  await adicionaOsProdutos();
    await addCarrinho(); 
    if (getSavedCartItems()) {
    recuperaOl().innerHTML = getSavedCartItems();
    apagarReset();
  }
    // if (getSavedCartItems()) {
      
    // };
  };
  
  // getSavedCartItems('cartItems');