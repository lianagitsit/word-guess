var letter = require("./Letter.js");

var Word = function(wordInPlay){
    this.wordInPlay = wordInPlay;
    this.charArray = [];
    
    // Create a new Letter object for each char in the word
    this.createSpaces = function(){
        var wordStr = "";
        for (var i = 0; i < this.wordInPlay.length; i++){
            var newLetter = new letter(this.wordInPlay[i]);
            this.charArray.push(newLetter);
            wordStr += newLetter;
        }
        console.log(wordStr);
    }

    // Check guess
    this.handleInput = function(input){
        var result = "";
        var guess = input;
        for (var j = 0; j < this.charArray.length; j++){
            this.charArray[j].handleGuess(guess);
            result += this.charArray[j];
        }
        console.log(result);
    }
}

var cat = new Word("cat");

cat.createSpaces();
cat.handleInput("a");