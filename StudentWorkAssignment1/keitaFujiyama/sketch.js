// variable
let _blue;
let _count = 0;
let _font;
let _green;
let _height;
let _min;
let _minute;
let _rate = 60;
let _red;
let _second;
let _width;



// main
function preload() {
  _font = loadFont('font.ttf');
}

function setup() {
  _height = windowHeight;
  _minute = minute();
  _second = second();
  _width = windowWidth;
  
  _min = min(_height, _width);
  
  print('height: ' + _height + '  width: ' + _width + ' (' + _second + ')');
  
  background('white');
  createCanvas(_width, _height);
  
  fill('black');
  noStroke();
  textAlign(CENTER, CENTER);
  textFont(_font);
  textSize(_min * 0.025);
  textStyle(BOLD);
      
  text('give me a sec...', _width * 0.5, _height * 0.5);
  
  settingValue();
}

function draw() {
  frameRate(_rate);
  
  if (_minute != minute()) {
    _count ++;
    _minute = minute();
    
    settingValue();
    
    if (_count > (_second < 30 ? 0 : 1)) {
      let _tens = floor(_minute / 10);
      
      _rate = 10;
      
      fill('white');
      noStroke();
      textAlign(CENTER, CENTER);
      textFont(_font);
      textSize(_min / 3);
      textStyle(BOLD);
      
      text(_minute < 10 ? '0' + _minute : _minute, _width * 0.5, _height * 0.5);
    }
  }
  
  if (_minute % 2 == 0) {
    let _y = random(_height * 0.1, _height * 0.9);
    
    displayingLine(_height, _width * 0.1, _width * 0.9, _y, _y);
  } else {
    let _x = random(_width * 0.1, _width * 0.9);
    
    displayingLine(_width, _x, _x, _height * 0.1, _height * 0.9);
  }
}

function addingValue(_old) {
  let _new = _old + int(random(-10, 10));
  
  if (_new < 0) {
    _new = 0;
  }
  
  if (_new > 255) {
    _new = 255;
  }
  
  return _new;
}

function displayingLine(_weight, _x1, _x2, _y1, _y2) {
  let _value_blue;
  let _value_green;
  let _value_red;
  
  _blue = addingValue(_blue);
  _green = addingValue(_green);
  _red = addingValue(_red);
  
  if (_count > 0 && _minute == 0) {
    let _value = int(random(0, 200));
    
    _value_blue = _value;
    _value_green = _value;
    _value_red = _value;
  } else {
    _value_blue = _blue;
    _value_green = _green;
    _value_red = _red;
  }
  
  stroke(_value_red, _value_green, _value_blue);
  strokeCap(PROJECT);
  strokeWeight(random(0, _weight * 0.01));
  
  line(_x1, _y1, _x2, _y2);
}

function settingValue() {
  _blue = int(random(0, 255));
  _green = int(random(0, 255));
  _red = int(random(0, 255));
  
  print (' #' + _count + ': ' + _minute + ' (' + _red + ', ' + _green + ', ' + _blue + ')');
}