/***********************************************************'*/
// Document Object Model...
/***********************************************************'*/

// Lokalisera element
/***********************************************************'*/
// document.getElementById...
/***********************************************************'*/
console.log(document.getElementById('app-title'));

const pageTitle = document.getElementById('app-title');

// Läsa attribut...
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
// Rekommenderat att använda getAttribute istället.
console.log(document.getElementById('app-title').getAttribute('id'));
console.log(document.getElementById('app-title').getAttribute('class'));

// Skapa och skriva attribut...
pageTitle.setAttribute('title', 'Min lista');
// pageTitle.setAttribute('data-val', 'required');

// Läsa ut innehållet ur elementen...
console.log(pageTitle.textContent);
console.log(pageTitle.innerText);
pageTitle.innerText = 'Ändrat titel!';
pageTitle.innerHTML = '<strong>Viktigt!</strong>';

// Arbeta med stilar på elementen...
pageTitle.style.color = '#ff00ff';
pageTitle.style.backgroundColor = '#ddd';
pageTitle.style.background = '#ffff00';
pageTitle.style.borderRadius = '10px';
pageTitle.style.border = 'solid 1px #333';
pageTitle.style.padding = '1rem';

/***********************************************************'*/
// document.querySelector...
/***********************************************************'*/
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.page-title'));

console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('ul'));
console.log(document.querySelector('ul li'));
console.log(document.querySelector('ul#item-list'));
console.log(document.querySelector('ul.items'));

console.log(document.querySelector('li:first-child'));
console.log(document.querySelector('li'));
console.log(document.querySelector('li:nth-child(4)'));
console.log(document.querySelector('li:nth-child(2)'));

let itemToChange = document.querySelector('li:nth-child(2)');
itemToChange.innerText = 'Gurka';
itemToChange.style.color = '#ff0000';
// console.log(itemToChange);
