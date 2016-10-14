// making a user button

var button = document.getElementById('name');
var beginGame = function gameButton() {
    
updatePlayer (playerUser,3,"Strong", 60 );
updateEnimy(enimy1,5,10,75);
updateEnimy(enimy2,5,10,75);
updateEnimy(enimy3,5,10,75);
level1();
}
button.addEventListener('click', beginGame);
    var player = function () {
        var name;
        var health = 3;
        var strength = "Strong";
        var speed = 50;
        this.stealth = "good";
        this.updateStealth = function (stealth) {
            if (health <= 5) {
            this.stealth = "Poor";
            } else { this.stealth = "Good"; 
            }
        }
    }
var playerUser = new player();

function updatePlayer (currentPlayer, healthUpdate, strengthUpdate, speedUpdate) {
    currentPlayer.name = prompt("Captain, What is your name?"),
    currentPlayer.health = healthUpdate;
    currentPlayer.strength = strengthUpdate;
    currentPlayer.speed = speedUpdate;
    }

function level1() {
    
if (!playerUser.name) {
    alert ("please enter a name");
    window.location.reload();
} else {
    
    alert("Okay, "+ playerUser.name +" You begin with: "+ playerUser.health + " health.    "
+playerUser.strength +" strength.   " + playerUser.speed + " Speed.     and " +playerUser.stealth +" Stealth");

     alert ("In a post apocaliptic world you're our only hope! "+ playerUser.name + " can we trust you to protect and save us? Pres OK if you accept the challenge");

    var beginingSenarios = ["Starting on earth you need to find a weapon, but where do you go?",
    "Mars is a desolate planet, who knows how you ended up here, but you need to find a way to defend yourself. " + playerUser.name + " Lets go find a weapon."
    ]
       function randomNumber (range){
        return Math.round(Math.random()*range);
    }
    alert(beginingSenarios [randomNumber (beginingSenarios.length -1)]);
    }

    alert("As you are looking for a weapon a Goblin approaches");
       var RandomNumber1 = Math.round(Math.random()*2);
       console.log(RandomNumber1);
       if (RandomNumber1>=1) {
           updateEnimy(enimy1,5,10,75);
           playeruser.health --;
           alert("You took some damage from the Goblin! Though you killed them with a fork you found, they attacked you first.");
           alert("Okay, "+ playerUser.name +" You're down to: "+ playerUser.health + " health.    "
            +playerUser.strength +" strength.   " + playerUser.speed + " Speed.");
            ContinueAhead();
        } else {
           alert(playerUser.name +" you find a sharpened stake and luckily take out the Goblin that was chasing you down.")
           updateEnimy(enimy1,0,0,0);
           alert("Okay, "+ playerUser.name +" You're down to: "+ playerUser.health + " health.    "
            +playerUser.strength +" strength.   " + playerUser.speed + " Speed.");
            ContinueAhead();
       }
}
// make as objects: Enimies 3, weapons

var enimy = function () {
    var damageGiven = 2;
    var health = 2;
    var speed = 25;
}
    var enimy1 = new enimy();
    var enimy2 = new enimy();
    var enimy3 = new enimy();

 function updateEnimy (currentEnimy, damageUpdate, healthUpdate, speedUpdate) {
    currentEnimy.name = "Goblin";
    currentEnimy.damageGiven = damageUpdate;
    currentEnimy.health = healthUpdate;
    currentEnimy.speed = speedUpdate;
    }


while (playerUser.health < 0) { alert("you loose!");
    restartGame();
}
function level2 () {
      var secondSenarios = ["you've found a weapon now, a rifle.  Another Goblin approaches, lets see if you know how to use that rifle",
    "you've found a weapon now, a hand cannon.  Another Goblin approaches, lets see if you know how to use it"
    ]
       function randomNumber3 (range){
        return Math.round(Math.random()*range);
    }
    alert(secondSenarios [randomNumber3 (secondSenarios.length -1)]);
    
       var RandomNumber4 = Math.round(Math.random()*2);
       console.log(RandomNumber4);
       if (RandomNumber4>=1) {
           updateEnimy(enimy2,5,10,75);
           playeruser.health --;
           alert("You shot and missed the first few times and took some damage from the Goblin! Though you killed them, they attacked you first.");
           alert("Okay, "+ playerUser.name +" You're down to: "+ playerUser.health + " health.    "
            +playerUser.strength +" strength.   " + playerUser.speed + " Speed.");
            ContinueAhead2();
        } else {
           alert(playerUser.name +" You are a sharp shooter  Great Job!!");
           updateEnimy(enimy1,0,0,0)
           alert("Okay, "+ playerUser.name +" You're down to: "+ playerUser.health + " health.    "
            +playerUser.strength +" strength.   " + playerUser.speed + " Speed.");
            ContinueAhead2
       }
}
function level3 () {
     alert("Moving forward you need to be careful, you see a goblin in the distance and decide to take it out.... as you approach he sees you and charges.");
      
       var RandomNumber4 = Math.round(Math.random()*2);
       console.log(RandomNumber4);
       if (RandomNumber4>=1) {
           updateEnimy(enimy2,5,10,75);
           playeruser.health --;
           alert("You shot and missed the first few times and took some damage from the Goblin! Though you killed them, they attacked you first.")
           alert("Okay, "+ playerUser.name +" You're down to: "+ playerUser.health + " health.    "
            +playerUser.strength +" strength.   " + playerUser.speed + " Speed.")
            alert("YOU LOSE!");
            restartGame();
        } else {
           alert(playerUser.name +" You are a sharp shooter  Great Job!!")
           updateEnimy(enimy1,0,0,0)
           alert("Okay, "+ playerUser.name +" You're down to: "+ playerUser.health + " health.    "
            +playerUser.strength +" strength.   " + playerUser.speed + " Speed.")

       }
}

function ContinueAhead () {
    if (playerUser.health < 0) { alert("you loose!");
    restartGame();
    } else {level2();}
}
function ContinueAhead2 () {
    if (playerUser.health < 0) { alert("you loose!");
    restartGame();
    } else {level3();}
}
function doYouWin () {
    if (playerUser.health < 0) { alert("you loose!");
    restartGame();
    } else {
        alert("YOU WIN!  GOOD JOB");
         restartGame();
    }
        
}
function restartGame () {
    var restart = confirm("Do you want to play again?");
    if (restart == true) {
        window.location.reload();
    } else {
        // Do nothing
    }
}
// learn how to add a list of options for adding}
/*
           console.log (enimy1.name);
           console.log (enimy1.damageGiven);
           console.log (enimy1.health);
           console.log (enimy1.speed);
console.log (playerUser.name);
console.log (playerUser.health);
console.log (playerUser.strength);
console.log (playerUser.speed);
console.log (playerUser.stealth);
           */
