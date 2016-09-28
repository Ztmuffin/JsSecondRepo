

/*
var mainPlayer = {
    name: "Player",
    rank: "Pawn",
    speed: 10,
    power: 1,

    messanger: function (message) {
        alert("Is this correct?   " + message);
    }
}

mainPlayer.name = prompt("Enter your name.");

alert("Welcome "+ mainPlayer.name);
var phrases = [
    prompt("what is your middle name?"),
    prompt("Enter your phone number."),
    prompt("Enter your social securiy number :P"),
    prompt("Who is your first born child?"),
    prompt("What is your Credit Card number?")
    ];

for (var i = 0; i < phrases.length; i++) {
    mainPlayer.messanger(phrases[i]);
}
*/

function PlayGame(firstNum, secondNum) {
    alert(firstNum + secondNum);
    return firstNum + secondNum;
}

var firstPrompt = parseInt(prompt("Enter a number between 0 and 10"));
var secondPrompt = parseInt(prompt("Enter a number between 11 and 20"));

var score = PlayGame(firstPrompt, secondPrompt);
alert("Your score is "+ score + "!");

