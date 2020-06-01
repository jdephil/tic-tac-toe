document.addEventListener('DOMContentLoaded', function() {

/*--Dom Refs--*/
let gameBoard = document.getElementById('gameBoard')
let resetBtn = document.getElementById('reset')
let resultDiv = document.getElementById('results')
let boxDiv = document.getElementsByClassName('box')
let playerTurnDiv = document.getElementById('playerTurn')
/*--Game Logic--*/
let gameOver = false;
let player = 0;
let winningCombos = [
    ["upperLeft", "upperCenter", "upperRight"],
    ["middleLeft", "middleLeft", "middleRight"],
    ["lowerLeft", "lowerCenter", "lowerRight"]
    ];
let boxesToMark = {
    upperLeft: null,
    upperCenter: null,
    upperRight: null,
    middleLeft: null,
    middleCenter: null,
    middleRight: null,
    lowerLeft: null,
    lowerCenter: null,
    lowerRight: null
}
let playerOneChoices = [];
let playerTwoChoices = [];
let winState = false; 

/*--Event Listeners--*/
resetBtn.addEventListener('click', reset);
gameBoard.addEventListener('click', boxClick);

/*--Functions--*/

function reset() {
    for (let box in boxesToMark) {
        boxesToMark[box] = null;
    }
    resultDiv.innerText = ('');
    boxDiv.innerText = ('');
    init();
}

function init() {
    gameOver = false;
   
}


function winCheck() {
     for (let i =0; i < winningCombos.length; i++) {
        let matchCountX = 0;
        let matchCountO = 0;
        for (let j = 0; j < winningCombos[i].length; j++) {
            console.log(playerOneChoices);
            console.log(winningCombos[i][j]);
            if (playerOneChoices.includes(winningCombos[i][j])) {
                console.log("player one check");
                matchCountX++;
                console.log("match count = " + matchCountX);
            }  if  (playerTwoChoices.includes(winningCombos[i][j])) {
                console.log("player two check");
                matchCountO++;
                console.log(matchCountO);
           }  if  (playerOneChoices.includes(winningCombos[i][j]) && matchCountX === 3) {    
                resultDiv.innerText = ("player one win"); 
                gameOver = true;
           } if (playerTwoChoices.includes(winningCombos[i][j]) && matchCountO === 3) {
                resultDiv.innerText = ("player two win");
                gameOver = true;
                       } 
         }
    
     }
}



function boxClick(e) {
    let box = e.target.id;
    if (gameOver === false && player === 0 && boxesToMark[box] === null) {
        e.target.innerText = ("X");
        boxesToMark[box] = 0;
        console.log(boxesToMark[box])
        playerOneChoices.push(e.target.id)
        console.log(playerOneChoices) 
        playerTurnDiv.innerText = ("Player Two- you're up!");
        player = 1;
        
    } 
     if (gameOver === false && player === 1 && boxesToMark[box] === null) {
        e.target.innerText = ("O");
        boxesToMark[box] = 1;
        console.log(boxesToMark[box])
        playerTwoChoices.push(e.target.id)
        console.log(playerTwoChoices) 
        playerTurnDiv.innerText = ("Your turn Player One!")
         player = 0;
    }
    winCheck();
}








function endGame() {

}


})