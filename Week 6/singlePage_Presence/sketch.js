

let dataServer;
let pubKey = "pub-c-3f2a3432-47d8-414c-a605-4c9e42f7e6e5";
let subKey = "sub-c-bb8ed550-72ad-4edc-a9f8-38f55157dec6";
let secretKey = "sec-c-ZWI1OGZiNGMtYmVjYi00ZjVjLWI2OTctYTYyOWEzMDA2ZmY0";

let occupancy = 0; 


let channelName = "presenceTest";

  
function setup() {

    createCanvas(windowWidth, windowHeight);

    dataServer = new PubNub({
      subscribeKey: subKey,
      publishKey: pubKey,
      uuid: "Yoyo",
      secretKey: secretKey,
      heartbeatInterval: 0,
    });
    dataServer.subscribe({ channels: [channelName],   withPresence: true });
    // listen for messages coming through the subcription feed on this specific channel. 
    dataServer.addListener({ message: readIncoming, presence: whoisconnected });
   
  
  }
  
function draw() {
  background(255);
  textSize(80);
  textAlign(CENTER);
  fill(255,0,255);

 if (occupancy > 0) {

  text("There are " +  occupancy + " people online", windowWidth/2, windowHeight/2);

 } else {

  text("There is no one online", windowWidth/2, windowHeight/2);

 }
 
}
 

function mousePressed() {

  sendTheMessage();
}
  // PubNub logic below
function sendTheMessage() {
  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
    channel: channelName,
    message: {
      test: "test"
    },
  });
}

function readIncoming(inMessage) {
    if (inMessage.channel == channelName) {
        console.log(inMessage);
    }
}

function whoisconnected(connectionInfo) {
  console.log(connectionInfo);

  occupancy = connectionInfo.occupancy;

  console.log(occupancy);

  /* connnectionInfo.action == "join"*/
  /* connnectionInfo.action == "leave"*/

}