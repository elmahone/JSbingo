var scale = [];

function generateNumArray(numberRange) {
    for (var i = 1; i <= numberRange; i++) {
        scale.push(i);
    }
    return scale;
}


function generateBingoRow(rowLength, numberArr) {
    
    var bingoRow = [];
    for (var i = 1; i <= rowLength; i++) {
        var randomNumber = Math.floor((Math.random() * numberArr.length));
        bingoRow.push(numberArr[randomNumber]);
        numberArr.splice(randomNumber, 1);
    }
    return bingoRow;
}

function generateBingoGrid(rows, numberRange) {
    var cardArray = [];
    var tempArray = scale.slice();
    for (var i = 1; i <= rows; i++) {
        console.log(generateBingoRow(rows, tempArray));
        cardArray.push(generateBingoRow(rows, tempArray));
    }
    
    return cardArray;
}

function generateBingoGrids(numOfPlayers, rows, numberRange) {
    generateNumArray(numberRange);
    var playerArray = [];
    for (var i = 1; i <= numOfPlayers; i++) {
        console.log("------"+"Player "+i+"-------");
        playerArray.push(generateBingoGrid(rows, numberRange));
    }
    return playerArray;
}


generateBingoGrids(4, 5, 75);
