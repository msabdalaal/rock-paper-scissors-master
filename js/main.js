let game = document.querySelector(".game");
let result = document.querySelector(".result");
let reschoice = document.querySelector(".result").children[0].children;
let empty = document.querySelector(".emptyCircle");
let choice = document.querySelector(".choice");
let finalResult = document.querySelector(".finalResult").children[0];
let final = document.querySelector(".finalResult");
let score = document.getElementById("score");

let choices = ["paperRes", "scissorsRes", "rockRes"];
let index = Math.floor(Math.random() * choices.length);

score.innerHTML = window.localStorage.getItem("score");
if (score.innerHTML == "") {
  score.innerHTML = 0;
}
let choose = (id) => {
  game.classList.add("hide");
  result.classList.remove("hide");

  for (let i = 0; i <= 2; i++) {
    reschoice[i].classList.add("hide");
  }
  if (id == "paper") {
    reschoice.namedItem("paper").classList.remove("hide");
  }
  if (id == "rock") {
    reschoice.namedItem("rock").classList.remove("hide");
  }
  if (id == "scissors") {
    reschoice.namedItem("scissors").classList.remove("hide");
  }
  empty.classList.remove("hide");

  setTimeout(() => {
    empty.classList.add("hide");
    choice.classList.remove("hide");
    choice.children[index].classList.remove("hide");

    final.classList.remove("hide");

    if (index == 0) {
      switch (id) {
        case "paper":
          finalResult.innerHTML = "You Tied";
          break;
        case "scissors":
          finalResult.innerHTML = "You Win";
          break;
        case "rock":
          finalResult.innerHTML = "You Lose";
          break;
        default:
          break;
      }
    }
    if (index == 1) {
      switch (id) {
        case "paper":
          finalResult.innerHTML = "You Lose";
          break;
        case "scissors":
          finalResult.innerHTML = "You Tied";
          break;
        case "rock":
          finalResult.innerHTML = "You Win";
          break;
        default:
          break;
      }
    }
    if (index == 2) {
      switch (id) {
        case "paper":
          finalResult.innerHTML = "You Win";
          break;
        case "scissors":
          finalResult.innerHTML = "You Lose";
          break;
        case "rock":
          finalResult.innerHTML = "You Tied";
          break;
        default:
          break;
      }
    }
    let shadowOne = document.querySelector(".shadowOne");
    let shadowTwo = document.querySelector(".shadowTwo");
    if (finalResult.innerHTML == "You Lose") {
      if (score.innerHTML <= 0) {
        score.innerHTML = 0;
      } else {
        window.localStorage.setItem(
          "score",
          `${+window.localStorage.getItem("score") - 1}`
        );
        score.innerHTML = window.localStorage.getItem("score");
      }
      shadowOne.classList.remove("hide");
    }
    if (finalResult.innerHTML == "You Win") {
      window.localStorage.setItem(
        "score",
        `${+window.localStorage.getItem("score") + 1}`
      );
      score.innerHTML = window.localStorage.getItem("score");
      shadowTwo.classList.remove("hide");
    }
  }, 1000);
};

let reset = () => {
  game.classList.remove("hide");
  result.classList.add("hide");
  choice.classList.add("hide");
  final.classList.add("hide");
  empty.classList.add("hide");
  for (let i = 0; i <= 2; i++) {
    reschoice[i].classList.add("hide");
  }
  for (let i = 0; i < choice.children.length; i++) {
    choice.children[i].classList.add("hide");
  }
  shadowTwo.classList.add("hide");
  shadowOne.classList.add("hide");
};
let rulesList = document.querySelector(".rulesList");
let dimmer = document.querySelector(".dimmer");
let showRules = () => {
  rulesList.classList.remove("hide");
  dimmer.classList.remove("hide");
};
let hideRules = () => {
  rulesList.classList.add("hide");
  dimmer.classList.add("hide");
};
