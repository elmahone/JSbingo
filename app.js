var numOfPlayers = 4;
var scale = 50;
var grid = 5;

var cardArray = [];
var cardArrayLength = grid * grid;
var player = [];

//function shuffle(array) {
//    var currentIndex = array.length,
//        temporaryValue, randomIndex;
//
//    // While there remain elements to shuffle...
//    while (0 !== currentIndex) {
//
//        // Pick a remaining element...
//        randomIndex = Math.floor(Math.random() * currentIndex);
//        currentIndex -= 1;
//
//        // And swap it with the current element.
//        temporaryValue = array[currentIndex];
//        array[currentIndex] = array[randomIndex];
//        array[randomIndex] = temporaryValue;
//    }
//
//    return array;
//}
/*
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
*/


var numArray = [];
var bingoRow = [];
function generateNumArray(scale) {
    for (var i = 1; i <= scale; i++) {
        numArray.push(i);
    }
    return numArray;
};
generateNumArray(75);
console.log(numArray);

function generateBingoRow(rowLength, numberRange) {
    
    for (var i = 1; i <= rowLength; i++) {
        var randomNumber = Math.floor((Math.random() * numberRange.length));
        bingoRow.push(numberRange[randomNumber]);
        numArray.splice(randomNumber,1)
    }
    return bingoRow;

};


generateBingoRow(5, numArray);
console.log(bingoRow);
console.log(numArray);
function generateBingoGrid(rows) {
    for(var i = 1; i <= rows; i++){
        generateBingoRow(rows, );
    }
};