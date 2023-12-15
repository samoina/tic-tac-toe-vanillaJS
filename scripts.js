/* These are initial variables at the onset of the game. Get the players and create a multidimensional array that reflects the state of the game */

let currentPlayer = 'X';
let gameBoard = [
	['1', '2', '3'],
	['4', '5', '6'],
	['7', '8', '9'],
];

//Get all the elements by their classname to give me an iterable HTMLCollection
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
//create the logic to find the winning comination
const rows = 3;
const columns = 3;
const diagonalValues = [];
const diagonalValues2 = [];

//this would actually check for the rows equality
for (let i = 0; i < rows; i++) {
	const a = gameBoard[i][0];
	const b = gameBoard[i][1];
	const c = gameBoard[i][2];

	//check a win horizontally
	if (a !== '' && a === b && b === c) {
		console.log('Game Won!');
	}

	// get first diagonal
	a === '1' && diagonalValues.push(a);
	b === '5' && diagonalValues.push(b);
	c === '9' && diagonalValues.push(c);
}
//i now need to do another set of iteration where i get the columns, this would be the inner array we are looping over
for (let j = 0; j < columns; j++) {
	const d = gameBoard[0][j];
	const e = gameBoard[1][j];
	const f = gameBoard[2][j];

	//check column wins
	if (d !== '' && d === e && e === f) {
		console.log('Game Won!');
	}

	//second diagonal
	if (f === '7' && j === 0) {
		diagonalValues2.push(f);
	}
	if (e === '5' && j === 1) {
		diagonalValues2.push(e);
	}
	if (d === '3' && j === 2) {
		diagonalValues2.push(d);
	}
}

console.log(diagonalValues);
console.log(diagonalValues2);
