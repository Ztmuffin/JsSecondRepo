
// making a user button


var button = document.getElementById('name');
var enterName = function userButton() {
   
   var player = function () {}
var playerUser = new player();

function playerInfo(currentPlayer, health, strength, speed, stealth) {
    currentPlayer.name = prompt("Who are you?"),
    currentPlayer.health = 10
    currentPlayer.strength = "Strong"
    currentPlayer.speed = 50;
    currentPlayer.stealth = function () {
        if (health <= 5) {
           stealth = "Good";
        } else { stealth = "Poor"; 
        }
    }
}

playerInfo(playerUser,10,"Strong", 60, "Good" );

if (!playerUser.name) {
    alert ("please enter a name")
    window.location.reload();
} else {
    
    alert("Okay, "+ playerUser.name +" You begin with: "+ playerUser.health + " health.    "
+playerUser.strength +" strength.   " + playerUser.speed + " Speed.     and " +playerUser.stealth +" Stealth"
 )
console.log (playerUser.name);
console.log (playerUser.health);
console.log (playerUser.strength);
console.log (playerUser.speed);
console.log (playerUser.stealth);
   
   var beginingScenarios = [
       "scenario 1","scenario 2","Scenario 3",
   ]
   function randomNumber (range) {
       Math.round(Math.random() * range)
       console.log(randomNumber);
   }
   alert(beginingScenarios [randomNumber (beginingScenarios.length -1)]);

var Enimy = function (){

}
}
}
button.addEventListener('click', enterName);

// remember how to add an object maker.
// make as objects Player, Enimies 3, weapons

// add variables like stats to an object

var enimies3 
// learn how to add a list of options for adding weapons
