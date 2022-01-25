/* Created by Kalen Shamy */

function updateSize() {
  width = outerWidth;
  height = outerHeight;
  if (innerWidth < width) width = innerWidth;
  if (innerHeight < height) height = innerHeight;
  if (width <= height) {
    document.getElementById("board").style.width = width*0.85 + "px";
    document.getElementById("board").style.height = width*0.75 + "px";
  } else {
    document.getElementById("board").style.width = height*0.85 + "px";
    document.getElementById("board").style.height = height*0.75 + "px";
  }
}

window.onresize = (event) => {
  updateSize();
};

window.onload = (event) => {
  updateSize();
};
