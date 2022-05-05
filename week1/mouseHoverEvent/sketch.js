/**Hover over the ellipse with your cursor to change the colour*/

function setup() {

  createCanvas(windowWidth, windowHeight); // create a canvas the size of the window
  
  fill (0,255,255); // fill any objects at the beginning to be teal
  background(0); // change the background to black
  
}

function draw() {

  noStroke();  // remove the stroke
  ellipse(windowWidth/2, windowHeight/2, 200, 200); // create an ellipse in the centre of the page, the size being 200 x 200 pixels
  
  if (mouseX < ((windowWidth/2)+ 100) && mouseX > ((windowWidth/2)) - 100 && mouseY < ((windowHeight/2)+ 100) && mouseY > ((windowHeight/2)) - 100) { // if the cursor is between the ellipse's x & y dimensions
    
    fill (255,0,255); // change the colour of the ellipse to magenta
     
 } else { // if the cursor is not hovering over the ellipse
     
    fill (0,255,255); // change the colour to teal
 }
  
}


