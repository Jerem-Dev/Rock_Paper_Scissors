function getComputerChoice(str1, str2, str3) {
  let randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return str1;
    case 1:
      return str2;
    case 2:
      return str3;
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
  if (upperUserChoice === "ROCK") {
    if (computerChoice === "SCISSORS") {
      console.log("You win !");
    } else if (computerChoice === "PAPER") {
      console.log("You lose !");
    } else {
      console.log("EQUALITY !");
    }
  } else if (upperUserChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      console.log("You win !");
    } else if (computerChoice === "SCISSORS") {
      console.log("You lose !");
    } else {
      console.log("EQUALITY !");
    }
  } else if (upperUserChoice === "SCISSORS") {
    if (computerChoice === "PAPER") {
      console.log("You win !");
    } else if (computerChoice === "ROCK") {
      console.log("You lose !");
    } else {
      console.log("EQUALITY !");
    }
  } else {
    console.log("You must enter 'Rock', 'Paper'or 'Scissors'");
  }
}

let computerChoice = getComputerChoice("ROCK", "PAPER", "SCISSORS");

let userChoice = prompt(
  "Type 'Rock' 'Paper' or 'Scissors' and press or click enter to play game"
);

playGame(userChoice, computerChoice);
