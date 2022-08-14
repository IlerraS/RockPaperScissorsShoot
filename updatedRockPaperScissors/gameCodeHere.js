'use strict';
//global variables
let playerWins = 0;
let pcWins = 0;
let ties = 0;
let counter = 0;
const btnPlayer = document.querySelectorAll('.choice')
const btnReload = document.querySelector('#reload');

let playRound = (e) =>
{
    let userChoice = e.target.value
    let pcChoice = Math.floor(Math.random()*3+1);
    counter++;
    
    decideWinner(userChoice, pcChoice);
    displayWins();
    console.log(userChoice, pcChoice)

    if (counter >= 5)
    {
        endGame();
    }
}

let decideWinner = (userChoice, pcChoice) =>
{
    if(userChoice == 1)
        {
            if (pcChoice == 2)
            {
                pcWins++;
            }
            else if (pcChoice == 3)
            {
                playerWins++;
            }
            else
            {
                ties++;
            }
        }
        else if( userChoice == 2)
        {
            if(pcChoice == 1)
            {
                playerWins++;
            }
            else if (pcChoice == 3)
            {
                pcWins++;
            }
            else
            {
                ties++;
            }
        }
        else if( userChoice == 3)
        {
            if(pcChoice == 1)
            {
                pcWins++;
            }
            else if (pcChoice == 2)
            {
                playerWins++;
            }
            else
            {
                ties++;
            }
        }
        if (playerWins > 2 || pcWins > 2 || ties > 3)
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
    if (ties > 3)
    {
        tie.textContent = "Theres a Tie!";
    }
    else if (playerWins > pcWins)
    {
        results.textContent = "Player";
    }
    else if (playerWins < pcWins)
    {
        results.textContent = "\tAI";
    }
    
    btnPlayer.forEach((choice) => {
        choice.removeEventListener('click', playRound);
    });
}


btnReload.addEventListener('click', () => {location.reload()});
btnPlayer.forEach((choice) => 
{
    choice.addEventListener('click', playRound);
});