let img;

function preload() {
  img = loadImage("yoyo.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  background(220);
  image(img, imgPosition, 0, img.width/2, img.height/2);
}