let vid;
let playing = true;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // noCanvas();

  vid = createVideo("yoyo.mov");
// vid.size(400, 400);

  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  vid.position(windowWidth/2, windowHeight/2);
}

function draw() {
  // put drawing code here
  background(255);
  
  let img = vid.get();
  image(img, 0, 0); // redraws the video frame by frame in   
  
}

function mousePressed() {

if (playing) {
  vid.pause();
} else {
  vid.play();
}

playing = !playing;

}