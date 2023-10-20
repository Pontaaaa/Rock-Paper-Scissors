// const for script //
const buttons = document.querySelectorAll(".option");
const result = document.querySelector(".result");
const winCount = document.getElementById("win-count");
const tieCount = document.getElementById("tie-count");
const lossCount = document.getElementById("loss-count");

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