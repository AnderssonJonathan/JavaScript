/***********************************************************'*/
// Grundläggande metoder för att manipulera listor...
/***********************************************************'*/
let numbers = [1, 2, 3, 4, 5, 6];

// Slice...
// Ändrar INTE den ursprunliga listan(mutate).
// Skapa istället en ny lista
console.log('SLICE...');
console.log(numbers);
console.log(numbers.slice(2));
console.log(numbers.slice(2, 4)); // ta ut 2 värden 4-2
console.log(numbers.slice(2, 5)); // ta ut 3 värden 5-2
console.log(numbers.slice(-1)); // minus betyder att börja i slutet på listan
console.log(numbers.slice(-3));
console.log(numbers.slice(1, -2)); // börja på värdet 2 och ta allt utom de två sista värdena.
const numbersCopy = numbers.slice();
console.log(numbersCopy);
console.log([...numbers]);

// SPLICE...
// ÄNDRAR den ursprunliga listan
// Det primära syftet med Splice är att ta bort element ur en lista!
console.log('SPLICE...');
// const removedNumbers = numbers.splice(3);
// console.log('De borttagna elementen', removedNumbers);
// console.log(numbers.splice(-1)); // Ta bort sista elementet ur listan
// numbers.splice(2, 3); // Letar upp värde 3 och tar bort 3 element inklusive värde 3
// numbers.splice(2, 1, 15);
console.log(numbers);

// REVERSE...
// ÄNDRAR den ursprungliga listan
console.log('REVERSE...');
numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = [10, 9, 8, 7];
console.log(numbers2);
console.log(numbers2.reverse());

// CONCAT...
console.log('CONCAT...');
let allNumbers = numbers.concat(numbers2).reverse();
console.log(allNumbers);
console.log([...numbers, ...numbers2]);
console.log(numbers, numbers2);

// JOIN...
console.log('JOIN...');
console.log(allNumbers.reverse().join(', '));
