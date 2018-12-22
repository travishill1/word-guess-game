
// window.addEventListener("DOMContentLoaded", function(){

    var incorrectLetters = document.getElementById("incorrect-letters");
    var guesses = document.getElementById("guesses");
  
    var containers = document.querySelectorAll(".letter");
    var foundCount = 0;

    var currentWord = ["impeach", "emolument", "collusion", "scandal","fraud"];
  
    const spacing = " ";
    
    //NEEDS WORK
    var remainGuess = (12 - incorrectLetters.length)

    function remainingGuess(remainGuess) {
      return (12 - incorrectLetters.length);
      $("#remaining").append(remainGuess)
    }
// 

    document.onkeyup = function(event) {
      var userInput = document.createTextNode(event.key);
      $("#guesses").append(spacing)
      $("#guesses").append(userInput)

      var userInput = String.fromCharCode(event.keyCode || event.code).toLowerCase();
      var found = false;

      for(var i = 0; i < currentWord.length; i++){

        if(userInput === currentWord[i]){
          
       
          containers[i].textContent = userInput;
          
          found = true;
          foundCount++;
        }
      }
      
      if(foundCount === containers.length){
         guesses.classList.add("winner");
      }
      
      // if not found then adds incorrect letter on display
      if(!found) { incorrectLetters.innerHTML = incorrectLetters.innerHTML + userInput; }
    }
    // };
  
    // for selecting words in our array at random
    function randomSelector(){return Math.floor(Math.random() * currentWord.length) + 1; 
    }
  

    for(var j = 0; j < currentWord.length; j++){
     if(j == randomSelector){
      // = currentWord[j]
      let currentWord2 = currentWord[j];
      $("#wins").append(currentWord2)
    // change #wins to preferred div
    // want another for loop within this for loop to output the spaces for each word.
     }
  }
// });