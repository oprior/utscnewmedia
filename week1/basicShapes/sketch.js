/** This file create three of the fundamental shapes in three different colours */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  fill(255, 0, 0); // fill the ellipse with the colour red
  ellipse(500, 500, 300); // create an ellipse
  
  fill(0, 255, 0); // fill the rectangle with the colour blue
  rect(500, 100, 200); // create a rectangle
  
  fill(0, 0, 255); // fill the triangle with the colour green
  triangle(100, 150, 100, 300, 250, 300); // create a triangle
  
}