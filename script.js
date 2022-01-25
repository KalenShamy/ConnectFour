/* Created by Kalen Shamy */

var board = [
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
    document.getElementById("board").style.width = width*0.875 + "px";
    document.getElementById("board").style.height = width*0.75 + "px";
  } else {
    document.getElementById("board").style.width = height*0.875 + "px";
    document.getElementById("board").style.height = height*0.75 + "px";
  }
}

function clickColumn(column) {
  if (gameRun == false) return;
  for (let x = board.length-1; x >= 0; x--) {
    if (board[x][column] == 0) {
      document.getElementById(column + "_" + x).style.background = colors[currentPlayer];
      board[x][column] = currentPlayer+1;
      if (currentPlayer == 0) currentPlayer = 1;
      else if (currentPlayer == 1) currentPlayer = 0;
      break;
    }
  }
}

function fourConnected() {
  let visited = [];
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (visited.indexOf(x + ", " + y) != -1) return;
      visited[visted.length] = x + ", " + y;
      
    }
  }
}

window.onresize = (event) => {
  updateSize();
};

window.onload = (event) => {
  updateSize();
};
