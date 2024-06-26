# Sudoku on Terminal

A simple Sudoku solver written in TypeScript that runs on the terminal. This program allows users to input their own Sudoku puzzles and solves them using a backtracking algorithm.

## Features

- Input your own Sudoku puzzles via the terminal.
- Solves the puzzles using a backtracking algorithm.
- Displays the solved Sudoku puzzle in the terminal.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [TypeScript](https://www.typescriptlang.org/) installed globally (optional, if using `npx`).

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sudoku_on_terminal.git
cd sudoku_on_terminal
```

2. Install the required dependencies:

``` bash
npm install
```

# Usage

1. Run the TypeScript file using ts-node (if installed globally):

```bash
ts-node src/index.ts
```

Or compile the TypeScript file and run the compiled JavaScript file:
```bash
tsc
node dist/index.js
```

2. Follow the prompts to enter your Sudoku puzzle. Enter numbers for each row, separated by spaces. Use 0 for empty spaces.
3. The program will display the entered Sudoku puzzle, solve it, and then display the solved puzzle.

# Example

```bash

Enter numbers for each row, separated by spaces. Use 0 for empty spaces.
Row 1: 5 3 0 0 7 0 0 0 0
Row 2: 6 0 0 1 9 5 0 0 0
Row 3: 0 9 8 0 0 0 0 6 0
Row 4: 8 0 0 0 6 0 0 0 3
Row 5: 4 0 0 8 0 3 0 0 1
Row 6: 7 0 0 0 2 0 0 0 6
Row 7: 0 6 0 0 0 0 2 8 0
Row 8: 0 0 0 4 1 9 0 0 5
Row 9: 0 0 0 0 8 0 0 7 9

Entered Sudoku:
5 3 0 0 7 0 0 0 0
6 0 0 1 9 5 0 0 0
0 9 8 0 0 0 0 6 0
8 0 0 0 6 0 0 0 3
4 0 0 8 0 3 0 0 1
7 0 0 0 2 0 0 0 6
0 6 0 0 0 0 2 8 0
0 0 0 4 1 9 0 0 5
0 0 0 0 8 0 0 7 9

Solved Sudoku:
5 3 4 6 7 8 9 1 2
6 7 2 1 9 5 3 4 8
1 9 8 3 4 2 5 6 7
8 5 9 7 6 1 4 2 3
4 2 6 8 5 3 7 9 1
7 1 3 9 2 4 8 5 6
9 6 1 5 3 7 2 8 4
2 8 7 4 1 9 6 3 5
3 4 5 2 8 6 1 7 9

```

# License
This project is licensed under the MIT License. See the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) file for details.
