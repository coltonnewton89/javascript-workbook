'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//creating class of checker with constructor to define what symbal the piece is
//and what row and what col it will be on.
class Checker {
  constructor(symbol, row, col) {
    this.symbol = symbol;
    this.row = row;
    this.col = col;
    this.isKing = false;
  }
  //king mehhhhh!!!
  makeKing() {
    if (!this.isKing) {
      this.isKing = true;
      if (this.symbol === 'x') {
        this.symbol = 'X';
      } else {
        this.symbol = 'O'
      }
    }
  }

}
// creatith thy board with two empty arrays as the constructor
class Board {
  constructor() {
    this.grid = []
    this.checkers = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers/ VV this is what the user will see
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }


  createCheckers() {
    //find all row
    for (let row = 0; row < 8; row++) {
      //find all of collumns 
      for (let col = 0; col < 8; col++) {
        //place every other one with x on far side
        if ((row + col) % 2 === 1 && row < 3) {
          const newChecker = new Checker('x', row, col);
          this.grid[row][col] = newChecker;
          this.checkers.push(newChecker);
          //other wise place o on near side
        } else if ((row + col) % 2 === 1 && row > 4) {
          const newChecker = new Checker('o', row, col);
          this.grid[row][col] = newChecker;
          this.checkers.push(newChecker);
        }
      }
    }
  }

  findPiece(coordinate) {
    const row = coordinate[0];
    const col = coordinate[1];
    const currentPiece = this.checkers.find(checker => {
      return checker.row === row && checker.col === col;
    });
    return currentPiece;
  }

  removePiece(currentPiece) {
    const row = currentPiece.row;
    const col = currentPiece.col;
    this.grid[row][col] = null;
    const index = this.checkers.indexOf(currentPiece);
    this.checkers.splice(index, 1);
  }

  isLegalMove(currentPiece, destination) {
    const newRow = destination[0];
    const newCol = destination[1];
    const oldRow = currentPiece.row;
    const oldCol = currentPiece.col;
    if (this.grid[newRow][newCol]) {
      return false;
    }
    if (currentPiece.symbol === 'x' || currentPiece.isKing) {
      if (newRow === oldRow + 1 && (newCol === oldCol + 1 || newCol === oldCol - 1)) {
        return true;
      } else if (newRow === oldRow + 2 && newCol === oldCol + 2 && this.grid[oldRow + 1][oldCol + 1]) {
        this.removePiece(this.grid[oldRow + 1][oldCol + 1]);
        return true;
      } else if (newRow === oldRow + 2 && newC === oldC - 2 && this.grid[oldRow + 1][oldCol - 1]) {
        this.removePiece(this.gird[oldRow + 1][oldCol - 1]);
        return true;
      }
    }
    if (currentPiece.symbol === 'o' || currentPiece.isKing) {
      if (newRow === oldRow - 1 && (newCol === oldCol + 1 || newCol === oldCol - 1)) {
        return true;
      } else if (newRow === oldRow - 2 && newCol === oldCol + 2 && this.grid[oldRow - 1][oldCol + 1]) {
        this.removePiece(this.grid[oldRow - 1][oldCol + 1]);
        return true;
      } else if (newRow === oldRow - 2 && newCol === oldCol - 2 && this.grid[oldRow - 1][oldCol - 1]) {
        this.removePiece(this.grid[oldRow - 1][oldCol - 1]);
        return true;
      }
    }
    return false;
  }

  movePiece(currentPiece, destination) {
    const newRow = destination[0];
    const newCol = destination[1];
    const oldRow = currentPiece.row;
    const oldCol = currentPiece.col;
    this.grid[newRow][newCol] = currentPiece;
    this.grid[oldRow][oldCol] = null;
    currentPiece.row = newRow;
    currentPiece.col = newCol;
    if (newRow === 7 || newRow === 0) {
      currentPiece.makeKing();
    }
  }

  checkForWin() {
    const hasX = this.checkers.some(checker => {
      return checker.symbol === 'x' || checker.symbol === 'X';
    });
    if (!hasX) {
      console.log('O Wins!');
      return true;
    }
    const hasO = this.checkers.some(checker => {
      return checker.symbol === 'o' || checker.symbol === 'O';
    });
    if (!hasO) {
      console.log('X Wins!');
      return true;
    }
    return false;
  }

}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }

  moveChecker(whichPiece, toWhere) {
    const origin = this.parseInput(whichPiece);
    const destination = this.parseInput(toWhere);
    if (!origin || !destination) {
      console.log('Invalid board location!');
      return null;
    }
    const currentPiece = this.board.findPiece(origin);
    if (!currentPiece) {
      console.log('No checker selected!');
      return null;
    }
    const isLegalMove = this.board.isLegalMove(currentPiece, destination);
    if (!isLegalMove) {
      return null;
    } else {
      this.board.movePiece(currentPiece, destination);
    }
  }

  parseInput(string) {
    const row = parseInt(string[0]);
    const col = parseInt(string[1]);
    const validInputs = [0, 1, 2, 3, 4, 5, 6, 7];
    if (!validInputs.includes(row) || !validInputs.includes(col)) {
      return null;
    }
    return [row, col];
  }

}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}