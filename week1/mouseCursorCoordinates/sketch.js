/** On mouse move, a circle will be created at the x & y coordinates of the cursor **/

function setup() {

  createCanvas(windowWidth, windowHeight); // create a canvas the size of the screen

}

function draw() {
    background(255);
    stroke(255, 0, 255);
    strokeWeight(4);
    fill(255, 150, 0); // fill the circles with white
    ellipse(mouseX, mouseY, 25, 25); // create an ellipse where the cursor moves, and make the size 25 by 25 pixels}
}
