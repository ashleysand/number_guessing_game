const randomNumber = Math.floor(Math.random() *100)
+ 1;
let attempt = 0;

function checkGuess(){
    //Grab the user's guess from the input field
    //We'll grab the user's guess by retrieving the value entered in the input field
    //using the document.getElementById() method
    const userGuess = parseInt (document.getElementById("guessInput").value);
    if (userGuess === randomNumber){
        document.getElementById("message").innerHTML = "Congrats!"
        document.body.style.backgroundColor = "green";
    }

    else if (userGuess < randomNumber) {
        document.getElementById('message').innerHTML = "Too low babyyyy, try again";
    }
    else {
        document.getElementById('message').innerHTML = "Too high babyyyy, try again";

    }
    attempt ++;
}