'use strict';

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

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  player1ScoreEl.textCont;
  player1ScoreEl.textContent = 0;
  player2ScoreEl.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  diceEl.classList.add('hidden');
};

init();

// switching player
function switchPlayer() {
  let playerActive = document.querySelector(`#current--${activePlayer}`);
  currentScore = 0;
  playerActive.textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}

// fold score and switch if score is under 100
function holdScore() {
  if (playing) {
    let activeScore = document.querySelector(`#score--${activePlayer}`);
    scores[activePlayer] += currentScore;
    activeScore.textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
}

function rollDice() {
  if (playing) {
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
      switchPlayer();
    }
  }
}

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', init);
