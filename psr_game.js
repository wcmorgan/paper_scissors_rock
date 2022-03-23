const computerDisplay = document.getElementById('computer-choice');
const userDisplay = document.getElementById('user-choice');
const outcomeDisplay = document.getElementById('outcome');
const playerChoices = document.querySelectorAll('button');
const computerScore = document.getElementById('loss');
const playerScore = document.getElementById('win');
const drawScore = document.getElementById('draw');
const finalScore = document.getElementById('winner');

let playerSelection;
let computerSelection;
let outcome;
let winner;

playerChoices.forEach(playerchoice => playerchoice.addEventListener('click', (e) => {
  playerSelection = e.target.id;
  userDisplay.innerHTML = playerSelection;
  computerChoice();
  playRound();
  game();
})); 

function computerPlay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //gets rounded random numbers
}

function computerChoice() { //converts random numbers (1-3) to strings needed to play
    const result = computerPlay(1, 3); //sets min at 1 and max at 3 for computerPlay function
    if (result === 1) {
        computerSelection = 'Paper'; 
    } else if (result === 2) {
        computerSelection = 'Scissors';
    } else {
        computerSelection = 'Rock';
    }
    computerDisplay.innerHTML = computerSelection;
}

let win = 0; 
let loss = 0;
let draw = 0;

function playRound() { 
    if (playerSelection === computerSelection) {
        draw = draw + 1; //added to give count of wins/losses/draws as game progresses
        outcome = 'Draw!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        win = win + 1; 
        outcome = 'You win, paper covers rock!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        loss = loss + 1;
        outcome = 'You lose, scissors cut paper!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        win = win + 1;
        outcome = 'You win, scissors cut paper!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        loss = loss + 1;
        outcome = 'You lose, rock breaks scissors!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        win = win + 1;
        outcome = 'You win, rock breaks scissors!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' ) {
        loss = loss + 1;
        outcome = 'You lose, paper covers rock!';
    }
    outcomeDisplay.innerHTML = outcome;
    computerScore.innerHTML = loss;
    playerScore.innerHTML = win;
    drawScore.innerHTML = draw;
}

function game() { 
    if (loss === 5) {
       winner = 'Computer wins, GAME OVER!';
       reloadPage();
    } else if (win === 5) {
        winner = 'User wins, GAME OVER!';
        reloadPage();
    } else {
        winner = 'First to 5 wins, keep playing!';
    }
    finalScore.innerHTML = winner;
}

function reloadPage() {  //creates a reload button when game is over
    let btn = document.createElement("button");
    btn.innerHTML = "Reload Page";
    btn.onclick = function () {
        location.reload();
    };
    document.body.appendChild(btn);
};