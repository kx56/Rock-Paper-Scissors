let userScore = 0;
let compScore = 0;

const userCount = document.querySelector("#userScore");
const compCount = document.querySelector("#compScore");
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userName = document.querySelector("#userName");

let uName = prompt("Enter your Name:");
if (!uName) {
  uName = "User";
}
userName.innerText = uName;

const computerMoveContainer = document.querySelector(".computerMove");
computerMoveContainer.style.pointerEvents = "none"; // Disable click events for the entire container

const computerMoveImage = document.querySelector("#cimg");
computerMoveImage.style.pointerEvents = "none"; // Disable click events for the computer move image

const computerMoveText = document.querySelector("#compMoveText");
computerMoveText.style.pointerEvents = "none"; // Disable click events for the computer move text

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  msg.innerText = "Match was Draw. Play again.";
  msg.style.backgroundColor = "#00cd7f";
  msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "greenyellow";
    msg.style.color = "black";
    userScore++;
    userCount.innerText = userScore;
  } else {
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    compScore++;
    compCount.innerText = compScore;
  }
};

const updateComputerMove = (compChoice) => {
  cimg.src = `images/${compChoice}.png`;
  computerMoveText.innerText = `${compChoice.toUpperCase()}`;
};

const playgame = (userChoice) => {
  computerMoveContainer.classList.remove("hide");

  const compChoice = genCompChoice();
  updateComputerMove(compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
