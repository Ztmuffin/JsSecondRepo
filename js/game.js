
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
/*
mainPlayer.rank = prompt("what is your special skill?");
alert(mainPlayer.name + " your rank is "+ mainPlayer.rank)
*/