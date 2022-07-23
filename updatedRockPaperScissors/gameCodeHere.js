let playerChoice;
let choiceList = ["rock", "paper", "scissors"];
// let computerChoice = choiceList[Math.floor(Math.random()*3)];
let counter = 0;


const playerButtons = document.querySelectorAll('button')

while (counter > 1)
{
    playerButtons.forEach((button) => 
    {
        button.addEventListener('click', () => 
        {
            playerChoice = button.id;
            if (playerChoice == "Paper")
            {
                console.log(playerChoice);
            }
        });
    });
    counter++;
}
