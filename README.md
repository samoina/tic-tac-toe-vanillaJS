# Tic Tac Toe Game

Tic Tac Toe is a classic two-player game that uses a 3X3 board layout. The players choose between two symols - either the X or the O. The end-goal of the game is to ensure that one's sybmols are arranged in a straight line - whether that's horizontally, diaognally or vertically.

This is an excellent challenge for web developers looking to hone their skills.

## Prerequisites

In order to create this game, the prerequisites are a good understanding of:

- HTML
- CSS
- Vanilla Javascript

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [My approach](#my-approach)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

This was inspired by the brief provided on the Frontend Mentor premium challenge for the Tic Tac Toe game.

Users should be able to:

- Play the game either solo vs the computer or multiplayer against another person
- Bonus 1: Save the game state in the browser so that it’s preserved if the player refreshes their browser
- Bonus 2: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

### My approach

1. the idea is to have a hyptothetical board that informs what all the possible winning combinations look like. This will be a 2D array - an array with nested arrays.

```javascript
/*
my hypothetical board to rep the 3X3 grid
  [0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
*/
```

2. I then created the variables I would need, including variables for:

- the gameboard to attach an eventListener to
- to display the winner message/ whose turn it is to play
- the 8 possible winning combinations for a 3X3 tic tac toe game
- a counter (initialized to 0), playerTurn ( a boolean where if true, it is player X turn to play) and two arrays to reflect the position of the players.

```javascript
const gameBoard = document.querySelector('.game-board');

const displayPlayerTurn = document.querySelector('.display-player');

const listWinningCombi = [
	//rows
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	//cols
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	//diagonals
	[0, 4, 8],
	[2, 4, 6],
];

let playerCount = 0,
	playerTurn = true,
	playerXArr = [],
	playerYArr = [];
```

3. I also need to add an event listener onto the game board so that when clicked, i can keep track of the game's state. First, i need to check if the clicked box is empty, and if it is, check whose turn it is, and then change the content on that specific game square to include the player symbol. I then pushed its position into the specific player's array, increased the counter, checked whose turn it was next and finally checked the game score. I do this for playerO as well, and make sure to change the boolean check on playerturn.

NOTE: In my code, the classes provided for each of the squares, 0 through to 8 are exactly similar to the positions I am checking for on the hypothetical game board. This way, when a game square is clicked, its first class will be equivalent to the position i need to track on the grid box.

To do this, I extract the first class name from the [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) property of the specific game square, index[0] I have clicked, and assign it to the variable `playerPosition`. Since the class is a string, I use the unary plus operator just before the operand so as to convert it to a number, which I then push into the array.

```javascript
//function to add player's symbol on click
const addSymbol = (ev) => {
	let gameSquare = ev.target;
	//if the grid box is empty, AND playerTurn is true, it is X turn to play. so display X
	if (gameSquare.textContent === '' && playerTurn === true) {
		gameSquare.textContent = 'X';
		let playerPosition = +gameSquare.classList[0];

		playerXArr.push(playerPosition);
		incrCounter();
		checkPlayerTurn();
		checkScore();
	}

	if (gameSquare.textContent === '' && playerTurn === false) {
		gameSquare.textContent = 'O';
		let playerPosition = +gameSquare.classList[0];

		playerOArr.push(playerPosition);
		incrCounter();
		checkPlayerTurn();
		checkScore();
	}
};

gameBoard.addEventListener('click', addSymbol);
```

```javascript

```

4. The next step is to check for the game score.
   A game draw/tie occurs when the game ends with no winner. That is, none of the players had their symbls in a row. Logic wise, this is the easiest place to start because it means that all of the game squares are filled, the counter is 9 and there is no winning combination.

To check for the scores: for a win, i need to loop thru the array containing the possible combinations and then check, whether for each nested array, the winning combination contains each and every index in the player's array. if so, that particular player has won.

One of the things that was confusing me earlier on was pushing the player symbol to the array and then wondering how to check that against the id or its position on the gameboard. so for now this approach makes sense to me.

For some reason, it just hit me this afternoon that a draw occurs when the counter gets to 9, because that would mean that no player has a straight streak of the rows, columns or diagonals.

5.

and include a message of whose turn it is then check for a win. i check for a win with every click.

### Screenshot

![]()

### Links

- Solution URL: [Github Link](https://github.com/samoina/tic-tac-toe-vanillaJS)
- Live Site URL: [Netlify Link](.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### Pseudo code

The players play the game, clicking in turns until the grid is full.

- Worth noting: a grid box can only be clicked once.
- add logic for creating X's and O's in turn.
  once a div has bn clicked on, push it to a new array, and if the length of that array =

### What I learned

### Continued development

I read about the MinMax algorithm and I look forward to uilding on that too once the basic version of this game is done.

I am keen to repeat this project using ReactJS.

### Useful resources

This article by Shakya Peiris on Dev helped me translate my pseudocode to actual code. [the Logic behind the Tic-Tac-toe game](https://dev.to/shakyapeiris/the-logic-behind-tic-tac-toe-game-32f9)

On how to add the MinMax algorithm so that the computer is uneatable [Never Stop Building](https://www.neverstopbuilding.com/blog/minimax)

## Author

- Hashnode - [Samoina Codes](https://samoina.hashnode.dev/)
- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)
