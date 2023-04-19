/***********************************************************'*/
// Document Object Model Skapa element...
/***********************************************************'*/

function createItem(item) {
  const li = document.createElement('li');
  const text = document.createTextNode(item);
  const button = createButton('remove-item btn-link text-red');
  // const button = createElem('button', 'remove-item btn-link text-red');
  // button.appendChild(createElem('i', 'fa-regular fa-trash-can'));

  li.appendChild(text);
  li.appendChild(button);

  document.querySelector('#item-list').appendChild(li);
}

const createButton = (classes) => {
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

// const createElem = (name, classes) => {
//   const elem = document.createElement(name);
//   elem.className = classes;
//   return elem;
// };

createItem('Grönkål');
createItem('Tvättmedel');
