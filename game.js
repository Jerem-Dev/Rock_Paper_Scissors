// Return the choice of the computer
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  switch (randomChoice) {
    case 0:
      document.getElementById("img-computer").src = "img/rock.svg";
      return "ROCK";
    case 1:
      document.getElementById("img-computer").src = "img/paper.svg";
      return "PAPER";
    case 2:
      document.getElementById("img-computer").src = "img/scissors.svg";
      return "SCISSORS";
  }
}

// Launch the game: compare user and computer choices, display both picks, and show the winner
function playGame(userChoice) {
  let computerChoice = getComputerChoice();
  let resultMessage =
    "You : " + userChoice + " || Computer : " + computerChoice;
  let winMessage = "YOU WIN !";
  let defeatMessage = "YOU LOSE";
  let equalityMessage = " IT'S A TIE";
  if (userChoice === computerChoice) {
    document.getElementById("win-defeat").innerHTML = equalityMessage;
    document.getElementById("win-defeat").style.color = "yellow";
  } else if (
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    document.getElementById("win-defeat").innerHTML = winMessage;
    document.getElementById("win-defeat").style.color = "green";
  } else {
    document.getElementById("win-defeat").innerHTML = defeatMessage;
    document.getElementById("win-defeat").style.color = "red";
  }
  document.getElementById("result").innerHTML = resultMessage;
}

// Listen to user choice and launch the game with corresponding choice
document.getElementById("rock").addEventListener("click", (event) => {
  event.preventDefault();
  playGame("ROCK");
});
document.getElementById("paper").addEventListener("click", (event) => {
  event.preventDefault();
  playGame("PAPER");
});
document.getElementById("scissors").addEventListener("click", (event) => {
  event.preventDefault();
  playGame("SCISSORS");
});
