let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  humanChoice = humanChoice.toLowerCase();
  let result = "";

  if (humanChoice === computerChoice) {
    result = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  resultDiv.textContent = result;
  scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
    resultDiv.textContent += ` 🎉 ${winner}`;
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll("button").forEach(button => {
    button.disabled = true;
  });
}

// Attach event listeners
document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
