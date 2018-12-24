
const game = {
    wordList : [
        "impeach",
        "collusion",
        "fraud",
        "emolument",
        "scandal"
        ],
    currentWord : "",
    stringBlanks : "",
    incorrectLetters : [ ],
    wins : 0,
    remainingGuesses : 7,
    userInput: "",

    // for selecting words in our array at random
    selectWord : function ( ) {
        const randomNumber = Math.floor(Math.random() * game.wordList.length); 
        game.currentWord = game.wordList[randomNumber];
        console.log(game.currentWord);
    },

    makeBlanks : function ( ) {
        game.stringBlanks = String("_").repeat(game.currentWord.length);

    },

    // turns any string into an array to be worked on later
    makeArray : function (string) {
        return string.split("");

    },

    // turns any array back into a string
    makeString : function (array) {
        return array.join("");
    },

    getUserInput : function (event) {
        var userInput = event.key;
        game.userInput = userInput.toLowerCase();

    },


    // if current userInput string is found in the index of the currentWord string
    // then we convert the string of currentWord to an array (ourArray) so that we can make changes to it.
    // then we turn the array (ourArray) back into the stringBlanks string and keep going.
    correctLetter : function () {
        if (game.currentWord.indexOf(game.userInput) > -1) {
            const ourArray = game.makeArray(game.stringBlanks);
            for(var i = 0; i < game.currentWord.length; i++) {
                if (game.currentWord[i] == game.userInput) {
                    ourArray[i] = game.userInput
                };
            }
            game.stringBlanks = game.makeString(ourArray);
            game.drawGameFrame();
        }
    },

    incorrectLetter : function () {
        if (game.currentWord.indexOf(game.userInput) == -1) {
            if (game.incorrectLetters.indexOf(game.userInput) == -1) {
                game.remainingGuesses -= 1;
                game.incorrectLetters.push(game.userInput); 
                game.drawGameFrame();
            }
        }
    },

    playerTurn : function (event) {
        game.getUserInput(event);
        game.correctLetter();
        game.incorrectLetter();
        setTimeout(game.continueGame, 150);
        // check if key is correct or incorrect
        // make game adjustments based off that
        // check if winGame or loseGame
        // else run continueGame
    },

    // if winGame or loseGame is found to be true (not false/undefined/null/etc), then go to endGame function.
    continueGame : function () {
        if (game.winGame() || game.loseGame()) {
        game.endGame();
        }
    },

    winGame : function () {
        if (!game.stringBlanks.includes("_")) {
            game.wins += 1;
            alert("You win!");
            return true
        }
    },

    loseGame : function () {
        if (game.incorrectLetters.length >= 7) {
            alert("You lose!")
            return true
        }
    },

    endGame : function () {
        document.removeEventListener("keypress", game.playerTurn);
        game.play();
    },

    drawGameFrame : function () {
        document.getElementById("wins-count").innerHTML = game.wins;
        document.getElementById("remaining-guesses").innerHTML = game.remainingGuesses;
        document.getElementById("blank-word").innerHTML = game.stringBlanks.split("").join("&nbsp;&nbsp;");
        document.getElementById("incorrect-letters").innerHTML = game.incorrectLetters.join(" ");

    },
    

    play: function ( ) {
        game.selectWord();
        game.makeBlanks();
        game.incorrectLetters = [ ];
        game.remainingGuesses = 7;
        game.drawGameFrame();
        document.addEventListener("keypress", game.playerTurn);
    },





}
game.play()