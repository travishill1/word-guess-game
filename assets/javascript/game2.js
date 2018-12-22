
// Wait until the DOM is fully loaded and then run the function
window.addEventListener("DOMContentLoaded", function(){

    // Set up variable to cache reference to the DOM elements we'll be using
    var incorrectLetters = document.getElementById("incorrect-letters");
    var guesses = document.getElementById("guesses");
  
    // Find all the letter element containers:
    var containers = document.querySelectorAll(".letter");
    var foundCount = 0;

    // Set up the secret word
    var currentWord = "taco";
 
    document.onkeyup = function(event) {
   
      // event.keyCode and event.code return the numeric code for the character 
      // they produce. When passed to String.fromCharCode(), we get the actual
      // character that was produced by the key input, but this excludes keystrokes
      // that don't produce a visible character (space, backspace, tab, enter, etc.)
      // From there, we convert that character to lower-case.
      var userInput = String.fromCharCode(event.keyCode || event.code).toLowerCase();
      var found = false;

      // Check input to see if it is in the secret word array and, if so,
      // print the input in the correct position
      
      // Loop through each letter in the array
      for(var i = 0; i < currentWord.length; ++i){
        
        // Check the input against the current letter we're looping over
        if(userInput === currentWord[i]){
          
          // We have a match, put the letter in the container that is in the same
          // position in the array as it is in the word
          containers[i].textContent = userInput;
          
          // Flag that we have a matched letter and up the matched letter count
          found = true;
          foundCount++;
        }
      }
      
      // If all letters have been found, change display to show a winner
      if(foundCount === containers.length){
         guesses.classList.add("winner");
      }
      
      // If the input wasn't found after looping, write it in the bad guesses area
      if(!found) { incorrectLetters.innerHTML = incorrectLetters.innerHTML + userInput; }

    };
  
});