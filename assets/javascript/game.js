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
    //Generates random game number
    randomTargetNumber = Math.floor(Math.random() * 100) + 30;
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
//this.val - look into
//Checks to see if game has been won or lost
// 

//Setting up button clicks

$(document).ready(function() { 
    $('.crystalOne').click(function() { 
        crystalTotalCount = crystalOneNumber + crystalTotalCount;
        alert(crystalTotalCount);
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);
    }); 
    $('.crystalTwo').click(function() { 
        crystalTotalCount = crystalTwoNumber + crystalTotalCount;
        alert(crystalTotalCount);
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);

    }); 
    $('.crystalThree').click(function() { 
        crystalTotalCount = crystalThreeNumber + crystalTotalCount;
        alert(crystalTotalCount);
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);
    }); 
    $('.crystalFour').click(function() { 
        crystalTotalCount = crystalFourNumber + crystalTotalCount;
        alert(crystalTotalCount);
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);
    }); 
}); 
//old code - maybe revisit
// var winCheck = function() {
    //     if (crystalTotalCount == randomTargetNumber) {
    //         wins++;
    //         alert("Hooray! You won!");
    //         $("#wins").html(winCount);
    //         startGame();
    
    //     } else if (crystalTotalCount > randomTargetNumber) {
    //         losses++;
    //         alert("You Lose!");
    //         $("#losses").html(lossCount);
    //         startGame();
    //     }
    // }


//Main Process
startGame();



});