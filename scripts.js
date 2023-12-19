//Get the variables
const gameBoard = document.querySelector('.game-board');

const displayPlayerTurn = document.querySelector('.display-player');

/*
my hypothetical board to rep the 3X3 grid
  [0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
*/

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

//add a counter, a boolean for the playerturn so that if it is true, it means it is X's turn to play as that is the game convention. I also set up two arrays to push the index of the game square that has been clicked on.
let playerCount = 0,
	playerTurn = true,
	playerXArr = [],
	playerOArr = [];

//function to increase counter
const incrCounter = () => {
	playerCount++;
};

//function to check and change player's turn
const checkPlayerTurn = () => {
	if (playerTurn === true) {
		playerTurn = false;
	} else {
		playerTurn = true;
	}
};

//function to check the score
const checkScore = () => {
	console.log('need to check win');
};

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
