function getComputerChoice(choice) {
  randomNum = Math.floor(Math.random() * choice.length);
  return choice[randomNum];
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  if (playerSelection === computerSelection) {
    return (result = `It's a tie! Both chose ${playerSelection}`);
  } else if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Rock" && computerSelection === "Scissors")
  ) {
    win++;
    return (result = `You Win! ${playerSelection} beats ${computerSelection}`);
  } else lose++;
  return (result = `You Lose! ${playerSelection} loses against ${computerSelection}`);
}

function playerChoice(choice) {
  let target = choice.target;
  let computerSelection = getComputerChoice(gameChoice);

  switch (target.id) {
    case "Rock":
      result = playRound("Rock", computerSelection);
      resultRound.textContent = `${result} Score ${win} | ${lose}`;
      break;
    case "Paper":
      result = playRound("Paper", computerSelection);
      resultRound.textContent = `${result} Score ${win} | ${lose}`;

      break;
    case "Scissors":
      result = playRound("Scissors", computerSelection);
      resultRound.textContent = `${result} Score ${win} | ${lose}`;
      break;
  }

  if (win == 5) {
    resultRound.textContent = `Player wins against computer, Final score is (${win}-${lose})`;
    win = 0;
    lose = 0;
  } else if (lose == 5) {
    resultRound.textContent = `Player loses to computer, Final score is (${win}-${lose})`;
    win = 0;
    lose = 0;
  }
}

const btns = document.querySelectorAll(".playerSelection");
let resultRound = document.querySelector("#result");

btns.forEach((btn) => {
  btn.addEventListener("click", playerChoice);
});

let win = 0;
let lose = 0;
let result;
let randomNum;
const gameChoice = ["Rock", "Paper", "Scissors"];
