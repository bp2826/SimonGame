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
    
    console.log("click "+playerPattern);
    console.log("click "+gamePattern);
    console.log("ppl"+playerPattern.length-1);
    checkAnswer(playerPattern.length-1);
    });

function checkAnswer(currentLevel) {
 
   // console.log("before if "+playerPattern)
if (gamePattern[currentLevel] === playerPattern[currentLevel]) {
   console.log("current level var"+currentLevel);
   // console.log("current level Gp "+gamePattern);
   // console.log("current level pp "+playerPattern);
if(playerPattern.length === gamePattern.length){
   // console.log("pp.length"+playerPattern.length);
   // console.log("gp.lenght"+gamePattern.length);
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
/*function showPattern(gamePattern){
  for (var i = 0; i < gamePattern.length; i++) {

    $("#"+gamePattern[i]).fadeIn(1000).fadeOut(500).fadeIn(1000);
    var audio = new Audio("sounds/" + gamePattern[i] + ".mp3");
    audio.play();
    
}
}
    /*switch (gamePattern[i]){

        case "red":
        //    setTimeout(() => {
                btnAnimate(red);
                console.log("red");
                var rd = new Audio("red.mp3");
                rd.play(); 
        //   }, 5000);
            
            break;
        
        case "green":
         //   setTimeout(() => {
                btnAnimate(green);
                console.log("green");
                var grn = new Audio("green.mp3");
                grn.play();
          //  }, 5000);
           
            break;
        
        case "yellow":
          //  setTimeout(() => {
                btnAnimate(yellow);
                console.log("yellow");
                var yel = new Audio("yellow.mp3");
                yel.play();
           // }, 5000);
                
            break;
        
        case "blue":
          //  setTimeout(() => {
                btnAnimate(blue);
                console.log("blue");
                var blue = new Audio("blue.mp3");
                blue.play(); 
           // }, 1000);
            
            break;
        
        default: console.log("broke");
        break;
        }
    
  
   */   

    



