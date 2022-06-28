let start = false
let button;
var mic, fft;
var spectrumScale = 1;
var linNum = 40;
var r = 0;
var x = [];
var y = [];

function startday() {
  start = true
}

function setup() {
  let Canvas = createCanvas(500, 500);
  button = createButton("Press Here to Speak")
  button.position(361, 550)
  button.mouseClicked(startday)
  background(0,0,0);
 createP('How is your day?');
  
  var Button = createButton('Download Your Mood');
    Button.mousePressed(download);
    
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  fft.analyze();
  fftLin = fft.linAverages(linNum);
  for (var i = 0; i< fftLin.length; i++){
    if(i == 0) {
      x[i] = 0;
      y[i] = 0;
    } else {
      x[i] = random(-width/2, width/2);
      y[i] = random(-height/2, height/2);
    }
  }
}


function draw() {
  if (!start) return
  fft.analyze();
  fftLin = fft.linAverages(linNum);
  noStroke();
  
  r = random(255); 
  g = random(255); 
  b = random(255); 
  a = random(255); 
  
  
  fill(0, 0, 0, 0);
  rect(0, 0, width, height);
  translate(width/2, height/2);
  rotate(radians(r));
  for(var i = 0; i < fftLin.length; i++){
    strokeWeight(3);
    if(i % 2 == 1) {
      stroke(a);
    } else {
      stroke(r, g, b);
    }
    if(i == 0) {
      fill(g, b, a);
      ellipse(x[i], y[i], fftLin[i]*spectrumScale*2, fftLin[i]*spectrumScale*2);
    } else {
      noFill();
      ellipse(x[i], y[i], fftLin[i]*spectrumScale, fftLin[i]*spectrumScale);
    }
  }
  r += 0.3;
}

function download() {
  saveCanvas('My Mood', 'jpg');

}









