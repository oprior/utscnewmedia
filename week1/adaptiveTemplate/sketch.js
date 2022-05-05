/* This file resizes the canvas when the screen is resized*/

function setup() {

  createCanvas(windowWidth, windowHeight);

}

function draw() {

ellipse(width/2,height/2,100,100);

}

function windowResized() { // this function detects when the window is moved, and resizes the canvas

  resizeCanvas(windowWidth, windowHeight); 

}