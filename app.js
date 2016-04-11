'use strict';

const numberScale = [];

function generateNumberArray(numberRangeMax) {
    if (numberRangeMax <= 75) {
        for (let i = 1; i <= numberRangeMax; i++) {
            numberScale.push(i);
        }
        return numberScale;
    } else if (numberRangeMax > 75) {
        console.log('Max value for number range is 75');
        return false;
    } else {
        console.log('Something went wrong');
        return false;
    }
}

function generateBingoRow(rowLength, numberArr) {
    const bingoRow = [];
    for (let i = 1; i <= rowLength; i++) {
        let randomNumber = Math.floor((Math.random() * numberArr.length));
        bingoRow.push(numberArr[randomNumber]);
        numberArr.splice(randomNumber, 1);
    }
    return bingoRow;
}

function generateBingoGrid(bingoCardRows, numberRangeMax) {
    const cardArray = [];
    const tempArray = numberScale.slice();
    for (let i = 1; i <= bingoCardRows; i++) {
        console.log(generateBingoRow(bingoCardRows, tempArray));
        cardArray.push(generateBingoRow(bingoCardRows, tempArray));
    }
    return cardArray;
}

function generateBingoGrids(numberOfPlayers, bingoCardRows, numberRangeMax) {
    generateNumberArray(numberRangeMax);
    const playerArray = [];
    if (numberOfPlayers >= 1 && numberOfPlayers <= 50) {
        for (let i = 1; i <= numberOfPlayers; i++) {
            console.log("------" + "Player " + i + "-------");
            playerArray.push(generateBingoGrid(bingoCardRows, numberRangeMax));
        }
    } else if (numberOfPlayers > 50) {
        console.log('Number of players must be more than 50');
    } else {
        return console.log('Number of players must be more than ' + numberOfPlayers);
    }
    return playerArray;
}

generateBingoGrids(5, 5, 75);