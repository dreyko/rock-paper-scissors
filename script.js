function getPlayerChoice() {
    const playerChoice = prompt("Enter your choice", "rock");
    return playerChoice.toLowerCase();
};
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3)
    switch(computerChoice) {
        case 0:
            return "rock";
            break; 
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
    };
};

function playerWins(playerChoice, computerChoice) {
    console.log(`You win! ${playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1)} beats ${computerChoice}`);
    playerScore += 1;
};

function computerWins(playerChoice, computerChoice) {
    console.log(`Computer wins! ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} beats ${playerChoice}`);
    computerScore += 1;
};

function gameTie(playerChoice) {
    console.log(`The round is a tie! Both chose ${playerChoice}`);
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "scissors") {
        playerWins(playerChoice, computerChoice);
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        computerWins(playerChoice, computerChoice);
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        computerWins(playerChoice, computerChoice);
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        playerWins(playerChoice, computerChoice);
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerWins(playerChoice, computerChoice);
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        computerWins(playerChoice, computerChoice);
    } else {
        gameTie(playerChoice);
    }
    console.log(`Score: player ${playerScore}, computer ${computerScore}`)
};

function playGame() {
    while (playerScore < 3 && computerScore < 3) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    };
};

let playerScore = 0;
let computerScore = 0;

playGame();