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
    randomTargetNumber = Math.floor(Math.random() * 120) + 19;
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

//Checks to see if game has been won or lost
// 

//Setting up button clicks

$(document).ready(function() { 
    $('.crystalOne').click(function() { 
        crystalTotalCount = crystalOneNumber + crystalTotalCount;
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);
        if (crystalTotalCount > randomTargetNumber) {
            alert("You Lose");
            lossCount++
            $("#losses").html(lossCount);
            
        }
        else if (crystalTotalCount == randomTargetNumber){
            alert("You Win!");
            winCount++
            $("#wins").html(winCount);
            setTimeout(function(){gameStart();}, 1000);
            setTimeout(function(){alert("You Won!");;}, 1000);
        }
    }); 
    $('.crystalTwo').click(function() { 
        crystalTotalCount = crystalTwoNumber + crystalTotalCount;
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);
        if (crystalTotalCount > randomTargetNumber) {
            alert("You Lose");
            lossCount++
            $("#losses").html(lossCount);
            
        }
        else if (crystalTotalCount == randomTargetNumber){
            alert("You Win!");
            winCount++
            $("#wins").html(winCount);
            setTimeout(function(){gameStart();}, 1000);
            setTimeout(function(){alert("You Won!");;}, 1000);
        }

    }); 
    $('.crystalThree').click(function() { 
        crystalTotalCount = crystalThreeNumber + crystalTotalCount;
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);
        if (crystalTotalCount > randomTargetNumber) {
            alert("You Lose");
            lossCount++
            $("#losses").html(lossCount);
            
        }
        else if (crystalTotalCount == randomTargetNumber){
            alert("You Win!");
            winCount++
            $("#wins").html(winCount);
            setTimeout(function(){gameStart();}, 1000);
            setTimeout(function(){alert("You Won!");;}, 1000);
        }
    }); 
    $('.crystalFour').click(function() { 
        crystalTotalCount = crystalFourNumber + crystalTotalCount;
        $("#crystalTotalCount").html(crystalTotalCount);
        console.log("crystal counters", crystalTotalCount);
        if (crystalTotalCount > randomTargetNumber) {
            alert("You Lose");
            lossCount++
            $("#losses").html(lossCount);
            
        }
        else if (crystalTotalCount == randomTargetNumber){
            alert("You Win!");
            winCount++
            $("#wins").html(winCount);
            setTimeout(function(){gameStart();}, 1000);
            setTimeout(function(){alert("You Won!");;}, 1000);
        }
        //check win function goes here so you dont have to retype the if else statement multiple times
    }); 





//Main Process
startGame();



})
})