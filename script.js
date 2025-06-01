function getPlayerChoice() {
    const playerChoice = prompt("Enter your choice", "rock").toLowerCase();
    if (playerChoice != null && playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissor") {
        console.log("Enter either: 'rock', 'paper' or 'scissor'");
        getPlayerChoice();
    } else {
        return playerChoice;
    }
    
};

// Math.random get random number between 0 and 1
// Multiplies the random number by 3 and then .floor rounds it down to nearest whole number 

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

// Function get the players choice and a random computer choice and increases the winners score
// if player === computer > its a tie
// else if any of the 3 player win conditions > increase playerScore
// else increase computerScore

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

// function playGame() {
//     while (playerScore < 3 && computerScore < 3) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//     };
// };

let playerScore = 0;
let computerScore = 0;