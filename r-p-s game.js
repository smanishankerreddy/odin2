function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 0.33) return "rock";
  else if (randomNum < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:").toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
    console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}\n`);
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("Final Scores:");
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) console.log("You win the game!");
  else if (humanScore < computerScore) console.log("Computer wins the game!");
  else console.log("The game is a tie!");
}

console.log("Hello World");
playGame();
