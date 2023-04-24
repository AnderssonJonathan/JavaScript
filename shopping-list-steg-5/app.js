/************************************************************/
// Shopping List Applikation...
/************************************************************/

// Hämta in referenser till våra element...
const form = document.querySelector('#grocery-form');
const input = document.querySelector('#grocery-input');
const clearButton = document.querySelector('#clear-list');
const filterInput = document.querySelector('#filter');
const list = document.querySelector('#grocery-list');

const onDisplayGroceries = () => {
  const groceries = getFromStorage();
  groceries.forEach((item) => addGroceryToDom(item));
  updateUI();
};

const onAddGrocery = (e) => {
  e.preventDefault();

  // Hämta värdet ifrån grocery-input textruta...
  const grocery = input.value;

  // Kontrollera att textrutan innehåller ett värde...
  if (grocery === '') {
    const errorMsg = createErrorMessage(
      'Du måste ange vilken vara som ska inhandlas!'
    );
    document.querySelector('.message-container').appendChild(errorMsg);

    setTimeout(() => {
      const msg = document.querySelector('#error-message').remove();
    }, 3000);

    return;
  }

  // Lägga till varan till listan...
  addGroceryToDom(grocery);
  addToStorage(grocery);
  updateUI();
};

const addGroceryToDom = (grocery) => {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(grocery));
  item.appendChild(createIconButton('btn-remove text-red'));

  list.appendChild(item);

  console.log(item);
};

const addToStorage = (grocery) => {
  const groceries = getFromStorage();

  groceries.push(grocery);

  localStorage.setItem('groceries', JSON.stringify(groceries));
};

const getFromStorage = () => {
  let items;

  if (localStorage.getItem('groceries') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('groceries'));
  }

  return items;
};

const removeFromStorage = (grocery) => {
  let groceries = getFromStorage();

  groceries = groceries.filter((item) => item !== grocery);
  console.log(groceries);
  localStorage.setItem('groceries', JSON.stringify(groceries));
};

const onClickGrocery = (e) => {
  if (e.target.parentElement.classList.contains('btn-remove')) {
    removeGrocery(e.target.parentElement.parentElement);
  }

  updateUI();
};

const onClearList = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  localStorage.removeItem('groceries');
  // Tömmer localstorage på allt för denna ip-adress.
  // localStorage.clear();
  updateUI();
};

const onFilterGroceries = (e) => {
  const groceries = document.querySelectorAll('li');
  const value = e.target.value.toLowerCase();

  groceries.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    // console.log(itemName.firstChild.textContent.toLowerCase());
    if (itemName.indexOf(value) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};

const removeGrocery = (item) => {
  item.remove();
  removeFromStorage(item.textContent);
};

const createIconButton = (classes) => {
  const button = document.createElement('button');
  button.className = classes;
  button.appendChild(createIcon('fa-regular fa-trash-can'));
  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
};

const createErrorMessage = (text) => {
  const div = document.createElement('div');
  div.id = 'error-message';
  const textContent = document.createTextNode(text);
  div.classList.add('error-message');
  div.appendChild(textContent);
  return div;
};

const updateUI = () => {
  input.value = '';

  const groceries = document.querySelectorAll('li');

  if (groceries.length === 0) {
    clearButton.style.display = 'none';
    filterInput.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
    filterInput.style.display = 'block';
  }
};

// Koppla händelser till elementen...
form.addEventListener('submit', onAddGrocery);
clearButton.addEventListener('click', onClearList);
list.addEventListener('click', onClickGrocery);
filterInput.addEventListener('input', onFilterGroceries);
document.addEventListener('DOMContentLoaded', onDisplayGroceries);
