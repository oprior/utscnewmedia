/** On mouse move, a circle will be created at the x & y coordinates of the cursor **/

function setup() {

  createCanvas(windowWidth, windowHeight);
  textSize(60);
  textAlign(CENTER);
  text("Move mouse for Circles", windowWidth/2, windowHeight/2); // text in the centre of the page

}

function draw() {
  // we are not drawing anything here, the main event is in the mousePressed
}

function mouseMoved() { // everytime you click, you create a new circle
  fill(255);
  ellipse(mouseX, mouseY, 25); 
}