// length of loop 1 * length of loop 2
//4 * 10 + 4 * 4 = 40 + 16 = 56
// length result = 10 * 12
let result = []
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 12; j++) {
    result.push(i*j);
  }
}
console.log(result.length);

let suites = ['clubs', 'hearts', 'spades', 'diamonds'];
let honor = ['king', 'queen', 'jack', 'ace'];

// 4 * 10
let cards = [];
for (let i = 0; i < suites.length; i++) {
  for(let j = 1; j <= 10; j++) {
     cards.push({suite: suites[i], rank: j});
    // for (let k = 0; k < honor.length; k++) {
    //   cards.push({ suite: suites[i], rank: honor[k] });
    // }
  }
  // for(let k = 0; k < honor.length; k++) {
  //   cards.push({suite: suites[i], rank: honor[k]});
  // }
}
console.log(cards);
console.log(cards.length);
