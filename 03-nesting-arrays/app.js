/*****************************************************************/
// Nästlade listor
/*****************************************************************/
const action = ['Uncharted', 'John Wick', 'Bullet Train'];
const drama = ['Burnt', 'Erin Brockovich', 'Forrest Gump'];

console.log(action, drama);

// Placera en lista i en annan lista
// action.push(drama);
// console.log(action);

// Komma åt den nästlade listan...
console.log(action[3]);
// Komma åt den första filmen i min nästlade lista
// console.log(action[3][1]);

// Om vi vill skapa en ny lista med både action och drama
const movies = [action, drama];
console.log(movies);

// Om vi vill komma åt filmen Erin Brockovich...
console.log(movies[1][1]);

// Om vi vill skapa en lista av flera listor...
// Version 1.
// const allMovies = action.concat(drama);
// console.log(allMovies);

// Version 2.
// Spread operatorn...
const allMovies = [...action, ...drama];
console.log(allMovies);

// Platta till en nästlad lista
const list = [1, 2, 3, [4, 5], 6, [7, 8], 11, 12];
console.log(list);
console.log(list.flat());

/*************************************************************************/
// Statiska metoder på Array objekt
/*************************************************************************/
// Kontrollera om listan är av typen Array.
console.log(Array.isArray(allMovies));

// Skapa en lista ifrån värden med Array.from()...
// Exempel 1.
console.log(Array.from('Avatar'));
// Exempel 2.
console.log(Array.from([2, 4, 6, 8], (c) => c * c));

// Skapa en lista ifrån ett variabelt antal argument med Array.of()...
// Exemple 1.
console.log(Array.of());
// Exempel 2.
console.log(Array.of('Avatar', '2 tim 41 min', 2009, 'James Cameron'));
