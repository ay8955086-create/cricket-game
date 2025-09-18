let playerScore = 0;
let opponentScore = 0;
let isBatting = true; 
let gameOver = false;

function chooseNumber(playerChoice) {
  if (gameOver) return;

  let opponentChoice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("opponentChoice").textContent = opponentChoice;

  let countdown = document.getElementById("countdown");
  let result = document.getElementById("result");

  countdown.textContent = "You chose " + playerChoice + " | Opponent chose " + opponentChoice;

  if (isBatting) {
    
    if (playerChoice === opponentChoice) {
      result.textContent = "OUT! You scored " + playerScore + " runs 🏏";
      result.style.color = "red";
      isBatting = false; 
      document.getElementById("score").textContent = "Opponent Score: 0";
      alert("Your batting is over! Now you bowl.");
    } else {
      playerScore += playerChoice;
      document.getElementById("score").textContent = "Score: " + playerScore;
      result.textContent = "You scored " + playerChoice + " runs ✅";
      result.style.color = "green";
    }
  } else {
    
    if (playerChoice === opponentChoice) {
      result.textContent = "You got the opponent OUT! 🎉";
      result.style.color = "blue";
      endGame();
    } else {
      opponentScore += opponentChoice;
      document.getElementById("score").textContent = "Opponent Score: " + opponentScore;
      result.textContent = "Opponent scored " + opponentChoice + " runs ⚡";
      result.style.color = "purple";

      if (opponentScore > playerScore) {
        endGame();
      }
    }
  }
}

function endGame() {
  gameOver = true;
  let result = document.getElementById("result");

  if (playerScore > opponentScore) {
    result.textContent = "🎉 You WIN! Your Score: " + playerScore + " | Opponent: " + opponentScore;
    result.style.color = "green";
  } else if (playerScore < opponentScore) {
    result.textContent = "💔 You LOSE! Opponent Score: " + opponentScore + " | Yours: " + playerScore;
    result.style.color = "red";
  } else {
    result.textContent = "🤝 It's a TIE! Both scored " + playerScore;
    result.style.color = "orange";
  }

  document.querySelectorAll("button").forEach(btn => {
    if (btn.className !== "ontouch") btn.disabled = true;
  });
}

function restartGame() {
  playerScore = 0;
  opponentScore = 0;
  isBatting = true;
  gameOver = false;
  document.getElementById("score").textContent = "Score: 0";
  document.getElementById("result").textContent = "You are Batting first!";
  document.getElementById("opponentChoice").textContent = "?";
  document.getElementById("countdown").textContent = "Choose your number to start!";
  document.querySelectorAll("button").forEach(btn => btn.disabled = false);
}
