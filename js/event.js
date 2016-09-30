// userName button
var userName;
var button = document.getElementById('name');
var enterName = function moosFunctionHandler() {
   userName = prompt("Enter your Name.");
}
button.addEventListener('click', enterName);

// startGame button
var startButton = document.getElementById('startGame');
var startGameHandler = function startMyGame(){
    if (userName == undefined) {
        alert("Please Enter a Name.");
    } else {
        alert("Are you ready to Play?");
    }
}
startButton.addEventListener('click', startGameHandler);

var gameButton = function GameButtonConstruct (name){
    var button;
}

var fireWeaponButton = new gameButton('fireweapon');
fireWeaponButton.button = document.getElementById('fireweapon');
console.log(fireWeaponButton.button);