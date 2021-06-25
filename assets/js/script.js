<<<<<<< HEAD
// Decalre global variables

var playButton = document.getElementById("button");

var possibleWords = ["dog", "cat", "fish", "taco"];

// 
playButton.addEventListener("click", function(){
    runTheGame();
});


function runTheGame() {

    let randomWord = possibleWords[ (Math.floor(Math.random() * possibleWords.length) ) ];
    
    console.log(randomWord);
    }
=======
var timer = document.querySelector(".timer");
var button = document.getElementById("button");

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
  

  button.addEventListener("click", function() {
    setTime();
  });

  
>>>>>>> a9b30eac0681338593080e41adccfa1ae5c316cf
