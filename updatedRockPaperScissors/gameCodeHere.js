'use strict';
let playerWins = 0;
let pcWins = 0;
let ties = 0;
let counter = 0;

const btnReload = document.querySelector('#reload');
btnReload.addEventListener('click', () => {location.reload()});

let StartGame = () =>
{
    const playerButtons = document.querySelectorAll('.choice')
    playerButtons.forEach((choice) => {
        choice.addEventListener('click', playersChoice);
    });
}

let computerChoose = () =>
{
    let choices = ["Rock", "Paper", "Scissors"];
    let pcChoice = choices[Math.floor(Math.random()*choices.length)];

    return pcChoice;
}

let playRound = (playerValue) =>
{
    let pcChoice = computerChoose();
    counter++;
    
    decideWinner(playerValue, pcChoice);
    displayWins();
    
    if (counter >= 5)
    {
        endGame();
    }
}

let decideWinner = (userChoice, pcChoice) =>
{
    if( userChoice === "Rock")
        {
            if (pcChoice === "Paper")
            {
                pcWins++;
            }
            else if (pcChoice === "Scissors")
            {
                playerWins++;
            }
            else
            {
                ties++;
            }
        }
        else if( userChoice === "Paper")
        {
            if(pcChoice === "Rock")
            {
                playerWins++;
            }
            else if (pcChoice === "Scissors")
            {
                pcWins++;
            }
            else
            {
                ties++;
            }
        }
        else if( userChoice === "Scissors")
        {
            if(pcChoice === "Rock")
            {
                pcWins++;
            }
            else if (pcChoice === "Paper")
            {
                playerWins++;
            }
            else
            {
                ties++;
            }
        }
        if (playerWins > 2 || pcWins > 2)
        {
            endGame();
        }
}

let displayWins = () =>
{
    const displayPlayer = document.querySelector('.Player');
    const displayPC = document.querySelector('.PC');
    const displayTies = document.querySelector('.Ties');

    displayPlayer.textContent = `Player: ${playerWins}`;
    displayPC.textContent = `AI: ${pcWins}`;
    displayTies.textContent = `Ties: ${ties}`;
}

let endGame = () =>
{
    const results = document.querySelector('.reading-results');
    const tie = document.querySelector('.tallyWinner');
    if (playerWins > pcWins)
    {
        results.textContent = "Player";
    }
    else if (playerWins < pcWins)
    {
        results.textContent = "\tAI";
    }
    else
    {
        tie.textContent = "Theres a Tie!";
    }

    const playerButtons = document.querySelectorAll('.choice')
    playerButtons.forEach((choice) => {
        choice.removeEventListener('click', playersChoice);
    });
}

let playersChoice= (e) => 
{
    playRound(e.target.value);
};

StartGame();