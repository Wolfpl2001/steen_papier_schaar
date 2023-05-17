function computerChoice() {
    const choices = ["paper", "rock", "scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function checkResult(player, computer) {
    if (player === computer) {
      return "Draw!";
    } else if (
      (player === "paper" && computer === "rock") ||
      (player === "rock" && computer === "scissor") ||
      (player === "scissor" && computer === "paper")
    ) {
      return "You win!";
    } else {
      return "You Lose!";
    }
  }
  
  function playGame(playerChoice) {
    const computerSelection = computerChoice();
    const result = checkResult(playerChoice, computerSelection);
    document.getElementById("result").innerHTML =
      "Player Choice: " +
      playerChoice +
      "<br>Computer choice: " +
      computerSelection +
      "<br><h1 class='text'>Your: " +
      result;
  }