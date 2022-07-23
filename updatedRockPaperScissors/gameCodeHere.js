let winners = [];

let StartGame = () =>
{
    const playerButtons = document.querySelectorAll('.choice')

    playerButtons.forEach((choice) => 
    {
        choice.addEventListener('click', function (e)
        {
            console.log(e.target.value);
            playRound(e.target.value);
        });
    });
}

let computerChoose = () =>
{
    let choices = ["Rock", "Paper", "Scissors"];
    let pcChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(pcChoice);

    return pcChoice;
}

let playRound = (playerValue) =>
{
    let pcChoice = computerChoose();
    
    decideWinner(playerValue, pcChoice);

}

let decideWinner = (userChoice, pcChoice) =>
{
    if( userChoice === "Rock")
        {
            if(pcChoice === "Rock")
            {
                console.log("Tie!");
            }
            else if (pcChoice === "Paper")
            {
                console.log("AI wins!");
            }
            else
            {
                console.log("Player wins!");
            }
        }
        else if( userChoice === "Paper")
        {
            if(pcChoice === "Rock")
            {
                console.log("Player wins!");
            }
            else if (pcChoice === "Paper")
            {
                console.log("Tie!");
            }
            else
            {
                console.log("AI wins!");
            }
        }
        else if( userChoice === "Scissors")
        {
            if(pcChoice === "Rock")
            {
                console.log("AI wins");
            }
            else if (pcChoice === "Paper")
            {
                console.log("Player wins!");
            }
            else
            {
                console.log("Tie!");
            }
        }
}

StartGame();