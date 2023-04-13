/************************************************************************/
// E6 Klasser
/************************************************************************/
class Movie {
  constructor(title, releaseYear, length, director) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.length = length;
    this.director = director;
    console.log('Kör konstruktorn');
  }

  play() {
    return `Spelar upp filmen ${this.title}`;
  }

  pause() {
    return `Pausar filmen ${this.title}`;
  }

  stop() {
    return `Stoppar filmen ${this.title}`;
  }
}

const uncharted = new Movie(
  'Uncharted',
  2021,
  '1 tim 51 min',
  'Ruben Fleisher'
);

const avatar = new Movie('Avatar', 2009, '2 tim 41 min', 'James Cameron');

console.log(uncharted.releaseYear);
console.log(uncharted['director']);
console.log(uncharted.play());
console.log(uncharted);

console.log(avatar);
