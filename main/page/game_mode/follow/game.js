
var playerX = 0;

function move_right() {
      playerX = playerX + 50;
      document.getElementsByClassName('player')[0].style = "margin-left: " + playerX + "px;";
      console.log("right");
}

function move_left() {
  playerX = playerX - 50;
  document.getElementsByClassName('player')[0].style = "margin-left: " + playerX + "px;";
  console.log("right");
}
