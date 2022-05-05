/**This code creates an ellipse that increases in size and increases the blue value every time someone clicks.
 * 
 * If the ellipse size exceeds 255px, it stops growing, and a new colour changing ellipse starts to form in the centre.
 */

let diameter = 50; //the size we are going to start our ellipse off with

function setup() {
    
  createCanvas(windowWidth, windowHeight); // canvas the size of the window
  
 
}

function draw() {
  
  fill (0, diameter ,255); // at the beginning of the code, diameter will be equal to 50, which means the green value starts off as 50 but changes through interaction.
  noStroke(); // remove the stroke
  ellipse(windowWidth/2, windowHeight/2, diameter, diameter); // create an ellipse in the center of the page, and at the size of diammeter. This is 50 to begin with but will change when the user clicks.
  

}

function mousePressed() { // every time the cursor is clicked

  if (diameter <= 255) { // if the variable diameter is lower or equal to 255
      diameter = diameter + 10; // increase the variable by 10 (no clicks 50, 1 click diameter will be 60, 2 clicks diameter will be 70, etc..)
  } else { // if diameter is greater than 255, reset the variable to 50
    diameter = 50; // diameter resets to 50
  }

}
