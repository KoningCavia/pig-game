'use strict';

//Alternatieve methoden van elementen selecten bij id.
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
// Selecting element by class
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Set variables without value
let scores, currentScore, activePlayer, playing;

const init = function () {
  //Set inital values of variables
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  activePlayer = 0;
  currentScore = 0;
};
init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generate dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display value and dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);
    //Check for '1-roll'
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Update player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Check for win-conditions
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.toggle('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      //finish game
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
