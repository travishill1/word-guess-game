
// window.addEventListener("DOMContentLoaded", function(){

    // var incorrectLetters = document.getElementById("incorrect-letters");
    // var guesses = document.getElementById("guesses");
  
    // var containers = document.querySelectorAll(".letter");
    // var foundCount = 0;

    var currentWord = ["impeachment", "emolument", "collusion", "scandal","despotism"];
  
    const spacing = " ";
    

    document.onkeyup = function(event) {
      var userInputo = document.createTextNode(event.key);
      $("#guesses").append(spacing)
      $("#guesses").append(userInputo)
    }

      // var userInput = String.fromCharCode(event.keyCode || event.code).toLowerCase();
      // var found = false;

      // for(var i = 0; i < currentWord.length; i++){

      //   if(userInput === currentWord[i]){
          
       
      //     containers[i].textContent = userInput;
          
      //     found = true;
      //     foundCount++;
      //   }
      // }
      
      // if(foundCount === containers.length){
      //    guesses.classList.add("winner");
      // }
      
      // if(!found) { incorrectLetters.innerHTML = incorrectLetters.innerHTML + userInput; }

    // };
  
    // for selecting random words
    function randomSelector(){return Math.floor(Math.random() * currentWord.length) + 1; 
    }
  

    for(var j = 0; j < currentWord.length; j++){
     if(j == randomSelector){
      // = currentWord[j]
      let currentWord2 = currentWord[j];
      $("#wins").append(currentWord2)
      
     }
  }
// });