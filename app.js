// console.log("start");
let deckOfCards = [];
let currentDeckOfCards = [];
const cardsRanks = [6, 7, 8, 9, 10, "J", "Q", "K"];
const cardsSuit = ["D", "S", "C", "H"]; // Diamond Spades пики Clubs трефы Heart червы
let splitLine;
let topCards;
let bottomCards;

createNewDeck();
// console.log(deckOfCards)
firstShuffle();
moreShuffles();
finalShuffle();

function createNewDeck() {
  
  for (let j = 0; j < cardsRanks.length; j++) {
    for (let i = 0; i < cardsSuit.length; i++) {
      let card = cardsRanks[j] + "" + cardsSuit[i];
      deckOfCards.push(card);
    }
  }
}

function firstShuffle(deckOfCards) {
  splitLine = Math.ceil(deckOfCards.length / 2 + 1);
  //   console.log(splitLine);
  swap(splitLine);
}

function moreShuffles() {
  splitLine = Math.floor(Math.random() * currentDeckOfCards.length + 1);
  swap(splitLine);
}

function finalShuffle(currentDeckOfCards) {
  for (let key = 0; key < currentDeckOfCards.length; key++) {
    let y = Math.floor(Math.random() * currentDeckOfCards.length - key) + key;
    let temp = currentDeckOfCards[y];
    currentDeckOfCards[y] = currentDeckOfCards[key];
    currentDeckOfCards[key] = temp;
    // currentDeckOfCards.push(key)
    // currentDeckOfCards.push(y)
  }
}

function swap(splitLine) {
  topCards = deckOfCards.slice(0, splitLine);
  bottomCards = deckOfCards(splitLine);
  currentDeckOfCards = bottomCards.concat(topCards);
}

// раздача карт игрокам

const Player1 = {
  cards: [],
};
const Player2 = {
  cards: [],
};
// const Player3 = {
//     cards:[]
// }

let card = currentDeckOfCards.shift();
Player1.cards.push(card);
currentDeckOfCards.slice(1);
Player2.cards.push(card);
currentDeckOfCards.slice(1);
console.log(Player1);
console.log(Player2);

// highScores.indexOf("you")
// highScores.lastiIndexOf("you")
