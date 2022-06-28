let bg;
let buttonOne;
let buttonTwo;
let buttonThree;
let img;
let imgTwo;
let imgthree;
let imgFour;
let imgFive;
let imgSix;
let imgSeven;
let imgEight;
let imgTen;
let imgEleven;
let imgTwelve;
let imgThirteen;
let imgFourteen;
let imgFifteen;
let imgSixteen;
let imgSeventeen;
let imgEighteen;
let imgNineTeen;
let imgTwenty;
let imgTwentyone;
let imgTwentytwo;
let imgTwentythree;
let imgTwentyfour;
let imgTwentyfive;
let imgTwentysix;
let imgTwentyseven;
/*
let imgTwentyeight;
let imgTwentynine;
let imgThirty;
let imgThirtyone;
let imgThritytwo;
let imgThritythree;
let imgThrityfour;
let imgThirtyfive;
let imgThirtysix;
let imgThirtyseven;
let imgThirtyeight;
let imgThirtynine;
let imgFourty;
let imgFourtyone;
let imgFourtytwo;
let imgFourtythree;
let imgFourtyfour;
let imgFourtyfive;
let imgFourtysix;
let imgFourtyseven;
let imgFourtyeight;
let imgFourtynine;
let imgFifty;
let imgFiftyone;
let imgFiftytwo;
let imgFiftythree;
let imgFiftyfour;
let imgFiftyfive;
let imgFiftysix;
let imgFiftyseven;
let imgFiftyeight;
let imgFiftynine;
let imgSixty;
let imgSixtyone;
let imgSixtytwo;
let imgSixtythree;
let imgSixtyfour;
let imgSixtyfive;
let imgSixtysix;
let imgSixtyseven;
let imgSixtyeight;
let imgSixtynine;
let imgSeventy;
let imgSeventyone;
let imgSeventytwo;
let imgSeventythree;
let imgSeventyfour;
let imgSeventyfive;
let imgSeventysix;
let imgSeventyseven;
let imgSeventyeight;
let imgSeventynine;
let imgEighty;
let imgEightyone;
let imgEightytwo;
let imgEightythree;
let imgEightyfour;
let imgEightyfive;
let imgEightysix;
let imgEightyseven;
let imgEightyeight;
let imgEightynine;
let imgNinety;
let imgNinetyone;
let imgNinetytwo;
let imgNinetythree;
let imgNinetyfour;
let imgNinetyfive;
let imgNinetysix;
let imgNinetyseven;
let imgNinetyeight;
let imgNinetynine;
let imgOnehundred;
let imgOnehundredone;
let imgOnehundredtwo;
let imgOnehundredthree;
let imgOnehundredfour;
let imgOnehundredfive;
let imgOnehundredsix;
let imgOnehundredseven;
let imgOnehundredeight;
let imgOnehundrednine;
let imgOnehundredten;
let imgOnehundredeleven;
let imgOnehundredtwelve;
let imgOnehundredthirteen;
let imgOnehundredfourteen;
let imgOnehundredfifteen;
let imgOnehundredsixteen;
let imgOnehundredseventeen;
let imgOnehundredeighteen;
let imgOnehundrednineteen;
let imgOnehundredtwenty;
let imgOnehundredtwentyone;
let imgOnehundredtwentytwo;
let imgOnehundredtwentythree;
let imgOnehundredtwentyfour;
let imgOnehundredtwentyfive;
let imgOnehundredtwentysix;
let imgOnehundredtwentyseven;
let imgOnehundredtwentyeight;
let imgOnehundredtwentynine;
let imgOnehundredthirty;
let imgOnehundredthirtyone;
let imgOnehundredthirtytwo;
let imgOnehundredthirtythree;
let imgOnehundredthirtyfour;
let imgOnehundredthirtyfive;
let imgOnehundredthirtysix;
let imgOnehundredthirtyseven;
let imgOnehundredthirtyeight;
let imgOnehundredthirtynine;
let imgOnehundredfourty;
let imgOnehundredfourtyone;
let imgOnehundredfourtytwo;
let imgOnehundredfourtythree;
let imgOnehundredfourtyfour;
let imgOnehundredfourtyfive;
let imgOnehundredfourtysix;
let imgOnehundredfourtyseven;
let imgOnehundredfourtyeight;
let imgOnehundredfourtynine;
let imgOnehundredfifty;
*/
let lastButton;


