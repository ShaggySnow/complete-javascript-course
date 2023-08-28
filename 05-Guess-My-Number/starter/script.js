'use strict';

/*
console.log(document.querySelector('.message'));
//DOM---> structured Representation of HTML Document allows javascript to access HTML Element and style to manipulate them.

document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

*/
//event listner
// add event listner added a action then a function as new parameter

//Game Logic

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number ';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
});
