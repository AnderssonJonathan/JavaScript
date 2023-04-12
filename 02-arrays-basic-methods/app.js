const movies = ['Avatar', 'Batman Begins', 'Jurassic World:Dominion'];
console.log(movies);

// Grundläggande metoder...
// Alla metoder kommer att ändra befintlig array.

// 1. Metod för att lägga till ett nytt element.
movies.push('Avengers End Game');
console.log(movies);

// 2. Lägg till ett nytt element först i arrayen.
// const length = movies.unshift('Wakanda Forever');
// console.log(movies, length);

// 3. Ta bort sista elementet
// movies.pop();
// console.log(movies);

// 4. Ta bort första elementet
// movies.shift();
// console.log(movies);

// 5. Ändra ordningen på listan...
// movies.reverse();
// console.log(movies);

// 6. Kontrollera om ett element existerar i listan.
console.log(movies.includes('Avatar'));

// 7. Hitta elementets position i listan.
const exists = movies.indexOf('Avatar');
console.log(exists);
console.log(movies[3]);

const notExists = movies.indexOf('The Bucket List');
console.log(notExists);

// 8. Skapa en ny lista med valda element ur den ursprunliga listan.
// slice exkluderar sista index position
// let list = movies.slice(0, 3);
// console.log(list);
// console.log(movies);

// 9. Ta bort ett element ur listan
// const deletedMovie = movies.splice(1, 2);
// console.log(movies, deletedMovie);

// 10. Koppla fler metoder
console.log(movies);
let list = movies.splice(1, 3).reverse().toString();
console.log(list, movies);
