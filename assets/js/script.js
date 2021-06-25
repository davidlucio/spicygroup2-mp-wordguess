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

  