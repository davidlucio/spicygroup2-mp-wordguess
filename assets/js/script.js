// Decalre global variables
var playButton = document.getElementById("button");
var gameDisplay = document.querySelector("#game-display ul");
var timer = document.querySelector(".timer");

var possibleWords = ["dog", "cat", "fish", "taco"];

// Hook to button click
playButton.addEventListener("click", function(){
    runTheGame();
    setTime();
});

function runTheGame() {
    // Select a random word
    let randomWord = possibleWords[ (Math.floor(Math.random() * possibleWords.length) ) ];
    console.log(randomWord);

    }

    
    var timeLeft = 10;
    function setTime() {
        
        var timerInterval = setInterval(function() {
          timeLeft--;
          timer.textContent = timeLeft;
      
          if(timeLeft === 0) {
            clearInterval(timerInterval);
    
          }
        }, 1000);
      }