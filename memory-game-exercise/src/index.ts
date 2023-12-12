const memoryCards = document.getElementsByClassName("memory-card");
let clickedCards = [];
let matchedPairs = [];
for (let index = 0; index < memoryCards.length; index++) {
  const element = memoryCards.item(index);
  element.addEventListener("click", () => {
    if (clickedCards.length < 2) {
      element.classList.toggle("flip");
      addCard(element);
    }
    if (clickedCards.length === 2) {
      checkCards(clickedCards[0], clickedCards[1]);
    }
    hasWon();
  });
}

function checkCards(card1, card2) {
  setTimeout(() => {
    const value1 = card1.dataset.card;
    const value2 = card2.dataset.card;
    if (value1 != value2) {
      clickedCards[0].classList.toggle("flip");
      clickedCards[1].classList.toggle("flip");
      clickedCards = [];
    } else {
      matchedPairs.push(value1);
      clickedCards = [];
    }
  }, 2000);
}

function addCard(card) {
  clickedCards.push(card);
}

function hasWon() {
  if (matchedPairs.length === 8) {
    document.querySelector(".overlay").classList.toggle("show");
  }
}
