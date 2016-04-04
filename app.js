var numOfPlayers = 4;
var numbers = 50;
var grid = 5;
var numArray = [];
var cardArray = [];
var cardArrayLength = grid * grid;
var player = [];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

for (var u = 0; u < numOfPlayers; u++) {
    console.log(u);
    var cardArray = [];
    for (var i = 1; i <= numbers; i++) {
        numArray.push(i);
    }
    shuffle(numArray);
    
    for (var o = 1; o <= cardArrayLength; o++) {
        cardArray.push(numArray[o]);
        numArray.splice(o, 1);

    }
    player.push(cardArray);
    console.log(cardArray);

}

console.log(player);
console.log(numArray);