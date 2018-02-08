// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );


var randomTargetNumber;
var crystalOneNumber;
var crystalTwoNumber;
var crystalThreeNumber;
var crystalFourNumber;
//Counters
var winCount = 0;
var lossCount = 0;
var crystalTotalCount;

function startGame() {
    randomTargetNumber = Math.floor(Math.random() * 100) + 30;
    console.log("Random Number", randomTargetNumber);
    //Appends randomTargetNumber to the crystal counter
    $("#crystalTarget").html(randomTargetNumber);
    crystalOneNumber = Math.floor(Math.random() * 3) + 1;
    console.log("Crystal One Number", crystalOneNumber);
    crystalTwoNumber = Math.floor(Math.random() * 8) + 1;
    console.log("Crystal Two Number", crystalTwoNumber);
    crystalThreeNumber = Math.floor(Math.random() * 11) + 1;
    console.log("Crystal Three Number", crystalThreeNumber);
    crystalFourNumber = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal Four Number", crystalFourNumber);
}



//Main Process
startGame();
});