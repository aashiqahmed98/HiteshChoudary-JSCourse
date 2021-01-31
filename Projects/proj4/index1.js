const cards = document.querySelectorAll(".card");
const successMessage = document.querySelector(".success-message");

// console.log(cards);
cards.forEach(card => card.addEventListener("click", flip));

//variables

var isFlipped = false;
var firstCard;
var secondCard;

function flip() {
  // console.log(`Flipped!`);
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    // reverse logic checking
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
}

function checkIt() {
  // console.log(`checking...`);
  firstCard.dataset.image === secondCard.dataset.image ? success() : fail();
}

function success() {
  console.log(`Success`);
  // firstCard.removeEventListener("click", flip);
  // secondCard.removeEventListener("click", flip);
  successMessage.classList.add("show");

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    shuffle();
    reset();
    successMessage.classList.remove("show")
  }, 5000);
}

function fail() {
  console.log(`failed`);
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset(); // a bug rseolved => resetting the `this` of first and second card if fail
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

// TODO: shuffle
function shuffle() {
  console.log(`shuffling`);
  cards.forEach(card => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
} // this automatically runs every time the page loads

// OR

window.addEventListener("load", shuffle); // shuffle the cards on load every time
