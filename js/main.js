let playerSelection;
let computerSelection;
let wins = 0;
let losses = 0;


function getComputerChoice () {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {

        case 0:
            return "Rock";
            break;
        
        case 1:
            return "Paper";
            break;
        
        case 2:
            return "Scissors";
            break;

        default:
            return "An error occured"
    }
}

function playRound (playerSel, computerSel) {
    playerSel = playerSelection.toLowerCase();
    computerSel = computerSelection.toLowerCase();
    let result = playerSel.charAt(0).toUpperCase() + playerSel.slice(1) + " vs " + computerSelection + " --> ";

    if (playerSel == "rock" | playerSel == "paper" | playerSel == "scissors"
        && computerSel == "rock" | computerSel == "paper" | computerSel == "scissors") {

        if (playerSel == computerSel) {
            return result + "Tie";;
        }
        else {
            if (playerSel == "rock") {
                if (computerSel == "paper") {
                    losses++;
                    return result + "You lose"
                }
                else {
                    wins++;
                    return result + "You win"
                }

            }
            else if (playerSel == "paper") {
                if (computerSel == "scissors") {
                    losses++;
                    return result + "You lose"
                }
                else {
                    wins++;
                    return result + "You win"
                }

            }
            else {
                if (computerSel == "rock") {
                    losses++;
                    return result + "You lose"
                }
                else {
                    wins++;
                    return result + "You win"
                }
            }
        }
    }
    else {
        console.log("Invalid selection occured")
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Type Rock, Paper or Scissors to make your choice. Good luck.");
        computerSelection = getComputerChoice();
        console.log(
            playRound(playerSelection, computerSelection)
        );
        console.log(
            "Wins: " + wins + "   Losses: " + losses 
        );

    }
}


game()