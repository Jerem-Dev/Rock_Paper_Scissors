// Return the choice of the computer
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

//Ask the user to make a choice
function getUserChoice() {
  let userChoice = prompt(
    "Type 'Rock' 'Paper' or 'Scissors' and press or click enter to play game"
  );
  let upperUserChoice = userChoice.toUpperCase();
  while (
    upperUserChoice !== "ROCK" &&
    upperUserChoice !== "PAPER" &&
    upperUserChoice !== "SCISSORS"
  ) {
    upperUserChoice = prompt("You must enter 'Rock', 'Paper' or 'Scissors'");
    upperUserChoice = upperUserChoice.toUpperCase();
  }
  return upperUserChoice;
}

//Launch the game : compare user et computer choices and remind both picks and show the winner
function playGame() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  console.log("Computer choice was : " + computerChoice);
  console.log("Your choice was : " + userChoice.toUpperCase());
  if (userChoice === computerChoice) {
    console.log("Equality you've done the same choice!");
  } else if (
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    console.log(userChoice + " beats " + computerChoice + " you win !");
  } else {
    console.log(computerChoice + " beats " + userChoice + " you lose !");
  }
}

playGame();
