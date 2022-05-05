/** On mouse move, a circle will be created at the x & y coordinates of the cursor **/

function setup() {

  createCanvas(windowWidth, windowHeight); // create a canvas the size of the screen
  textSize(60); // set text size to 60
  textAlign(CENTER); // align text in the center
  text("Move mouse for Circles", windowWidth/2, windowHeight/2); // text in the centre of the page

}

function draw() {
  // we are not drawing anything here, the main event is in the mousePressed
}

function mouseMoved() { // everytime you click, you create a new circle
  fill(255); // fill the circles with white
  ellipse(mouseX, mouseY, 25, 25); // create an ellipse where the cursor moves, and make the size 25 by 25 pixels
}