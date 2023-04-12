/****************************************************************/
// Constructor Functions...
// Skapar en mall för nya objekt av typen Movie...
/****************************************************************/
// Följande händer när vi instantierar en konstruktor funktion.
// 1. Ett nytt tom objekt skapas.
// 2. Konstruktor funktionen anropas med eventuella argument.
// 3. Nyckelord this knyts ny till det nya tomma objektet.
// 4. Det nya objektet returneras ifrån konstruktor funktionen.

function Movie(title, releaseYear, length, director) {
  this.title = title;
  this.releaseYear = releaseYear;
  this.length = length;
  this.director = director;
  this.play = function () {
    return `Filmen ${this.title} spelas just nu`;
  };
  // return this;
}

// uncharted = objekt
const uncharted = new Movie(
  'Uncharted',
  2021,
  '1 tim 51 min',
  'Ruben Fleisher'
);
const avatar = new Movie('Avatar', 2009, '2 tim 41 min', 'James Cameron');
console.log(uncharted);
console.log(avatar);

uncharted.length = '1 tim 54 min';
console.log(uncharted);

console.log(uncharted.director);
console.log(uncharted['director']);

// Ta fram konstruktorn
console.log(avatar.constructor);

const myDate = new Date();

// Kontrollera om ett objekt är av en specifik typ av funktion/klass
console.log(avatar instanceof Movie);
console.log(myDate instanceof Movie);

/************************************************************************************/
// Egenskaper
/************************************************************************************/
// Dynamiskt lägga till en egenskap...
uncharted.genre = 'Action';
console.log(uncharted);
console.log(avatar);

// Kontrollera att en egenskap existerar på instansen...
console.log(uncharted.hasOwnProperty('genre'));
console.log(avatar.hasOwnProperty('genre'));

// Ta bort en egenskap...
delete uncharted.genre;
console.log(uncharted);

// Hämta alla egenskaper(keys)
console.log(Object.keys(uncharted));
// Hämta alla värden
console.log(Object.values(uncharted));
// Hämta allt...
console.log(Object.entries(uncharted));

// iterera igenom entries
for (let [key, value] of Object.entries(uncharted)) {
  if (typeof value !== 'function') {
    console.log(`Egenskap: ${key} - Värde: ${value}`);
  }
}

/************************************************************************************/
// Metoder
/************************************************************************************/

console.log(avatar.play());
console.log(uncharted.play());

// Dynamiskt lägga till metoder/funktioner...
// avatar.pause = function () {
//   return 'Filmen är pausad';
// };

// Arrow function(pilfunktion)
avatar.pause = () => {
  return 'Filmen är pausad';
};

console.log(avatar.pause());
// console.log(uncharted.pause());

// Ta bort metoden...
delete avatar.pause;
console.log(avatar);
