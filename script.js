
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function getPlayerSelection() {

  let selection = prompt("Choose Rock, Paper or Scissors").toLowerCase();

  if (selection === "rock" || selection === "paper" || selection === "scissors") {
    return selection;
  } else {
    return selection = getPlayerSelection();
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getComputerChoice() {
  numb = getRandomInt(3);
  if (numb == 0) {
    return "rock";
  } else if (numb == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    console.log(`tie: ${computerSelection} equals ${playerSelection}.
    Player: ${playerScore} Computer: ${computerScore}`);

  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    console.log(`Computer wins! ${computerSelection} beats ${playerSelection}
    Player: ${playerScore} Computer: ${computerScore}`);

  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    console.log(`Player wins! ${playerSelection} beats ${computerSelection}
    Player: ${playerScore} Computer: ${computerScore}`);

  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    console.log(`Player wins! ${playerSelection} beats ${computerSelection}
    Player: ${playerScore} Computer: ${computerScore}`);

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    console.log(`Computer wins! ${computerSelection} beats ${playerSelection}
    Player: ${playerScore} Computer: ${computerScore}`);

  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    console.log(`Computer wins! ${computerSelection} beats ${playerSelection}
    Player: ${playerScore} Computer: ${computerScore}`);

  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    console.log(`Player wins! ${playerSelection} beats ${computerSelection}
    Player: ${playerScore} Computer: ${computerScore}`);

  }
}




function game() {



  for (let i = 0; i < 5; i++) {



    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();


    playRound(playerSelection, computerSelection)


    sleep(1000);

  }

}

let playerScore = 0;
let computerScore = 0;

game();

console.log(`Final Score: Player: ${playerScore} Computer: ${computerScore}`);




