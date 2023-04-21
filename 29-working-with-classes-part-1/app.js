/************************************************************/
// Document Object Model Arbeta med css klasser...
/************************************************************/

const main = document.querySelector('main');

const displayModal = (movie) => {
  const modal = createModal(movie);
  const overlay = createOverlay();

  main.appendChild(modal);
  main.appendChild(overlay);
};

const createModal = (movie) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('flex-v');

  const container = document.createElement('div');
  container.classList.add('modal-container');

  const image = document.createElement('img');
  image.setAttribute('src', `./images/${movie.poster}`);
  image.setAttribute('alt', 'The Batman Movie Poster');
  image.setAttribute('title', 'The Batman Movie');

  const movieInfo = document.createElement('p');
  movieInfo.classList.add('movie-info');
  const textContent = document.createTextNode(
    `${movie.title} ${movie.releaseYear}, ${movie.length}`
  );

  movieInfo.appendChild(textContent);
  container.appendChild(image);
  modal.appendChild(container);
  modal.appendChild(movieInfo);

  return modal;
};

const createOverlay = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  return overlay;
};

class Movie {
  constructor(title, releaseYear, length, director, image) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.length = length;
    this.poster = image;
    this.director = director;
  }
}

const theBatmanMovie = new Movie(
  'The Batman',
  2022,
  '2 tim 56 min',
  'Matt Reeves',
  'Batman.jpg'
);

displayModal(theBatmanMovie);
