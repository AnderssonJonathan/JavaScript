/***********************************************************'*/
// Array.map...
/***********************************************************'*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Version 1.
const numbers1 = [];
numbers.forEach((number) => {
  return numbers1.push(number * 3);
});

// Version 2.
const numbers2 = numbers.map((number) => number * 3);
console.log(numbers2);

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

// const manufacturers = vehicles.map((manufacturer) => {
//   return {
//     companyName: manufacturer.make,
//     model: manufacturer.model,
//     modelYear: manufacturer.modelYear,
//   };
// });

const manufacturers = vehicles.map((manufacturer) => {
  return {
    vehicleName: manufacturer.make + ' ' + manufacturer.model,
    modelYear: manufacturer.modelYear,
  };
});

console.log(manufacturers);
