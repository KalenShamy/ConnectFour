/* Created by Kalen Shamy */

var board = [ // board[y][x]
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

var gameRun = true;
var currentPlayer = 0;
var colors = ["lime", "hotpink"]

function updateSize() {
  width = outerWidth;
  height = outerHeight;
  if (innerWidth < width) width = innerWidth;
  if (innerHeight < height) height = innerHeight;
  if (width <= height) {
    document.getElementById("board").style.width = width*0.857 + "px";
    document.getElementById("board").style.height = width*0.75 + "px";
    document.getElementById("gameOver").style.width = width*0.857 + "px";
    document.getElementById("gameOver").style.height = width*0.75 + "px";
  } else {
    document.getElementById("board").style.width = height*0.857 + "px";
    document.getElementById("board").style.height = height*0.75 + "px";
    document.getElementById("gameOver").style.width = height*0.857 + "px";
    document.getElementById("gameOver").style.height = height*0.75 + "px";
  }
}

function endGame() {
  gameRun = false;
  let player = "Green";
  if (currentPlayer == 1) player = "Pink";
  document.getElementById("gameOver").style.visibility = "visible";
  document.getElementById("Winner").innerText = "Winner: " + player;
}

function tie() {
  gameRun = false;
  document.getElementById("gameOver").style.visibility = "visible";
  document.getElementById("Winner").innerText = "Winner: TIE!";
}

function clickColumn(x) {
  if (gameRun == false) return;
  for (let y = board.length-1; y >= 0; y--) {
    if (board[y][x] == 0) {
      document.getElementById(x + "_" + y).style.background = colors[currentPlayer];
      board[y][x] = currentPlayer+1;
      if (fourConnected(currentPlayer+1) == true) {
        endGame();
        break;
      }
      if (currentPlayer == 0) currentPlayer = 1;
      else if (currentPlayer == 1) currentPlayer = 0;
      break;
    }
  }
}

function checkConnected(player, x, y, xDir, yDir, length) {
  if (board[y][x] == player) {
    length++;
    if (length >= 4) return 4;
    if ((x + xDir >= 0 && x + xDir < board[0].length) && (y + yDir >= 0 && y + yDir < board.length)) {
      if (board[y+yDir][x+xDir] == player) {
        length = checkConnected(player, x+xDir, y+yDir, xDir, yDir, length);
      }
    }
  }
  return length;
}

function fourConnected(player) {
  let fourTouching = false;
  let openSpaces = 0;
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] == 0) openSpaces++;

      if (4 <= checkConnected(player, x, y, 0, 1, 0)) fourTouching = true;
      if (4 <= checkConnected(player, x, y, 1, 0, 0)) fourTouching = true;
      if (4 <= checkConnected(player, x, y, 1, 1, 0)) fourTouching = true;
      if (4 <= checkConnected(player, x, y, 1, -1, 0)) fourTouching = true;

      if (fourTouching == true) break;
    }
  }

  if (openSpaces == 0 && fourTouching == false) tie();

  return fourTouching;
}

window.onresize = (event) => {
  updateSize();
};

window.onload = (event) => {
  updateSize();
};
