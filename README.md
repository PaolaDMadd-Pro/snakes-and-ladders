# Snakes and Ladders exercise
game implementation in JS

## Introduction
Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played by two or more players on a game board with numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific squares.



## Task
Your task is to create a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independently of the state of the game or the player turn. The arguments die1 and die2 are the dice thrown in a turn and are both integers between 1 and 6. The player will move by the sum of die1 and die2.

## The Board

![Snakes and Ladders, board Image()

## Rules

- There are two players, and both start off the board on square 0.
- Player 1 starts and alternates with player 2. 
- You follow the numbers up the board in order from 1 to 100.
- If the values of both dice are the same, that player will have another turn.

- Climb up ladders. 
  - The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows the bottom of a ladder, you may move the player all the way up to the square at the top of the ladder (even if you roll a double).

- Slide down snakes. 
  - Snakes move you back on the board. If you land exactly on the top of a snake, you must slide all the way down to the square at the bottom of the snake or chute (even if you roll a double).

- Land exactly on the last square to win. 
- The first player to reach the highest square on the board wins. However, if you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your piece to 100 (two moves), then "bounce" back to 99, 98, and 97 (three, four, then five moves).

- If the player rolls a double and lands on the finish square (100) without any remaining moves, the player wins the game and does not take another turn.

## Returns
Return "Player n Wins!" where n is the winning player who has landed on square 100 without any remaining moves left.
Return "Game over!" if a move is attempted after any player has won.
Otherwise, return "Player n is on square x", where n is the current player and x is the square they are currently on.
Good luck and enjoy!
