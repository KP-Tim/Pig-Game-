'use strict';

// Starting Scores & active player
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
console.log(activePlayer);
// Selecting elements
const player1ScoreEl = document.querySelector('#score--0');
const player2ScoreEl = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let player1Current = document.querySelector('#current--0');
let player2Current = document.querySelector('#current--1');
// let playerActive = document.querySelector(`#current--${activePlayer}`);

// scores to 0
player1ScoreEl.textContent = 0;
player2ScoreEl.textContent = 0;

// hide the dice
diceEl.classList.add('hidden');

function rollDice() {
  // ** Selecting activePlayer
  let playerActive = document.querySelector(`#current--${activePlayer}`);
  // 1. Generating a random dice roll
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomNumber}.png`;
  // 3. Check for rolled 1 and add rolled number to player's score
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    playerActive.textContent = currentScore;
  } else {
    // 4. Check for rolled 1: If true, switch to next player
    currentScore = 0;
    playerActive.textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
}

btnRoll.addEventListener('click', rollDice);

// document.getElementById('diceID').src = 'dice-1png';

// player1Current.value = 0;
// player2Current.value = 0;
// if (randomNumber !== 1) {
//   if (player1.classList.contains('player--active')) {
//     player1Current.value += randomNumber;
//     player1Current.textContent = player1Current.value;
//   } else {
//     player2Current.value += randomNumber;
//     player2Current.textContent = player2Current.value;
//   }
// }
// // 4. Check for rolled 1: If true, switch to next player
// if (randomNumber === 1) {
//   console.log('1');
//   if (player1.classList.contains('player--active')) {
//     player1Current.value = 0;
//     player1Current.textContent = player1Current.value;
//     player1.classList.remove('player--active');
//     player2.classList.add('player--active');
//   } else {
//     player2Current.value = 0;
//     player2Current.textContent = player2Current.value;
//     player1.classList.add('player--active');
//     player2.classList.remove('player--active');
//   }
// }
