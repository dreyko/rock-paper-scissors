function getPlayerChoice() {
    const playerChoice = prompt("Enter your choice", "rock").toLowerCase();
    if (playerChoice != null && playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissor") {
        console.log("Enter either: 'rock', 'paper' or 'scissor'");
        getPlayerChoice();
    } else {
        return playerChoice;
    }
    
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
            return "scissor"
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
    console.clear();
    if (playerChoice === computerChoice) {
        gameTie(playerChoice);
    } else if (playerChoice === "rock" && computerChoice === "scissor" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissor" && computerChoice === "paper") {
        playerWins(playerChoice, computerChoice);   
    } else {
        computerWins(playerChoice, computerChoice);
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