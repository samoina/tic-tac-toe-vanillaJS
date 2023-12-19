/*
1. the idea is to have a hyptothetical board that informs what all the possible winning combinations look like. 

2. i will then keep track of the clicks on the grid boxes. At the onset, as is the player convention, player X gets the first go.

3. Depending on which player has clicked, the player's grid box position is pushed into the specific player array. 

4. To check for the scores: for a win, i need to loop thru the array containing the possible combinations and then check, whether for each nested array, the winning combination contains each and every index in the player's array. if so, that particular player has won. 

One of the things that was confusing me earlier on was pushing the player symbol to the array and then wondering how to check that against the id or its position on the gameboard. so for now this approach makes sense to me. 

For some reason, it just hit me this afternoon that a draw occurs when the counter gets to 9, because that would mean that no player has a straight streak of the rows, columns or diagonals. 

5. i also need to add an event listener so that when clicked, i can keep track of the game's state. When clicked, i need to check if the box is empty firstly, and if it is, check whose turn it is, and then change the content on that grid-box, add the counter, push it into the array and include a message of whose turn it is then check for a win. i check for a win with every click. 

*/

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
	playerYArr = [];
