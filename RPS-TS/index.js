"use strict";
//Using definite assignment assertion for global document variables since i know they will not be null
//Global variables
let playerWins = 0;
let AIWins = 0;
let ties = 0;
let counter = 0;
const btnPlayer = document.querySelectorAll('.choice');
const btnReload = document.querySelector('#reload');
const playRound = (e) => {
    //casting e.target as an HTMl input element since we know that it will not be null
    const userChoice = parseInt(e.target.value);
    const pcChoice = Math.floor(Math.random() * 3);
    counter++;
    decideWinner(userChoice, pcChoice);
    displayWins();
    if (counter >= 5 || ties >= 3 || playerWins > 2 || AIWins > 2) {
        endGame();
    }
};
const decideWinner = (userChoice, pcChoice) => {
    const gameArray = [[0, 1, 2], [1, 0, 2], [2, 0, 1]];
    const overallChoice = gameArray[userChoice][pcChoice];
    if (overallChoice === 0) {
        ties++;
    }
    else if (overallChoice === 1) {
        playerWins++;
    }
    else if (overallChoice === 2) {
        AIWins++;
    }
};
const displayWins = () => {
    const displayPlayer = document.querySelector('.Player');
    const displayPC = document.querySelector('.PC');
    const displayTies = document.querySelector('.Ties');
    displayPlayer.textContent = `Player: ${playerWins}`;
    displayPC.textContent = `AI: ${AIWins}`;
    displayTies.textContent = `Ties: ${ties}`;
};
const endGame = () => {
    const results = document.querySelector('.reading-results');
    const tie = document.querySelector('.tallyWinner');
    if (ties >= 3 || playerWins <= 2 && AIWins <= 2) {
        tie.textContent = "Theres a Tie!";
    }
    else if (playerWins > AIWins) {
        results.textContent = "Player";
    }
    else if (playerWins < AIWins) {
        results.textContent = "\tAI";
    }
    btnPlayer.forEach((choice) => {
        choice.removeEventListener('click', playRound);
    });
};
btnReload.addEventListener('click', () => location.reload());
btnPlayer.forEach(choice => choice.addEventListener('click', playRound));
