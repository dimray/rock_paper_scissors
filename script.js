

function getPlayerSelection() {

  let selection = prompt("Choose Rock, Paper or Scissors").toLowerCase();

  if (selection === "rock" || selection === "paper" || selection === "scissors") {
    return selection.toUpperCase();
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
    return "ROCK";
  } else if (numb == 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {


  if (playerScore < 5 && computerScore < 5) {

    if (playerSelection === computerSelection) {
      para.textContent = `TIE: ${computerSelection} MATCHES ${playerSelection}.`;

    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
      computerScore += 1;
      para.textContent = `COMPUTER WINS: ${computerSelection} BEATS ${playerSelection}`;

    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
      playerScore += 1;
      para.textContent = `PLAYER WINS: ${playerSelection} BEATS ${computerSelection}`;

    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
      playerScore += 1;
      para.textContent = `PLAYER WINS: ${playerSelection} BEATS ${computerSelection}`;

    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
      computerScore += 1;
      para.textContent = `COMPUTER WINS: ${computerSelection} BEATS ${playerSelection}`;

    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
      computerScore += 1;
      para.textContent = `COMPUTER WINS: ${computerSelection} BEATS ${playerSelection}`;

    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
      playerScore += 1;
      para.textContent = `PLAYER WINS: ${playerSelection} BEATS ${computerSelection}`;
    }
    score.textContent = `PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
  };

  if (computerScore === 5) {
    score.textContent = "";
    para.textContent = "COMPUTER WINS";
    playerScore = 0;
    computerScore = 0;
    gameOver();
  } else if (playerScore === 5) {
    score.textContent = "";
    para.textContent = "PLAYER WINS";
    playerScore = 0;
    computerScore = 0;
    gameOver();
  };

};

function gameOver() {

  buttons.forEach(button => {
    button.removeEventListener("click", handleClick);
  });

  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "PLAY AGAIN";
  playAgainButton.style.height = "40px";
  playAgainButton.style.fontSize = "15px";
  playAgainButton.style.borderRadius = "5px";
  scoreDiv.appendChild(playAgainButton);

  playAgainButton.addEventListener("click", () => {
    para.textContent = "";
    score.textContent = "";
    scoreDiv.removeChild(playAgainButton);
    activateButtons();
  })

}

function handleClick(e) {
  playerSelection = e.target.alt;
  playerSelection = playerSelection.toUpperCase();
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

function activateButtons() {

  buttons.forEach(button => {
    button.addEventListener("click", handleClick);
  });

}



let playerScore = 0;
let computerScore = 0;
const para = document.querySelector("p.results")
const score = document.querySelector("p.score")
const scoreDiv = document.querySelector("div.results")
const buttons = document.querySelectorAll("button");
activateButtons();



