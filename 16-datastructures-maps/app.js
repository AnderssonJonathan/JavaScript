/***********************************************************'*/
// // Datastrukturen Map...
/***********************************************************'*/
const movies = new Map();

movies.set('title', 'Avatar');
movies.set('categories', ['Äventyr', 'Action']);
movies.set(true, 'Jurassic World');
movies.set(1, 'Rating 5.5');

const arr = ['Exorcisten', 'Halloween'];
movies.set(arr, 'Skräck');

console.log(movies);
console.log(movies.size);

console.log(movies.get('title'));
console.log(movies.get('categories'));
console.log(movies.get(true));
console.log(movies.get(1));

console.log(movies.get(arr));

console.log(movies.has(1));
console.log(movies.has('name'));

const vehicles = new Map();
vehicles.set('ABC123', { make: 'Volvo', model: 'V90' });
vehicles.set('DEF123', { make: 'Ford', model: 'Focus' });
vehicles.set('GHI123', { make: 'Volkswagen', model: 'Tiguan' });

console.log(vehicles);

console.log(vehicles.get('GHI123'));

vehicles.forEach((vehicle) => console.log(vehicle.make));

console.log(vehicles.keys());
console.log(vehicles.values());
console.log(vehicles.entries());

const vehiclesArray = Array.from(vehicles);
console.log(vehiclesArray);
