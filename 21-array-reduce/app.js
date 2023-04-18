/***********************************************************'*/
// Array.reduce...
/***********************************************************'*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Version 1.
const sum = () => {
  let acc = 0;
  for (let currentValue of numbers) {
    acc += currentValue;
  }
  return acc;
};

console.log(sum());

// Version 2.
const totalSum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(totalSum);

// Kundvagns exempel

const cart = [
  { productId: 1, product: 'Slip papper', price: 50, quantity: 2 },
  { productId: 2, product: 'Polermaskin', price: 2450, quantity: 1 },
  { productId: 3, product: 'Rubbing, flytande', price: 149, quantity: 1 },
  { productId: 4, product: 'Startbatteri', price: 2678, quantity: 1 },
];

const totalAmount = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

const totalQuantity = cart.reduce((acc, product) => {
  return acc + product.quantity;
}, 0);

console.log(
  'Total kostnad: ' + totalAmount,
  'Totalt antal artiklar: ' + totalQuantity
);
