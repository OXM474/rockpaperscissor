var x = 1;
changeDL = () => {
  var im = document.getElementById("darkkk");
  var bd = document.getElementById("main");
  if (x === 1) {
    (im.src = "./images/bx-moon.png"),
      (x = 2),
      (bd.style.backgroundColor = "#A0A0A0"),
      (im.style.backgroundColor = "#A0A0A0");
  } else if (x === 2) {
    (im.src = "./images/bx-sun.png"),
      (x = 1),
      (bd.style.backgroundColor = "#FFFFFF"),
      (im.style.backgroundColor = "#FFFFFF");
  }
};

let playerpoint = 0 * 1;
let computerpoint = 0 * 1;

selected = (RPS) => {
  const choices = ["Rock !✊", "Paper !🖐️", "Scissor !✌️"];
  const computer = choices[Math.floor(Math.random() * 3)];
  let result = "";
  // var rest = document.getElementById("restart");
  // var document.getElementById("")
  if (RPS == computer) {
    result = "tie";
  } else if (
    ((RPS == "Rock !✊") & (computer == "Scissor !✌️")) |
    ((RPS == "Paper !🖐️") & (computer == "Rock !✊")) |
    ((RPS == "Scissor !✌️") & (computer == "Paper !🖐️"))
  ) {
    result = "You Win!";
    playerpoint = playerpoint + 1;
  } else {
    result = "Computer Win!";
    computerpoint = computerpoint + 1;
  }
  document.getElementById("playerchoose").innerHTML = `You Choose : ${RPS}`;
  document.getElementById(
    "computerchoose"
  ).innerHTML = `Computer Choose : ${computer}`;
  document.getElementById("result").innerHTML = result;
  document.getElementById(
    "mark"
  ).innerHTML = `Your Point : ${playerpoint} & Computer Point : ${computerpoint}`;
  plwin = () => {
    alert("You Win!!");
  };
  cpuwin = () => {
    alert("You Lose!!");
  };
  if (playerpoint == 5) {
    plwin(),
      (document.getElementById("final").innerHTML =
        "You Beats Me ! You Win ! "),
      (document.getElementById("btn-rock").disabled = true),
      (document.getElementById("btn-paper").disabled = true),
      (document.getElementById("btn-scissor").disabled = true),
      (document.getElementById("rst").style.display = "block");
  } else if (computerpoint == 5) {
    cpuwin(),
      (document.getElementById("final").innerHTML =
        "Computer Win ! You Loser !"),
      (document.getElementsByClassName("btn").disabled = true),
      (document.getElementById("btn-rock").disabled = true),
      (document.getElementById("btn-paper").disabled = true),
      (document.getElementById("btn-scissor").disabled = true),
      (document.getElementById("rst").style.display = "block");
  }
  restart = () => {
    playerpoint = 0 * 1;
    computerpoint = 0 * 1;
    document.getElementById("btn-rock").disabled = false;
    document.getElementById("btn-paper").disabled = false;
    document.getElementById("btn-scissor").disabled = false;
    document.getElementById("rst").style.display = "none";
    document.getElementById("playerchoose").innerHTML = "";
    document.getElementById("computerchoose").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("mark").innerHTML = "";
    document.getElementById("final").innerHTML = "";
  };
};
