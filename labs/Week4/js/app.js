var bar = document.querySelector("#boxWorld");
var boxes = document.querySelector("#boxTemplate");

for (var i = 0; i < 6; i++) {
  //We know we have a specific combination of suit + value
  let newBox = document.createElement("div");

  newBox.classList.add("boxes");
  newBox.style.animationDelay = i * 0.1 + "s";

  //set up connections and events
  newBox.addEventListener("mouseover", onBoxOver);
  newBox.addEventListener("mouseout", onBoxOut);
  newBox.addEventListener("click", boxRemove);
  bar.addEventListener("click", boxRemove);

  boxWorld.appendChild(newBox);
}
function onBoxOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOver");
  event.target.classList.remove("boxOut");
}

function onBoxOut(event) {
  event.target.classList.add("boxOut");
  event.target.classList.remove("boxOver");
}

function boxRemove(event) {
  event.target.classList.remove("boxes");
  event.target.classList.add("boxGone");
}
