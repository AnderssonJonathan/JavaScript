// function Movie(title, releaseYear, length, director) {
//   this.title = title;
//   this.releaseYear = releaseYear;
//   this.length = length;
//   this.director = director;
// }

// Movie.prototype.play = function () {
//   return `Spelar upp filmen ${this.title}`;
// };

// Movie.prototype.pause = function () {
//   return `Pausat filmen ${this.title}`;
// };

// Movie.prototype.stop = function () {
//   return `Stannar filmen ${this.title}`;
// };

// const uncharted = new Movie(
//   'Uncharted',
//   2021,
//   '1 tim 51 min',
//   'Ruben Fleisher'
// );

// console.log(uncharted);
// console.log(uncharted.play());
// console.log(uncharted.stop());

// console.log(Object.getPrototypeOf(uncharted));

/*************************************************************************/
// Alternativt sätt
/*************************************************************************/
const moviePrototype = {
  play: function () {
    return `Spelar upp filmen ${this.title}`;
  },
  pause: function () {
    return `Pausar filmen ${this.title}`;
  },
  stop: function () {
    return `Stoppar filmen ${this.title}`;
  },
};

function createMovie(title, releaseYear, length, director) {
  return Object.create(moviePrototype, {
    title: {
      value: title,
    },
    releaseYear: {
      value: releaseYear,
    },
    length: {
      value: length,
    },
    director: {
      value: director,
    },
  });
}

const uncharted = createMovie(
  'Uncharted',
  2021,
  '1 tim 51 min',
  'Ruben Fleisher'
);

console.log(uncharted);
console.log(uncharted.title);
console.log(uncharted.play());
console.log(uncharted.pause());
console.log(uncharted.stop());
