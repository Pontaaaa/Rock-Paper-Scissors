// const for script //
const buttons = document.querySelectorAll(".option");
const result = document.querySelector(".result");
const winCount = document.getElementById("win-count");
const tieCount = document.getElementById("tie-count");
const lossCount = document.getElementById("loss-count");
const resetScoreButton = document.getElementById("reset-score");
const playerScoreDisplay = document.getElementById("win-count");
const computerScoreDisplay = document.getElementById("loss-count");
const showRulesButton = document.getElementById("show-rules");
const rulesOverlay = document.getElementById("rules-overlay");
const closeRulesButton = document.getElementById("close-rules");

// win and loss counter //
resetScoreButton.addEventListener("click", () => {
    wins = 0;
    ties = 0;
    losses = 0;
    winCount.textContent = "0";
    tieCount.textContent = "0";
    lossCount.textContent = "0";
});

let wins = 0;
let ties = 0;
let losses = 0;

// win or loss message //
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        const message = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${winner}`;
        result.textContent = message;

        if (winner === "You win!") {
            wins++;
            winCount.textContent = wins;
        } else if (winner === "Computer wins!") {
            losses++;
            lossCount.textContent = losses;
        } else {
            ties++;
            tieCount.textContent = ties;
        }
    });
});

// logic for game //
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) return "It's a tie!";
    if (
        (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
        (player === "paper" && (computer === "rock" || computer === "spock")) ||
        (player === "scissors" && (computer === "paper" || computer === "lizard")) ||
        (player === "lizard" && (computer === "paper" || computer === "spock")) ||
        (player === "spock" && (computer === "rock" || computer === "scissors"))
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// reset button //
showRulesButton.addEventListener("click", () => {
    rulesOverlay.style.display = "block";
});

// rules overlay //
closeRulesButton.addEventListener("click", () => {
    rulesOverlay.style.display = "none";
});