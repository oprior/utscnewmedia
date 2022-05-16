let img;
let x = 1;
let imgPosition = 0;

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  img = loadImage("yoyo.jpeg");

}

function draw() {
  background(220);

  let thirdImgWidth = img.width/3;
  let thirdImgHeight = img.height/3;

  imgPosition = imgPosition + x; 

  image(img, imgPosition, 0, thirdImgWidth, thirdImgHeight);

  

  if (imgPosition  <= 0 || imgPosition >= windowWidth - thirdImgWidth) {
    x = -x;
  }

}