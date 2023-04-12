/**********************************************************************/
// Arbeta med objekt och inbyggda metoder
/**********************************************************************/

// Använda spread operatorn...
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { x: 4, y: 5, z: 6 };
console.log(object1, object2);

// Vi fick spread operatorn med version ES2015
const object3 = { ...object1, ...object2 };
console.log(object3);

// Innan version ES2015, fick vi använda en metod assign.
const object4 = Object.assign({}, object1, object2);
console.log(object4);

// Listor av objekt...
const movies = [
  {
    title: 'Uncharted',
    length: '1 tim 51 min',
    director: 'Ruben Fleisher',
    releaseYear: 2021,
    description: {
      short: 'Kort beskrivning',
      long: 'Lång beskrivning',
    },
    actors: ['Tom Holland', 'Mark Wahlberg', 'Antonio Banderas'],
  },
  {
    title: 'Avatar',
    length: '2 tim 41 min',
    director: 'James Cameron',
    releaseYear: 2009,
    description: {
      short: 'Kort beskrivning',
      long: 'Lång beskrivning',
    },
    actors: ['Sam Worthington', 'Zoë Saldana', 'Sigourney Weaver'],
  },
];

// Komma åt specifika objekt och dess egenskaper...
console.log(movies[0].title);
console.log(movies[0].description.long);
console.log(movies[0].actors[0]);

// Kontrollera om en viss egenskap existerar i objektet...
const movie = {
  title: 'Uncharted',
  length: '1 tim 51 min',
  director: 'Ruben Fleisher',
  releaseYear: 2021,
  description: {
    short: 'Kort beskrivning',
    long: 'Lång beskrivning',
  },
  actors: ['Tom Holland', 'Mark Wahlberg', 'Antonio Banderas'],
};

console.log(movie.hasOwnProperty('title'));
console.log(movie.hasOwnProperty('genre'));

// Arbeta med statiska funktioner på Objekt typen...
// Hämta alla egenskaper för objektet.
console.log(Object.keys(movie));
// Hämta antalet egenskaper i ett objekt.
console.log(Object.keys(movie).length);
// Hämta alla värden i objektet.
console.log(Object.values(movie));
// Hämta alla egenskaper och dess värde.
console.log(Object.entries(movie));

/******************************************************************************/
// Destructuring plocka ut de som vi behöver, att namnge våra egenskaper
/******************************************************************************/
// Namngivning
// const title = 'Uncharted';
// const releaseYear = 2021;
// const length = '1 tim 51 min';

// const myMovie = {
//   title: title,
//   releaseYear: releaseYear,
//   length: length,
// };

// const myMovie = {
//   title,
//   releaseYear,
//   length,
// };

// Destructuring, plocka bara det som jag behöver
const { title, releaseYear, director } = movie;
console.log(title);
console.log(title, releaseYear, director);
