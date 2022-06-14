

let dataServer;
let pubKey = "pub-c-3f2a3432-47d8-414c-a605-4c9e42f7e6e5";
let subKey = "sub-c-bb8ed550-72ad-4edc-a9f8-38f55157dec6";
let secretKey = "sec-c-ZWI1OGZiNGMtYmVjYi00ZjVjLWI2OTctYTYyOWEzMDA2ZmY0";

let occupancy = 0; 

let channelName = "presenceTest";

let allowMessage = false;

  
function setup() {

    createCanvas(windowWidth, windowHeight);

    dataServer = new PubNub({
      subscribeKey: subKey,
      publishKey: pubKey,
      uuid: "Your Name Here",
      secretKey: secretKey,
      heartbeatInterval: 0,
    });

     // listen for messages coming through the subcription feed on this specific channel. 

    dataServer.subscribe({ channels: [channelName],   withPresence: true });
    dataServer.addListener({ message: readIncoming, presence: whoisconnected });
   
  
  }
  
function draw() {
 
 // make something visible for more people 
 background(255);

 if (occupancy > 10) {
  background(255);
  text("wait for someone to leave", windowWidth/2, windowHeight/2);

  allowMessage = false;

 } else if (occupancy > 1) {

  sendTheMessage();
  allowMessage = true;
  
 } else {
  background(255);
  text("wait for someone else to join", windowWidth/2, windowHeight/2); 
  allowmessage = false;

  }
}
  // PubNub logic below
function sendTheMessage() {
  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
    channel: channelName,
    message: {
      x: mouseX,
      y: mouseY
    },
  });
}

function readIncoming(inMessage) {

  if (allowMessage == true) { // if there is less than 10 people on the page draw circles then show the messages that are sent. 
 
    if (inMessage.channel == channelName) {
        console.log(inMessage);
    }

    noStroke();
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(inMessage.message.x, inMessage.message.y, 50, 50);

  } 
}

function whoisconnected(connectionInfo) {
  console.log(connectionInfo);

  occupancy = connectionInfo.occupancy;

  console.log(occupancy);

}