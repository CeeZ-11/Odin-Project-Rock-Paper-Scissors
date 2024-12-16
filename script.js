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
  let rock = document.getElementById("rock-option");
  let paper = document.getElementById("paper-option");
  let scissors = document.getElementById("scissors-option");

  btns.forEach((btn) => {
    btn.classList.remove("player-selection");
  });

  switch (target.id) {
    case "Rock":
      rock.classList.add("scale");
      target.classList.add("player-selection");

      setTimeout(() => {
        rock.classList.remove("scale");
      }, 500);

      result = playRound("Rock", computerSelection);
      resultRound.innerHTML = `${result} <br> Player Score: ${win} | Computer Score: ${lose}`;
      break;
    case "Paper":
      paper.classList.add("scale");
      target.classList.add("player-selection");

      setTimeout(() => {
        paper.classList.remove("scale");
      }, 500);

      result = playRound("Paper", computerSelection);
      resultRound.innerHTML = `${result}  <br> Player Score: ${win} | Computer Score: ${lose}`;

      break;
    case "Scissors":
      scissors.classList.add("scale");
      target.classList.add("player-selection");

      setTimeout(() => {
        scissors.classList.remove("scale");
      }, 500);

      result = playRound("Scissors", computerSelection);
      resultRound.innerHTML = `${result} <br> Player Score: ${win} | Computer Score: ${lose}`;
      break;
  }

  if (win == 5) {
    resultRound.textContent = `Player wins against computer 🎉🎉🎉, Final score is (${win}-${lose})`;
    win = 0;
    lose = 0;
  } else if (lose == 5) {
    resultRound.textContent = `Player loses to computer  😞😞😞, Final score is (${win}-${lose})`;
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
