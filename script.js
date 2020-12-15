let button = document.getElementById("main");
let main = document.getElementById("main_wrap");
let petalwrap = document.getElementsByClassName("p_wrap");
let petals = document.getElementsByClassName("petal");
let body = document.getElementsByTagName("BODY")[0];
let bee = document.getElementById("bee");
let angle = 0; let animationCount = 1;

function load() {   // Page load
  let i = 0;
  while (i < 8) {
    petalwrap[i].style.transform = "rotate(" + angle + "deg)";
    i += 1; angle += 45;
  }
}

function press() {  // Button Press
  button.style.animationName = "polymorph";
  body.style.animationName = "daylight";
  main.style.animationName = "pinwheel";
  button.innerHTML = "";
  let i = 0;
  while (i < 8) {
    petals[i].style.animationName = "reveal";
    i += 1;
  }
  if (animationCount % 2 == 0) {
    bee.style.animationName = "bee";
  }
  else {
    bee.style.animationName = "none";
  }
  animationCount += 1;
}

