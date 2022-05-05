/** This file allows users to click to create circles in random shape and colour */

function setup() {
    createCanvas(windowWidth, windowHeight); // create a canvas the size of the screen
    textSize(60); // make the text size 60 pt
    textAlign(CENTER); // align the text in the center
    text("Click for Circles", windowWidth/2, windowHeight/2); // text in the centre of the page
  }
  
  function draw() {
    // we are not drawing anything here, the main event is in the mousePressed
  }
  
  function mousePressed() { // everytime you click, you create a new circle
    fill(random(0,255), random(0,255), random(0,255)); // randomly choose the colour for the circle
    ellipse(random(50, windowWidth-100), random(50,windowHeight-100),random(10,100)); // randomly choose the position and size of the circle
  }