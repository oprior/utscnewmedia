/* This sketch shows an image only when the cursor is about the image */

let img; // variable to create the image

function setup() {
  
  createCanvas(windowWidth, windowHeight); // canvas is the size of the window
  img = loadImage("yoyo.jpeg"); // load the image
  
  background(255);
  image(img, 0, 0, img.width/3, img.height/3); // draw the image
  
}

function draw() {
  
  if (mouseX < img.width/3 && mouseX > 0 && mouseY < img.height/3 && mouseY > 0) { // if the cursor is between the images's x & y dimensions

  image(img, 0, 0, img.width/3, img.height/3); // img is a 3rd of the width and height


 } else { // if the cursor is not hovering over the image
  
   background(255);
   
 }
  
}
