var button = document.getElementById('button1');

var moosFunction = function moosFunctionHandler() {
    alert("Hello World!");
}

button.addEventListener('click', moosFunction);

var startButton = document.getElementById('startGame');

var startGameHandler = function startMyGame(){
    prompt("Enter your Name.");
}

startButton.addEventListener('click', startGameHandler);