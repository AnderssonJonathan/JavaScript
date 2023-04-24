/************************************************************/
// Shopping List Applikation...
/************************************************************/

// Hämta in referenser till våra element...
const form = document.querySelector('#grocery-form');
const input = document.querySelector('#grocery-input');
const clearButton = document.querySelector('#clear-list');
const list = document.querySelector('#grocery-list');

const onAddGrocery = (e) => {
  e.preventDefault();

  // Hämta värdet ifrån grocery-input textruta...
  const grocery = input.value;

  // Kontrollera att textrutan innehåller ett värde...
  if (grocery === '') {
    alert('du måste ange en vara');

    return;
  }

  // Lägga till varan till listan...
  addGroceryToDom(grocery);
  input.value = '';
};

const addGroceryToDom = (grocery) => {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(grocery));
  item.appendChild(createIconButton('btn-remove text-red'));

  list.appendChild(item);

  console.log(item);
};

const onClearList = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
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

// Koppla händelser till elementen...
form.addEventListener('submit', onAddGrocery);
clearButton.addEventListener('click', onClearList);
