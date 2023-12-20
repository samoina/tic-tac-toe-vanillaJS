//Get the variables
const gameBoard = document.querySelector('.game-board');

const displayPlayerTurn = document.querySelector('.display-player');

const resetGameBtn = document.querySelector('.reset-button');

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
	//Game ends in a win
	for (let i = 0; i < listWinningCombi.length; i++) {
		let singleWinCombi = listWinningCombi[i];

		//a return KW in my .every() function was cracking my code. it is either explicit or implied. it was none for me. ChatGPT helped me figure it out
		if (singleWinCombi.every((winIndex) => playerXArr.includes(winIndex))) {
			displayPlayerTurn.textContent = 'Player X wins the game!';
			gameBoard.removeEventListener('click', addSymbol);
		
			return; //remember to add the return to ensure that the funtion exits and does not check for a draw
		}
		if (singleWinCombi.every((winIndex) => playerOArr.includes(winIndex))) {
			displayPlayerTurn.textContent = 'Player O wins the game!';
			gameBoard.removeEventListener('click', addSymbol);
			return;
		}
	}

	//game draw
	if (playerCount === 9) {
		displayPlayerTurn.textContent = 'XOXO!! The game ends in a draw';
	}
};

//function to add player's symbol on click
const addSymbol = (ev) => {
	let gameSquare = ev.target,
		playerPosition;

	if (gameSquare.textContent === '' && playerTurn === true) {
		gameSquare.textContent = 'X';
		displayPlayerTurn.textContent = "It is now Player O's turn";

		playerPosition = +gameSquare.classList[0];
		playerXArr.push(playerPosition);
		console.log(playerXArr);

		incrCounter();
		checkPlayerTurn();
		checkScore();
	} else if (gameSquare.textContent === '' && playerTurn === false) {
		gameSquare.textContent = 'O';
		displayPlayerTurn.textContent = "It is now Player X's turn";

		playerPosition = +gameSquare.classList[0];
		playerOArr.push(playerPosition);

		incrCounter();
		checkPlayerTurn();
		checkScore();
	} else if (gameSquare.textContent === 'X' || gameSquare.textContent === 'O') {
		return;
	}
};

gameBoard.addEventListener('click', addSymbol);
