/*This sketch allows us to control the time and position of the video based on where the user clicks */ 

let vid;
let playing = false;
let completion;
function setup() {
  createCanvas(800, 200); // create canvas
  vid = createVideo("yoyo.mov"); // load video
  vid.size(800, 600); // set vicdeo size
}
function draw() {
  background(50); // background is dark grey
  completion = vid.time() / vid.duration(); // determines how much of the video has played by taking the current time and dividing it by the duration
  ellipse(completion*width, 50, 20, 20); // draw an ellipse where the video is
}
function mousePressed() {
  if (!playing) { // if not playing and the mouse is clicked
    vid.play(); // start playing 
    vid.time((mouseX/width) * vid.duration()); // start from the relative position of where the mouse clicked
  }
  else {
    vid.pause(); // pause when clicked if playing is true. 
  }
  playing = !playing; // flip the boolen of playing
}