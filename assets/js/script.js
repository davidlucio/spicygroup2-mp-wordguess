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