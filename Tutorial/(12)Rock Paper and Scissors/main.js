/* Scoreboard
	// Initialize the score object with default values if it hasn't been set yet
		* localStorage.getItem 
		- gets the key string from localStorage.setItem	

		* || - default operator
*/
let score = JSON.parse(localStorage.getItem('score')) || {
	wins: 0,
	losses: 0,
	ties: 0
};

// Using document object model
// Scoreboard that you can see realtime in the website
updateScoreElement();

// Player Move
function playGame(playerMove){
	const computerMove = pickComputerMove();

	let result = '';
	if (playerMove === 'Scissors'){
		if (computerMove === 'Rock'){
			result = 'Loss';
		} else if (computerMove === 'Paper'){
			result = "Win";
		} else if (computerMove === 'Scissors'){
			result = 'Tie';
		}

	} else if (playerMove === 'Paper'){
			if (computerMove === 'Rock'){
				result = 'Win';
			} else if (computerMove === 'Paper'){
				result = 'Tie';
			} else if (computerMove === 'Scissors'){
				result = 'Loss';
			}

	} else if (playerMove === 'Rock'){
			if (computerMove === 'Rock'){
				result = 'Tie';
			} else if (computerMove === 'Paper'){
				result = 'Loss';
			} else if (computerMove === 'Scissors'){
				result = 'Win';
			}
		}

	// Scoreboard
	if (result === 'Win'){
		score.wins += 1;
	}	else if (result === 'Loss'){
		score.losses += 1;
	} else if (result === 'Tie'){
		score.ties += 1;
	}

	/* Local storage for scoreboard
			- (key, value)
			- only supports strings
	*/
	localStorage.setItem('score', JSON.stringify(score));

	// Real-time update of the score in the website
	document.querySelector('.js-Result').innerText = `${result}`;

	document.querySelector('.js-Moves').innerHTML = `You 
	<img class="moveIcon" src="../HTML, CSS, and JavaScript/Images/${playerMove}-Emoji.png" alt="">
	<img class="moveIcon" src="../HTML, CSS, and JavaScript/Images/${computerMove}-Emoji.png" alt="">
	Computer`;
		
	updateScoreElement();
}

// Real-time update of the score
function updateScoreElement(){
	document.querySelector('.js-Score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`;
}

// Computer Move
function pickComputerMove(){
	const randomNumber = Math.random();

	let computerMove = '';

	if (randomNumber >= 0 && randomNumber < 1 / 3){
		computerMove = 'Rock';
	} else if (randomNumber >= 1/3 && randomNumber < 2/3){
		computerMove = 'Paper';
	} else if (randomNumber >= 2/3 && randomNumber < 1){
		computerMove = 'Scissors';
	}
	return computerMove;
}

// Auto play


