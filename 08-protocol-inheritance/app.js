// Bas funktion
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
}

Movie.prototype.play = function () {
  return `Spelar upp filmen ${this.title}`;
};

function Action(title, releaseYear, length, director) {
  Movie.call(this, title, releaseYear);
  this.length = length;
  this.director = director;
}

function Drama(title, releaseYear, grade) {
  Movie.call(this, title, releaseYear);
  this.grade = grade;
}

// Ärver Movie prototypes...
Action.prototype = Object.create(Movie.prototype);
Drama.prototype = Object.create(Movie.prototype);

// Länka konstruktor korrekt...
Action.prototype.constructor = Action;
Drama.prototype.constructor = Drama;

Action.prototype.play = function () {
  return `Spelar upp action filmen ${this.title}`;
};

Drama.prototype.play = function () {
  return `Spelar upp drama filmen ${this.title}`;
};

const uncharted = new Action(
  'Uncharted',
  2021,
  '1 tim 51 min',
  'Ruben Fleisher'
);

console.log(uncharted);
console.log(uncharted.play());

const burnt = new Drama('Burnt', 2015, 5.5);
console.log(burnt);
console.log(burnt.play());

console.log(uncharted.constructor);
console.log(burnt.constructor);