function preload() {
  bg = loadImage("Map of Canada 01 Artboard 1.jpg");
  img = createImg("Tr1png.png", "Image1");
  img.position(500, 425);
  img.size(300, 300);
  img.hide();
  
  imgTwo= createImg("TAlberta2.png", "Image2");
  imgTwo.position(527, 362);
  imgTwo.size(300, 300);
  imgTwo.hide();
  
   imgThree= createImg("TSas.png", "Image3");
  imgThree.position(625, 410);
  imgThree.size(300, 300);
  imgThree.hide();
  
   imgFour= createImg("TOn1 01 Artboard 1.png", "Image4");
  imgFour.position(835, 430);
  imgFour.size(300, 300);
  imgFour.hide();
  

   imgFive= createImg("TON 01 Artboard 1.png", "Image5");
  imgFive.position(875, 480);
  imgFive.size(300, 300);
  imgFive.hide();
  
  
   imgSix= createImg("TQ 01 Artboard 1.png", "Image6");
  imgSix.position(970, 400);
  imgSix.size(300, 300);
  imgSix.hide();
  
  
   imgSeven= createImg("TQ2 01 Artboard 1.png", "Image7");
  imgSeven.position(910, 340);
  imgSeven.size(300, 300);
  imgSeven.hide();
  
  
   imgEight= createImg("TMan 01 Artboard 1.png", "Image8");
  imgEight.position(730, 390);
  imgEight.size(300, 300);
  imgEight.hide();
  
  imgNine= createImg("TMan2 01 Artboard 1.png", "Image9");
  imgNine.position(710, 460);
  imgNine.size(300, 300);
  imgNine.hide();
  
  imgTen= createImg("TNS 01 Artboard 1.png", "Image10");
  imgTen.position(1010, 520);
  imgTen.size(300, 300);
  imgTen.hide();
  
  imgEleven= createImg("TNS2 01 Artboard 1.png", "Image11");
  imgEleven.position(1040, 505);
  imgEleven.size(300, 300);
  imgEleven.hide();
  
  imgTwelve= createImg("TNB 01 Artboard 1.png", "Image12");
  imgTwelve.position(990, 790);
  imgTwelve.size(300, 300);
  imgTwelve.hide();
  
  imgThirteen= createImg("TBC3 01 Artboard 1.png", "Image13");
  imgThirteen.position(430, 350);
  imgThirteen.size(300, 300);
  imgThirteen.hide();
  
  imgFourteen= createImg("TNFL01 01 Artboard 1.png", "Image14");
  imgFourteen.position(1010, 360);
  imgFourteen.size(300, 300);
  imgFourteen.hide();
  
  imgFifteen= createImg("WOn1 01 Artboard 1.png", "Image15");
  imgFifteen.position(910, 420);
  imgFifteen.size(300, 300);
  imgFifteen.hide();
  
  imgSixteen= createImg("WOn2 01 Artboard 1.png", "Image16");
  imgSixteen.position(890, 490);
  imgSixteen.size(300, 300);
  imgSixteen.hide();
  
  imgSeventeen= createImg("Wman  01 Artboard 1.png", "Image17");
  imgSeventeen.position(735, 370);
  imgSeventeen.size(300, 300);
  imgSeventeen.hide();
  
  imgEighteen= createImg("Wman2 01 Artboard 1.png", "Image18");
  imgEighteen.position(690, 450);
  imgEighteen.size(300, 300);
  imgEighteen.hide();
  
  
  imgNineteen= createImg("WA 01 Artboard 1.png", "Image19");
  imgNineteen.position(540, 375);
  imgNineteen.size(300, 300);
  imgNineteen.hide();
  
  
  imgTwenty= createImg("WA 01 Artboard 2.png", "Image20");
  imgTwenty.position(540, 420);
  imgTwenty.size(300, 300);
  imgTwenty.hide();
  
  
  imgTwentyone= createImg("WBC 01 Artboard 1.png", "Image21");
  imgTwentyone.position(450, 390);
  imgTwentyone.size(300, 300);
  imgTwentyone.hide();
  

  imgTwentytwo= createImg("MOn 01 Artboard 1.png", "Image22");
  imgTwentytwo.position(880, 465);
  imgTwentytwo.size(300, 300);
  imgTwentytwo.hide();
  
  imgTwentythree= createImg("MSa 01 Artboard 1.png", "Image23");
  imgTwentythree.position(650, 435);
  imgTwentythree.size(300, 300);
  imgTwentythree.hide();
  
  
  imgTwentyfour= createImg("MAl1 01 Artboard 1.png", "Image24");
  imgTwentyfour.position(520, 380);
  imgTwentyfour.size(300, 300);
  imgTwentyfour.hide();
  
  imgTwentyfive= createImg("MA2 01 Artboard 1.png", "Image25");
  imgTwentyfive.position(525, 440);
  imgTwentyfive.size(300, 300);
  imgTwentyfive.hide();
  
  imgTwentysix= createImg("MBC 01 Artboard 1.png", "Image26");
  imgTwentysix.position(435, 400);
  imgTwentysix.size(300, 300);
  imgTwentysix.hide();
  /*
  imgTwentyseven= createImg("TAlberta2.png", "Image2");
  imgTwentyseven.position(527, 362);
  imgTwentyseven.size(300, 300);
  imgTwentyseven.hide();
  
  imgTwentyeight= createImg("TAlberta2.png", "Image2");
  imgTwentyeight.position(527, 362);
  imgTwentyeight.size(300, 300);
  imgTwentyeight.hide();
  
  imgTwentynine= createImg("TAlberta2.png", "Image2");
  imgTwentynine.position(527, 362);
  imgTwentynine.size(300, 300);
  imgTwentynine.hide();
  
  imgThirty= createImg("", "Image");
  imgThirty.position(527, 362);
  imgThirty.size(300, 300);
  imgThirty.hide();
  
  imgThirtyone= createImg("", "Image");
  imgThirtyone.position(527, 362);
  imgThirtyone.size(300, 300);
  imgThirtyone.hide();
  
  imgThirtytwo= createImg("", "Image");
  imgThirtytwo.position(527, 362);
  imgThirtytwo.size(300, 300);
  imgThirtytwo.hide();
  
  imgThirtytwo= createImg("", "Image");
  imgThirtytwo.position(527, 362);
  imgThirtytwo.size(300, 300);
  imgThirtytwo.hide();
  
  imgThirtythree= createImg("", "Image");
  imgThirtythree.position(527, 362);
  imgThirtythree.size(300, 300);
  imgThirtythree.hide();
  
  imgThirtyfour= createImg("", "Image");
  imgThirtyfour.position(527, 362);
  imgThirtyfour.size(300, 300);
  imgThirtyfour.hide();
  
  imgThirtyfive= createImg("", "Image");
  imgThirtyfive.position(527, 362);
  imgThirtyfive.size(300, 300);
  imgThirtyfive.hide();
  
  imgThirtysix= createImg("", "Image");
  imgThirtysix.position(527, 362);
  imgThirtysix.size(300, 300);
  imgThirtysix.hide();
  
  imgThirtyseven= createImg("", "Image");
  imgThirtyseven.position(527, 362);
  imgThirtyseven.size(300, 300);
  imgThirtyseven.hide();
  
  imgThirtyeight= createImg("", "Image");
  imgThirtyeight.position(527, 362);
  imgThirtyeight.size(300, 300);
  imgThirtyeight.hide();
  
  imgThirtynine= createImg("", "Image");
  imgThirtynine.position(527, 362);
  imgThirtynine.size(300, 300);
  imgThirtynine.hide();
  

   
  imgFourty= createImg("", "Image");
  imgFourty.position(527, 362);
  imgFourty.size(300, 300);
  imgFourty.hide();
  
    imgFourtyone= createImg("", "Image");
  imgFourtyone.position(527, 362);
  imgFourtyone.size(300, 300);
  imgFourty.hide();
  
    imgFourtytwo= createImg("", "Image");
  imgFourtytwo.position(527, 362);
  imgFourtytwo.size(300, 300);
  imgFourtytwo.hide();
  
    imgFourtythree= createImg("", "Image");
  imgFourtythree.position(527, 362);
  imgFourtythree.size(300, 300);
  imgFourtythree.hide();
  
    imgFourtyfour= createImg("", "Image");
  imgFourtyfour.position(527, 362);
  imgFourtyfour.size(300, 300);
  imgFourtyfour.hide();
  
    imgFourtyfive= createImg("", "Image");
  imgFourtyfive.position(527, 362);
  imgFourtyfive.size(300, 300);
  imgFourtyfive.hide();
  
    imgFourtysix= createImg("", "Image");
  imgFourtysix.position(527, 362);
  imgFourtysix.size(300, 300);
  imgFourtysix.hide();
  
    imgFourtyseven= createImg("", "Image");
  imgFourtyseven.position(527, 362);
  imgFourtyseven.size(300, 300);
  imgFourtyseven.hide();
  
    imgFourtyeight= createImg("", "Image");
  imgFourtyeight.position(527, 362);
  imgFourtyeight.size(300, 300);
  imgFourtyeight.hide();
  
    imgFourtynine= createImg("", "Image");
  imgFourtynine.position(527, 362);
  imgFourtynine.size(300, 300);
  imgFourtynine.hide();
  
   
  imgFifty= createImg("", "Image");
  imgFifty.position(527, 362);
  imgFifty.size(300, 300);
  imgFifty.hide();
  
    imgFiftyone= createImg("", "Image");
  imgFiftyone.position(527, 362);
  imgFiftyone.size(300, 300);
  imgFiftyone.hide();
  
     imgFiftytwo= createImg("", "Image");
  imgFiftytwo.position(527, 362);
  imgFiftytwo.size(300, 300);
  imgFiftytwo.hide();
  
     imgFiftythree= createImg("", "Image");
  imgFiftythree.position(527, 362);
  imgFiftythree.size(300, 300);
  imgFiftythree.hide();
  
     imgFiftyfour= createImg("", "Image");
  imgFiftyfour.position(527, 362);
  imgFiftyfour.size(300, 300);
  imgFiftyfour.hide();
  
     imgFiftyfive= createImg("", "Image");
  imgFiftyfive.position(527, 362);
  imgFiftyfive.size(300, 300);
  imgFiftyfive.hide();
  
     imgFiftysix= createImg("", "Image");
  imgFiftysix.position(527, 362);
  imgFiftysix.size(300, 300);
  imgFiftysix.hide();
  
     imgFiftyseven= createImg("", "Image");
  imgFiftyseven.position(527, 362);
  imgFiftyseven.size(300, 300);
  imgFiftyseven.hide();
  
     imgFiftyeight= createImg("", "Image");
  imgFiftyeight.position(527, 362);
  imgFiftyeight.size(300, 300);
  imgFiftyeight.hide();
  
     imgFiftynine= createImg("", "Image");
  imgFiftynine.position(527, 362);
  imgFiftynine.size(300, 300);
  imgFiftynine.hide();
  
   
  imgSixty= createImg("", "Image");
  imgSixty.position(527, 362);
  imgSixty.size(300, 300);
  imgSixty.hide();
  
   imgSixtyone= createImg("", "Image");
  imgSixtyone.position(527, 362);
  imgSixtyone.size(300, 300);
  imgSixtyone.hide();
  
   imgSixtytwo= createImg("", "Image");
  imgSixtytwo.position(527, 362);
  imgSixtytwo.size(300, 300);
  imgSixtytwo.hide();
  
   imgSixtythree= createImg("", "Image");
  imgSixtythree.position(527, 362);
  imgSixtythree.size(300, 300);
  imgSixtythree.hide();
  
   imgSixtyfour= createImg("", "Image");
  imgSixtyfour.position(527, 362);
  imgSixtyfour.size(300, 300);
  imgSixtyfour.hide();
  
   imgSixtyfive= createImg("", "Image");
  imgSixtyfive.position(527, 362);
  imgSixtyfive.size(300, 300);
  imgSixtyfive.hide();
  
   imgSixtysix= createImg("", "Image");
  imgSixtysix.position(527, 362);
  imgSixtysix.size(300, 300);
  imgSixtysix.hide();
  
   imgSixtyseven= createImg("", "Image");
  imgSixtyseven.position(527, 362);
  imgSixtyseven.size(300, 300);
  imgSixtyseven.hide();
  
   imgSixtyeight= createImg("", "Image");
  imgSixtyeight.position(527, 362);
  imgSixtyeight.size(300, 300);
  imgSixtyeight.hide();
  
   imgSixtynine= createImg("", "Image");
  imgSixtynine.position(527, 362);
  imgSixtynine.size(300, 300);
  imgSixtynine.hide();
  
  
  imgSeventy= createImg("", "Image");
  imgSeventy.position(527, 362);
  imgSeventy.size(300, 300);
  imgSeventy.hide();
  
  imgSeventyone= createImg("", "Image");
  imgSeventyone.position(527, 362);
  imgSeventyone.size(300, 300);
  imgSeventyone.hide();
  
  imgSeventytwo= createImg("", "Image");
  imgSeventytwo.position(527, 362);
  imgSeventytwo.size(300, 300);
  imgSeventytwo.hide();
  
  imgSeventythree= createImg("", "Image");
  imgSeventythree.position(527, 362);
  imgSeventythree.size(300, 300);
  imgSeventythree.hide();
  
  imgSeventyfour= createImg("", "Image");
  imgSeventyfour.position(527, 362);
  imgSeventyfour.size(300, 300);
  imgSeventyfour.hide();
  
  imgSeventyfive= createImg("", "Image");
  imgSeventyfive.position(527, 362);
  imgSeventyfive.size(300, 300);
  imgSeventyfive.hide();
  
  imgSeventysix= createImg("", "Image");
  imgSeventysix.position(527, 362);
  imgSeventysix.size(300, 300);
  imgSeventysix.hide();
  
  imgSeventyseven= createImg("", "Image");
  imgSeventyseven.position(527, 362);
  imgSeventyseven.size(300, 300);
  imgSeventyseven.hide();
  
  imgSeventyeight= createImg("", "Image");
  imgSeventyeight.position(527, 362);
  imgSeventyeight.size(300, 300);
  imgSeventyeight.hide();
  
  imgSeventynine= createImg("", "Image");
  imgSeventynine.position(527, 362);
  imgSeventynine.size(300, 300);
  imgSeventynine.hide();
  
  imgEighty= createImg("", "Image");
  imgEighty.position(527, 362);
  imgEighty.size(300, 300);
  imgEighty.hide();
  
   imgEightyone= createImg("", "Image");
  imgEightyone.position(527, 362);
  imgEightyone.size(300, 300);
  imgEightyone.hide();
  
   imgEightytwo= createImg("", "Image");
  imgEightytwo.position(527, 362);
  imgEightytwo.size(300, 300);
  imgEightytwo.hide();
  
   imgEightythree= createImg("", "Image");
  imgEightythree.position(527, 362);
  imgEightythree.size(300, 300);
  imgEightythree.hide();
  
   imgEightytfour= createImg("", "Image");
  imgEightyfour.position(527, 362);
  imgEightyfour.size(300, 300);
  imgEightyfour.hide();
  
   imgEightyfive= createImg("", "Image");
  imgEightyfive.position(527, 362);
  imgEightyfive.size(300, 300);
  imgEightyfive.hide();
  
   imgEightysix= createImg("", "Image");
  imgEightysix.position(527, 362);
  imgEightysix.size(300, 300);
  imgEightysix.hide();
  
   imgEightyseven= createImg("", "Image");
  imgEightyseven.position(527, 362);
  imgEightyseven.size(300, 300);
  imgEightyseven.hide();
  
   imgEightyeight= createImg("", "Image");
  imgEightyeight.position(527, 362);
  imgEightyeight.size(300, 300);
  imgEightyeight.hide();
  
   imgEightynine= createImg("", "Image");
  imgEightynine.position(527, 362);
  imgEightynine.size(300, 300);
  imgEightynine.hide();
  
  imgNinety= createImg("", "Image");
  imgNinety.position(527, 362);
  imgNinety.size(300, 300);
  imgNinety.hide();
  
    imgNinetyone= createImg("", "Image");
  imgNinetyone.position(527, 362);
  imgNinetyone.size(300, 300);
  imgNinetyone.hide();
  
  
    imgNinetytwo= createImg("", "Image");
  imgNinetytwo.position(527, 362);
  imgNinetytwo.size(300, 300);
  imgNinetytwo.hide();
  
  
    imgNinetythree= createImg("", "Image");
  imgNinetythree.position(527, 362);
  imgNinetythree.size(300, 300);
  imgNinetythree.hide();
  
  
    imgNinetyfour= createImg("", "Image");
  imgNinetyfour.position(527, 362);
  imgNinetyfour.size(300, 300);
  imgNinetyfour.hide();
  
    imgNinetyfive= createImg("", "Image");
  imgNinetyfive.position(527, 362);
  imgNinetyfive.size(300, 300);
  imgNinetyfive.hide();
  
    imgNinetysix= createImg("", "Image");
  imgNinetysix.position(527, 362);
  imgNinetysix.size(300, 300);
  imgNinetysix.hide();
  
    imgNinetyseven= createImg("", "Image");
  imgNinetyseven.position(527, 362);
  imgNinetyseven.size(300, 300);
  imgNinetyseven.hide();
  
    imgNinetyeight= createImg("", "Image");
  imgNinetyeight.position(527, 362);
  imgNinetyeight.size(300, 300);
  imgNinetyeight.hide();
  
    imgNinetynine= createImg("", "Image");
  imgNinetynine.position(527, 362);
  imgNinetynine.size(300, 300);
  imgNinetynine.hide();
  
  
  imgOnehundred= createImg("", "Image");
  imgOnehundred.position(527, 362);
  imgOnehundred.size(300, 300);
  imgOnehundred.hide();
  
  
  imgOnehundredone= createImg("", "Image");
  imgOnehundredone.position(527, 362);
  imgOnehundredone.size(300, 300);
  imgOnehundredone.hide();
  
  
  imgOnehundredtwo= createImg("", "Image");
  imgOnehundredtwo.position(527, 362);
  imgOnehundredtwo.size(300, 300);
  imgOnehundredtwo.hide();
  
  
  imgOnehundredthree= createImg("", "Image");
  imgOnehundredthree.position(527, 362);
  imgOnehundredthree.size(300, 300);
  imgOnehundredthree.hide();
  
  
  imgOnehundredfour= createImg("", "Image");
  imgOnehundredfour.position(527, 362);
  imgOnehundredfour.size(300, 300);
  imgOnehundredfour.hide();
  
  
  imgOnehundredfive= createImg("", "Image");
  imgOnehundredfive.position(527, 362);
  imgOnehundredfive.size(300, 300);
  imgOnehundredfive.hide();
  
  
  imgOnehundredsix= createImg("", "Image");
  imgOnehundredsix.position(527, 362);
  imgOnehundredsix.size(300, 300);
  imgOnehundredsix.hide();
  
  
  imgOnehundredseven= createImg("", "Image");
  imgOnehundredseven.position(527, 362);
  imgOnehundredseven.size(300, 300);
  imgOnehundredseven.hide();
  
  
  imgOnehundredeight= createImg("", "Image");
  imgOnehundredeight.position(527, 362);
  imgOnehundredeight.size(300, 300);
  imgOnehundredeight.hide();
  
  
  imgOnehundrednine= createImg("", "Image");
  imgOnehundrednine.position(527, 362);
  imgOnehundrednine.size(300, 300);
  imgOnehundrednine.hide();
  
  
  imgOnehundredten= createImg("", "Image");
  imgOnehundredten.position(527, 362);
  imgOnehundredten.size(300, 300);
  imgOnehundredten.hide();
  
  
  imgOnehundredeleven= createImg("", "Image");
  imgOnehundredeleven.position(527, 362);
  imgOnehundredeleven.size(300, 300);
  imgOnehundredeleven.hide();
  
  
  imgOnehundredtwelve= createImg("", "Image");
  imgOnehundredtwelve.position(527, 362);
  imgOnehundredtwelve.size(300, 300);
  imgOnehundredtwelve.hide();
  
  
  imgOnehundredthirteen= createImg("", "Image");
  imgOnehundredthirteen.position(527, 362);
  imgOnehundredthirteen.size(300, 300);
  imgOnehundredthirteen.hide();
  

  imgOnehundredfourteen= createImg("", "Image");
  imgOnehundredfourteen.position(527, 362);
  imgOnehundredfourteen.size(300, 300);
  imgOnehundredfourteen.hide();
  
  
  imgOnehundredfifteen= createImg("", "Image");
  imgOnehundredfifteen.position(527, 362);
  imgOnehundredfifteen.size(300, 300);
  imgOnehundredfifteen.hide();
  
  
  imgOnehundredsixteen= createImg("", "Image");
  imgOnehundredsixteen.position(527, 362);
  imgOnehundredsixteen.size(300, 300);
  imgOnehundredsixteen.hide();
  
  
  imgOnehundredseventeen= createImg("", "Image");
  imgOnehundredseventeen.position(527, 362);
  imgOnehundredseventeen.size(300, 300);
  imgOnehundredseventeen.hide();
  
  
  imgOnehundredeighteen= createImg("", "Image");
  imgOnehundredeighteen.position(527, 362);
  imgOnehundredeighteen.size(300, 300);
  imgOnehundredeighteen.hide();
  
  
  imgOnehundrednineteen= createImg("", "Image");
  imgOnehundrednineteen.position(527, 362);
  imgOnehundrednineteen.size(300, 300);
  imgOnehundrednineteen.hide();
  
  
  imgOnehundredTwenty= createImg("", "Image");
  imgOnehundredTwenty.position(527, 362);
  imgOnehundredTwenty.size(300, 300);
  imgOnehundredTwenty.hide();
  
  
    imgOnehundredTwentyone= createImg("", "Image");
  imgOnehundredTwentyone.position(527, 362);
  imgOnehundredTwentyone.size(300, 300);
  imgOnehundredTwentyone.hide();
  
    imgOnehundredTwentytwo= createImg("", "Image");
  imgOnehundredTwentytwo.position(527, 362);
  imgOnehundredTwentytwo.size(300, 300);
  imgOnehundredTwentytwo.hide();
  
    imgOnehundredTwentythree= createImg("", "Image");
  imgOnehundredTwentythree.position(527, 362);
  imgOnehundredTwentythree.size(300, 300);
  imgOnehundredTwentythree.hide();
  
    imgOnehundredTwentyfour= createImg("", "Image");
  imgOnehundredTwentyfour.position(527, 362);
  imgOnehundredTwentyfour.size(300, 300);
  imgOnehundredTwentyfour.hide();
  
    imgOnehundredTwentyfive= createImg("", "Image");
  imgOnehundredTwentyfive.position(527, 362);
  imgOnehundredTwentyfive.size(300, 300);
  imgOnehundredTwentyfive.hide();
  
    imgOnehundredTwentysix= createImg("", "Image");
  imgOnehundredTwentysix.position(527, 362);
  imgOnehundredTwentysix.size(300, 300);
  imgOnehundredTwentysix.hide();
  
    imgOnehundredTwentyseven= createImg("", "Image");
  imgOnehundredTwentyseven.position(527, 362);
  imgOnehundredTwentyseven.size(300, 300);
  imgOnehundredTwentyseven.hide();
  
    imgOnehundredTwentyeight= createImg("", "Image");
  imgOnehundredTwentyeight.position(527, 362);
  imgOnehundredTwentyeight.size(300, 300);
  imgOnehundredTwentyeight.hide();
  
    imgOnehundredTwentynine= createImg("", "Image");
  imgOnehundredTwentynine.position(527, 362);
  imgOnehundredTwentynine.size(300, 300);
  imgOnehundredTwentynine.hide();
  
  
  imgOnehundredThirty = createImg("", "Image");
  imgOnehundredThirty.position(527, 362);
  imgOnehundredThirty.size(300, 300);
  imgOnehundredThirty.hide();
  
  
    imgOnehundredThirtyone = createImg("", "Image");
  imgOnehundredThirtyone.position(527, 362);
  imgOnehundredThirtyone.size(300, 300);
  imgOnehundredThirtyone.hide();
  
    imgOnehundredThirtytwo = createImg("", "Image");
  imgOnehundredThirtytwo.position(527, 362);
  imgOnehundredThirtytwo.size(300, 300);
  imgOnehundredThirtytwo.hide();
  
    imgOnehundredThirtythree = createImg("", "Image");
  imgOnehundredThirtythree.position(527, 362);
  imgOnehundredThirtythree.size(300, 300);
  imgOnehundredThirtythree.hide();
  
    imgOnehundredThirtyfour = createImg("", "Image");
  imgOnehundredThirtyfour.position(527, 362);
  imgOnehundredThirtyfour.size(300, 300);
  imgOnehundredThirtyfour.hide();
  
    imgOnehundredThirtyfive = createImg("", "Image");
  imgOnehundredThirtyfive.position(527, 362);
  imgOnehundredThirtyfive.size(300, 300);
  imgOnehundredThirtyfive.hide();
  
    imgOnehundredThirtysix = createImg("", "Image");
  imgOnehundredThirtysix.position(527, 362);
  imgOnehundredThirtysix.size(300, 300);
  imgOnehundredThirtysix.hide();
  
    imgOnehundredThirtyseven = createImg("", "Image");
  imgOnehundredThirtyseven.position(527, 362);
  imgOnehundredThirtyseven.size(300, 300);
  imgOnehundredThirtyseven.hide();
  
    imgOnehundredThirtyeight = createImg("", "Image");
  imgOnehundredThirtyeight.position(527, 362);
  imgOnehundredThirtyeight.size(300, 300);
  imgOnehundredThirtyeight.hide();
  
    imgOnehundredThirtynine = createImg("", "Image");
  imgOnehundredThirtynine.position(527, 362);
  imgOnehundredThirtynine.size(300, 300);
  imgOnehundredThirtynine.hide();
  
  
  imgOnehundredFourty= createImg("", "Image");
  imgOnehundredFourty.position(527, 362);
  imgOnehundredFourty.size(300, 300);
  imgOnehundredFourty.hide();
  
   imgOnehundredFourtyone= createImg("", "Image");
  imgOnehundredFourtyone.position(527, 362);
  imgOnehundredFourtyone.size(300, 300);
  imgOnehundredFourtyone.hide();
  
   imgOnehundredFourtytwo= createImg("", "Image");
  imgOnehundredFourtytwo.position(527, 362);
  imgOnehundredFourtytwo.size(300, 300);
  imgOnehundredFourtytwo.hide();
  
   imgOnehundredFourtythree= createImg("", "Image");
  imgOnehundredFourtythree.position(527, 362);
  imgOnehundredFourtythree.size(300, 300);
  imgOnehundredFourtythree.hide();
  
   imgOnehundredFourtyfour= createImg("", "Image");
  imgOnehundredFourtyfour.position(527, 362);
  imgOnehundredFourtyfour.size(300, 300);
  imgOnehundredFourtyfour.hide();
  
   imgOnehundredFourtyfive= createImg("", "Image");
  imgOnehundredFourtyfive.position(527, 362);
  imgOnehundredFourtyfive.size(300, 300);
  imgOnehundredFourtyfive.hide();
  
   imgOnehundredFourtysix= createImg("", "Image");
  imgOnehundredFourtysix.position(527, 362);
  imgOnehundredFourtysix.size(300, 300);
  imgOnehundredFourtysix.hide();
  
   imgOnehundredFourtyseven= createImg("", "Image");
  imgOnehundredFourtyseven.position(527, 362);
  imgOnehundredFourtyseven.size(300, 300);
  imgOnehundredFourtyseven.hide();
  
   imgOnehundredFourtyeight= createImg("", "Image");
  imgOnehundredFourtyeight.position(527, 362);
  imgOnehundredFourtyeight.size(300, 300);
  imgOnehundredFourtyeight.hide();
  
   imgOnehundredFourtynine= createImg("", "Image");
  imgOnehundredFourtynine.position(527, 362);
  imgOnehundredFourtynine.size(300, 300);
  imgOnehundredFourtynine.hide();
  

  imgOnehundredFiftey= createImg("", "Image");
  imgOnehundredFiftey.position(527, 362);
  imgOnehundredFiftey.size(300, 300);
  imgOnehundredFiftey.hide();
  */
  
}
function setup() {
  createCanvas(1500, 1050);
  background(bg);
  buttonOne = createButton("1");
  buttonOne.position(225, 125);
  buttonOne.mousePressed(locationsPopupOne);
  buttonTwo = createButton("2");
  buttonTwo.position(225, 225);
  buttonTwo.mousePressed(locationsPopupTwo);
  buttonThree = createButton("3");
  buttonThree.position(225, 325);
  buttonThree.mousePressed(locationsPopupThree);
}
function locationsPopupOne() {
  resetDraw();
  noStroke();
  fill(255,0,0);
  ellipse(609, 725, 10);
   ellipse (636, 662, 10);
  ellipse (735, 710, 10);
   ellipse (945, 730, 10);
  ellipse(985, 780, 10);
   ellipse (1080, 700, 10);
  ellipse (1020, 640, 10);
   ellipse (840, 690, 10);
  ellipse(820, 760, 10);
   ellipse (1120, 820, 10);
  ellipse (1150, 805, 10);
   ellipse (1100, 1090, 10);
  ellipse(540, 650, 10);
   ellipse (1120, 660, 10);
  lastButton = 1;
}

