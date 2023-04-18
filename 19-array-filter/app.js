/***********************************************************'*/
// Array.filter...
/***********************************************************'*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Version 1.
const even1 = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    even1.push(number);
  }
});

console.log(even1);

// Version 2.
const even2 = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(even2);
// console.log(numbers);

// Version 3.
const even3 = numbers.filter((number) => number % 2 === 0);
console.log(even3);

const vehicles = [
  { make: 'Volvo', model: 'V90', modelYear: 2016, mileage: 95750 },
  { make: 'Ford', model: 'Kuga', modelYear: 2011, mileage: 117500 },
  { make: 'Volvo', model: 'S60', modelYear: 2004, mileage: 157500 },
  { make: 'Volkswagen', model: 'Tiguan', modelYear: 2010, mileage: 133750 },
  { make: 'Ford', model: 'MACH-E', modelYear: 2022, mileage: 10000 },
  { make: 'BWM', model: 'X3e', modelYear: 2023, mileage: 1000 },
  { make: 'Audi', model: 'A6', modelYear: 2017, mileage: 85750 },
  { make: 'BMW', model: 'X1', modelYear: 2015, mileage: 55750 },
  { make: 'Volvo', model: 'XC90', modelYear: 2020, mileage: 76750 },
  { make: 'Volkswagen', model: 'Tiguan', modelYear: 2006, mileage: 225000 },
];

// Hämta alla bilar av typen Volvo...
const volvo = vehicles.filter((vehicle) => vehicle.make === 'Volvo');
console.log(volvo);

// Hämta ut alla bilar med årsmodell mellan 2016 och 2023...
const cars = vehicles.filter(
  (vehicle) => vehicle.modelYear >= 2016 && vehicle.modelYear <= 2023
);
console.log(cars);

// Hämta ut alla bilar som har körts mindre än 60000 km...
const cars2 = vehicles.filter((vehicle) => vehicle.mileage <= 60000);
console.log(cars2);
