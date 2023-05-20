let player = 0;
let score = [0, 0];
let roundScore = 0;
let diceValue = 0;
let launchGame = true;

document.querySelector(".score-0").textContent = "0";
document.querySelector(".score-1").textContent = "0";
document.querySelector(".current-0").textContent = "0";
document.querySelector(".current-1").textContent = "0";

document.getElementById("launchDice").onclick = function () {
  diceValue = Math.floor(Math.random() * 6 + 1);
  console.log(diceValue);

  if (launchGame) {
    document.querySelector("#dice-img").src =
      "images/dice-" + diceValue + ".png";
    if (diceValue !== 1) {
      roundScore = roundScore + diceValue;
      document.querySelector(".current-" + player).textContent = roundScore;
    } else {
      roundScore = 0;
      document.querySelector(".current-" + player).textContent = 0;
      document.querySelector(".player-0").classList.toggle("active");
      document.querySelector(".player-1").classList.toggle("active");
      document.querySelector(".currentScore-0").classList.toggle("active");
      document.querySelector(".currentScore-1").classList.toggle("active");
      player = 1 - player;
    }
  }
};

document.getElementById("hold").onclick = function () {
  score[player] = score[player] + roundScore;
  document.querySelector(".score-" + player).textContent = score[player];
  if (score[player] > 100) {
    alert("Congratulations Player " + (player + 1));
  } else {
    document.querySelector(".current-" + player).textContent = 0;
    document.querySelector(".player-0").classList.toggle("active");
    document.querySelector(".player-1").classList.toggle("active");
    document.querySelector(".currentScore-0").classList.toggle("active");
    document.querySelector(".currentScore-1").classList.toggle("active");
    player = 1 - player;
    roundScore = 0;
  }
};

document.getElementById("btnNewGame").onclick = function () {
  let score = [0, 0];
  let roundScore = 0;
  let current = 0;
  let dice = 0;
  let launchGame = true;

  document.querySelector(".score-0").textContent = "0";
  document.querySelector(".score-1").textContent = "0";
  document.querySelector(".current-0").textContent = "0";
  document.querySelector(".current-1").textContent = "0";
};
