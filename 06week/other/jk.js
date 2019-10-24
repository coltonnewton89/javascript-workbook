var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding("utf-8");

// Prompt user to input data in console.
console.log("Please guess a letter:");

// When user input data and click enter key.

standard_input.on("data", function (guess) {
    console.log("user input =", guess.length)
    var cleanGuess = guess.trim().toLowerCase();
    console.log("clean guess=", cleanGuess.length)
    let arr = "hello";
    var splitWord = arr.split("")
    console.log(splitWord);

    let dashes = splitWord.map(dashes => {
        return "_";
    });
    console.log(dashes);

    //var guess = "o";
    var position = splitWord.indexOf(cleanGuess);
    console.log(position);
    //define variable outside the method
    if (position > -1) {
        dashes[position] = cleanGuess
    }
    console.log(dashes)
});


/* Try to figure out a way to use match() method in this program. This
will probably use less code. All you'll have to do is match('guess') */