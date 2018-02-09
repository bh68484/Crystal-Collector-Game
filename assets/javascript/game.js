// A $( document ).ready() block.
$( document ).ready(function() {
    console.log("ready!");


var randomTargetNumber;
var crystalOneNumber;
var crystalTwoNumber;
var crystalThreeNumber;
var crystalFourNumber;
//Counters
var winCount = 0;
var lossCount = 0;
var crystalTotalCount = 0;

function startGame() {
    crystalTotalCount = 0;
    $("#crystalTotalCount").html(crystalTotalCount);
    //Generates random game number
    randomTargetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log("Random Number", randomTargetNumber);
    
   
    //Appends randomTargetNumber to the crystal counter
    $("#crystalTarget").html(randomTargetNumber);
   
    //Generates random number for Crystal One
    crystalOneNumber = Math.floor(Math.random() * 3) + 1;
    console.log("Crystal One Number", crystalOneNumber); 
    // $("#crystalOne").attr("value", crystalOneNumber);
   
    
    //Generates random number for Crystal Two
    crystalTwoNumber = Math.floor(Math.random() * 8) + 1;
    console.log("Crystal Two Number", crystalTwoNumber);
    
    //Generates random number for Crystal Three
    crystalThreeNumber = Math.floor(Math.random() * 11) + 1;
    console.log("Crystal Three Number", crystalThreeNumber);
    
    //Generates random Number for Crystal Four
    crystalFourNumber = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal Four Number", crystalFourNumber);
    
}

//Setting up button clicks
$(document).ready(function() { 
    $('.crystalOne').click(function() { 
        crystalTotalCount = crystalOneNumber + crystalTotalCount;
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount); 
        gameOver();
    }); 
    $('.crystalTwo').click(function() { 
        crystalTotalCount = crystalTwoNumber + crystalTotalCount;
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);
        gameOver();
    }); 
    $('.crystalThree').click(function() { 
        crystalTotalCount = crystalThreeNumber + crystalTotalCount;
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);
        gameOver(); 
    }); 
    $('.crystalFour').click(function() { 
        crystalTotalCount = crystalFourNumber + crystalTotalCount;
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);
        gameOver();
    }); 


    //Game over function
function gameOver(){
    if (crystalTotalCount > randomTargetNumber) {
            lossCount++
            $("#losses").html(lossCount);
            alert("You Lost!")
            startGame();
            
        }
        else if (crystalTotalCount == randomTargetNumber){
            winCount++
            $("#wins").html(winCount);
            alert("You Won!")
        }
}



//Main Process
startGame();
gameOver();



})
})