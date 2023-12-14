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

BEGINNER FRIENDLY GUIDE TO THE TIC TAC TOE GAME USING VANILLA HTML, CS AND JS.

1. The first thing that I did was to create a 3X3 grid to showcase the game board. I created a main section and then a parent for 9 divs. Each of the divs would provide the space for the game elements.

2. I created a sequence of event as they would unfold once the game starts. The first player clicks an empty square and their symbol goes on it. The next player clicks on any of the remaining squares and the other symbol goes on it. This goes on in turns.

3. To do this, I needed to create variables in my scripts file - including the player and an array that keeps track of the current state of the game. So initially, this array is empty. this array would, ideally be a multi-dimensional array with three rows. Each of the array elements should reflect the position of the grid boxes that a player can click.

```javascript
let gameArray = [
	['1', '2', '3'],
	['4', '5', '6'],
	['7', '8', '9'],
];
```

PS:: Thinking about this implementation made me realize a gap in my understanding of arrays and algorithms. I went ahead to look up 'Arrays and data structures'

4. The next thing that I did was to find a way to access the different array elements. For instance, to access the middle grid box, this is what I would have to type:

```javascript
console.log(gameArray[1][1]); //5
```

5. Up next was to figure out how to add an event listener so that when a specific element is clicked, it alerts me with the same. I figured this is the only way to keep track of the state of the game, and which grid boxes have been clicked on. This is what I had initially and quickly ran into an error :-) Can you tell why from the code below?

```javascript
let midElement = gameArray[1][1];

midElement.addEventListener('click', () => {
	console.log('clicked!');
});
```

That's because I was trying to call use the `addEventListener` method on an array element and that is not a valid DOM element.

<!-- I then decided to give the first element an id that reflects the posiion on the array, and then tried clicking on the particular element and it worked.

```javascript
let boxElement1 = document.getElementById('0-0');

boxElement1.addEventListener('click', function () {
	console.log('Clicked object1');
});
``` -->

So, I figured I needed to create an array of these elements using the `getElementsByClassName` method to give me an iterable HTMLCollection of elements. I then used a `For-of Loop` to loop through the elements and attach an event listener to the element. The idea here being, in the first iteration, place an X on the element clicked. In the next iteration, place an O, repeat this until all the boxes are filled. Here's what I came up with, and again, it did not work ;-(

```javascript
let currentPlayer = 'X';
let gameElements = document.getElementsByClassName('game-square');

for (const element of gameElements) {
	element.addEventListener('click', function () {
		element.innerHTML = currentPlayer;
		if ((currentPlayer = 'X')) {
			element.innerHTML = 'O';
		}
	});
}
```

The above code did not work because I was using the assignement operator within the if-statement instead of using the equality operator to check so that the condition would always be true and I would always get the 'X'. Additionally, I also made the mistake of changing the value of the element's inner HTML instead of the value of the currentPlayer. To correct this I needed to use the equality operator as well as update the currentPlayer to alternate . Here's the updated code:

```javascript
let currentPlayer = 'X';

for (const element of gameElements) {
	element.addEventListener('click', function () {
		element.innerHTML = currentPlayer;
		if (currentPlayer === 'X') {
			currentPlayer = 'O';
		} else {
			currentPlayer = 'X';
		}

		element.style.backgroundColor = 'gray';
	});
}
```

6. If an element has been clicked on, it cannot be clicked again. I learned that the `.addEventListener()` method has an additional parameter called `options - once` in which I can set the event listener to fire only once by adding the boolean `true`, thus making the element clickable only for the first time.

I also created the toggle function separately then included an anonymous function in the `addEventListener` so that the function would not be invoked immeadiately. I also added a new class to change the opacity of the element once clicked on as below.

```javascript
let gameElements = document.getElementsByClassName('game-square');

const toggleCurrentPlayer = (gameElement) => {
	gameElement.innerHTML = currentPlayer;
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}

	gameElement.classList.add('clicked');
};

//Loop through the elements and add an event listene to each element
for (const element of gameElements) {
	element.addEventListener(
		'click',
		() => {
			toggleCurrentPlayer(element);
		},
		{
			once: true,
		}
	);
}
```

7. Once this was done, I needed to figure out the Javascript logic of the game with the 2D array I created at the onset of the game. Tic-Tac-Toe can only end in two possible ways :

I. A win or loss - If a player's symbol occurs three times horizontally, vertically or diagonally, then that player wins.

Pseudocode: I would need to create a function that takes in the grid/nested arrays representing the board game. Since this is a 2D-array, I could traverse it with nested loops.

_Check the rows_
So ideally, I need to loop through the grid and check each of the rows. this is achievable by creating variables that correspond to each of the elements in the arrays that represent the rows. If the first element of the first array is occupied, and the value of it is strictly equal to that of the second and third indices, then that returns a win. That checks for the horizontal rows. We also need to check within the columns.

_Check the columns_
To check the columns, we use the same approach. We need to loop through

II. A draw - in this case, the entire grid is filled with 'X' and 'O', and none of these are placed consecutively whether horizontally, vertically or diagonally.

```javascript

```

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

### What I learned

### Continued development

I am keen to repeat this project using ReactJS.

### Useful resources

This article by Shakya Peiris on Dev helped me translate my pseudocode to actual code. [the Logic behind the Tic-Tac-toe game](https://dev.to/shakyapeiris/the-logic-behind-tic-tac-toe-game-32f9)

On how to add the MinMax algorithm so that the computer is uneatable [Never Stop Building](https://www.neverstopbuilding.com/blog/minimax)

## Author

- Hashnode - [Samoina Codes](https://samoina.hashnode.dev/)
- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)
