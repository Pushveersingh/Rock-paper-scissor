const choices = ["rock", "paper", "scissors"];
let score = 0;

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user-choice").textContent = userChoice;
    document.getElementById("computer-choice").textContent = computerChoice;

    const result = getResult(userChoice, computerChoice);
    document.getElementById("result").textContent = result;

    if (result === "You Win! 🎉") {
      score++;
    } else if (result === "You Lose! 😢") {
      score--;
    }

    document.getElementById("score").textContent = score;
  });
});

function getResult(user, computer) {
  if (user === computer) return "It's a Draw 😐";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win! 🎉";
  }
  return "You Lose! 😢";
}
