/* These are initial variables at the onset of the game. Get the players and create a multidimensional array that reflects the state of the game */

let currentPlayer = 'X';
let gameBoard = [
	['1', '2', '3'],
	['4', '5', '6'],
	['7', '8', '9'],
];

const rows = 3;
const columns = 3;

//this would actually check for the rows equality
for (let i = 0; i < rows; i++) {
	const a = gameBoard[i][0];
	const b = gameBoard[i][1];
	const c = gameBoard[i][2];

	//in the first iteration, a=1, b=2, c=3
	//in the second iteration, a=4, b=5, c=6
	//in the third iteration, a=7, b=8, c=9
	//so now we need to check, if a is not empty, and it is strictly equal to b and  is strictly equal to c, then that is a win.

	//i now need to do another set of iteration where i get the columns, this would be the inner array we are looping over
	for (let j = 0; j < columns; j++) {
		const d = gameBoard[0][j];
		const e = gameBoard[1][j];
		const f = gameBoard[2][j];

		//in the first iteration d=1, e=4 and f=7
		//in the second iteration d=2, e=5 and f=8
		//in the third iteration d=3, e=6 and f=9
		//so the same logic applies. we need to check that d which is at the to of the column, is not empty, and then check it d is strictly equal to e and if e is strictly equal to f then that is also a win

		//there is also a win if the diagonals are matching, but how do i get the diagonals during the iterations?
	}
}

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
