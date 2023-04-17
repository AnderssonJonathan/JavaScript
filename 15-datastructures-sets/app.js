/***********************************************************'*/
// Datastrukturen Sets...
/***********************************************************'*/
const manufacturers = new Set([
  'Volvo',
  'Kia',
  'Ford',
  'Volvo',
  'Fiat',
  'Ford',
  'Volvo',
  'Volvo',
  'Volvo',
  'Volvo',
  'Volvo',
  'Volvo',
]);

console.log(manufacturers);
console.log(new Set('Michael'));
console.log(new Set());

console.log(manufacturers.size);
console.log(manufacturers.has('Fiat'));
console.log(manufacturers.has('Volkswagen'));

manufacturers.add('Volkswagen');
manufacturers.add('Volkswagen');
manufacturers.add('Volkswagen');
manufacturers.add('Volkswagen');
manufacturers.add('Volkswagen');

console.log(manufacturers);
console.log(manufacturers.size);

manufacturers.delete('Volkswagen');
console.log(manufacturers);
console.log(manufacturers.size);

for (const make of manufacturers) {
  console.log(make);
}

// manufacturers.clear();
// console.log(manufacturers);

const manufacturers2 = [
  'Volvo',
  'Kia',
  'Ford',
  'Volvo',
  'Fiat',
  'Ford',
  'Volvo',
  'Volvo',
  'Volvo',
  'Volvo',
  'Volvo',
  'Volvo',
];

// Steg 1.
const noDuplicates = new Set(manufacturers2);
console.log(noDuplicates);

// Steg 2.
const uniqueManufacturers = [...noDuplicates];
console.log(uniqueManufacturers);

console.log(uniqueManufacturers[1]);
console.log(uniqueManufacturers.reverse());
