//only have JS script in this file, no use of HTML or CSS

//let playerSelection = prompt('Please enter paper, scissors or rock').toLowerCase(); //WORKS BUT... THROWING ERROR AT Esc/Cancel 

function playerSelection() { 
    let response = prompt('Please enter paper, scissors or rock');
    if (response === null || response === "") { // added to avoid getting a TypeError on not reading null when Cncel or Esc are entered
        return playerSelection();
    }
    return response.toLowerCase();
}
//console.log(playerSelection());

function computerPlay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //works-gets rounded random numbers
}
//let result = computerPlay(1, 3); //works but moved to next function and making a constant
//console.log(computerPlay());

function computerSelection() { //works, converts random numbers (1-3) to strings needed to play
    const result = computerPlay(1, 3); //works, sets min at 1 and max at 3 for computerPlay function
    if (result === 1) {
        return ('paper'); 
    } else if (result === 2) {
        return ('scissors');
    } else {
        return ('rock')
    }
}
//console.log(computerSelection());

let win = 0; //tried to set these inside playRound but they needed to be global so moved here
let loss = 0;
let draw = 0;

function playRound(playerSelection, computerSelection) { //works
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        win = win + 1; //added to give count of wins/losses/draws as game progressed
        return 'You win, paper covers rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        loss = loss + 1;
        return 'You lose, scissors cut paper!';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        draw = draw + 1;
        return 'Draw!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        win = win + 1;
        return 'You win, scissors cut paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        loss = loss + 1;
        return 'You lose, rock breaks scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        draw = draw + 1;
        return 'Draw!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        win = win + 1;
        return 'You win, rock breaks scissors!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ) {
        loss = loss + 1;
        return 'You lose, paper covers rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        draw = draw + 1;
        return 'Draw!';
    } else { //this covers text entries other than requested text
        return 'Entry not understood, no winner of round';
    }
}

function game() { //works
    for (i = 0; i < 5; i++) { //loop that runs playRound 5 times (still not 100% why "i" is not used out side this)
        console.log(playRound(playerSelection(), computerSelection())); 
    }
    if (win > loss && win >= draw) { //if/else if statement: announces final overall win of 5 games and gives tally
        return (`You win the game! Wins: ${win}, losses: ${loss}, draws: ${draw}.`);
    } else if (win < loss && loss >= draw) { //in win/loss battles, draws are not counted unless draws outnumber either (w:2, l:1, D:2-round is won, w:1, l:2, D:2-round is lost,)
        return (`You lose the game! Wins: ${win}, losses: ${loss}, draws: ${draw}.`);
    } else {
        return (`Game is a draw! Wins: ${win}, losses: ${loss}, draws: ${draw}.`);
    } 
}

console.log(game());