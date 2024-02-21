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

function playGame(userChoice, computerChoice) {
  let upperUserChoice = userChoice.toUpperCase();
  while (
    upperUserChoice !== "ROCK" &&
    upperUserChoice !== "PAPER" &&
    upperUserChoice !== "SCISSORS"
  ) {
    upperUserChoice = prompt("You must enter 'Rock', 'Paper' or 'Scissors'");
    upperUserChoice = upperUserChoice.toUpperCase();
  }
  console.log("Computer choice was : " + computerChoice);
  console.log("Your choice was : " + upperUserChoice.toUpperCase());
  if (upperUserChoice === computerChoice) {
    console.log("Equality you've done the same choice!");
  } else if (
    (upperUserChoice === "PAPER" && computerChoice === "ROCK") ||
    (upperUserChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (upperUserChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    console.log(upperUserChoice + " beats " + computerChoice + " you win !");
  } else {
    console.log(computerChoice + " beats " + upperUserChoice + " you lose !");
  }
}

let computerChoice = getComputerChoice();

let userChoice = prompt(
  "Type 'Rock' 'Paper' or 'Scissors' and press or click enter to play game"
);

playGame(userChoice, computerChoice);
