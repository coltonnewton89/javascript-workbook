'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  var guessArray = guess.split('');
  var solutionArray = solution.split('');
  var correctLetters = 0;
  var correctLetterLocations = 0;
  for (var i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] == guessArray[i]) {
      correctLetterLocations += 1;
      solutionArray[i] = null;
    }


  }
  for (var j = 0; j < solutionArray.length; j++) {
    var targetIndex = guessArray.indexOf(guess);
    if (targetIndex > -1) {
      correctLetters += 1;
      solutionArray[j] = null;
    }
    return correctLetterLocations + "-" + correctLetters;

  }
}

function mastermind(guess) {
  solution = 'abcd';
  board.push(guess);
  if (guess === solution) {
    console.log("you win");
    return 'WHOA! You guessed it'
  }
  var hint = generateHint(guess)
  board.push(hint);

}

//console.log(hint)// Comment this out to generate a random solution
// your code here



function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
