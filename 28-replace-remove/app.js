/************************************************************/
// Document Object Model Ersätta och ta bort element...
/************************************************************/

const ul = document.querySelector('#list-items');

/************************************************************/
// Ersätta element...
/************************************************************/

const replaceItemOne = (value) => {
  const item = ul.querySelector('li');
  const li = document.createElement('li');

  li.style.color = '#ff0000';
  li.textContent = value;

  item.replaceWith(li);
};

const replaceItemTwo = (value) => {
  const item = ul.querySelector('li:nth-child(2)');
  item.outerHTML = `<li>${value}</li>`;
};

const replaceAll = (value) => {
  const items = ul.querySelectorAll('li');

  items.forEach(
    (item, index) =>
      (item.outerHTML =
        index === 2 ? `<li>${value}</li>` : '<li>ALLT ÄNDRAT</li>')
  );

  // items.forEach((item, index) => {
  //   if (index === 2) {
  //     item.outerHTML = `<li>${value}</li>`;
  //   } else {
  //     item.outerHTML = '<li>ALLT ÄNDRAT</li>';
  //   }
  // });
};

// replaceItemOne('Nytt Exempel 1!');
// replaceItemTwo('Nytt Exempel 2!');
// replaceAll('Nytt värde');

/************************************************************/
// Ta bort element...
/************************************************************/

// Exempel 1. Ta bort h1 elementet...
const removeH1 = () => {
  document.querySelector('.page-title').remove();
};

// Exempel 2. Ta bort ett li element...
const removeItem = () => {
  const item = ul.querySelector('li');
  ul.removeChild(item);
};

const removeItem1 = (itemPos) => {
  const item = ul.querySelector(`li:nth-child(${itemPos})`);
  ul.removeChild(item);
};

const removeItem2 = (itemPos) => {
  const item = ul.querySelectorAll('li')[--itemPos];
  ul.removeChild(item);
};

const removeItem3 = (itemPos) => {
  const item = ul.querySelectorAll('li');
  item[--itemPos].remove();
};

const removeItemShortVersion = (itemPos) => {
  ul.querySelectorAll('li')[--itemPos].remove();
};
// removeH1();
// removeItem();
// removeItem1(2);
// removeItem2(3);
// removeItem3(4);
removeItemShortVersion(4);
