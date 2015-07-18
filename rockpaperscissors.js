////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
	if (move === true) {
		return move;
	} else {
		return getInput();
	}
}

function getComputerMove(move) {
	if (move === true) {
		return move;
	} else {
		return randomPlay();
	}
}

function getWinner(playerMove,computerMove) {
    var winner;
    
	if (playerMove == 'rock' && computerMove == 'scissors') {
		winner = 'player';
	} else if (playerMove == 'rock' && computerMove == 'paper') {
		winner = 'computer';
	} else if (playerMove == 'rock' && computerMove == 'rock') {
		winner = 'tie';
	} else if (playerMove == 'paper' && computerMove == 'scissors') {
		winner = 'computer';
	} else if (playerMove == 'paper' && computerMove == 'paper') {
		winner = 'tie';
	} else if (playerMove == 'paper' && computerMove == 'rock') {
		winner = 'player';
	} else if (playerMove == 'scissors' && computerMove == 'scissors') {
		winner = 'tie';
	} else if (playerMove == 'scissors' && computerMove == 'paper') {
		winner = 'player';
	} else if (playerMove == 'scissors' && computerMove == 'rock') {
		winner = 'computer';
	} else {
    		winner = 'none';
	}
   return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var tie = 0;
    var playerMove;
    var computerMove;
    var winner;
    var n;
    
    n = 1;
    while (n < 6) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);
        if (winner == "player") {
            playerWins = playerWins + 1;
        } else if (winner == "computer") {
            computerWins = computerWins + 1;
        } else if (winner == "tie") {
            tie = tie + 1;
        }
        n = n + 1;
    }    
    console.log("The player won " + playerWins + " times.");
    console.log("The computer won " + computerWins + " times.");
    console.log("The player and computer tied " + tie + " times.");
    
}

playToFive();

