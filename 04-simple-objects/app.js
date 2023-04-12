/*******************************************************************************/
// Object literals - enkla objekt i JavaScript
/*******************************************************************************/
// Krullparenteser(måsvingar) används för att skapa enkla objekt i JavaScript...
const movie = {
  title: 'Avatar',
  length: '2 tim 41 min',
  director: 'James Cameron',
  releaseYear: 2009,
  description: {
    short: 'Kort beskrivning',
    long: 'Lång beskrivning',
  },
  actors: [
    { firstName: 'Sam', lastName: 'Worthington' },
    { firstName: 'Zoe', lastName: 'Saldana' },
    { firstName: 'Sigourney', lastName: 'Weaver' },
  ],
  info: function () {
    console.log(`Movie info: ${this.title} ${this.releaseYear}`);
  },
};
console.log(movie);

// Kan även skapa objekt på följande vis...
const obj1 = {};
// Dynamiskt skapa egenskaper
// Exempel 1.
obj1.title = 'Jurassic Park: 3';

console.log(obj1);

// Exempel 2.
const obj2 = new Object();
obj2.title = 'Batman Begins';
console.log(obj2);

// Åtkomst till egenskaper.
// Punkt notation...
console.log(movie.title);
console.log(movie.director);
console.log(movie.description.short);

// Indexers
console.log(movie['director']);

console.log(movie.actors[1].firstName);

// Ändra på värden på egenskaper
movie.releaseYear = 2010;
console.log(movie);

// Ta bort en egenskap...
delete movie.length;
console.log(movie);

// Lägga till egenskaper
movie.length = '2 tim 41 min';
console.log(movie);

// Lägga till metoder/funktioner dynamiskt...
// movie.info = function () {
//   console.log(`Movie info: ${this.title} ${this.releaseYear}`);
// };

// Anropa metoden/funktionen...
movie.info();
