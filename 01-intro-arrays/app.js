// Create basic arrays...
// 1.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);

// Working with arrays...
const value = numbers[2];
console.log(value);

// Change a value...
numbers[2] = 12;
console.log(numbers);

// lenght...
console.log(numbers.length);

// Add element...
numbers[9] = 250;
console.log(numbers);

numbers[numbers.length] = 500;
console.log(numbers);

// 2. Another way to create an array...
const movies = new Array('Avatar', 'Batman Begins', 'Jurassic World:Dominiom');
console.log(movies);

movies[1] = 'The Dark Knight';
console.log(movies);

movies[movies.length] = 'Peter Pan';
console.log(movies);

console.log(`Min favorit film är ${movies[0]}`);
