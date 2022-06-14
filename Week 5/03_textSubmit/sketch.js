
/**
 * Written for UTSC New Media in Theory
 * Parts of this code is adapted from Nick Puckett & Kate Hartman's Creation & Computation PubNub Code
 * 
 * This code uses an input to send a value to PubNub and then prints it on all active users screens. 
*/

var dataServer;
var pubKey = "pub-c-3f2a3432-47d8-414c-a605-4c9e42f7e6e5";
var subKey = "sub-c-bb8ed550-72ad-4edc-a9f8-38f55157dec6";
var secretKey = "sec-c-ZWI1OGZiNGMtYmVjYi00ZjVjLWI2OTctYTYyOWEzMDA2ZmY0";

//input variables for the form to PubNub
var sendText;
var sendButton;

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "sayStuff";

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

  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming, presence: whoisconnected });
  dataServer.subscribe({ channels: [channelName] });

  textAlign(CENTER);
  
  //create the text fields for the message to be sent
  sendText = createInput();
  sendText.position((windowWidth/2) - 100, windowHeight *0.8);

  sendButton = createButton("Send a message");
  sendButton.position(sendText.x + sendText.width, windowHeight * 0.8);
  sendButton.mousePressed(sendTheMessage);
}

function draw() {

  // nothing happens here!

}

function sendTheMessage() {
  dataServer.publish({
    channel: channelName,
    message: {
      messageText: sendText.value(), //get the value from the text box and send it as part of the message
    },
  });
}

function readIncoming(inMessage) {
  
  if (inMessage.channel == channelName) {

    if(inMessage.publisher == "Olivia") { 
      background(255);
      noStroke();
      fill(0); 
      textSize(80);
      text(inMessage.message.messageText, windowWidth/2, windowHeight/ 2); // write the message in the middle of the screen!
    }
  }
}

function whoisconnected(connectionInfo) {}
