const form = document.querySelector('#grocery-form');
const input = document.querySelector('#grocery-input');

const onAddGrocery = (e) => {
  e.preventDefault();
  const grocery = input.value;

  // console.log(getFromStorage());
  addToStorage(grocery);
};

const addToStorage = (grocery) => {
  let groceries = getFromStorage();
  groceries.push(grocery);
  localStorage.setItem('groceries', JSON.stringify(groceries));
};

const getFromStorage = () => {
  let groceries;

  if (localStorage.getItem('groceries') === null) {
    groceries = [];
  } else {
    groceries = JSON.parse(localStorage.getItem('groceries'));
  }

  return groceries;
};

form.addEventListener('submit', onAddGrocery);

// localStorage.clear(); Raderar allt!!!
// localStorage.removeItem('nyckeln');
