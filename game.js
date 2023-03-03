const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

let started = false;

$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
});

function nextSequence() {
    level++;

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor)
    .addClass("pressed")
    .delay(100)
    .removeClass("pressed");
}

$(document).keydown(function() {
    if (!started) {
        $("#level-title").html("Level " + level);
        nextSequence()
        started = true;
    };
});

function checkAnswers(currentLevel) {
    if () {
        console.log("success")
    } else {
        console.log("wrong")
    }
};
