let choice_List = ["rock", "paper", "scissors"]
player_wins = 0;
computer_wins = 0;
for(let i=0; i <= 5; i++)
{
    let player_Choice = window.prompt("Lets play Rock, Paper, Scissors!\nEnter a choice!").toLocaleLowerCase();
    let computer_Choice = choice_List[Math.floor(Math.random()*3)];

    function GameBegins(player_Choice, computer_Choice)
    {
        if(player_Choice === "rock")
        {
            if(computer_Choice === "rock")
            {
                console.log("Tie!");
                i--;
            }
            else if (computer_Choice === "paper")
            {
                console.log("AI wins!");
                computer_wins++;
            }
            else
            {
                console.log("Player wins!");
                player_wins++;
            }
        }
        else if(player_Choice === "paper")
        {
            if(computer_Choice === "rock")
            {
                console.log("Player wins!");
                player_wins++;
            }
            else if (computer_Choice === "paper")
            {
                console.log("Tie!");
                i--;
            }
            else
            {
                console.log("AI wins!");
                computer_wins++;
            }
        }
        else if(player_Choice === "scissors")
        {
            if(computer_Choice === "rock")
            {
                console.log("AI wins");
                computer_wins++;
            }
            else if (computer_Choice === "paper")
            {
                console.log("Player wins!");
                player_wins++;
            }
            else
            {
                console.log("Tie!");
                i--;
            }
        }        
    }
    GameBegins(player_Choice, computer_Choice);
    //exit loop if no possible way to win
    if(player_wins === 3 || computer_wins === 3)
    {
        break;
    }
}


if(player_wins > computer_wins)
{
    console.log(`You won ${player_wins} out of 5!`);
}
else if(player_wins < computer_wins)
{
    console.log(`You lost ${computer_wins} out of 5!`);
}
else if(player_wins === computer_wins)
{
    console.log("ERROR: Equal amount of wins.");
}