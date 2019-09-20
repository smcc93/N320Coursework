var theplace = document.querySelector("#theplace");
var cardTemplate = document.querySelector("#cardTemplate");

var suits = ["🍷", "🎱", "🌆", "🎁"];
var values = ["A", "1", "2", "3"];

var i = 0;
suits.forEach(suit => {
  values.forEach(value => {
    //We know we have a specific combination of suit + value
    let newCard = document.createElement("div");
    newCard.innerHTML = value + " " + suit;
    newCard.classList.add("card");
    newCard.style.animationDelay = i * 0.1 + "s";

    //set up connections and events
    newCard.addEventListener("mouseover", onCardOver);
    newCard.addEventListener("mouseout", onCardOut);

    theplace.appendChild(newCard);

    function onCardOver(event) {
      event.target.style.animationDelay = "0s";
      event.target.classList.add("cardOver");
      event.target.classList.remove("cardOut");
    }

    function onCardOut(event) {
      event.target.classList.add("cardOut");
      event.target.classList.remove("cardOver");
    }
  });
});
