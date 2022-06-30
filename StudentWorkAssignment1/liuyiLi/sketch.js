
var img;
var song;

function preload(){
  song = loadSound("clock.m4a");
}
function setup() {
  createCanvas(1000,600);
  song.loop();
}


function draw() {
  background (256);
  strokeWeight(2);
  stroke(139,0,0);
  fill(256);
  ellipse(200,200,160,160);
  
strokeWeight(0);
stroke(139,0,0);
fill(139,0,0);
ellipse(200,200,120,120);

  

  
strokeWeight(4);
stroke(139,0,0);
fill(0);
line(160,280,160,100);

strokeWeight(2);
stroke(139,0,0);
fill(0);
line(230,310,230,140);


strokeWeight(2);
stroke(139,0,0);
fill(0);
line(180,320,180,120);
  

strokeWeight(3);
stroke(139,0,0);
fill(0);
line(260,266,120,266);  



  
strokeWeight(0);
stroke(0);
fill(238,230,0);
ellipse(230,130,40,40);
  

strokeWeight(0);
stroke(0);
fill(139,0,0);
ellipse(160,90,40,40);
  
strokeWeight(0);
stroke(0);
fill(139,0,0);
ellipse(240,300,50,50);
  

fill(256);
strokeWeight(1);
stroke(256);
ellipse(200,200,10,10);

fill(238,230,0);
strokeWeight(0);
stroke(0);
triangle(130,180,160,170,160,190);

fill(238,230,0);
strokeWeight(0);
stroke(0);
triangle(200,265,190,295,180,265);
  
  let hr = hour();
  let mn = minute();
  let sc = second();

  theta = (sc-15) / 60 * 2 * Math.PI
  strokeWeight(1);
  stroke(256);
  line(200,200,200+60*cos(theta), 200 + 60*sin(theta))
  
  theta2 = (mn-15) / 60 * 2 * Math.PI
  strokeWeight(4);
  stroke(256);
  line(200,200,200+50*cos(theta2), 200 + 50*sin(theta2))
  
  theta3 = (hr-15) / 12 * 2 * Math.PI
  strokeWeight(6);
  stroke(256);
  line(200,200,200+40*cos(theta3), 200 + 40*sin(theta3))


  
strokeWeight(2);
stroke(238,230,0);
fill(256);
ellipse(420,260,70,70);  
  
strokeWeight(2);
stroke(33,91,159);
fill(238,230,0);
ellipse(420,260,50,50);


  
fill(256);
strokeWeight(2);
stroke(238,230,0);
quad(360,180,460,80,560,180,460,280);
  
strokeWeight(2);
stroke(238,230,0);
fill(0);
line(500,300,500,80); 
  
strokeWeight(2);
stroke(238,230,0);
fill(0);
line(520,320,520,100); 
  
strokeWeight(2);
stroke(238,230,0);
fill(0);
line(380,120,490,120); 
  
strokeWeight(2);
stroke(238,230,0);
fill(0);
line(360,140,510,140);
  
fill(33,91,159);
strokeWeight(2);
stroke(238,230,0);
quad(360,200,460,100,560,200,460,300);
  
strokeWeight(2);
stroke(33,91,159);
fill(238,230,0);
ellipse(460,200,110,110);

  
  theta4 = (sc-15) / 60 * 2 * Math.PI
  strokeWeight(1);
  stroke(33,91,159);
  line(460,200,460+50*cos(theta4), 200 + 50*sin(theta4))
  
  theta5 = (mn-15) / 60 * 2 * Math.PI
  strokeWeight(4);
  fill(0);
  line(460,200,460+40*cos(theta5), 200 + 40*sin(theta5))
  
  theta6 = (hr-8) / 12 * 2 * Math.PI
  strokeWeight(6);
  fill(0);
  line(460,200,460+30*cos(theta6), 200 + 30*sin(theta6))

fill(188,40,0);
strokeWeight(0);
stroke(0);
quad(350,410,370,370,470,400,450,490);
  
fill(188,40,0);
strokeWeight(0);
stroke(0);
quad(560,410,540,370,440,400,450,490);
  
fill(188,40,0);
strokeWeight(0);
stroke(0);
quad(405,340,500,340,470,450,450,490);
  
fill(188,40,0);
strokeWeight(0);
stroke(0);
triangle(405,340,425,320,445,340); 
  
fill(188,40,0);
strokeWeight(0);
stroke(0);
triangle(435,340,455,310,475,340);
  
fill(188,40,0);
strokeWeight(0);
stroke(0);
triangle(465,340,485,320,500,340);
  
fill(188,40,0);
strokeWeight(0);
stroke(0);
triangle(330,390,360,418,390,380);
  
fill(188,40,0);
strokeWeight(0);
stroke(0);
triangle(340,370,360,398,380,370);
  
fill(188,40,0);
strokeWeight(0);
stroke(0);
triangle(540,370,550,400,560,370);
  
fill(188,40,0);
strokeWeight(0);
stroke(0);
triangle(550,390,560,410,570,390);
  
fill(188,40,0);
strokeWeight(0);
stroke(0);
quad(400,400,500,480,400,480,500,400);
  
  theta7 = (sc-15) / 60 * 2 * Math.PI
  strokeWeight(1);
  stroke(256);
  line(460,420,460+50*cos(theta7), 420 + 50*sin(theta7))
  
  theta8 = (mn-15) / 60 * 2 * Math.PI
  strokeWeight(4);
  fill(0);
  line(460,420,460+40*cos(theta8), 420 + 40*sin(theta8))
  
  theta9 = (hr-15) / 12 * 2 * Math.PI
  strokeWeight(6);
  fill(0);
  line(460,420,460+30*cos(theta9), 420 + 30*sin(theta9))
  
fill(256);
strokeWeight(2);
stroke(0);
quad(100,360,300,360,300,480,100,480);
  
fill(150,0,0);
strokeWeight(0);
stroke(0);
ellipse(80,400,30,30);
  
fill(150,0,0);
strokeWeight(0);
stroke(0);
ellipse(320,440,30,30);
  
fill(0,0,139);
strokeWeight(0);
stroke(0);
ellipse(140,340,30,30);
  
fill(0,0,139);
strokeWeight(0);
stroke(0);
ellipse(260,500,30,30);
  
strokeWeight(2);
stroke(0);
fill(0);
line(320,440,260,500); 
  
strokeWeight(2);
stroke(0);
fill(0);
line(80,400,140,340); 
  
   theta10 = (sc-15) / 60 * 2 * Math.PI
  strokeWeight(1);
  stroke(0);
  line(200,420,200+60*cos(theta10), 420 + 60*sin(theta10))
  
  theta11 = (mn-15) / 60 * 2 * Math.PI
  strokeWeight(4);
  fill(0);
  line(200,420,200+50*cos(theta11), 420 + 50*sin(theta11))
  
  theta12 = (hr-14) / 12 * 2 * Math.PI
  strokeWeight(6);
  stroke(139,0,0);
  line(200,420,200+40*cos(theta12), 420 + 40*sin(theta12))
  
fill(256);
strokeWeight(2);
stroke(0);
ellipse(200,420,10,10);
  
  
  
  

fill(0);
noStroke();
textSize(30);  
textFont('Georgia');
text (hr + ":" + mn +":"+sc,500,40);

  theta13 = (sc-15) / 60 * 2 * Math.PI
  strokeWeight(1);
  stroke(0);
  line(800,280,800+90*cos(theta13), 280 + 90*sin(theta13))
  
  theta14 = (mn-15) / 60 * 2 * Math.PI
  strokeWeight(4);
  fill(0);
  line(800,280,800+80*cos(theta14), 280 + 80*sin(theta14))
  
  theta15 = (hr-15) / 12 * 2 * Math.PI
  strokeWeight(6);
  stroke(0);
  line(800,280,800+60*cos(theta15), 280 + 60*sin(theta15))

  fill(0);
noStroke();
textSize(30);  
textFont('Georgia');
text ("1100",770,100);
  
  fill(0);
noStroke();
textSize(15);  
textFont('Georgia');
text ("2",834,100);
  
  fill(0);
noStroke();
textSize(30);  
textFont('Georgia');
text ("3!",790,480);

  fill(0);
noStroke();
textSize(15);  
textFont('Georgia');
text ("Round(II)",920,280);
  
  fill(0);
noStroke();
textSize(20);  
textFont('Georgia');
text ("3x3",650,280);
  
  fill(0);
noStroke();
textSize(20);  
textFont('Georgia');
text ("tan45",860,160);
  
  fill(0);
noStroke();
textSize(20);  
textFont('Georgia');
text ("√4",900,220);
  
  fill(0);
noStroke();
textSize(20);  
textFont('Georgia');
text ("Ln(55)",900,350);
  
  fill(0);
noStroke();
textSize(20);  
textFont('Georgia');
text ("X = 3 + 4 ",860,420);
  
  fill(0);
noStroke();
textSize(10);  
textFont('Georgia');
text ("2 ",875,410);
  
   fill(0);
noStroke();
textSize(10);  
textFont('Georgia');
text ("2 ",908,410);
  
  fill(0);
noStroke();
textSize(10);  
textFont('Georgia');
text ("2 ",942,410);
  
  
  fill(0);
noStroke();
textSize(30);  
textFont('Georgia');
text ("6.9",720,420);
  
  fill(0);
noStroke();
textSize(30);  
textFont('Georgia');
text ("_",745,395);
  
   fill(0);
noStroke();
textSize(25);  
textFont('Georgia');
text ("16/2",680,360);
  
  fill(0);
noStroke();
textSize(20);  
textFont('Georgia');
text ("g",680,220);
  
  fill(0);
noStroke();
textSize(30);  
textFont('Georgia');
text ("Ob",710,160);


}