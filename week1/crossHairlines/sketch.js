
/**This code creates a cross hair (two perpendicular lines) that span the entire x & y axis and move along with the x & y points of the mouse */

function setup() {
    
  createCanvas(windowWidth, windowHeight); // make a canvas the size of the screen
 
}


 function draw() {
  background(244, 248, 252); // change the colour of the background 
  line(mouseX, 0, mouseX, windowHeight); // create a vertical line that follows the cursor on the "x-axis"
  line(0, mouseY, windowWidth, mouseY); // create a horizontal line that follows the cursor on the "y-axis"

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // resize canvas if the screen size changes
}