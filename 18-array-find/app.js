/***********************************************************'*/
// Array.find...
/***********************************************************'*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numberFound = numbers.find((number) => number === 8);
console.log(numberFound);

const actors = ['michael', 'dave', 'eve', 'anette', 'eve'];
const actorFound = actors.find((actor) => actor === 'eve');
console.log(actorFound);

const vehicles = [
  {
    regNo: 'ABC123',
    make: 'Volvo',
    model: 'V90',
    modelYear: 2016,
    mileage: 95750,
  },
  {
    regNo: 'DEF123',
    make: 'Ford',
    model: 'Kuga',
    modelYear: 2011,
    mileage: 117500,
  },
  {
    regNo: 'GHI123',
    make: 'Volvo',
    model: 'S60',
    modelYear: 2004,
    mileage: 157500,
  },
  {
    regNo: 'JKL123',
    make: 'Volkswagen',
    model: 'Tiguan',
    modelYear: 2010,
    mileage: 133750,
  },
  {
    regNo: 'MNO123',
    make: 'Ford',
    model: 'MACH-E',
    modelYear: 2022,
    mileage: 10000,
  },
  {
    regNo: 'PQR123',
    make: 'BWM',
    model: 'X3e',
    modelYear: 2023,
    mileage: 1000,
  },
  {
    regNo: 'STU123',
    make: 'Audi',
    model: 'A6',
    modelYear: 2017,
    mileage: 85750,
  },
  {
    regNo: 'VXY123',
    make: 'BMW',
    model: 'X1',
    modelYear: 2015,
    mileage: 55750,
  },
  {
    regNo: 'ZZZ123',
    make: 'Volvo',
    model: 'XC90',
    modelYear: 2020,
    mileage: 76750,
  },
  {
    regNo: 'AAA123',
    make: 'Volkswagen',
    model: 'Tiguan',
    modelYear: 2006,
    mileage: 225000,
  },
];

const car1 = vehicles.find((vehicle) => vehicle.regNo === 'ABC123');
console.log(car1);

const cars = vehicles.find((vehicle) => vehicle.make === 'Volvo');
console.log(cars);

const car2 = vehicles.find(({ regNo }) => regNo === 'STU123');
console.log(car2);
