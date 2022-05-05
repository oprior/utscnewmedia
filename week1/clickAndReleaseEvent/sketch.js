/** This code demonstrates clicking and releasing events. When clicking down, the background turns to black and says "pressed" in white text. When the mouse is released, the background turns to white and says "Released" in black text*/

function setup() {

  createCanvas(windowWidth, windowHeight); // create a canvas the size of the window
  textSize(60); // set text size to 60
  textAlign(CENTER); // align text in the center
  text("Click to try", windowWidth/2, windowHeight/2);  // text in the centre of the page

}

function draw() {
  // we are not drawing anything here, the main event is in the mousePressed
}

function mousePressed() { // everytime you click down with your mouse, the background and text changes
  background(0);// change the background to black
  fill(255); // change the text to white
  text("Pressed", windowWidth/2, windowHeight/2);  // text in the centre of the page
}

function mouseReleased() { // everytime you let go of the mouse, the background and text changes
  background(255); // change the background to white
  fill(0); // change the text to black
  text("Released", windowWidth/2, windowHeight/2);  // text in the centre of the page
}