/**This code is from p5.js website. When you press down on your mouse, draw with your mouse */

function setup() {
  createCanvas(windowWidth, windowHeight); // canvas full size of screen
  background(0); // background is black
}

function draw() {
  stroke(255); // stroke is white
  if (mouseIsPressed == true) { // if you are pressing down
    line(mouseX, mouseY, pmouseX, pmouseY); // create a line with the points that you are tracing with your cursor
  }
}