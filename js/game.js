
var mainPlayer = {
    name: "Player",
    rank: "Pawn",
    speed: 10,
    power: 1,

    messanger: function (message0, message1, message2) {
        alert(message0);
        alert(message1);
        alert(message2);
    }
}

mainPlayer.name = prompt("Enter your name.");

alert("Welcome "+ mainPlayer.name);
var phrases = [
    prompt("what is your middle name?"),
    prompt("Enter your phone number."),
    prompt("Enter your social securiy number :P")];

mainPlayer.messanger(phrases[0], phrases[1], phrases[2]);
/*
mainPlayer.rank = prompt("what is your special skill?");
alert(mainPlayer.name + " your rank is "+ mainPlayer.rank)
*/