const gameContainer = document.querySelector(".game");

const cards = [
   "a",
   "a",
   "b",
   "b",
   "c",
   "c",
   "d",
   "d",
   "e",
   "e",
   "f",
   "f",
   "g",
   "g",
   "h",
   "h"
];

let openCard = [];

let radomizeCards = cards.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < cards.length; i++) {
  let box = document.createElement("div");
  box.className = "cards"
  box.classList.add(radomizeCards[i]);
  box.onclick = handleClick;
  gameContainer.appendChild(box)
}

function handleClick() {
    if (openCard.length < 2) {
      this.classList.add("box-open")
      openCard.push(this)
    }
  
    if (openCard.length === 2) {
      setTimeout(checkMatch, 500);
    }
}

  function checkMatch() {
    console.log(openCard)

    if (openCard[0].className === openCard[1].className) {
  
      openCard[0].classList.add("box-match");
      openCard[1].classList.add("box-match");
  
    } else {
  
      openCard[0].classList.remove("box-open");
      openCard[1].classList.remove("box-open");
    }
  
    openCard = [];

    if (document.querySelectorAll(".box-match").length === cards.length) {

        gameContainer.classList.add("hide")

        const resultContiner = document.querySelector(".result-container")
        resultContiner.classList.remove("hide")
    
    }
}

const startBtn = document.querySelector("#start-btn")

startBtn.addEventListener("click", (e) => {
  e.preventDefault()

  gameContainer.classList.remove("hide")

  const wellcome = document.querySelector(".wellcome");

  wellcome.classList.add("hide")
})