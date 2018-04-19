var Letter = function(char){
    this.char = char;
    this.wasGuessed = false;

    this.toString = function(){
        if (this.wasGuessed){
            return this.char;
        } else {
            return "_ ";
        }
    }

    this.handleGuess = function(userInput){
        if (userInput === this.char){
            this.wasGuessed = true;
            console.log("True");
        }
    }
}

// var letter = new Letter("a");
// letter.handleGuess("b");
// console.log(letter + "");

// letter.handleGuess("a");
// console.log(letter + "");

module.exports = Letter;