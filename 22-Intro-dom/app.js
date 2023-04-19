/***********************************************************'*/
// Introducktion till DOM...
/***********************************************************'*/
// Globala objekt högst
// console.log(window);

// console.log(window.document);
// console.log(document);

// console.log(document.documentElement);

// console.log(document.head.children);

// console.log(document.body);
// console.log(document.body.children[0].innerHTML);

// console.log(document.links[1]);

// document.body.innerHTML = '<h2>Ett nytt innehåll</h2>';
// document.write('JavaScript hälsar!😄');

// document.all är snart borta...
// console.log(document.all);

// returnerar allt som finns direkt under html elementet(tag)
// console.log(document.documentElement);

// console.log(document.doctype);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.characterSet);
// console.log(document.contentType);

// console.log(document.links);
// document.links[0].id = 'mitt-id';
// document.links[0].id = 'id-2';
// document.links[0].className = 'min-super-class';

// console.log(document.links[0].classList);

// console.log(document.images);
// console.log(document.images[0]);
// console.log(document.images[0].src);

console.log(document.links);

// document.links.forEach((link) => console.log(link));

const links = Array.from(document.links);
links.forEach((link) => console.log(link));