function locationsPopupTwo() {
  resetDraw();
  noStroke();
  fill(255,0,0);
  ellipse(1020, 720, 10);
  ellipse(1000, 790, 10);
  ellipse(845, 670, 10);
  ellipse(800, 750, 10);
  ellipse(650, 675, 10);
  ellipse(650, 720, 10);
  ellipse(560, 690, 10);
  lastButton = 2;
}

function locationsPopupThree() {
  resetDraw();
  noStroke();
  fill(255,0,0);
  ellipse(990, 765, 10);
  ellipse(760, 735, 10);
  ellipse(630, 680, 10);
  ellipse(635, 740, 10);
  ellipse(545, 700, 10);
  lastButton = 3;
}

function resetDraw(){
  background(bg);
  fill(0);
  textSize(14);
  textFont("Georgia");
  text(
    "Transgender people can't use that washroom. They're a threat.",
    270,
    140
  );
  text("You should've seen her. She was asking for it.", 270, 240);
  text("Men can't experience that. Man up.", 270, 340);
}

function draw() {
  fill(0);
  textSize(14);
  textFont("Georgia");
  text(
    "Transgender people can't use that washroom. They're a threat.",
    270,
    140
  );
  text("You should've seen her. She was asking for it.", 270, 240);
  text("Men can't experience that. Man up.", 270, 340);
  if (lastButton == 1) {
    if (mouseX < 614 && mouseX > 604 && mouseY < 730 && mouseY > 720) 
    {
      img.show();
      } else {
      img.hide();}
      if (mouseX < 641 && mouseX > 631 && mouseY < 667 && mouseY > 657){ 
        imgTwo.show();
      } else {
      imgTwo.hide();
      }
    if (mouseX < 730 && mouseX > 720 && mouseY < 715 && mouseY > 705){ 
        imgThree.show();
      } else {
      imgThree.hide();
      }
    if (mouseX < 950 && mouseX > 940 && mouseY < 735 && mouseY > 725){ 
        imgFour.show();
      } else {
      imgFour.hide();
      }if (mouseX < 990 && mouseX > 980 && mouseY < 785 && mouseY > 775){ 
        imgFive.show();
      } else {
      imgFive.hide();
      }if (mouseX < 1085 && mouseX > 1075 && mouseY < 705 && mouseY > 695){ 
        imgSix.show();
      } else {
      imgSix.hide();
      }if (mouseX < 1025 && mouseX > 1015 && mouseY < 645 && mouseY > 635){ 
        imgSeven.show();
      } else {
      imgSeven.hide();
      }if (mouseX < 845 && mouseX > 835 && mouseY < 695 && mouseY > 685){ 
        imgEight.show();
      } else {
      imgEight.hide();
      }if (mouseX < 825 && mouseX > 815 && mouseY < 765 && mouseY > 755){ 
        imgNine.show();
      } else {
      imgNine.hide();
      }if (mouseX < 1125 && mouseX > 1115 && mouseY < 825 && mouseY > 815){ 
        imgTen.show();
      } else {
      imgTen.hide();
      }if (mouseX < 1155 && mouseX > 1145 && mouseY < 810 && mouseY > 800){ 
        imgEleven.show();
      } else {
      imgEleven.hide();
      }if (mouseX < 1105 && mouseX > 1095 && mouseY < 805 && mouseY > 795){ 
        imgTwelve.show();
      } else {
      imgTwelve.hide();
      }if (mouseX < 545 && mouseX > 535 && mouseY < 655 && mouseY > 645){ 
        imgThirteen.show();
      } else {
      imgThirteen.hide();
      }if (mouseX < 1125 && mouseX > 1115 && mouseY < 665 && mouseY > 655){ 
        imgFourteen.show();
      } else {
      imgFourteen.hide();
      }
    
      } else if(lastButton == 2){
       if (mouseX < 1025 && mouseX > 1015 && mouseY < 725 && mouseY > 715){ 
        imgFifteen.show();
      } else {
      imgFifteen.hide();
      }if (mouseX < 1005 && mouseX > 995 && mouseY < 795 && mouseY > 785){ 
        imgSixteen.show();
      } else {
      imgSixteen.hide();
      }if (mouseX < 850 && mouseX > 840 && mouseY < 675 && mouseY > 665 ){ 
        imgSeventeen.show();
      } else {
      imgSeventeen.hide();
      }if (mouseX < 805 && mouseX > 795 && mouseY < 755 && mouseY > 745){ 
        imgEighteen.show();
      } else {
      imgEighteen.hide();
      }if (mouseX < 655 && mouseX > 645 && mouseY < 680 && mouseY > 670){ 
        imgNineteen.show();
      } else {
      imgNineteen.hide();
      }if (mouseX < 655 && mouseX > 645 && mouseY < 725 && mouseY > 715){ 
        imgTwenty.show();
      } else {
      imgTwenty.hide();
      }if (mouseX < 565 && mouseX > 555 && mouseY < 695 && mouseY > 685){ 
        imgTwentyone.show();
      } else {
      imgTwentyone.hide();
      }
  } else if (lastButton == 3){
    if (mouseX < 995 && mouseX > 985 && mouseY < 770 && mouseY > 760){ 
        imgTwentytwo.show();
      } else {
      imgTwentytwo.hide();
      }if (mouseX < 765 && mouseX > 755 && mouseY < 740 && mouseY > 730){ 
        imgTwentythree.show();
      } else {
      imgTwentythree.hide();
      }if (mouseX < 635 && mouseX > 625 && mouseY < 685 && mouseY > 675){ 
        imgTwentyfour.show();
      } else {
      imgTwentyfour.hide();
      }if (mouseX < 640 && mouseX > 630 && mouseY < 745 && mouseY > 735){ 
        imgTwentyfive.show();
      } else {
      imgTwentyfive.hide();
      }if (mouseX < 550 && mouseX > 540 && mouseY < 705 && mouseY > 695){ 
        imgTwentysix.show();
      } else {
      imgTwentysix.hide();
      }
    
    /*if (mouseX < 641 && mouseX > 631 && mouseY < 667 && mouseY > 657){ 
        imgTwentyseven.show();
      } else {
      imgTwentyseven.hide();
      }if (mouseX < 641 && mouseX > 631 && mouseY < 667 && mouseY > 657){ 
        imgTwentyeight.show();
      } else {
      imgTwentyeight.hide();
      }if (mouseX < 641 && mouseX > 631 && mouseY < 667 && mouseY > 657){ 
        imgTwentynine.show();
      } else {
      imgTwentynine.hide();
      }
    */
    
  }
 
}



