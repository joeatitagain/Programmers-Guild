var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  sounds[randomChosenColour].play();
  $("#" +  randomChosenColour).addClass("pressed");
  setTimeout(function() {
    $("#" +  randomChosenColour).removeClass("pressed");
  }, 200);
}


$('.btn').click(function(event) {
  var userChosenColour = $(event.target).attr('id');
  userClickedPattern.push(userChosenColour);
  sounds[userChosenColour].play();
  $("#"  + userChosenColour).addClass("pressed");
  setTimeout(function(){
    $("#"   + userChosenColour).removeClass("pressed");
  }, 200);
  checkAnswer(currentLevel);
});

var sounds = {
  red: new Audio("./sounds/red.mp3"),
  blue: new Audio("./sounds/blue.mp3"),
  green: new Audio("./sounds/green.mp3"),
  yellow: new Audio("./sounds/yellow.mp3"),
  wrong: new Audio("./sounds/wrong.mp3")
};

var level = 1
let keyPressed = false
$(document).keypress(function(){
  if (!keyPressed) {
    keyPressed = true  
    levelUp();
  }
});

function levelUp() {
  setTimeout(function() {
    userClickedPattern = [];
    $("h1").text(`Level ${level}`);
    level++;
    nextSequence();
  }, 1000); // delayed the program before i level up
}
var currentLevel = gamePattern.length
// need to create a delay after every new level
// that mean for every click in every level there should be a 2sec delay\
// levelUp changes the level number and repeats the sequence
function checkAnswer(){
  if (gamePattern.length === userClickedPattern.length){
    for (var i = 0; i < gamePattern.length; i++) {
      if (gamePattern[i] !== userClickedPattern[i]) {
        sounds.wrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over");
        }, 200);
        restartGame();
        return;
      }
    }
    levelUp();
  }
}
function restartGame() {
  // Reset game state and variables
  gamePattern = [];
  userClickedPattern = [];
  level = 1;
  $("h1").text("Game Over, Press Any Key to Restart")
  let keyPressed = false
  $(document).keypress(function(){
    if (!keyPressed) {
      keyPressed = true  
      levelUp();
    }
  });
}