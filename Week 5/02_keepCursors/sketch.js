/**
 * Written for UTSC New Media in Theory
 * Parts of this code is adapted from Nick Puckett & Kate Hartman's Creation & Computation PubNub Code
 * 
 * When users click, their name is shown in an ellipse where they clicked. 
 * The click triggers the sendMessage. 
*/


var dataServer;
var pubKey = "pub-c-3f2a3432-47d8-414c-a605-4c9e42f7e6e5";
var subKey = "sub-c-bb8ed550-72ad-4edc-a9f8-38f55157dec6";
var secretKey = "sec-c-ZWI1OGZiNGMtYmVjYi00ZjVjLWI2OTctYTYyOWEzMDA2ZmY0";

var channelName = "canvasClick";
var cursors = [];

var x;
var y;
var who; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // initialize pubnub
  dataServer = new PubNub({
    subscribeKey: subKey,
    publishKey: pubKey,
    uuid: "Olivia",
    secretKey: "secretKey",
    heartbeatInterval: 0,
  });

  dataServer.addListener({ message: readIncoming});
  dataServer.subscribe({ channels: [channelName] });

  new allCursors(mouseX,mouseY,dataServer.getUUID(), 255, 0, 255)
}

function draw() {

  for (var i = 0; i < cursors.length; i++) {
    fill(cursors[i].r, cursors[i].g, cursors[i].b)
    ellipse(cursors[i].x, cursors[i].y, 200); // draw the ellipse where the user clicked
        
    textSize(30);
    textAlign(CENTER);

    fill(255,255,0); 
    text(cursors[i].who, cursors[i].x, cursors[i].y+ 15);// write the name of the person who clicked
  }
}

function mousePressed() {
// when you click send the message
  sendTheMessage(); 
}

/// PubNub logic below

function sendTheMessage() {

  // Send Data to the server to draw it in all other canvases
  
  dataServer.publish({
    channel: channelName,
    message: {
      x: mouseX,
      y: mouseY,
      r: 255,
      g: 0,
      b: 255
    },
  });
}

function readIncoming(inMessage) {
  if (inMessage.channel == channelName) {

   x = inMessage.message.x 
   y = inMessage.message.y
   who = inMessage.publisher;
   let r = inMessage.message.r;
   let g = inMessage.message.g;
   let b = inMessage.message.b;


   var newinput = true;
   console.log(cursors);

      for(var i = 0; i<cursors.length;i++) {
        if(who==cursors[i].who) {

          cursors[i].x = x;
          cursors[i].y = y;
          cursors[i].who = who;
          newinput = false;   
        }
      }
      if(newinput) {
        cursors.push( new allCursors(x,y,who, r, g, b));
      }
  }
}
function allCursors(x,y,who, r, g, b){
 
  this.x = x;
  this.y = y;
  this.who = who;
  this.r = r;
  this.g = g;
  this.b = b;
  
}

