'use strict';

// Selecting elements
const player1ScoreEl = document.querySelector('#score--0');
const player2ScoreEl = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

player1ScoreEl.textContent = 0;
player2ScoreEl.textContent = 0;

diceEl.classList.add('hidden');
