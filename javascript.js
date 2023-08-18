var x = 1;
changeDL = () => {
  var im = document.getElementById("darkkk");
  var bd = document.getElementById("main");
  if (x === 1) {
    (im.src = "./images/bx-moon(White).png"),
      (x = 2),
      (bd.style.backgroundColor = "#272829"),
      (bd.style.color = "#FFF6E0"),
      (im.style.backgroundColor = "#272829"),
      (im.style.color = "#FFF6E0");
  } else if (x === 2) {
    (im.src = "./images/bx-sun(Black).png"),
      (x = 1),
      (bd.style.backgroundColor = "#FFF6E0"),
      (bd.style.color = "#272829"),
      (im.style.backgroundColor = "#FFF6E0"),
      (im.style.color = "#272829");
  }
};

let playerpoint = 0 * 1;
let computerpoint = 0 * 1;

selected = (RPS) => {
  const choices = ["Rock !✊", "Paper !🖐️", "Scissor !✌️"];
  const computer = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (RPS == computer) {
    result = "Tie";
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
