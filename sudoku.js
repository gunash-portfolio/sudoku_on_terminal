"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Sudoku = /** @class */ (function () {
    function Sudoku() {
        this.board = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9],
        ];
    }
    Sudoku.prototype.isValidMove = function (row, col, num) {
        // Check if the number is not in the same row or column
        for (var i = 0; i < 9; i++) {
            if (this.board[row][i] === num || this.board[i][col] === num) {
                return false;
            }
        }
        // Check if the number is not in the same 3x3 grid
        var startRow = Math.floor(row / 3) * 3;
        var startCol = Math.floor(col / 3) * 3;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.board[startRow + i][startCol + j] === num) {
                    return false;
                }
            }
        }
        return true;
    };
    Sudoku.prototype.solve = function () {
        for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
                if (this.board[row][col] === 0) {
                    for (var num = 1; num <= 9; num++) {
                        if (this.isValidMove(row, col, num)) {
                            this.board[row][col] = num;
                            if (this.solve()) {
                                return true;
                            }
                            this.board[row][col] = 0;
                        }
                    }
                    return false; // Backtrack if no valid number is found
                }
            }
        }
        return true; // Sudoku solved successfully
    };
    Sudoku.prototype.printBoard = function () {
        for (var i = 0; i < 9; i++) {
            console.log(this.board[i].join(' '));
        }
    };
    Sudoku.prototype.getUserInput = function () {
        console.log("Enter numbers for each row, separated by spaces. Use 0 for empty spaces.");
        for (var i = 0; i < 9; i++) {
            var validInput = false;
            while (!validInput) {
                var userInput = readlineSync.question("Row ".concat(i + 1, ": "));
                var numbers = userInput.split(' ').map(Number);
                if (numbers.length !== 9 || numbers.some(isNaN)) {
                    console.log("Invalid input. Please enter exactly 9 numbers for each row.");
                }
                else {
                    this.board[i] = numbers;
                    validInput = true;
                }
            }
        }
    };
    return Sudoku;
}());
// Example usage
var sudoku = new Sudoku();
sudoku.getUserInput();
console.log("\nEntered Sudoku:");
sudoku.printBoard();
if (sudoku.solve()) {
    console.log("\nSolved Sudoku:");
    sudoku.printBoard();
}
else {
    console.log("\nNo solution exists.");
}
