var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var playerPattern = [];
var level = 0;
var started = false;

$(document).keypress(function(){
    if (!started) {
       $("h1").text("Level "+level);
       nextSeq();
        started = true;
        
      }
    
});

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    playerPattern.push(userChosenColor);
    
    playSound(userChosenColor);
    btnAnimate(userChosenColor);
    
 
    checkAnswer(playerPattern.length-1);
    });

function checkAnswer(currentLevel) {
 
   
if (gamePattern[currentLevel] === playerPattern[currentLevel]) {
   console.log("current level var"+currentLevel);
   
if(playerPattern.length === gamePattern.length){
  
        setTimeout(function () {
        nextSeq();
    }, 1000);
    
}    
}else{
    console.log("fail");
   playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    
    setTimeout(function () {
    $("body").removeClass("game-over");   
    }, 1000);
    startOver();

}

}




function btnAnimate(key) {
    $(key).addClass("pressed");
   setTimeout(() => {
    $(key).removeClass("pressed");
   }, 100);

}

function playSound(name){
    var audio = new Audio(name+".mp3");
    audio.play();
}

function nextSeq() {
    playerPattern =[];
    level++;  
    $("h1").text("level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    console.log("next color "+randomChosenColor);
    gamePattern.push(randomChosenColor); 
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function startOver() {
    level=0;
    gamePattern = [];
    started=false;
}

    



