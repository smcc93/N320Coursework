var soundButtons = document.getElementById("soundButtons");

var sounds = ["chimes_long", "click_clock_loop", "pop_10", "puff", "rustle_5"];

var soundElements = [];

//loop through the sounds and create audio tags
sounds.forEach((soundUrl, idx) => {
  //sounds
  var newSound = new Audio("sounds/" + soundUrl + ".mp3");
  soundElements.push(newSound);
  soundUrl = soundUrl.split("_");
  //button
  var newButton = document.createElement("button");
  newButton.innerHTML = soundUrl[0];

  //store the sound index
  newButton.setAttribute("data-sound-id", idx);
  //add it to the page
  soundButtons.appendChild(newButton);

  //listen for click
  newButton.addEventListener("click", playSoundInArray);
});

function playSoundInArray() {
  var soundIndex = Number(event.target.getAttribute("data-sound-id"));

  //get sound from array
  var selectedSound = soundElements[soundIndex];
  selectedSound.play();
}

//get the audio tag
// var myAudio = document.getElementById("myAudio");

// function playAudio() {
//   myAudio.play();
// }

// function stopMainAudio() {
//   myAudio.pause();
// }
