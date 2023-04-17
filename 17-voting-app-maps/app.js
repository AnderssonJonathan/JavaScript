/***********************************************************'*/
// Voting app...
/***********************************************************'*/
const votes = new Map();
votes.set('Titanic', 0);
votes.set('Avatar', 0);
votes.set('JurassicWorld', 0);
votes.set('Gudfadern', 0);

// lägger till en händelsehanterinf för submit händelsen i formuläret...
document.querySelector('#vote-form').addEventListener('submit', vote);

// Funktionen för att räkna röster...
function vote(e) {
  e.preventDefault();

  const selectedOption = document.querySelector(
    "input[name='vote-option']:checked"
  );

  // console.log(selectedOption);

  if (!selectedOption) {
    alert('Du måste välja film!');
    return;
  }

  let voteCount = votes.get(selectedOption.value);
  votes.set(selectedOption.value, voteCount + 1);

  displayResult();

  // Omöjligöra att rösta mer än en gång...
  document
    .querySelector('#vote-form')
    .querySelectorAll('input')
    .forEach((elem) => elem.setAttribute('disabled', true));
}

function displayResult() {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  for (let [option, voteCount] of votes) {
    const elem = document.createElement('div');
    elem.classList.add(
      'flex',
      'justify-content-between',
      'px-2',
      'py-1',
      'border-bottom'
    );

    elem.innerHTML = `<strong>${option}: </strong> ${voteCount} röster`;
    result.appendChild(elem);
  }
}
