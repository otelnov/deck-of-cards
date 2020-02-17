interface Card {
  num: number;
  suit: string;
}

const deck: Card[] = [];
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

for (let num = 1; num < 14; num++) {
  for (const suit of suits) {
    deck.push({ suit, num });
  }
}

const find = ({ num, suit }: Card): number => {
  const search = (i) => {
    if (deck[i].num === num && deck[i].suit === suit) {
      return i;
    } else {
      return search(i + 1);
    }
  }

  return search(0);
}

console.log('Deck of cards: ', deck);

console.log('1♠️ index: ', find({ num: 1, suit: 'Spades' }));
console.log('7♠️ index: ', find({ num: 7, suit: 'Spades' }));
console.log('8❤️ index: ', find({ num: 8, suit: 'Hearts' }));
console.log('12♦️ index: ', find({ num: 12, suit: 'Diamonds' }));


