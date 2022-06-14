/**
 * Written for UTSC New Media in Theory
 * Parts of this code is adapted from Nick Puckett & Kate Hartman's Creation & Computation PubNub Code
 * 
 * 
 * This code shows all of the cursors from the active users online. The cursors are show in real time on a local server. 
*/

let dataServer;
let pubKey = "pub-c-3f2a3432-47d8-414c-a605-4c9e42f7e6e5";
let subKey = "sub-c-bb8ed550-72ad-4edc-a9f8-38f55157dec6";
let secretKey = "sec-c-ZWI1OGZiNGMtYmVjYi00ZjVjLWI2OTctYTYyOWEzMDA2ZmY0";

// channel name is the "room" that you will all be chatting in (think about it like a group chat)
let channelName = "showCursors";
let cursors = [];

let x;
let y;
let who; 

let refresh = 100;
let lastRefresh = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // initialize our PubNub Server
  dataServer = new PubNub({
    subscribeKey: subKey,
    publishKey: pubKey,
    uuid: "Olivia",
    secretKey: "secretKey",
    heartbeatInterval: 0,
  });

  // listen for messages coming through the subcription feed on this specific channel. 
  dataServer.addListener({ message: readIncoming});
  dataServer.subscribe({ channels: [channelName] });

  // create a new JSON object to store our data
  new allCursors(mouseX,mouseY,dataServer.getUUID())
}

function draw() {

  background(255);

  if (millis() - lastRefresh > refresh )  { 
    // millis is the microseconds since the code started. We take a snapshot of a moment in time and the subtract that from the current time. We refresh this value every time the timer goes off.
    sendTheMessage(); // send the message with the cursor location every 100ms. 
    lastRefresh = millis();
  }

  for (let i = 0; i < cursors.length; i++) { // loop through all the cursors and show them on the page
    stroke(0);
    strokeWeight(1);
    // draw a small crosshair
    line(cursors[i].x,cursors[i].y-5,cursors[i].x,cursors[i].y+5);
    line(cursors[i].x-5,cursors[i].y,cursors[i].x+5,cursors[i].y);
    }
}

/// PubNub logic below
function sendTheMessage() {
  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
    channel: channelName,
    message: {
      x: mouseX,
      y: mouseY,
    },
  });
}

function readIncoming(inMessage) {
  // when new data comes in it triggers this function,
  // we call this function in the setup

  /*since an App can have many channels, we ensure that we are listening
  to the correct channel */

  if (inMessage.channel == channelName) {

   x = inMessage.message.x // get the mouseX value from the other people
   y = inMessage.message.y // get the mouseY value from the other people
   who = inMessage.publisher; // who sent the message

 //  console.log(inMessage); //logging for information

   let newinput = true; // we are checking to see if this person who sent the message is already on the page. 

      for(let i = 0; i<cursors.length;i++) { // loop through all the IDs that have sent us messages before
        if(who==cursors[i].who) { // if who is already in our array, update the x & y values
          cursors[i].x = x;
          cursors[i].y = y;
          newinput = false;    // set the boolean to false since this is not a new user
        }
      }
      if(newinput) { // if this is a new user, create a new JSON object that we add to our array
        cursors.push(new allCursors(x,y, who));
      }
  }
}
function allCursors(x,y,who){ // creates a new JSON object for us
 
  this.x = x; // this is shorthand for saying "this object"
  this.y = y;
  this.who = who;

}

