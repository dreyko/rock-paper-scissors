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
    playerScore += 1;
    if(playerScore < 5) {
        results.textContent = `Player wins! ${playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1)} beats ${computerChoice}`;
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    } else {
        results.textContent = `Player wins best of 5!`;
        document.getElementById("buttons").replaceChildren();
    }
};

function computerWins(playerChoice, computerChoice) {
    computerScore += 1;
    if(computerScore < 5) {
        results.textContent = `Computer wins! ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} beats ${playerChoice}`;
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    } else {
        results.textContent = `Player wins best of 5!`;
        document.getElementById("buttons").replaceChildren();
    }
};

function gameTie(playerChoice) {
    results.textContent = `The round is a tie! Both chose ${playerChoice}`;
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        gameTie(playerChoice);
    } else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        playerWins(playerChoice, computerChoice);   
    } else {
        computerWins(playerChoice, computerChoice);
    }
};

let playerScore = 0;
let computerScore = 0;

document.getElementById("btn-rock").addEventListener("click", function () {playRound("rock", getComputerChoice())});
document.getElementById("btn-paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("btn-scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));

const container = document.querySelector(".container");

const results = document.createElement("div");
results.classList.add("results")
const score = document.createElement("div");
score.classList.add("results")

container.appendChild(results);
container.appendChild(score);
