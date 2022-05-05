/*This code shows the coordinates of mouseX and mouseY as the mouse moves across the screen*/ 

function setup() {

  createCanvas(windowWidth, windowHeight); // create a canvas the size of the screen

}

function draw() {

  background(255); // change the background to white
  text("X: "+mouseX, width/2, height/2); // display text in the center of the page with the x cooridinates
  text("Y: "+mouseY, 50 + width/2, height/2); // display text in the center of the page + 50 pixels over (so that the x & y text do not overlap) and display the y cooridinates

}