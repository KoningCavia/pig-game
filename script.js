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

//Set initial values of elements
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
//Set inital values of variables

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

document.querySelector('.btn--roll').addEventListener('click', function () {
  // 1 generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   document.querySelector('');

  // 2 display dice. remove hidden attribute && change src attribute to proper dice picture.
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  // 3 check for rolled 1. if true change to other player
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    //Both methods down here will work
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // can this be done through queryselector? answer: Yes
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
