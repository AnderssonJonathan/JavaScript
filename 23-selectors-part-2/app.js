/***********************************************************'*/
// Document Object Model...
/***********************************************************'*/

// document.getElementsByTagName...
const listItems = document.getElementsByTagName('li');
console.log(listItems);

listItems[0].style.color = '#ff00ff';

// listItems.forEach((item) => (item.style.fontStyle = 'italic'));

for (let i = 0; i < listItems.length; i++) {
  const item = listItems[i];
  item.style.color = '#0000ff';
  item.style.fontWeight = '600';
  item.style.fontStyle = 'italic';
}

const listItemsArray = Array.from(listItems);
console.log(listItemsArray);

listItemsArray.forEach((item) => (item.style.color = '#ff0000'));

// document.getElementsByClassName...
const formControls = document.getElementsByClassName('form-control');
console.log(formControls);

console.log(formControls[0].children[0].placeholder);
formControls[0].children[0].placeholder = 'Att köpa';

// document.getElementsByName...
const formControls2 = document.getElementsByName('item');
console.log(formControls2);
console.log(formControls2[0].placeholder);

/***********************************************************'*/
// document.querySelectorAll...
/***********************************************************'*/
let items = document.querySelectorAll('li');
console.log(items);

items[0].style.backgroundColor = '#ddd';

items.forEach((item) => (item.style.backgroundColor = '#ddd'));

items = document.querySelectorAll('ul li');
console.log(items);
items = document.querySelectorAll('#item-list li');
console.log(items);
items = document.querySelectorAll('.items li');
console.log(items);
items = document.querySelectorAll('li');
console.log(items);
