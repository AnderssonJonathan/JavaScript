/************************************************************/
// Händelsehantering...
/************************************************************/

const clearButton = document.querySelector('#clear');
const logo = document.querySelector('header img');
const groceryFilter = document.querySelector('#filter');
const groceryInput = document.querySelector('#item-input');
/*
  Är något som inträffar i system som vi måste agera på.
  T ex vara att en användare klickar på något eller att användaren flytta musmarkören.
  System utför något som vi behöver agera på
  setTimeout, setInterval

*/

// const onClearAll = () => {
// const groceryList = document.querySelector('ul');
// const groceries = groceryList.querySelectorAll('li');

// 1.
// groceryList.innerHTML = '';

// 2.
// groceries.forEach((item) => item.remove());

// 3. BÄST!!!
// while (groceryList.firstChild) {
//   groceryList.removeChild(groceryList.firstChild);
// }
// };

/************************************************************/
// Mushändelser
/************************************************************/
// Koppling till händelser
// clearButton.onclick = onClearAll;
// clearButton.onclick = onText;

// clearButton.addEventListener('click', onClearAll);
// clearButton.addEventListener('dblclick', () => {
//   console.log('Dubbelklick');
// });

// clearButton.addEventListener('contextmenu', () => {
//   console.log('Högerklick');
// });

// clearButton.addEventListener('mousedown', () => {
//   console.log('Håller ner musknappen');
// });
// clearButton.addEventListener('mouseup', () => {
//   console.log('Släpper musknappen');
// });

// logo.addEventListener('dragstart', console.log('Startar att dra i bilden'));
// logo.addEventListener('dragend', console.log('Slutar att dra i bilden'));
// logo.addEventListener('drag', console.log('Drar i bilden'));

/************************************************************/
// Tangentbords händelser
/************************************************************/
// const onKeyDown = (e) => {
//   e.preventDefault();

// console.log('keyup');
// console.log(e.key);
// console.log(e.keyCode);
// if (e.key === 'Enter') {
//   console.log('Du tryckte på Enter tangenten');
// }
// console.log(e);

//   console.log('Shift', e.shiftKey);
//   console.log('Ctrl', e.ctrlKey);
//   console.log('Alt', e.altKey);
// };
// const onKeyDown = (e) => {
//   console.log('keydown');
//   console.log(e);
// };
// const onKeyPress = (e) => {
//   console.log('keypress');
//   console.log(e);
// };

// Event listeners
// groceryFilter.addEventListener('keyup', onKeyDown);
// groceryInput.addEventListener('keydown', onKeyDown);
// groceryInput.addEventListener('keypress', onKeyPress);

/************************************************************/
// Tangentbords händelser input, hämta data ifrån textrutor
/************************************************************/
const checkbox = document.querySelector('#testbox');
const dropdown = document.querySelector('#dropdown');
const onAddGrocery = (e) => {
  const h2 = document.querySelector('#on-input');
  console.log(e.target.value);
};

const onBlur = (e) => {
  console.log(e);
  console.log('Lämnat textrutan add grocery');
  groceryInput.style.outlineStyle = 'none';
};

const onFocus = (e) => {
  console.log('Kommit till textrutan add grocery');
  groceryInput.style.outlineStyle = 'solid';
  groceryInput.style.outlineWidth = '1px';
  groceryInput.style.outlineColor = 'purple';
};
const onChecked = (e) => {
  console.log(e.target.checked);
};

const onSelected = (e) => {
  console.log(e.target.value);
  console.log(e.target.innerText);
};

groceryInput.addEventListener('input', onAddGrocery);
groceryInput.addEventListener('blur', onBlur);
groceryInput.addEventListener('focus', onFocus);
checkbox.addEventListener('input', onChecked);
dropdown.addEventListener('change', onSelected);
