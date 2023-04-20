/************************************************************/
// Document Object Model Addera Text och HTML...
/************************************************************/
const ul = document.querySelector('#list-items');

// insertAdjacentHTML två argument, var ska vi placera html, html strängen...
const insertHtml = (value) => {
  ul.insertAdjacentHTML('beforebegin', `<h3>${value}</h3>`);
  ul.insertAdjacentHTML('afterbegin', `<h3>${value}</h3>`);
  ul.insertAdjacentHTML('beforeend', `<h3>${value}</h3>`);
  ul.insertAdjacentHTML('afterend', `<h3>${value}</h3>`);
};

const insertElement = (value) => {
  const elem = document.createElement('div');
  elem.textContent = value;
  elem.style.color = '#ff0000';

  // ul.insertAdjacentElement('beforebegin', elem);
  // ul.insertAdjacentElement('afterend', elem);
  // ul.insertAdjacentElement('afterbegin', elem);
  ul.insertAdjacentElement('beforeend', elem);
};

const insertText = (value) => {
  ul.insertAdjacentText('beforebegin', value);
  ul.insertAdjacentText('afterend', value);
  ul.insertAdjacentText('afterbegin', value);
  ul.insertAdjacentText('beforeend', value);
};

const insertBefore = (value) => {
  const li = document.createElement('li');
  li.style.fontWeight = 'bold';
  li.style.color = '#ff00ff';
  li.textContent = value;

  const item = document.querySelector('li:nth-child(4)');
  console.log(item);
  ul.insertBefore(li, item);
};
// insertHtml('insertHTML');
// insertElement('insertElement');
// insertText('insertText');
insertBefore('Nytt Exempel');
