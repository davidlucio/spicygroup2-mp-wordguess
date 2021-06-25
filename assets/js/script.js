// Decalre global variables
var playButton = document.getElementById("button");
var gameDisplay = document.querySelector(".game-display ul");
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

    for(i=0; i < randomWord.length; i++){

        var li = document.createElement("li");
        li.textContent = "";
        li.setAttribute("letter-index", i);
        gameDisplay.appendChild(li);
    }

        // While notgameover
        // have it break down the word and let them input on downpress (burt)
}

// Kaleb's stuff
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
