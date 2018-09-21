$(document).ready(function() {

  var respawnArea = $("#playScreen");
  var time;
  var score = 0;
  var degree = 0;
  var ydirection = "-";

  var $enemy = $("#squareEnemy");
  // var interval;

  //Press the start button to begin the game
  $("#play").click(function removePlayButton() {
    // var laughSound = $("#laughSound")[0];
    // laughSound.play();
    time = 10;
    $(".timerCounter").html(time);
    $(".menu").hide();
    $(".gameOverText").hide();
    // console.log("play button removed");
    clickEnemy();
    gameOver();
  })

  $(".exit").click(function exitGame() {
    // location.reload();
    $(".menu").show();
    $("#squareEnemy").remove();
    $(".timerCounter").html(time);
    time = 0;
    clearInterval(timer);
    score = 0;
    $(".scoreCounter").html(score);
    respawnArea.append("<div id=\"squareEnemy\"></div>").fadeIn(100)
  })

  $(".pause").click(function pauseLevel(){
      // clearTimeout(timer);

  })

  function gameOver() {
    timer = setInterval(function(){
    $(".timerCounter").html(time);
    if(time == 0){
      clearInterval(timer);
      $(".gameOverText").show();
      // removes click event
      $("#squareEnemy").off("click");
    }
    time--;
    }, 1000);
  }

  //removes the enemy everytime it is clicked on
  //plays a sound if removed
  function clickEnemy(){
    $("#squareEnemy").click(function(){
      var killSound = $("#killSound")[0];
      killSound.play();
      $("#squareEnemy").remove();
      if (time != 0) {
        score++;
        time += 1;
        $(".scoreCounter").html(score);
        spawnEnemy();
      }
    })
  };


  //allows enemies to respawn in random places
  function spawnEnemy() {
    var numRand = Math.floor(Math.random() * 501);
    var posX = (Math.random() * ($("#playScreen").width() - 100));
    var posY = (Math.random() * ($("#playScreen").height() - 100));
    // var count = 0;

    respawnArea.append("<div id=\"squareEnemy\"></div>").fadeIn(100)

        $("#squareEnemy").css({
          'left': posX + 'px',
          'top': posY + 'px'
        });

        if ( score >= 30 ) {
          $("#squareEnemy").css({
            'width': 25 + 'px',
            'height': 25 + 'px'
          });
        } else if ( score >= 25 ) {
          $("#squareEnemy").css({
            'width': 35 + 'px',
            'height': 35 + 'px'
          });
        } else if( score >= 20 ){
          $("#squareEnemy").css({
            'width': 50 + 'px',
            'height': 50 + 'px'
          });
        } else if ( score >= 10 ){
          $("#squareEnemy").css({
            'width': 75 + 'px',
            'height': 75 + 'px'
          });
        }

    clickEnemy();
  }


});
