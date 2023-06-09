// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

const items = document.querySelector('.items');
const recuperaOl = () => { 
  const ol = document.querySelector('.cart__items');
  return ol; 
};
const div = document.createElement('div');

// const seiLa = () => {
  //   const li = document.querySelectorAll('.cart__item');
  //   li.forEach((ele) => ele.innerText.split('$')[1]);
  
  // };
  const carrinho = document.querySelector('.cart');
  carrinho.appendChild(div);
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
const createProductItemElement = ({ id, title, thumbnail, price }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('span', 'item__price', `R$ ${price}`));
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
 const adicionaValorTotal = (price) => {
  div.className = 'total-price';
  div.innerText = `Total: R$${price}`;
 };
 const todosOsPreços = () => {
  const li = document.querySelectorAll('.cart__item');
  let soma = 0;
  let somaFixed = {};
  let valorFinal = '0,00';
  for (let index = 0; index < li.length; index += 1) {
  //  console.log(li.length);      
    if (li) {
        // console.log(li[index].innerText.split('$')[1]);
      const resultado = li[index].innerText.split('$')[1];
      const resultadoNumerico = Number(resultado);
      soma += resultadoNumerico;
      somaFixed = soma.toFixed(2);
      valorFinal = String(somaFixed).replace('.', ',');
    } 
  }
  return valorFinal;
  // const resultado = li.forEach((element) => element.innerText.split('$')[1]); 
};
const constApagaTudo = (li) => {
  const limpar = document.querySelector('.empty-cart');
  limpar.addEventListener('click', () => {
  li.remove();
  adicionaValorTotal(todosOsPreços());
  saveCartItems('');
 }); 
};
const createCartItemElement = ({ title, price, thumbnail }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `${title} 
  
  R$${price}`;
  const img = document.createElement('img');
  img.className = 'imagem_cart';
  img.src = thumbnail;
  li.appendChild(img);
  li.addEventListener('click', () => {
    li.remove();
    adicionaValorTotal(todosOsPreços());
    saveCartItems(recuperaOl().innerHTML);
  });
  constApagaTudo(li);
  return li;
};

const adicionaOsProdutos = async () => {
  const { results } = await fetchProducts('computador');
  const catalogoDeProdutos = results.map((e) => items.appendChild(createProductItemElement(e)));
  return catalogoDeProdutos;
};

const addCarrinho = async () => {
  const bottons = document.querySelectorAll('.item__add');
  bottons.forEach(async (element, index) => {
  element.addEventListener('click', async () => {
    const getItemId = getIdFromProductItem(document.querySelectorAll('.item')[index]);
    const pegaOLinkDoProduto = await fetchItem(getItemId);
    const criaALi = createCartItemElement(pegaOLinkDoProduto);
      recuperaOl().append(criaALi);
      adicionaValorTotal(todosOsPreços());
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
  
    // for (let index = 0; index < li.length; index += 1) {
    //   li[index].addEventListener('click', () => {
    //     li[index].remove();
    //     localStorage.setItem('cartItems', recuperaOl().innerHTML);
    //   }); 
    // }
    li.forEach((e) => constApagaTudo(e));
  li.forEach((element) => element.addEventListener('click', () => {
      element.remove();
      adicionaValorTotal(todosOsPreços());
      saveCartItems(recuperaOl().innerHTML);
    }));
  };
   const criaLoading = () => {
   const loading = document.createElement('div');
   loading.className = 'loading';
   loading.innerText = 'carregando...';
   const main = document.querySelector('.items');
   return main.append(loading);
   };
   const removeLoading = () => {
     const loading = document.querySelector('.loading');
     return loading.remove();
   };
   const verificaLocalStorage = () => {
    if (getSavedCartItems()) {
      recuperaOl().innerHTML = getSavedCartItems();
      apagarReset();
    }
   };
  // localStorage.setItem('test', document.querySelector('.cart__items'));
  // localStorage.getItem('test');
  // todosOsPreços().then(console.log);
  window.onload = async () => {
    criaLoading();
  await adicionaOsProdutos();
  removeLoading();
    addCarrinho(); 
    verificaLocalStorage();
    adicionaValorTotal(todosOsPreços());
  }; 

  // Promise.all([fetchProducts('computador'), fetchItem('MLB2197308438')]).then(console.log);