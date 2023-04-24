/************************************************************/
// Shopping List Applikation...
/************************************************************/

// Hämta in referenser till våra element...
const form = document.querySelector('#grocery-form');
const input = document.querySelector('#grocery-input');
const clearButton = document.querySelector('#clear-list');
const filterInput = document.querySelector('#filter');
const list = document.querySelector('#grocery-list');

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
  updateUI();
};

const addGroceryToDom = (grocery) => {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(grocery));
  item.appendChild(createIconButton('btn-remove text-red'));

  list.appendChild(item);

  console.log(item);
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

  updateUI();
};

const removeGrocery = (item) => {
  item.remove();
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
