
/*
SCREEN NUMBER INDEX:
1: Main Menu
2: Settings screen
3: Game selection menu
4: Catch the animals
  4: Zookeeper monologue 1
  8: Zookeeper monologue 2
  9: Game instructions
  10: Game starts
  11: Zookeeper gratitude
5: Tracing words
6: Color the animal
7: Animal matching
12: Ramon instruction screen
TO DO:
  - Coloring the Animal gamability
  - Add Score system to coloring the animal
  - Refine main menu page.
  - Add comments
*/
let checkMark;
let xSign;
let equalSign;
let plusSign;
let ramonScreenNum = 0;
let playGame;
let woodenFrame;
let letterF = [false, false, false, false];
let letterO2 = [false, false, false, false];
let letterX = [false, false, false, false];
let manyaScreenNum = 0;
let smallBrushRect = 255;
let bigBrushRect = 255;
let bigBrush = false;
let brushSize = 15;
let mountainBackgroundHome;
let bambooImage;
let rockImage;
let lakeImage;
let mainMenuBackground
let treeImage;
let translateWidth;
let translateHeight;
let screenNum = 1;
let settingMusicCircleX;
let settingSoundCircleX;
let i = 0;
let gameSelectionBackground;
let catchTheAnimalsBackground;
let lionImage;
let elephantImage;
let zebraImage;
let giraffeImage;
let monkeyImage;
let zooKeeperImage;
let catchTheAnimalsBlurBackground;
let textBubble;
let nextButton;
let readyButton;
let textBackground;
let net;
let pandaImage;
let nextLevelButton
let n = 0;
let p = 0;
let e = 0;
let m = 0;
let pa = 0;
let z = 0;
let animalsCaught = 0;
let lionX;
let lionY;
let giraffeX;
let giraffeY;
let elephantX;
let elephantY;
let monkeyX;
let monkeyY;
let zebraX;
let zebraY;
let pandaX;
let pandaY;
let firstSetCaught = false;
let secondSetCaught = false;
let allAnimalsCaught = false;
let correct;
let gameBackgroundMusic;
let gameSelectionMusic;
let wrong;
let mainMenuMusic;
let mainPlay = 0;
let selectionPlay = 0;
let gameBackgroundPlay = 0;
let goOnce = 0;
let nate_duck1;
let nate_screenNum = 0;
let nate_turtle1;
let nate_song;
let nate_p = 0;
let nate_t = 0;
let duck_outline;
let nate_k = 0;
let nate_lion;
let nate_lion_outline;
let coloringMusic;
let coloringGamePlay = 0;
let ramon_panda;
let ramon_bear;
let ramon_bunny;
let ramon_deer;
let ramon_fox;
let ramon_owl;
let ramon_hedgehog;
let ramon_frog;
let ramon_bird;
let ramon_background;
let row1 = [1, 2, 3, 4, 5, 6];
let row2 = [1, 2, 3, 4, 5, 6];
let row3 = [1, 2, 3, 4, 5, 6];
let rowOneStatus = [false, false, false, false, false, false];
let rowTwoStatus = [false, false, false, false, false, false];
let rowThreeStatus = [false, false, false, false, false, false];
let rowOneTrueStatus = [false, false, false, false, false, false];
let rowTwoTrueStatus = [false, false, false, false, false, false];
let rowThreeTrueStatus = [false, false, false, false, false, false];
let rowOneAnimals = [0, 0, 0, 0, 0, 0];
let rowTwoAnimals = [0, 0, 0, 0, 0, 0];
let rowThreeAnimals = [0, 0, 0, 0, 0, 0];
let rowOneTemp;
let rowTwoTemp;
let rowThreeTemp;
let blankCard;
let frontCard;
let cardClicked = 0;
let tempCardMemoryOne = -1;
let tempCardMemoryTwo = -1;
let tempRowMemoryOne = -1;
let tempRowMemoryTwo = -1;
let rowNumTemp = -1
let gameComplete = false;
let score = 0;
let ramon_background_music;
let ramonPlay = 0;
let ramonGoOnce = 0;
let ramon_correct;
let manya_game_background;
let manya_lion;
let manya_fox;
let manya_zebra;
let manyaGoOnce = 0;
let manyaScore = 1000;
let tanBox;
let strokeColor = "BLACK";
let weightOfStroke = 0;
let settingsBackground;
let homeButtonIcon;
let backButtonIcon;
let settingsButtonIcon;
let settingsMusic;
let settingsMusicPlay = 0;
let traceLettersMusic;
let traceMusic = 0;
let letterL = [false, false, false, false];
let letterI = [false, false, false, false];
let letterO = [false, false, false, false];
let letterN = [false, false, false, false];
let complete = false;
let incrementor = 0;
let correct2;
let gameFourGoOnce = 0;
let gameFourScore = 1000;
let gameSixScore = 1000;
let gameSevenScore = 1000;
let gameColor = 220;
let brushOnAnimal = false;
//15 flags
let coloringTheDuck = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let colorDuckIncrementor = 0;
let colorDuckComplete = false;
let coloringTheLion = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let colorLionIncrementor = 0;
let colorLionComplete = false;
function preload(){
  xMark = loadImage('image/xMark.png');
  checkMark = loadImage('image/checkMark.png');
  equalSign = loadImage('image/equalSign.png');
  plusSign = loadImage('image/plusSign.png');
  playGame = loadImage('image/playButton.png');
  woodenFrame = loadImage('image/woodenFrame.png');
  mountainBackgroundHome = loadImage('image/mountainBackgroundHome.png');
  bambooImage = loadImage('image/bambooImage.png');
  rockImage = loadImage('image/homeRock.png');
  lakeImage = loadImage('image/lakeImage.png');
  treeImage = loadImage('image/treeImage.png');
  mainMenuBackground = loadImage('image/mainMenuBackground.jpg');
  correct2 = loadSound('sound/correct2.mp3');
  traceLettersMusic = loadSound('sound/trace_letters_music.mp3');
  settingsMusic = loadSound('sound/settings_music.mp3');
  homeButtonIcon = loadImage('image/homeButton.png');
  backButtonIcon = loadImage('image/backButton.png');
  settingsButtonIcon = loadImage('image/settingsButton.png');
  settingsBackground = loadImage('image/settings_background.jpg');
  tanBox = loadImage('image/tanBox.png');
  manya_lion = loadImage('image/trace_lion.png');
  manya_zebra = loadImage('image/trace_zebra.png');
  manya_fox = loadImage('image/trace_fox.png');
  manya_game_background = loadImage('image/manya_game_background.png');
  ramon_correct = loadSound('sound/Ramon_Correct.mp3');
  ramon_background_music = loadSound('sound/Music_For_Game.mp3');
  frontCard = loadImage('image/front_card.jpg');
  blankCard = loadImage('image/card_back.png');
  ramon_panda = loadImage('image/ramon_panda.png');
  ramon_bear = loadImage('image/ramon_bear.png');
  ramon_bunny = loadImage('image/ramon_bunny.png');
  ramon_deer = loadImage('image/ramon_deer.png');
  ramon_fox = loadImage('image/ramon_fox.png');
  ramon_owl = loadImage('image/ramon_owl.png');
  ramon_hedgehog = loadImage('image/ramon_hedgehog.png');
  ramon_frog = loadImage('image/ramon_frog.png');
  ramon_bird = loadImage('image/ramon_bird.png');
  ramon_background = loadImage('image/SkyBack.jpeg');
  gameSelectionBackground = loadImage('image/GameSelectionBackground.jpg');
  catchTheAnimalsBackground = loadImage('image/game_background.jpg');
  lionImage = loadImage('image/lion.png');
  elephantImage = loadImage('image/elephant.png');
  zebraImage = loadImage('image/zebra.png');
  giraffeImage = loadImage('image/giraffe.png');
  monkeyImage = loadImage('image/monkey.png');
  zooKeeperImage = loadImage('image/zookeeper.png');
  textBubble = loadImage('image/textBubble.png');
  nextButton = loadImage('image/nextButton.png');
  readyButton = loadImage('image/readyButton.png');
  textBackground = loadImage('image/textBackground.png');
  net = loadImage('image/net.png');
  pandaImage = loadImage('image/panda.png');
  nextLevelButton = loadImage('image/nextLevel.png');
  correct = loadSound('sound/correct_answer.mp3');
  gameBackgroundMusic = loadSound('sound/game_background_music.mp3');
  gameSelectionMusic = loadSound('sound/game_selection.mp3');
  wrong = loadSound('sound/wrong_answer.mp3');
  mainMenuMusic = loadSound('sound/title_screen.mp3');
  nate_duck1 = loadImage('image/duck1.png');
  nate_turtle1 = loadImage('image/turtle1.png')
  nate_song = loadSound('sound/ding.mp3');
  duck_outline = loadImage('image/duckOutline.png');
  nate_lion = loadImage('image/nate_lion.jpg');
  nate_lion_outline = loadImage('image/nate_lion_outline.png');
  coloringMusic = loadSound('sound/coloring_game_music.mp3');
}
function setup() {
  imageMode(CENTER);
  /*This part sets the specific width to height ratio needed for the game to look the way it did when
  developing it since not all screens have the same width to height ratio. This ratio is modeled after
  the ratio of the Peter's laptop screen.
  Peter's laptop screen has a windowWidth : windowHeight ratio of 2.2 (width is approx 2 times the height)
  */
  while(true){
    //There is no way to get the program to set a ratio of exactly 2.2, so there is an error of 0.1
    if(windowWidth / windowHeight < 2.3 && windowWidth / windowHeight > 2.1){ //SETS THE SPECIFIC WIDTH TO HEIGHT RATIO NEEDED.
      break;
    }
    if(windowWidth / windowHeight < 2.1){
        windowHeight -= 1;
    }
    if(windowWidth / windowHeight > 2.3){
      windowHeight += 1;
    }
  }
  textFont("Comic Sans MS");
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
function draw() {
  //MAIN MENU
  if(screenNum == 1){
    //function that resets tracing letter game.
    resetTracingLetterGame();
    //since one of the game messes with the frame rate, frame rate is set back to 60 here.
    frameRate(60);
    colorMode(HSB, 90);
    background(50, 55, 100);
    image(mountainBackgroundHome, laptopX(650), laptopY(170), laptopX(1300), laptopY(500));
    colorMode(RGB);
    /*Since draw loops over and over again, it is important to make sure that the sound only plays once
    therefore, each music in this program has a variable associated with it that contains
    */
    settingsMusicPlay = 0;
    ramonPlay = 0;
    selectionPlay = 0;
    coloringGamePlay = 0;
    gameBackgroundPlay = 0;
    coloringMusic.stop();
    settingsMusic.stop();
    ramon_background_music.stop();
    gameBackgroundMusic.stop();
    gameSelectionMusic.stop();
    if(mainPlay == 0){
      mainMenuMusicPlay();
      mainPlay++;
    }
    cloudsAndSun();
    fenceBars();
    //tree function is inside of the homeGround function
    homeGround();
    playButton();
    settingsButton();
    push();
    titleCard();
    pop();
    panda();
    //showCoordinates();
  }
  //SETTINGS
  if(screenNum == 2){
    resetTracingLetterGame();
    ramonPlay = 0;
    selectionPlay = 0;
    coloringGamePlay = 0;
    gameBackgroundPlay = 0;
    mainPlay = 0;
    coloringMusic.stop();
    mainMenuMusic.stop();
    ramon_background_music.stop();
    gameBackgroundMusic.stop();
    gameSelectionMusic.stop();
    if(settingsMusicPlay == 0){
      settingsMusicPlayFunction();
      settingsMusicPlay++;
    }
    frameRate(60);
    image(settingsBackground, windowWidth / 2, windowHeight / 2, laptopX(1270), laptopY(710));
    push();
    textSize(laptopX(40));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Music Volume:", laptopX(630), laptopY(335));  
    text("Sound Volume:", laptopX(630), laptopY(160));  
    pop();
    homeButton();
    settingSoundBar();
    settingMusicBar();
    //showCoordinates();
  }
  //GAME SELECTION
  if(screenNum == 3){
    manyaScreenNum = 0;
    resetColoringGame();
    gameSevenScore = 1000;
    resetTracingLetterGame();
    manyaGoOnce = 0;
    settingsMusicPlay = 0;
    matchingAnimalsGameReset();
    frameRate(60);
    resetNateGame();
    mainPlay = 0;
    ramonPlay = 0;
    gameBackgroundPlay = 0;
    coloringGamePlay = 0;
    traceMusic = 0;
    traceLettersMusic.stop();
    ramon_background_music.stop();
    settingsMusic.stop();
    mainMenuMusic.stop();
    coloringMusic.stop();
    gameBackgroundMusic.stop();
    if(selectionPlay == 0){
      gameSelectionMusicPlay();
      selectionPlay++;
    }
    background(228, 220, 189);
    image(gameSelectionBackground, adjustX(1530 / 2), adjustY(730 / 2), adjustX(1530), adjustY(730));
    gameOneCircle();
    gameTwoCircle();
    gameThreeCircle();
    gameFourCircle();
    homeButton();
    //showCoordinates();
    goOnce = 0;
  }
  //CATCH THE ANIMALS
  if(screenNum == 4){
    gameSevenScore = 1000;
    resetTracingLetterGame();
    settingsMusic.stop();
    settingsMusicPlay = 0;
    matchingAnimalsGameReset();
    frameRate(60);
    manyaGoOnce = 0;
    ramonPlay = 0;
    selectionPlay = 0;
    mainPlay = 0;
    coloringGamePlay = 0;
    traceMusic = 0;
    traceLettersMusic.stop();
    ramon_background_music.stop();
    gameSelectionMusic.stop();
    mainMenuMusic.stop();
    coloringMusic.stop();
    if(gameBackgroundPlay == 0){
      gameBackgroundMusicPlay();
      gameBackgroundPlay++;
    }
    background(255, 0, 0);
    image(catchTheAnimalsBackground, adjustX(1530 / 2), adjustY(730 / 2), adjustX(1530), adjustY(730));
    zooKeeperMonologue1();
    backButton();
    //showCoordinates();
  }
  if(screenNum == 8){
    image(catchTheAnimalsBackground, adjustX(1530 / 2), adjustY(730 / 2), adjustX(1530), adjustY(730));
    zooKeeperMonologue2();
    backButton();
    //showCoordinates();
  }
  if(screenNum == 9){
    catchTheAnimalsInstructions();
    backButton();
    //showCoordinates();
  }
  if(screenNum == 10){
    catchTheAnimals();
    backButton();
    //showCoordinates();
  }
  if(screenNum == 11){
    image(catchTheAnimalsBackground, adjustX(1530 / 2), adjustY(730 / 2), adjustX(1530), adjustY(730));
    zooKeeperGratitude();
    backButton();
    //showCoordinates();
  }
  //MATCHING ANIMALS
  if(screenNum == 12){
    image(ramon_background, windowWidth / 2, windowHeight / 2, desktopAX(1910), desktopAY(920));
    push();
    textSize(laptopX(20));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Instructions:", laptopX(440), laptopY(80));  
    text("1. This is a memory game. Use your memory to flip each card", laptopX(650), laptopY(120));
    text("and try to match the cards with the least amount of tries possible!", laptopX(680), laptopY(170));
    text("2. Failed attempts will result in -50 points.", laptopX(570), laptopY(220));
    text("3. Good luck and have fun!", laptopX(490), laptopY(270));
    pop();
    image(plusSign, laptopX(500), laptopY(340), laptopX(40), laptopY(40));
    image(equalSign, laptopX(700), laptopY(340), laptopX(40), laptopY(40));
    image(xMark, laptopX(800), laptopY(340), laptopX(80), laptopY(80));
    image(frontCard, laptopX(600), laptopY(355), laptopX(100), laptopY(140));
    image(frontCard, laptopX(400), laptopY(355), laptopX(100), laptopY(140));
    image(ramon_bear, laptopX(400), laptopY(355), laptopX(100), laptopY(100));
    image(ramon_fox, laptopX(600), laptopY(355), laptopX(100), laptopY(100));
    image(plusSign, laptopX(500), laptopY(490), laptopX(40), laptopY(40));
    image(equalSign, laptopX(700), laptopY(490), laptopX(40), laptopY(40));
    image(checkMark, laptopX(800), laptopY(490), laptopX(80), laptopY(80));
    image(frontCard, laptopX(600), laptopY(505), laptopX(100), laptopY(140));
    image(frontCard, laptopX(400), laptopY(505), laptopX(100), laptopY(140));
    image(ramon_hedgehog, laptopX(400), laptopY(505), laptopX(100), laptopY(100));
    image(ramon_hedgehog, laptopX(600), laptopY(505), laptopX(100), laptopY(100));
    image(playGame, laptopX(1050), laptopY(520), laptopX(200), laptopY(200));
    backButton();
  }
  if(screenNum == 7){
    resetColoringGame();
    resetTracingLetterGame();
    settingsMusicPlay = 0;
    manyaGoOnce = 0;
    selectionPlay = 0;
    mainPlay = 0;
    gameBackgroundPlay = 0;
    coloringGamePlay = 0;
    ramonGoOnce = 0;
    traceMusic = 0;
    traceLettersMusic.stop();
    settingsMusic.stop();
    coloringMusic.stop();
    gameBackgroundMusic.stop();
    gameSelectionMusic.stop();
    mainMenuMusic.stop();
    if(ramonPlay == 0){
      ramonBackgroundMusic();
      ramonPlay++;
    }  
    //background of game
    image(ramon_background, windowWidth / 2, windowHeight / 2, desktopAX(1910), desktopAY(920));
    //displays text
    push();
    stroke(0);
    textSize(desktopAX(60));
    fill(255, 225, 183);
    strokeWeight(5);
    stroke(0);
    text("Animals Matching Game", desktopAX(595), desktopAY(102));
    textSize(laptopX(30));
    text("Score: " + gameSevenScore, desktopAX(805), desktopAY(162));
    pop();
    //displays the cards
    let temp = desktopAX(320);
    displayRowOne(temp);
    temp = desktopAX(320);
    displayRowTwo(temp);
    temp = desktopAX(320);
    displayRowThree(temp);
    if(tempCardMemoryOne == -1 || tempCardMemoryTwo == -1){
      displayWhenClickedRowOne();
      displayWhenClickedRowTwo();
      displayWhenClickedRowThree();
    }else{
      if(tempRowMemoryOne == 1 && tempRowMemoryTwo == 1){
        if(rowOneAnimals[tempCardMemoryOne] == rowOneAnimals[tempCardMemoryTwo]){
          rowOneTrueStatus[tempCardMemoryOne] = true;
          rowOneTrueStatus[tempCardMemoryTwo] = true;
          if(ramonGoOnce == 0){
            ramon_correct.play();
            ramonGoOnce++;
          }
          score++;
        }
      }
      if(tempRowMemoryOne == 1 && tempRowMemoryTwo == 2){
        if(rowOneAnimals[tempCardMemoryOne] == rowTwoAnimals[tempCardMemoryTwo]){
          rowOneTrueStatus[tempCardMemoryOne] = true;
          rowTwoTrueStatus[tempCardMemoryTwo] = true;
          if(ramonGoOnce == 0){
            ramon_correct.play();
            ramonGoOnce++;
          }
          score++;
        }
      }
      if(tempRowMemoryOne == 1 && tempRowMemoryTwo == 3){
        if(rowOneAnimals[tempCardMemoryOne] == rowThreeAnimals[tempCardMemoryTwo]){
          rowOneTrueStatus[tempCardMemoryOne] = true;
          rowThreeTrueStatus[tempCardMemoryTwo] = true;
          if(ramonGoOnce == 0){
            ramon_correct.play();
            ramonGoOnce++;
          }
          score++;
        }
      }
      if(tempRowMemoryOne == 2 && tempRowMemoryTwo == 1){
        if(rowTwoAnimals[tempCardMemoryOne] == rowOneAnimals[tempCardMemoryTwo]){
          rowTwoTrueStatus[tempCardMemoryOne] = true;
          rowOneTrueStatus[tempCardMemoryTwo] = true;
          if(ramonGoOnce == 0){
            ramon_correct.play();
            ramonGoOnce++;
          }
          score++;
        }
      }
      if(tempRowMemoryOne == 2 && tempRowMemoryTwo == 2){
        if(rowTwoAnimals[tempCardMemoryOne] == rowTwoAnimals[tempCardMemoryTwo]){
          rowTwoTrueStatus[tempCardMemoryOne] = true;
          rowTwoTrueStatus[tempCardMemoryTwo] = true;
          if(ramonGoOnce == 0){
            ramon_correct.play();
            ramonGoOnce++;
          }
          score++;
        }
      }
      if(tempRowMemoryOne == 2 && tempRowMemoryTwo == 3){
        if(rowTwoAnimals[tempCardMemoryOne] == rowThreeAnimals[tempCardMemoryTwo]){
          rowTwoTrueStatus[tempCardMemoryOne] = true;
          rowThreeTrueStatus[tempCardMemoryTwo] = true;
          if(ramonGoOnce == 0){
            ramon_correct.play();
            ramonGoOnce++;
          }
          score++;
        }
      }
      if(tempRowMemoryOne == 3 && tempRowMemoryTwo == 1){
        if(rowThreeAnimals[tempCardMemoryOne] == rowOneAnimals[tempCardMemoryTwo]){
          rowThreeTrueStatus[tempCardMemoryOne] = true;
          rowOneTrueStatus[tempCardMemoryTwo] = true;
          if(ramonGoOnce == 0){
            ramon_correct.play();
            ramonGoOnce++;
          }
          score++;
        }
      }
      if(tempRowMemoryOne == 3 && tempRowMemoryTwo == 2){
        if(rowThreeAnimals[tempCardMemoryOne] == rowTwoAnimals[tempCardMemoryTwo]){
          rowThreeTrueStatus[tempCardMemoryOne] = true;
          rowTwoTrueStatus[tempCardMemoryTwo] = true;
          if(ramonGoOnce == 0){
            ramon_correct.play();
            ramonGoOnce++;
          }
          score++;
        }
      }
      if(tempRowMemoryOne == 3 && tempRowMemoryTwo == 3){
        if(rowThreeAnimals[tempCardMemoryOne] == rowThreeAnimals[tempCardMemoryTwo]){
          rowThreeTrueStatus[tempCardMemoryOne] = true;
          rowThreeTrueStatus[tempCardMemoryTwo] = true;
          if(ramonGoOnce == 0){
            ramon_correct.play();
            ramonGoOnce++;
          }
          score++;
        }
      }
      for(i = 0; i < 6; i++){
        if(rowOneTrueStatus[i] == false && rowOneStatus[i] == true){
          gameSevenScore -= 25;
          wrong.play();
          rowOneStatus[i] = false;
        }
        if(rowTwoTrueStatus[i] == false && rowTwoStatus[i] == true){
          gameSevenScore -= 25;
          wrong.play();
          rowTwoStatus[i] = false;
        }
        if(rowThreeTrueStatus[i] == false && rowThreeStatus[i] == true){
          gameSevenScore -= 25;
          wrong.play();
          rowThreeStatus[i] = false;
        }
      }
      tempCardMemoryOne = -1;
      tempCardMemoryTwo = -1;
      frameRate(3);
    }
    for(i = 0; i < 6; i++){
      if(score == 9){
        gameComplete = true;
      }
    }
    if(gameComplete == true){
      gameCompleteFeedback();
    }
    //showCoordinates();
    backButton();
  }
  //TRACE THE LETTERS
  if(screenNum == 5){
    settingsMusicPlay = 0;
    matchingAnimalsGameReset();
    frameRate(60);
    ramonPlay = 0;
    selectionPlay = 0;
    mainPlay = 0;
    gameBackgroundPlay = 0;
    coloringGamePlay = 0;
    settingsMusic.stop();
    ramon_background_music.stop();
    coloringMusic.stop();
    gameBackgroundMusic.stop();
    gameSelectionMusic.stop();
    mainMenuMusic.stop();
    strokeColor = "BLACK";
    weightOfStroke = 0;
    if(traceMusic == 0){
      traceLettersMusicPlayFunction();
      traceMusic++;
    }
    if(manyaScreenNum == 0){
      image(manya_game_background, windowWidth / 2, (windowHeight / 2), desktopAX(1910), desktopAY(920));
      push();
      textSize(laptopX(20));
      textAlign(CENTER);
      textFont("Comic Sans MS");
      stroke(0);
      strokeWeight(3);
      fill(255, 225, 183);
      text("Instructions:", laptopX(440), laptopY(180));  
      text("1. Please trace the word to the best of your ability", laptopX(620), laptopY(220));
      text("2. Being too far off will result in your score going down!", laptopX(640), laptopY(260));
      text("3. Good luck and have fun!", laptopX(504), laptopY(300));
      pop();
      image(playGame, laptopX(640), laptopY(370), laptopX(200), laptopY(200));
      if(mouseIsPressed && mouseX < laptopX(730) && mouseX > laptopX(570) && mouseY < laptopY(400) && mouseY > laptopY(330)){
        manyaScreenNum = 1;
      }
    }
    if(manyaScreenNum == 1){                                      
      if(manyaGoOnce == 0){
        image(manya_game_background, windowWidth / 2, (windowHeight / 2), desktopAX(1910), desktopAY(920));
        image(manya_lion, laptopX(600), laptopY(260), laptopX(500), laptopY(300));
        manyaGoOnce++;
      }
      fill(0);
      checkIfMouseOnLettersLion();
      push();
      strokeWeight(weightOfStroke);
      push();
      stroke(strokeColor);
      textSize(desktopAX(50));
      if(incrementor < 16){
        incrementor = 0;
        letterCompletionFlags();
        complete = checkForLetterCompletion();
      }
      
      if(complete == false){
        image(tanBox, laptopX(1000), laptopY(250), laptopX(210), laptopY(50));
        text("Score: " + manyaScore, desktopX(670), desktopY(190));
      }else{
        //image(tanBox, laptopX(1000), laptopY(250), laptopX(210), laptopY(50));
        image(nextButton, laptopX(1150), laptopY(540), laptopX(230), laptopY(130));
        if(mouseIsPressed && mouseX < laptopX(1240) && mouseX > laptopX(1070) && mouseY < laptopY(580) && mouseY > laptopY(510)){
          manyaScreenNum = 2;
          manyaGoOnce = 0;
        }
      }
      //showCoordinates();
      pop();
    }
    if(manyaScreenNum == 2){                                     
      if(manyaGoOnce == 0){
        complete = false;
        incrementor = 0;  
        image(manya_game_background, windowWidth / 2, (windowHeight / 2), desktopAX(1910), desktopAY(920));
        image(manya_fox, laptopX(600), laptopY(260), laptopX(500), laptopY(300));
        manyaGoOnce++;
      }
      fill(0); //turn back to 0
      //foxBoxApproximation();
      checkIfMouseOnLettersFox();
      push();
      strokeWeight(weightOfStroke);
      push();
      stroke(strokeColor);
      textSize(desktopAX(50));
      if(incrementor < 12){
        incrementor = 0;
        letterCompletionFlagsFox();
        complete = checkForLetterCompletionFox();
      }
      
      if(complete == false){
        image(tanBox, laptopX(1000), laptopY(250), laptopX(210), laptopY(50));
        text("Score: " + manyaScore, desktopX(670), desktopY(190));
      }
      else{
        image(tanBox, laptopX(1000), laptopY(250), laptopX(210), laptopY(50));
        displayGoodJob();
        image(nextLevelButton, laptopX(1100), laptopY(540), laptopX(200), laptopY(100));
        if(mouseIsPressed && mouseX < laptopX(1200) && mouseX > laptopX(1000) && mouseY < laptopY(580) && mouseY > laptopY(500)){
          screenNum = 6;
        }
      }
      pop();
    }
    backButton();
  }
  //COLORING INSIDE THE LINE
  if(screenNum == 6){
    manyaScreenNum = 0;
    colorDuckIncrementor = 0;
    resetTracingLetterGame();
    settingsMusicPlay = 0;
    manyaGoOnce = 0;
    frameRate(60);
    ramonPlay = 0
    selectionPlay = 0;
    mainPlay = 0;
    gameBackgroundPlay = 0;
    traceMusic = 0;
    traceLettersMusic.stop();
    gameBackgroundMusic.stop();
    settingsMusic.stop();
    gameSelectionMusic.stop();
    mainMenuMusic.stop();
    if(coloringGamePlay == 0){
      coloringMusicPlay();
      coloringGamePlay++;
    }  
    if(nate_screenNum == 0){
      background(255);
      strokeWeight(3);
      fill(51,51,51);
      brushSizeChanger();
      rect(desktopX(750), desktopY(0), desktopX(300), desktopY(800));
      push();
      fill(0);
      stroke(255);
      rect(desktopAX(1340), desktopAY(0), desktopX(90), desktopY(30));
      textSize(desktopAX(30));
      fill(255);
      noStroke(255);
      text("Clear Canvas", desktopAX(1340), desktopAY(40));
      pop();
      colorPallette();
      image(woodenFrame, laptopX(500), laptopY(300), laptopX(600), laptopY(400));
      push();
      textSize(laptopX(20));
      textAlign(CENTER);
      textFont("Comic Sans MS");
      stroke(0);
      strokeWeight(3);
      fill(255, 225, 183);
      text("Instructions:", laptopX(320), laptopY(180));  
      text("1. Please color the animal and try your best not to", laptopX(490), laptopY(220));
      text("color outside the lines.", laptopX(380), laptopY(260));
      text("2. Coloring outside the line will result in loss of", laptopX(475), laptopY(300));
      text("points!", laptopX(300), laptopY(340));
      text("3. You can clear the canvas, change brush colors, and", laptopX(505), laptopY(380));
      text("change brush sizes by using the buttons on the right.", laptopX(500), laptopY(420));
      pop();
      image(playGame, laptopX(500), laptopY(540), laptopX(200), laptopY(200));
      if(mouseIsPressed && mouseX < laptopX(590) && mouseX > laptopX(420) && mouseY < laptopY(570) && mouseY > laptopY(510)){
        nate_screenNum = 1;
      }
    }
    if(nate_screenNum == 1){
      strokeWeight(3);
      fill(51,51,51);
      rect(desktopX(750), desktopY(0), desktopX(300), desktopY(800)); //color box
      if(goOnce == 0){
        background(255);
        imageMode(CENTER)
        image(nate_duck1, desktopX(390), desktopY(220), desktopX(400), desktopY(400));
        goOnce++;
      }
      displayColoringText();
      push();
      fill(0);
      stroke(255);
      rect(desktopAX(1340), desktopAY(0), desktopX(90), desktopY(30));
      textSize(desktopAX(30));
      fill(255);
      noStroke(255);
      text("Clear Canvas", desktopAX(1340), desktopAY(40));
      pop();
      if(mouseIsPressed && mouseX > desktopAX(1350) && mouseX < desktopAX(1530) && mouseY > desktopY(0) && mouseY < desktopY(60)){
        clearDuckCanvas();
      }
      brushSizeChanger();
      image(duck_outline, desktopX(390), desktopY(220), desktopX(400), desktopY(400));
      //nateDoneButton();
      //colors on pallete
      checkIfDuckIsColored();
      colorTheDuckFlags();
      colorPallette();
      checkIfBrushOnDuck();
      if(brushOnAnimal == true){
        nateBrush();
      }
      changeBrushColor();
   //Done button
      //doneButton();
      if(colorDuckComplete == true){
        doneFeedback();
        push();
        fill(0);
        stroke(255);
        rect(desktopX(650), desktopY(350), desktopX(100), desktopY(30));
        textSize(desktopAX(40));
        fill(255);
        noStroke(255);
        text("Next", desktopX(670), desktopY(372));
        pop();
        if(mouseIsPressed && mouseX > desktopX(650) && mouseX < desktopX(750) && mouseY > desktopY(350) && mouseY < desktopY(380)){
          nate_screenNum = 2;
          goOnce = 0;
          z = 0;
        }
      }
    }
    if(nate_screenNum == 2){
      colorLionIncrementor = 0;
      strokeWeight(3);
      fill(51,51,51);
      rect(desktopX(750), desktopY(0), desktopX(300), desktopY(800)) //color box
      if(goOnce == 0){
        nate_k = 0;
        background(255);
        imageMode(CENTER)
        image(nate_lion, desktopX(390), desktopY(250), desktopX(400), desktopY(400));
        goOnce++;
      }
      brushSizeChanger();
      push();
      fill(0);
      stroke(255);
      rect(desktopAX(1340), desktopAY(0), desktopX(90), desktopY(30));
      textSize(desktopAX(30));
      fill(255);
      noStroke(255);
      text("Clear Canvas", desktopAX(1340), desktopAY(40));
      pop();
      displayColoringText();
      if(mouseIsPressed && mouseX > desktopAX(1350) && mouseX < desktopAX(1530) && mouseY > desktopY(0) && mouseY < desktopY(60)){
        clearLionCanvas();
      }
      image(nate_lion_outline, desktopX(390), desktopY(250), desktopX(400), desktopY(400));
      //nateDoneButton();
      checkIfLionIsColored();
      colorTheLionFlags();
      colorPallette();
      checkIfBrushOnLion();
      //lionHitBox();
      if(brushOnAnimal == true){
        nateBrush();
      }
      changeBrushColor();
      //doneButton();
      if(colorLionComplete == true){
        doneFeedback();
        push();
        fill(0);
        stroke(255);
        rect(desktopX(650), desktopY(350), desktopX(100), desktopY(30));
        textSize(desktopAX(32));
        fill(255);
        noStroke(255);
        text("Next Game", desktopX(660), desktopY(372));
        pop();
        if(mouseIsPressed && mouseX > desktopX(650) && mouseX < desktopX(750) && mouseY > desktopY(350) && mouseY < desktopY(380)){
          screenNum = 12;
        }
      }
    }
      //next button
    backButton();
    //showCoordinates();
  }
}
function resetColoringGame(){
  for(i = 0; i < 15; i++){
    coloringTheLion[i] = false;
    coloringTheDuck[i] = false;
    colorLionComplete = false;
    colorDuckComplete = false;
    gameSixScore = 1000;
  }
}
function checkIfBrushOnLion(){ //complete
  //Body
  if(mouseIsPressed && mouseX < laptopX(625) && mouseX > laptopX(385) && mouseY < laptopY(560) && mouseY > laptopY(390)){
    brushOnAnimal = true;
  }
  //Tail
  else if(mouseIsPressed && mouseX < laptopX(730) && mouseX > laptopX(622) && mouseY < laptopY(465) && mouseY > laptopY(415)){
    brushOnAnimal = true;
  }
  //Head
  else if(mouseIsPressed && mouseX < laptopX(700) && mouseX > laptopX(325) && mouseY < laptopY(395) && mouseY > laptopY(105)){
    brushOnAnimal = true;
  }
  else if(mouseIsPressed && (mouseX < laptopX(909) && (mouseX > laptopX(130)) && (mouseY < laptopY(2000)) && (mouseY > laptopY(0)))){
    brushOnAnimal = false;
    gameSixScore -= 4;
  }
}
// function lionHitBox(){ //complete
//   noFill();
//   //Body
//   rect(laptopX(385), laptopY(390), laptopX(240), laptopY(170));
//   //Tail
//   rect(laptopX(622), laptopY(415), laptopX(108), laptopY(50));
//   //Head
//   rect(laptopX(325), laptopY(105), laptopX(375), laptopY(290));
// }
function checkIfLionIsColored(){ //complete
  for(i = 0; i < 15; i++){
    if(coloringTheLion[i] == true){
      colorLionIncrementor++;
    }
  }
  if(colorLionIncrementor == 14){
    colorLionComplete = true;
  }
}
function colorTheLionFlags(){ //finish
  if(mouseIsPressed && mouseX < laptopX(430) && mouseX > laptopX(410) && mouseY < laptopY(457) && mouseY > laptopY(437)){
    coloringTheLion[1] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(420) && mouseX > laptopX(400) && mouseY < laptopY(520) && mouseY > laptopY(500)){
    coloringTheLion[2] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(520) && mouseX > laptopX(500) && mouseY < laptopY(530) && mouseY > laptopY(510)){
    coloringTheLion[3] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(610) && mouseX > laptopX(590) && mouseY < laptopY(510) && mouseY > laptopY(490)){
    coloringTheLion[4] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(680) && mouseX > laptopX(660) && mouseY < laptopY(440) && mouseY > laptopY(420)){
    coloringTheLion[5] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(600) && mouseX > laptopX(580) && mouseY < laptopY(440) && mouseY > laptopY(420)){
    coloringTheLion[6] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(520) && mouseX > laptopX(500) && mouseY < laptopY(440) && mouseY > laptopY(420)){
    coloringTheLion[7] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(430) && mouseX > laptopX(410) && mouseY < laptopY(380) && mouseY > laptopY(360)){
    coloringTheLion[8] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(380) && mouseX > laptopX(360) && mouseY < laptopY(295) && mouseY > laptopY(275)){
    coloringTheLion[9] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(440) && mouseX > laptopX(420) && mouseY < laptopY(170) && mouseY > laptopY(150)){
    coloringTheLion[10] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(520) && mouseX > laptopX(500) && mouseY < laptopY(145) && mouseY > laptopY(125)){
    coloringTheLion[11] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(620) && mouseX > laptopX(600) && mouseY < laptopY(200) && mouseY > laptopY(180)){
    coloringTheLion[12] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(670) && mouseX > laptopX(650) && mouseY < laptopY(300) && mouseY > laptopY(280)){
    coloringTheLion[13] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(600) && mouseX > laptopX(580) && mouseY < laptopY(400) && mouseY > laptopY(380)){
    coloringTheLion[14] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(670) && mouseX > laptopX(650) && mouseY < laptopY(320) && mouseY > laptopY(300)){
    coloringTheLion[15] = true;
  }
}
function checkIfDuckIsColored(){
  for(i = 0; i < 15; i++){
    if(coloringTheDuck[i] == true){
      colorDuckIncrementor++;
    }
  }
  if(colorDuckIncrementor == 14){
    colorDuckComplete = true;
  }
}
function colorTheDuckFlags(){ //finish
  if(mouseIsPressed && mouseX < laptopX(340) && mouseX > laptopX(320) && mouseY < laptopY(420) && mouseY > laptopY(390)){
    coloringTheDuck[1] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(343) && mouseX > laptopX(323) && mouseY < laptopY(455) && mouseY > laptopY(435)){
    coloringTheDuck[2] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(490) && mouseX > laptopX(470) && mouseY < laptopY(490) && mouseY > laptopY(470)){
    coloringTheDuck[3] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(720) && mouseX > laptopX(700) && mouseY < laptopY(480) && mouseY > laptopY(460)){
    coloringTheDuck[4] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(770) && mouseX > laptopX(750) && mouseY < laptopY(405) && mouseY > laptopY(385)){
    coloringTheDuck[5] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(645) && mouseX > laptopX(625) && mouseY < laptopY(255) && mouseY > laptopY(235)){
    coloringTheDuck[6] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(680) && mouseX > laptopX(660) && mouseY < laptopY(395) && mouseY > laptopY(375)){
    coloringTheDuck[7] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(555) && mouseX > laptopX(535) && mouseY < laptopY(420) && mouseY > laptopY(400)){
    coloringTheDuck[8] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(415) && mouseX > laptopX(395) && mouseY < laptopY(383) && mouseY > laptopY(363)){
    coloringTheDuck[9] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(450) && mouseX > laptopX(430) && mouseY < laptopY(295) && mouseY > laptopY(275)){
    coloringTheDuck[10] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(385) && mouseX > laptopX(365) && mouseY < laptopY(215) && mouseY > laptopY(195)){
    coloringTheDuck[11] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(440) && mouseX > laptopX(420) && mouseY < laptopY(155) && mouseY > laptopY(135)){
    coloringTheDuck[12] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(497) && mouseX > laptopX(477) && mouseY < laptopY(110) && mouseY > laptopY(90)){
    coloringTheDuck[13] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(562) && mouseX > laptopX(542) && mouseY < laptopY(160) && mouseY > laptopY(140)){
    coloringTheDuck[14] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(450) && mouseX > laptopX(430) && mouseY < laptopY(230) && mouseY > laptopY(210)){
    coloringTheDuck[15] = true;
  }
}
function displayColoringText(){
  push();
  stroke(0);
  textSize(desktopAX(60));
  fill(255, 225, 183);
  strokeWeight(5);
  stroke(0);
  text("Color the Animals!", desktopAX(485), desktopAY(102));
  textSize(laptopX(30));
  push()
  fill(255);
  noStroke();
  rect(laptopX(800), laptopY(200), laptopX(200), laptopX(200));
  pop();
  text("Score: " + gameSixScore, desktopAX(1215), desktopAY(402));
  pop();
}
function checkIfBrushOnDuck(){
  //Body
  if(mouseIsPressed && mouseX < laptopX(700) && mouseX > laptopX(370) && mouseY < laptopY(435) && mouseY > laptopY(260)){
    brushOnAnimal = true;
  }
  //Tail
  else if(mouseIsPressed && mouseX < laptopX(700) && mouseX > laptopX(620) && mouseY < laptopY(430) && mouseY > laptopY(225)){
    brushOnAnimal = true;
  }
  //Head
  else if(mouseIsPressed && mouseX < laptopX(568) && mouseX > laptopX(400) && mouseY < laptopY(260) && mouseY > laptopY(80)){
    brushOnAnimal = true;
  }
  //Beak
  else if(mouseIsPressed && mouseX < laptopX(460) && mouseX > laptopX(355) && mouseY < laptopY(240) && mouseY > laptopY(165)){
    brushOnAnimal = true;
  }
  //Lake
  else if(mouseIsPressed && mouseX < laptopX(790) && mouseX > laptopX(260) && mouseY < laptopY(510) && mouseY > laptopY(340)){
    brushOnAnimal = true;
  }else if(mouseIsPressed && (mouseX < laptopX(909) && (mouseX > laptopX(130)) && (mouseY < laptopY(2000)) && (mouseY > laptopY(0)))){
    if(mouseIsPressed && mouseX > laptopX(420) && mouseX < laptopX(590) && mouseY > laptopY(510) && mouseY < laptopY(570)){
      //nothing happens
    }else{
      brushOnAnimal = false;
      gameSixScore -= 4;
    }
  }
}
// function duckHitBox(){
//   noFill();
//   //Body
//   rect(laptopX(370), laptopY(260), laptopX(330), laptopY(175));
//   //Tail
//   rect(laptopX(610), laptopY(225), laptopX(80), laptopY(205));
//   //Head
//   rect(laptopX(390), laptopY(75), laptopX(180), laptopY(185));
//   //Beak
//   rect(laptopX(355), laptopY(165), laptopX(100), laptopY(75));
//   //Lake
//   rect(laptopX(250), laptopY(320), laptopX(540), laptopY(180));
// }
function doneFeedback(){
  push();
  textSize(desktopX(90));
  stroke(0);
  fill(255, 0, 0);
  textAlign(CENTER);
  text("Good Job!", desktopX(140), desktopY(170), desktopX(500), desktopY(500));
  pop();
  if(nate_k == 0){
    nate_song.play();
    nate_k++;
  }
}
function doneButton(){
  if(mouseIsPressed && mouseX > desktopX(650) && mouseX < desktopX(750) && mouseY > desktopY(420) && mouseY < desktopY(450)){
    z++;
  }
}
function changeBrushColor(){
  //big red/Red Shades
  if(mouseIsPressed && mouseX > desktopX(815) && mouseX < desktopX(900) && mouseY > desktopY(20) && mouseY < desktopY(100)){
    stroke(255, 0, 0);
  }
  //first Red Shade
  if(mouseIsPressed && mouseX > desktopX(837) && mouseX < desktopX(867) && mouseY > desktopY(114) && mouseY < desktopY(142)){
    stroke(159,7,7);
  }
  //Yellow Shade
  if(mouseIsPressed && mouseX > desktopX(815) && mouseX < desktopX(900) && mouseY > desktopY(160) && mouseY < desktopY(240)){
    stroke(250, 255, 0);
  }
  //Second yellow Shade
  if(mouseIsPressed && mouseX > desktopX(837) && mouseX < desktopX(867) && mouseY > desktopY(256) && mouseY < desktopY(280)){
    stroke(255, 127, 0)
  }
  //Blue/Blue Shades
  if(mouseIsPressed && mouseX > desktopX(815) && mouseX < desktopX(900) && mouseY > desktopY(300) && mouseY < desktopY(380)){
    stroke(0, 0, 255);
  }
  //Eraser
  if(mouseIsPressed && mouseX > desktopX(837) && mouseX < desktopX(867) && mouseY > desktopY(390) && mouseY < desktopY(420)){
    stroke(255);
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}
function brushSizeChanger(){
  push();
  fill(0);
  if(bigBrush == false){
    bigBrushRect = 255;
    smallBrushRect = "BLUE";
  }else{
    smallBrushRect = 255;
    bigBrushRect = "BLUE";
  }
  strokeWeight(5);
  stroke(smallBrushRect);
  rect(desktopAX(1330), desktopAY(780), desktopX(95), desktopY(30));
  fill(0);
  stroke(bigBrushRect);
  rect(desktopAX(1330), desktopAY(850), desktopX(95), desktopY(30));
  textSize(desktopAX(30));
  fill(255);
  noStroke(255);
  text("Small Brush", desktopAX(1340), desktopAY(820));
  text("Large Brush", desktopAX(1340), desktopAY(890));
  pop();
  if(mouseIsPressed && mouseX > desktopAX(1350) && mouseX < desktopAX(1550) && mouseY > desktopAY(780) && mouseY < desktopAY(830)){
    brushSize = 15;
    bigBrush = false;
  }else if(mouseIsPressed && mouseX > desktopAX(1350) && mouseX < desktopAX(1550) && mouseY > desktopAY(840) && mouseY < desktopAY(900)){
    brushSize = 25;
    bigBrush = true;
  }

}
function nateBrush(){
  if(mouseIsPressed){
    push();
    strokeWeight(brushSize);
    line(pmouseX, pmouseY, mouseX, mouseY);
    pop();
  }
}
function colorPallette(){
  //colors on pallete
     
  //big red
  fill(255,0,0)
  ellipse(desktopX(850), desktopY(60), desktopX(80), desktopY(80));
   
  //first red
  fill(159,7,7);
  ellipse(desktopX(850), desktopY(130) , desktopX(30), desktopY(30));
     
  //yellow
  fill(250, 255, 0 );
  ellipse(desktopX(850), desktopY(200) , desktopX(80), desktopY(80));
   
  //second yellow
  fill(255, 127, 0);
  ellipse(desktopX(850),desktopY(270), desktopX(30), desktopY(30));
     
  //Blue
  fill(0,0,255)
  ellipse(desktopX(850), desktopY(340), desktopX(80), desktopY(80));
  
  //Third
  fill(255);
  ellipse(desktopX(850), desktopY(410), desktopX(30), desktopY(30));
}
function nateDoneButton(){
  push();
  fill(0);
  stroke(255);
  rect(desktopX(660), desktopY(420), desktopX(90), desktopY(50));
  textSize(desktopAX(40));
  fill(255);
  noStroke();
  text("Done", desktopX(680), desktopY(442));
  pop();
}
function displayScoreOfGameFour(){
  push();
  fill(gameColor);
  ellipse(laptopX(700), laptopY(90), laptopX(400), laptopY(100));
  textSize(adjustX(60));
  textAlign(CENTER);
  textFont("Comic Sans MS");
  stroke(0);
  strokeWeight(5);
  fill(255, 225, 183);
  text("Score: " + gameFourScore, laptopX(700), laptopY(100));  
  pop();
}
function resetTracingLetterGame(){
  manyaScore = 1000;
  complete = false;
  for(i = 0; i < 5; i++){
    letterL[i] = false;
    letterI[i] = false;
    letterO[i] = false;
    letterN[i] = false;
    letterF[i] = 0;
    letterO2[i] = 0;
    letterX[i] = 0;
  }
  incrementor = 0;
}
function checkForLetterCompletionFox(){
  for(i = 0; i < 4; i++){
    if(letterF[i] == true){
      incrementor++;
    }
    if(letterO2[i] == true){
      incrementor++;
    }
    if(letterX[i] == true){
      incrementor++;
    }
  }
  if(incrementor == 12){
    correct2.play();
    return true;
  }else{
    return false;
  }
}
function letterCompletionFlagsFox(){
  //'F'
  if(mouseIsPressed && mouseX < laptopX(410) && mouseX > laptopX(370) && mouseY < laptopY(160) && mouseY > laptopY(120)){
    letterF[0] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(410) && mouseX > laptopX(370) && mouseY < laptopY(390) && mouseY > laptopY(350)){
    letterF[1] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(510) && mouseX > laptopX(470) && mouseY < laptopY(160) && mouseY > laptopY(120)){
    letterF[2] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(490) && mouseX > laptopX(450) && mouseY < laptopY(260) && mouseY > laptopY(220)){
    letterF[3] = true;
  }
  //'O'
  if(mouseIsPressed && mouseX < laptopX(525) && mouseX > laptopX(485) && mouseY < laptopY(280) && mouseY > laptopY(240)){
    letterO2[0] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(610) && mouseX > laptopX(570) && mouseY < laptopY(145) && mouseY > laptopY(105)){
    letterO2[1] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(690) && mouseX > laptopX(650) && mouseY < laptopY(280) && mouseY > laptopY(240)){
    letterO2[2] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(610) && mouseX > laptopX(570) && mouseY < laptopY(390) && mouseY > laptopY(350)){
    letterO2[3] = true;
  }
  //'X'
  if(mouseIsPressed && mouseX < laptopX(720) && mouseX > laptopX(680) && mouseY < laptopY(380) && mouseY > laptopY(340)){
    letterX[0] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(840) && mouseX > laptopX(800) && mouseY < laptopY(380) && mouseY > laptopY(340)){
    letterX[1] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(720) && mouseX > laptopX(680) && mouseY < laptopY(170) && mouseY > laptopY(130)){
    letterX[2] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(840) && mouseX > laptopX(800) && mouseY < laptopY(170) && mouseY > laptopY(130)){
    letterX[3] = true;
  }
}
function checkIfMouseOnLettersFox(){
  let partOne = false;;
  let partTwo = false;
  //'F'
  if(mouseIsPressed && mouseX < laptopX(400) && mouseX > laptopX(370) && mouseY < laptopY(365) && mouseY > laptopY(120)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(490) && mouseX > laptopX(370) && mouseY < laptopY(150) && mouseY > laptopY(120)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(470) && mouseX > laptopX(370) && mouseY < laptopY(250) && mouseY > laptopY(220)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }
  //'O'
  else if(mouseIsPressed && mouseX < laptopX(505) && mouseX > laptopX(475) && mouseY < laptopY(278) && mouseY > laptopY(228)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(515) && mouseX > laptopX(485) && mouseY < laptopY(318) && mouseY > laptopY(268)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(525) && mouseX > laptopX(495) && mouseY < laptopY(358) && mouseY > laptopY(308)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(565) && mouseX > laptopX(505) && mouseY < laptopY(368) && mouseY > laptopY(338)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(575) && mouseX > laptopX(545) && mouseY < laptopY(378) && mouseY > laptopY(348)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(505) && mouseX > laptopX(475) && mouseY < laptopY(278) && mouseY > laptopY(228)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(545) && mouseX > laptopX(485) && mouseY < laptopY(238) && mouseY > laptopY(188)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(555) && mouseX > laptopX(495) && mouseY < laptopY(198) && mouseY > laptopY(148)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(575) && mouseX > laptopX(495) && mouseY < laptopY(158) && mouseY > laptopY(108)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(595) && mouseX > laptopX(535) && mouseY < laptopY(148) && mouseY > laptopY(98)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(665) && mouseX > laptopX(635) && mouseY < laptopY(278) && mouseY > laptopY(228)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(655) && mouseX > laptopX(625) && mouseY < laptopY(238) && mouseY > laptopY(188)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(675) && mouseX > laptopX(615) && mouseY < laptopY(198) && mouseY > laptopY(148)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(635) && mouseX > laptopX(605) && mouseY < laptopY(158) && mouseY > laptopY(118)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(625) && mouseX > laptopX(565) && mouseY < laptopY(148) && mouseY > laptopY(108)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(665) && mouseX > laptopX(635) && mouseY < laptopY(278) && mouseY > laptopY(228)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(655) && mouseX > laptopX(625) && mouseY < laptopY(318) && mouseY > laptopY(268)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(645) && mouseX > laptopX(615) && mouseY < laptopY(358) && mouseY > laptopY(308)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(635) && mouseX > laptopX(605) && mouseY < laptopY(368) && mouseY > laptopY(338)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(605) && mouseX > laptopX(575) && mouseY < laptopY(378) && mouseY > laptopY(348)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }
  //'X'
  else if(mouseIsPressed && mouseX < laptopX(770) && mouseX > laptopX(730) && mouseY < laptopY(270) && mouseY > laptopY(230)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(755) && mouseX > laptopX(715) && mouseY < laptopY(295) && mouseY > laptopY(255)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(740) && mouseX > laptopX(700) && mouseY < laptopY(320) && mouseY > laptopY(280)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(725) && mouseX > laptopX(685) && mouseY < laptopY(345) && mouseY > laptopY(305)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(730) && mouseX > laptopX(660) && mouseY < laptopY(380) && mouseY > laptopY(330)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(785) && mouseX > laptopX(745) && mouseY < laptopY(255) && mouseY > laptopY(215)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(800) && mouseX > laptopX(760) && mouseY < laptopY(230) && mouseY > laptopY(190)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(815) && mouseX > laptopX(775) && mouseY < laptopY(205) && mouseY > laptopY(165)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(870) && mouseX > laptopX(790) && mouseY < laptopY(210) && mouseY > laptopY(110)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(770) && mouseX > laptopX(730) && mouseY < laptopY(280) && mouseY > laptopY(240)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(755) && mouseX > laptopX(715) && mouseY < laptopY(255) && mouseY > laptopY(215)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(740) && mouseX > laptopX(700) && mouseY < laptopY(230) && mouseY > laptopY(190)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(725) && mouseX > laptopX(685) && mouseY < laptopY(205) && mouseY > laptopY(165)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(750) && mouseX > laptopX(660) && mouseY < laptopY(210) && mouseY > laptopY(110)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(785) && mouseX > laptopX(745) && mouseY < laptopY(305) && mouseY > laptopY(265)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(800) && mouseX > laptopX(760) && mouseY < laptopY(330) && mouseY > laptopY(290)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(815) && mouseX > laptopX(775) && mouseY < laptopY(355) && mouseY > laptopY(315)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(850) && mouseX > laptopX(790) && mouseY < laptopY(390) && mouseY > laptopY(340)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && complete == false && mouseX > 130){
    if(mouseX < laptopX(1340) && mouseX > laptopX(970) && mouseY < laptopY(590) && mouseY > laptopY(500)){
      //nothing happens
    }else{
      manyaScore -= 2;
      strokeColor = "RED";
      weightOfStroke = 5;
    }
  }
}

function foxBoxApproximation(){
  //'F'
  rect(laptopX(370), laptopY(120), laptopX(30), laptopY(250));
  rect(laptopX(370), laptopY(120), laptopX(120), laptopY(30));
  rect(laptopX(370), laptopY(220), laptopX(100), laptopY(30));
  //O
  rect(laptopX(475), laptopY(228), laptopX(30), laptopY(50));
  rect(laptopX(485), laptopY(268), laptopX(30), laptopY(50));
  rect(laptopX(495), laptopY(308), laptopX(30), laptopY(50));
  rect(laptopX(505), laptopY(338), laptopX(60), laptopY(30));
  rect(laptopX(545), laptopY(348), laptopX(30), laptopY(30));

  rect(laptopX(475), laptopY(228), laptopX(30), laptopY(50));
  rect(laptopX(485), laptopY(188), laptopX(30), laptopY(50));
  rect(laptopX(495), laptopY(148), laptopX(30), laptopY(50));
  rect(laptopX(505), laptopY(118), laptopX(60), laptopY(30));
  rect(laptopX(545), laptopY(108), laptopX(30), laptopY(30));

  rect(laptopX(635), laptopY(228), laptopX(30), laptopY(50));
  rect(laptopX(625), laptopY(188), laptopX(30), laptopY(50));
  rect(laptopX(615), laptopY(148), laptopX(30), laptopY(50));
  rect(laptopX(605), laptopY(118), laptopX(30), laptopY(30));
  rect(laptopX(575), laptopY(108), laptopX(30), laptopY(30));

  rect(laptopX(635), laptopY(228), laptopX(30), laptopY(50));
  rect(laptopX(625), laptopY(268), laptopX(30), laptopY(50));
  rect(laptopX(615), laptopY(308), laptopX(30), laptopY(50));
  rect(laptopX(605), laptopY(338), laptopX(30), laptopY(30));
  rect(laptopX(575), laptopY(348), laptopX(30), laptopY(30));
  //'X'
  rect(laptopX(730), laptopY(240), laptopX(30), laptopY(30));
  rect(laptopX(715), laptopY(265), laptopX(30), laptopY(30));
  rect(laptopX(700), laptopY(290), laptopX(30), laptopY(30));
  rect(laptopX(685), laptopY(315), laptopX(30), laptopY(30));
  rect(laptopX(670), laptopY(340), laptopX(30), laptopY(30));
  rect(laptopX(745), laptopY(215), laptopX(30), laptopY(30));
  rect(laptopX(760), laptopY(190), laptopX(30), laptopY(30));
  rect(laptopX(775), laptopY(165), laptopX(30), laptopY(30));
  rect(laptopX(790), laptopY(140), laptopX(30), laptopY(30));

  rect(laptopX(730), laptopY(240), laptopX(30), laptopY(30));
  rect(laptopX(715), laptopY(215), laptopX(30), laptopY(30));
  rect(laptopX(700), laptopY(190), laptopX(30), laptopY(30));
  rect(laptopX(685), laptopY(165), laptopX(30), laptopY(30));
  rect(laptopX(670), laptopY(140), laptopX(30), laptopY(30));
  rect(laptopX(745), laptopY(265), laptopX(30), laptopY(30));
  rect(laptopX(760), laptopY(290), laptopX(30), laptopY(30));
  rect(laptopX(775), laptopY(315), laptopX(30), laptopY(30));
  rect(laptopX(790), laptopY(340), laptopX(30), laptopY(30));
}
function checkForLetterCompletion(){
  for(i = 0; i < 4; i++){
    if(letterL[i] == true){
      incrementor++;
    }
    if(letterI[i] == true){
      incrementor++;
    }
    if(letterO[i] == true){
      incrementor++;
    }
    if(letterN[i] == true){
      incrementor++;
    }
  }
  if(incrementor == 16){
    correct2.play();
    return true;
  }else{
    return false;
  }
}
function letterCompletionFlags(){
  //'L'
  if(mouseIsPressed && mouseX < laptopX(490) && mouseX > laptopX(450) && mouseY < laptopY(405) && mouseY > laptopY(365)){
    letterL[0] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(405) && mouseX > laptopX(365) && mouseY < laptopY(410) && mouseY > laptopY(370)){
    letterL[1] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(405) && mouseX > laptopX(365) && mouseY < laptopY(300) && mouseY > laptopY(260)){
    letterL[2] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(405) && mouseX > laptopX(365) && mouseY < laptopY(175) && mouseY > laptopY(135)){
    letterL[3] = true;
  }
  //'I'
  if(mouseIsPressed && mouseX < laptopX(595) && mouseX > laptopX(555) && mouseY < laptopY(405) && mouseY > laptopY(365)){
    letterI[0] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(560) && mouseX > laptopX(520) && mouseY < laptopY(405) && mouseY > laptopY(365)){
    letterI[1] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(555) && mouseX > laptopX(515) && mouseY < laptopY(300) && mouseY > laptopY(260)){
    letterI[2] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(520) && mouseX > laptopX(480) && mouseY < laptopY(170) && mouseY > laptopY(130)){
    letterI[3] = true;
  }
  //'O'
  if(mouseIsPressed && mouseX < laptopX(730) && mouseX > laptopX(690) && mouseY < laptopY(290) && mouseY > laptopY(250)){
    letterO[0] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(680) && mouseX > laptopX(640) && mouseY < laptopY(410) && mouseY > laptopY(370)){
    letterO[1] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(620) && mouseX > laptopX(580) && mouseY < laptopY(290) && mouseY > laptopY(250)){
    letterO[2] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(680) && mouseX > laptopX(640) && mouseY < laptopY(170) && mouseY > laptopY(130)){
    letterO[3] = true;
  }
  //'N'
  if(mouseIsPressed && mouseX < laptopX(775) && mouseX > laptopX(725) && mouseY < laptopY(400) && mouseY > laptopY(380)){
    letterN[0] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(870) && mouseX > laptopX(815) && mouseY < laptopY(150) && mouseY > laptopY(130)){
    letterN[1] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(825) && mouseX > laptopX(775) && mouseY < laptopY(290) && mouseY > laptopY(270)){
    letterN[2] = true;
  }
  if(mouseIsPressed && mouseX < laptopX(870) && mouseX > laptopX(825) && mouseY < laptopY(400) && mouseY > laptopY(380)){
    letterN[3] = true;
  }
}
function checkIfMouseOnLettersLion(){
  let partOne = false;;
  let partTwo = false;
  //'L'
  if(mouseIsPressed && mouseX < laptopX(393) && mouseX > laptopX(374) && mouseY < laptopY(408) && mouseY > laptopY(145)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(470) && mouseX > laptopX(380) && mouseY < laptopY(395) && mouseY > laptopY(380)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }
  //'I'
  else if(mouseIsPressed && mouseX < laptopX(560) && mouseX > laptopX(515) && mouseY < laptopY(385) && mouseY > laptopY(145)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(590) && mouseX > laptopX(488) && mouseY < laptopY(155) && mouseY > laptopY(135)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(590) && mouseX > laptopX(488) && mouseY < laptopY(400) && mouseY > laptopY(380)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }
  //'O'
  else if(mouseIsPressed && mouseX < laptopX(615) && mouseX > laptopX(585) && mouseY < laptopY(298) && mouseY > laptopY(249)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(620) && mouseX > laptopX(590) && mouseY < laptopY(328) && mouseY > laptopY(298)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(625) && mouseX > laptopX(595) && mouseY < laptopY(358) && mouseY > laptopY(328)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(630) && mouseX > laptopX(600) && mouseY < laptopY(388) && mouseY > laptopY(358)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(640) && mouseX > laptopX(610) && mouseY < laptopY(418) && mouseY > laptopY(368)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(660) && mouseX > laptopX(630) && mouseY < laptopY(448) && mouseY > laptopY(368)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(615) && mouseX > laptopX(585) && mouseY < laptopY(258) && mouseY > laptopY(238)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(620) && mouseX > laptopX(590) && mouseY < laptopY(238) && mouseY > laptopY(208)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(625) && mouseX > laptopX(595) && mouseY < laptopY(208) && mouseY > laptopY(178)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(630) && mouseX > laptopX(600) && mouseY < laptopY(178) && mouseY > laptopY(148)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(640) && mouseX > laptopX(610) && mouseY < laptopY(168) && mouseY > laptopY(138)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(660) && mouseX > laptopX(630) && mouseY < laptopY(168) && mouseY > laptopY(138)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(712) && mouseX > laptopX(682) && mouseY < laptopY(298) && mouseY > laptopY(249)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(707) && mouseX > laptopX(677) && mouseY < laptopY(328) && mouseY > laptopY(298)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(702) && mouseX > laptopX(672) && mouseY < laptopY(358) && mouseY > laptopY(328)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(697) && mouseX > laptopX(667) && mouseY < laptopY(388) && mouseY > laptopY(358)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(692) && mouseX > laptopX(662) && mouseY < laptopY(418) && mouseY > laptopY(368)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(687) && mouseX > laptopX(657) && mouseY < laptopY(448) && mouseY > laptopY(368)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(712) && mouseX > laptopX(682) && mouseY < laptopY(258) && mouseY > laptopY(238)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(707) && mouseX > laptopX(677) && mouseY < laptopY(238) && mouseY > laptopY(208)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(702) && mouseX > laptopX(672) && mouseY < laptopY(208) && mouseY > laptopY(178)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(697) && mouseX > laptopX(667) && mouseY < laptopY(178) && mouseY > laptopY(148)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(692) && mouseX > laptopX(662) && mouseY < laptopY(168) && mouseY > laptopY(138)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(687) && mouseX > laptopX(657) && mouseY < laptopY(168) && mouseY > laptopY(138)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }
  //'N'
  else if(mouseIsPressed && mouseX < laptopX(785) && mouseX > laptopX(735) && mouseY < laptopY(215) && mouseY > laptopY(165)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(785) && mouseX > laptopX(755) && mouseY < laptopY(235) && mouseY > laptopY(205)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(795) && mouseX > laptopX(765) && mouseY < laptopY(265) && mouseY > laptopY(235)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(805) && mouseX > laptopX(775) && mouseY < laptopY(295) && mouseY > laptopY(265)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(815) && mouseX > laptopX(785) && mouseY < laptopY(325) && mouseY > laptopY(295)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(825) && mouseX > laptopX(795) && mouseY < laptopY(355) && mouseY > laptopY(325)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(835) && mouseX > laptopX(785) && mouseY < laptopY(385) && mouseY > laptopY(335)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(750) && mouseX > laptopX(720) && mouseY < laptopY(410) && mouseY > laptopY(140)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && mouseX < laptopX(850) && mouseX > laptopX(825) && mouseY < laptopY(410) && mouseY > laptopY(140)){
    ellipse(mouseX, mouseY, laptopX(20), laptopY(20));
  }else if(mouseIsPressed && complete == false && mouseX > 130){
    if(mouseX < laptopX(1340) && mouseX > laptopX(970) && mouseY < laptopY(590) && mouseY > laptopY(500)){
      //nothing happens
    }else if(mouseX < laptopX(730) && mouseX > laptopX(570) && mouseY < laptopY(400) && mouseY > laptopY(330)){
      //nothing happens
    }else{
      manyaScore -= 2;
      strokeColor = "RED";
      weightOfStroke = 5;
    }
  }
}
// function lionBoxApproximation(){
//   //'L'
//   rect(laptopX(374), laptopY(145), laptopX(15), laptopY(245));
//   rect(laptopX(374), laptopY(380), laptopX(110), laptopY(15));
//   //'I'
//   rect(laptopX(490), laptopY(140), laptopX(90), laptopY(15));
//   rect(laptopX(490), laptopY(383), laptopX(90), laptopY(15));
//   rect(laptopX(522), laptopY(145), laptopX(15), laptopY(250));
//   //'O'
//   rect(laptopX(585), laptopY(268), laptopX(30), laptopY(30));
//   rect(laptopX(590), laptopY(298), laptopX(30), laptopY(30));
//   rect(laptopX(595), laptopY(328), laptopX(30), laptopY(30));
//   rect(laptopX(600), laptopY(358), laptopX(30), laptopY(30));
//   rect(laptopX(610), laptopY(368), laptopX(30), laptopY(30));
//   rect(laptopX(630), laptopY(368), laptopX(30), laptopY(30));

//   rect(laptopX(585), laptopY(238), laptopX(30), laptopY(30));
//   rect(laptopX(590), laptopY(208), laptopX(30), laptopY(30));
//   rect(laptopX(595), laptopY(178), laptopX(30), laptopY(30));
//   rect(laptopX(600), laptopY(148), laptopX(30), laptopY(30));
//   rect(laptopX(610), laptopY(138), laptopX(30), laptopY(30));
//   rect(laptopX(630), laptopY(138), laptopX(30), laptopY(30));

//   rect(laptopX(682), laptopY(268), laptopX(30), laptopY(30));
//   rect(laptopX(677), laptopY(298), laptopX(30), laptopY(30));
//   rect(laptopX(672), laptopY(328), laptopX(30), laptopY(30));
//   rect(laptopX(667), laptopY(358), laptopX(30), laptopY(30));
//   rect(laptopX(662), laptopY(368), laptopX(30), laptopY(30));
//   rect(laptopX(657), laptopY(368), laptopX(30), laptopY(30));

//   rect(laptopX(682), laptopY(238), laptopX(30), laptopY(30));
//   rect(laptopX(677), laptopY(208), laptopX(30), laptopY(30));
//   rect(laptopX(672), laptopY(178), laptopX(30), laptopY(30));
//   rect(laptopX(667), laptopY(148), laptopX(30), laptopY(30));
//   rect(laptopX(662), laptopY(138), laptopX(30), laptopY(30));
//   rect(laptopX(657), laptopY(138), laptopX(30), laptopY(30));
//   //'N'
//   rect(laptopX(735), laptopY(145), laptopX(20), laptopY(259));

//   rect(laptopX(745), laptopY(175), laptopX(30), laptopY(30));
//   rect(laptopX(755), laptopY(205), laptopX(30), laptopY(30));
//   rect(laptopX(765), laptopY(235), laptopX(30), laptopY(30));
//   rect(laptopX(775), laptopY(265), laptopX(30), laptopY(30));
//   rect(laptopX(785), laptopY(295), laptopX(30), laptopY(30));
//   rect(laptopX(795), laptopY(325), laptopX(30), laptopY(30));

//   rect(laptopX(815), laptopY(145), laptopX(20), laptopY(259));
// }
function matchingAnimalsGameReset(){
  gameComplete = false;
  score = 0;
  for(i = 0; i < 6; i++){
    rowOneTrueStatus[i] = false;
    rowTwoTrueStatus[i] = false;
    rowThreeTrueStatus[i] = false;
    rowOneStatus[i] = false;
    rowTwoStatus[i] = false;
    rowThreeStatus[i] = false;
  }
}
function gameCompleteFeedback(){
  push();
  textSize(desktopX(90));
  stroke(0);
  strokeWeight(20);
  fill(255, 0, 0);
  textAlign(CENTER);
  text("Good Job!", desktopX(200), desktopY(200), desktopX(500), desktopY(500));
  image(nextLevelButton, adjustX(1350), adjustY(680), adjustX(150), adjustY(75));
  if(mouseIsPressed && mouseX > laptopX(1070) && mouseX < laptopX(1190) && mouseY > laptopY(560) && mouseY < laptopY(610)){
    screenNum = 4;
  }
  pop();
}
function displayGoodJob(){
  push();
  textSize(desktopX(90));
  stroke(0);
  strokeWeight(10);
  fill(255, 0, 0);
  textAlign(CENTER);
  text("Good Job!", desktopX(200), desktopY(170), desktopX(500), desktopY(500));
  textSize(desktopX(25));
  text("Score: " + manyaScore, desktopX(200), desktopY(260), desktopX(500), desktopY(500));
  pop();
}
function displayWhenClickedRowOne(){
  if(mouseIsPressed && mouseX < desktopAX(400) && mouseX > desktopAX(250) && mouseY < desktopAY(400) && mouseY > desktopAY(190)){
    frameRate(60);
    rowOneStatus[0] = true;
    if(tempCardMemoryOne == -1){
      tempCardMemoryOne = 0;
      tempRowMemoryOne = 1;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 0 || tempRowMemoryOne != 1)){
      tempCardMemoryTwo = 0;
      tempRowMemoryTwo = 1;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(650) && mouseX > desktopAX(500) && mouseY < desktopAY(400) && mouseY > desktopAY(190)){
    frameRate(60);
    rowOneStatus[1] = true;
    if(tempCardMemoryOne == -1){
      tempCardMemoryOne = 1;
      tempRowMemoryOne = 1;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 1 || tempRowMemoryOne != 1)){
      tempRowMemoryTwo = 1;
      tempCardMemoryTwo = 1;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(900) && mouseX > desktopAX(750) && mouseY < desktopAY(400) && mouseY > desktopAY(190)){
    frameRate(60);
    rowOneStatus[2] = true;
    if(tempCardMemoryOne == -1 ){
      tempRowMemoryOne = 1;
      tempCardMemoryOne = 2;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 2 || tempRowMemoryOne != 1)){
      tempRowMemoryTwo = 1;
      tempCardMemoryTwo = 2;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(1150) && mouseX > desktopAX(1000) && mouseY < desktopAY(400) && mouseY > desktopAY(190)){
    frameRate(60);
    rowOneStatus[3] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 1;
      tempCardMemoryOne = 3;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 3 || tempRowMemoryOne != 1)){
      tempRowMemoryTwo = 1;
      tempCardMemoryTwo = 3;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(1400) && mouseX > desktopAX(1250) && mouseY < desktopAY(400) && mouseY > desktopAY(190)){
    frameRate(60);
    rowOneStatus[4] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 1;
      tempCardMemoryOne = 4;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 4 || tempRowMemoryOne != 1)){
      tempRowMemoryTwo = 1;
      tempCardMemoryTwo = 4;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(1650) && mouseX > desktopAX(1500) && mouseY < desktopAY(400) && mouseY > desktopAY(190)){
    frameRate(60);
    rowOneStatus[5] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 1;
      tempCardMemoryOne = 5;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 5 || tempRowMemoryOne != 1)){
      tempRowMemoryTwo = 1;
      tempCardMemoryTwo = 5;
      frameRate(1);
    }
     
  }
}
function displayWhenClickedRowTwo(){
  if(mouseIsPressed && mouseX < desktopAX(400) && mouseX > desktopAX(250) && mouseY < desktopAY(620) && mouseY > desktopAY(415)){
    frameRate(60);
    rowTwoStatus[0] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 2;
      tempCardMemoryOne = 0;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 0 || tempRowMemoryOne != 2)){
      tempRowMemoryTwo = 2;
      tempCardMemoryTwo = 0;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(650) && mouseX > desktopAX(500) && mouseY < desktopAY(620) && mouseY > desktopAY(415)){
    frameRate(60);
    rowTwoStatus[1] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 2;
      tempCardMemoryOne = 1;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 1 || tempRowMemoryOne != 2)){
      tempRowMemoryTwo = 2;
      tempCardMemoryTwo = 1;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(900) && mouseX > desktopAX(750) && mouseY < desktopAY(620) && mouseY > desktopAY(415)){
    frameRate(60);
    rowTwoStatus[2] = true;
    if(tempCardMemoryOne == -1 ){
      tempRowMemoryOne = 2;
      tempCardMemoryOne = 2;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 2 || tempRowMemoryOne != 2)){
      tempRowMemoryTwo = 2;
      tempCardMemoryTwo = 2;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(1150) && mouseX > desktopAX(1000) && mouseY < desktopAY(620) && mouseY > desktopAY(415)){
    frameRate(60);
    rowTwoStatus[3] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 2;
      tempCardMemoryOne = 3;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 3 || tempRowMemoryOne != 2)){
      tempRowMemoryTwo = 2;
      tempCardMemoryTwo = 3;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(1400) && mouseX > desktopAX(1250) && mouseY < desktopAY(620) && mouseY > desktopAY(415)){
    frameRate(60);
    rowTwoStatus[4] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 2;
      tempCardMemoryOne = 4;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 4 || tempRowMemoryOne != 2)){
      tempRowMemoryTwo = 2;
      tempCardMemoryTwo = 4;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(1650) && mouseX > desktopAX(1500) && mouseY < desktopAY(620) && mouseY > desktopAY(415)){
    frameRate(60);
    rowTwoStatus[5] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 2;
      tempCardMemoryOne = 5;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 5 || tempRowMemoryOne != 2)){
      tempRowMemoryTwo = 2;
      tempCardMemoryTwo = 5;
      frameRate(1);
    }
     
  }
}
function displayWhenClickedRowThree(){
  if(mouseIsPressed && mouseX < desktopAX(400) && mouseX > desktopAX(250) && mouseY < desktopAY(840) && mouseY > desktopAY(635)){
    frameRate(60);
    rowThreeStatus[0] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 3;
      tempCardMemoryOne = 0;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 0 || tempRowMemoryOne != 3)){
      tempRowMemoryTwo = 3;
      tempCardMemoryTwo = 0;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(650) && mouseX > desktopAX(500) && mouseY < desktopAY(840) && mouseY > desktopAY(635)){
    frameRate(60);
    rowThreeStatus[1] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 3;
      tempCardMemoryOne = 1;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 1 || tempRowMemoryOne != 3)){
      tempRowMemoryTwo = 3;
      tempCardMemoryTwo = 1;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(900) && mouseX > desktopAX(750) && mouseY < desktopAY(840) && mouseY > desktopAY(635)){
    frameRate(60);
    rowThreeStatus[2] = true;
    if(tempCardMemoryOne == -1 ){
      tempRowMemoryOne = 3;
      tempCardMemoryOne = 2;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 2 || tempRowMemoryOne != 3)){
      tempRowMemoryTwo = 3;
      tempCardMemoryTwo = 2;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(1150) && mouseX > desktopAX(1000) && mouseY < desktopAY(840) && mouseY > desktopAY(635)){
    frameRate(60);
    rowThreeStatus[3] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 3;
      tempCardMemoryOne = 3;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 3 || tempRowMemoryOne != 3)){
      tempRowMemoryTwo = 3;
      tempCardMemoryTwo = 3;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(1400) && mouseX > desktopAX(1250) && mouseY < desktopAY(840) && mouseY > desktopAY(635)){
    frameRate(60);
    rowThreeStatus[4] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 3;
      tempCardMemoryOne = 4;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 4 || tempRowMemoryOne != 3)){
      tempRowMemoryTwo = 3;
      tempCardMemoryTwo = 4;
      frameRate(1);
    }
     
  }
  if(mouseIsPressed && mouseX < desktopAX(1650) && mouseX > desktopAX(1500) && mouseY < desktopAY(840) && mouseY > desktopAY(635)){
    frameRate(60);
    rowThreeStatus[5] = true;
    if(tempCardMemoryOne == -1){
      tempRowMemoryOne = 3;
      tempCardMemoryOne = 5;
    }
    if(tempCardMemoryTwo == -1 && tempCardMemoryOne != -1 && (tempCardMemoryOne != 5 || tempRowMemoryOne != 3)){
      tempRowMemoryTwo = 3;
      tempCardMemoryTwo = 5;
      frameRate(1);
    }
     
  }
}
function displayRowOne(temp){
  for(i = 0; i < 6; i++){
    if(rowOneStatus[i] == true){
      image(frontCard, temp, desktopAY(300), desktopAX(150), desktopAY(200));
      numToAnimalOne(i);
      rowOneAnimals[i] = rowOneTemp;
      image(rowOneTemp, temp, desktopAY(300), desktopAX(180), desktopAY(180));
      temp += desktopAX(250);
    }else{
      image(blankCard, temp, desktopAY(280), desktopAX(150), desktopAY(250));
      temp += desktopAX(250);
    }
  }
}
function displayRowTwo(temp){
  for(i = 0; i < 6; i++){
    if(rowTwoStatus[i] == true){
      image(frontCard, temp, desktopAY(520), desktopAX(150), desktopAY(200));
      numToAnimalTwo(i);
      rowTwoAnimals[i] = rowTwoTemp;
      image(rowTwoTemp, temp, desktopAY(500), desktopAX(180), desktopAY(180));
      temp += desktopAX(250);
    }else{
      image(blankCard, temp, desktopAY(500), desktopAX(150), desktopAY(250));
      temp += desktopAX(250);
    }
  }
}
function displayRowThree(temp){
  for(i = 0; i < 6; i++){
    if(rowThreeStatus[i] == true){
      image(frontCard, temp, desktopAY(740), desktopAX(150), desktopAY(200));
      numToAnimalThree(i);
      rowThreeAnimals[i] = rowThreeTemp;
      image(rowThreeTemp, temp, desktopAY(760), desktopAX(180), desktopAY(180));
      temp += desktopAX(250);
    }else{
      image(blankCard, temp, desktopAY(720), desktopAX(150), desktopAY(250));
      temp += desktopAX(250);
    }
  }
}
function numToAnimalOne(num){
  if(num == 0){
    rowOneTemp = ramon_bear;
  }
  if(num == 1){
    rowOneTemp = ramon_panda;
  }
  if(num == 2){
    rowOneTemp = ramon_bear;
  }
  if(num == 3){
    rowOneTemp = ramon_deer;
  }
  if(num == 4){
    rowOneTemp = ramon_fox;
  }
  if(num == 5){
    rowOneTemp = ramon_owl;
  }
}
function numToAnimalTwo(num){
  if(num == 0){
    rowTwoTemp = ramon_panda;
  }
  if(num == 1){
    rowTwoTemp = ramon_hedgehog;
  }
  if(num == 2){
    rowTwoTemp = ramon_owl;
  }
  if(num == 3){
    rowTwoTemp = ramon_frog;
  }
  if(num == 4){
    rowTwoTemp = ramon_frog;
  }
  if(num == 5){
    rowTwoTemp = ramon_fox;
  }
}
function numToAnimalThree(num){
  if(num == 0){
    rowThreeTemp = ramon_bunny;
  }
  if(num == 1){
    rowThreeTemp = ramon_bunny;
  }
  if(num == 2){
    rowThreeTemp = ramon_bird;
  }
  if(num == 3){
    rowThreeTemp = ramon_hedgehog;
  }
  if(num == 4){
    rowThreeTemp = ramon_deer;
  }
  if(num == 5){
    rowThreeTemp = ramon_bird;
  }
}
function clearLionCanvas(){
  background(255);
  imageMode(CENTER)
  image(nate_lion, desktopX(390), desktopY(220), desktopX(400), desktopY(400));
}
function clearDuckCanvas(){
  background(255);
  imageMode(CENTER)
  image(nate_duck1, desktopX(390), desktopY(220), desktopX(400), desktopY(400));
}
function resetNateGame(){
  nate_screenNum = 0;
  nate_k = 0;
  z = 0;
  goOnce = 0;
}
function mainMenuMusicPlay(){
  mainMenuMusic.play();
  mainMenuMusic.loop();
  userStartAudio();
}
function coloringMusicPlay(){
  coloringMusic.play();
  coloringMusic.loop();
  userStartAudio();
}
function gameBackgroundMusicPlay(){
  gameBackgroundMusic.play();
  gameBackgroundMusic.loop();
  userStartAudio();
}
function gameSelectionMusicPlay(){
  gameSelectionMusic.play();
  gameSelectionMusic.loop();
  userStartAudio();
}
function ramonBackgroundMusic(){
  ramon_background_music.play();
  ramon_background_music.loop();
  userStartAudio();
}
function traceLettersMusicPlayFunction(){
  traceLettersMusic.play();
  traceLettersMusic.loop();
  userStartAudio();
}
function settingsMusicPlayFunction(){
  settingsMusic.play();
  settingsMusic.loop();
  userStartAudio();
}
function zooKeeperMonologue1(){
    image(zooKeeperImage, adjustX(400), adjustY(470), adjustX(500), adjustY(500));
    image(textBubble, adjustX(700), adjustY(200), adjustX(800), adjustY(500));
    image(nextButton, adjustX(1350), adjustY(600), adjustX(300), adjustY(150));
    push();
    textSize(adjustX(30));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Help! All my zoo animals", adjustX(650), adjustY(140));  
    text("have escaped!!", adjustX(590), adjustY(200));
    pop();
}
function zooKeeperMonologue2(){
    image(zooKeeperImage, adjustX(400), adjustY(470), adjustX(500), adjustY(500));
    image(textBubble, adjustX(700), adjustY(200), adjustX(800), adjustY(500));
    image(readyButton, adjustX(1350), adjustY(630), adjustX(300), adjustY(150));
    push();
    textSize(adjustX(25));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Hey! You there! Please help me catch", adjustX(700), adjustY(140));  
    text("my zoo animals!", adjustX(590), adjustY(200));
    pop();
}
function zooKeeperGratitude(){
  image(zooKeeperImage, adjustX(400), adjustY(470), adjustX(500), adjustY(500));
  image(textBubble, adjustX(700), adjustY(200), adjustX(900), adjustY(500));
  image(nextLevelButton, adjustX(1350), adjustY(600), adjustX(300), adjustY(150));
  push();
  textSize(adjustX(20));
  textAlign(CENTER);
  textFont("Comic Sans MS");
  stroke(0);
  strokeWeight(3);
  fill(255, 225, 183);
  text("Incredible! You finished with a score of " + gameFourScore + "!", adjustX(650), adjustY(140));  
  text("Thank you for helping me catch my animals! See you!", adjustX(700), adjustY(200));
  pop();
}
function catchTheAnimalsInstructions(){
    image(catchTheAnimalsBackground, adjustX(1530 / 2), adjustY(730 / 2), adjustX(1530), adjustY(730));
    //image(net, adjustX(200), adjustY(200), adjustX(400), adjustY(400));
    image(textBackground, adjustX(700), adjustY(570), adjustX(1400), adjustY(250));
    push();
    textSize(adjustX(25));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Instructions: Please drag and drop each animal into the net to help Zookeeper Han catch his", adjustX(700), adjustY(550));  
    text("zoo animals! Click anywhere to continue:", adjustX(400), adjustY(600));
    pop();
}
function catchTheAnimals(){
    if(animalsCaught == 2){
      firstSetCaught = true;
    }else if(animalsCaught == 4){
      secondSetCaught = true;
    }else if(animalsCaught == 6){
      allAnimalsCaught = true;
    }
    if(firstSetCaught == false && secondSetCaught == false){
      firstSet();
    }
    if(firstSetCaught == true && secondSetCaught == false){
      secondSet();
    }
    if(firstSetCaught == true && secondSetCaught == true){
      thirdSet();
    }
    if(allAnimalsCaught == true){
      animalsCaught = 0;
      firstSetCaught = false;
      secondSetCaught = false;
      allAnimalsCaught = false;
      screenNum = 11;
      p = 0;
      n = 0;
      e = 0;
      m = 0;
      pa = 0;
      z = 0;
    }
}
function firstSet(){
  if(n == 0){
    lionX = adjustX(250);
    lionY = adjustY(500);
  }else if(n > 0 && mouseIsPressed && !(p > 0)){
    lionX = mouseX;
    lionY = mouseY;
  }else if(n == -1){
    gameFourGoOnce = 0;
    lionX = 10000;
    lionY = 10000;
  }else{
    n = 0;
  }
  if(p == 0){
    giraffeX = adjustX(750);
    giraffeY = adjustY(350);
  }else if(p > 0 && mouseIsPressed && !(n > 0)){
    giraffeX = mouseX;
    giraffeY = mouseY;
  }else if(p == -1){
    giraffeX = 10000;
    giraffeY = 10000;
    gameFourGoOnce = 0;
  }else{
    p = 0;
  }
  image(catchTheAnimalsBackground, adjustX(1530 / 2), adjustY(730 / 2), adjustX(1530), adjustY(730));
  image(net, adjustX(1250), adjustY(500), adjustX(650), adjustY(500));
  displayScoreOfGameFour();
  if(animalsCaught == 0){
    image(textBackground, adjustX(320), adjustY(70), adjustX(450), adjustY(100));
    push();
    textSize(adjustX(35));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Where is the lion?", adjustX(300), adjustY(80));  
    pop();
    if(inNetHitBox(giraffeX, giraffeY) && gameFourGoOnce == 0){
      wrong.play();
      gameFourScore -= 100;
      gameColor = "RED";
      gameFourGoOnce++;
    }else if(!inNetHitBox(giraffeX, giraffeY)){
      gameColor = 220;
      gameFourGoOnce = 0;
    }
    if(inNetHitBox(lionX, lionY)){
      //gameFourGoOnce = 0;
      if(!mouseIsPressed){
        animalsCaught++;
        if(gameFourGoOnce == 0){
          correct.play();
          gameFourGoOnce++;
        }
        n = -1;
      }
    }
  }
  if(animalsCaught == 1){
    image(textBackground, adjustX(320), adjustY(70), adjustX(450), adjustY(100));
    push();
    textSize(adjustX(35));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Where is the giraffe?", adjustX(310), adjustY(80));  
    pop();
    if(inNetHitBox(giraffeX, giraffeY)){
      if(!mouseIsPressed){
        if(gameFourGoOnce == 0){
          correct.play();
          gameFourGoOnce++;
        }
        animalsCaught++;
        p = -1;
      }
    }
  }
  if(mouseIsPressed && mouseX <= adjustX(340) && mouseX >= adjustX(150) && mouseY >= adjustY(400) && mouseY <= adjustY(615) && !(p > 0)){
    n++;
  }else if(mouseIsPressed && mouseX <= adjustX(800) && mouseX >= adjustX(675) && mouseY >= adjustY(160) && mouseY <= adjustY(550) && !(n > 0)){
    p++;
  }
  image(lionImage, lionX, lionY, adjustX(250), adjustY(250));
  image(giraffeImage, giraffeX, giraffeY, adjustX(400), adjustY(450));  
 
}
function secondSet(){
  if(e == 0){
    elephantX = adjustX(450);
    elephantY = adjustY(500);
  }else if(e > 0 && mouseIsPressed && !(m > 0)){
    elephantX = mouseX;
    elephantY = mouseY;
  }else if(e == -1){
    gameFourGoOnce = 0;
    elephantX = 10000;
    elephantY = 10000;
  }else{
    e = 0;
  }
  if(m == 0){
    monkeyX = adjustX(1200);
    monkeyY = adjustY(150);
  }else if(m > 0 && mouseIsPressed && !(e > 0)){
    monkeyX = mouseX;
    monkeyY = mouseY;
  }else if(m == -1){
    gameFourGoOnce = 0;
    monkeyX = 10000;
    monkeyY = 10000;
  }else{
    m = 0;
  }
  image(catchTheAnimalsBackground, adjustX(1530 / 2), adjustY(730 / 2), adjustX(1530), adjustY(730));
  image(net, adjustX(1250), adjustY(500), adjustX(650), adjustY(500));
  displayScoreOfGameFour();
  if(animalsCaught == 2){
    image(textBackground, adjustX(370), adjustY(70), adjustX(500), adjustY(100));
    push();
    textSize(adjustX(35));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Where is the elephant?", adjustX(350), adjustY(80));  
    pop();
    if(inNetHitBox(monkeyX, monkeyY) && gameFourGoOnce == 0){
      wrong.play();
      gameFourScore -= 100;
      gameColor = "RED";
      gameFourGoOnce++;
    }else if(!inNetHitBox(monkeyX, monkeyY)){
      gameColor = 220;
      gameFourGoOnce = 0;
    }
    if(inNetHitBox(elephantX, elephantY)){
      if(!mouseIsPressed){
        if(gameFourGoOnce == 0){
          correct.play();
          gameFourGoOnce++;
        }
        e = -1;
        animalsCaught++;
      }
    }
  }
  if(animalsCaught == 3){
    image(textBackground, adjustX(370), adjustY(70), adjustX(500), adjustY(100));
    push();
    textSize(adjustX(35));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Where is the monkey?", adjustX(360), adjustY(80));  
    pop();
    if(inNetHitBox(monkeyX, monkeyY)){
      if(!mouseIsPressed){
        if(gameFourGoOnce == 0){
          correct.play();
          gameFourGoOnce++;
        }
        m = -1;
        animalsCaught++;
      }
    }
  }
  if(mouseIsPressed && mouseX <= adjustX(620) && mouseX >= adjustX(210) && mouseY >= adjustY(380) && mouseY <= adjustY(640) && !(m > 0)){
    e++;
  }else if(mouseIsPressed && mouseX <= adjustX(1250) && mouseX >= adjustX(1075) && mouseY >= adjustY(50) && mouseY <= adjustY(285) && !(e > 0)){
    m++;
  }
  image(elephantImage, elephantX, elephantY, adjustX(450), adjustY(450));
  image(monkeyImage, monkeyX, monkeyY, adjustX(300), adjustY(300));
}
function thirdSet(){
  if(z == 0){
    zebraX = adjustX(450);
    zebraY = adjustY(500);
  }else if(z > 0 && mouseIsPressed && !(pa > 0)){
    zebraX = mouseX;
    zebraY = mouseY;
  }else if(z == -1){
    gameFourGoOnce = 0;
    zebraX = 10000;
    zebraY = 10000;
  }else{
    z = 0;
  }
  if(pa == 0){
    pandaX = adjustX(1400);
    pandaY = adjustY(550);
  }else if(pa > 0 && mouseIsPressed && !(z > 0)){
    pandaX = mouseX;
    pandaY = mouseY;
  }else if(pa == -1){
    gameFourGoOnce = 0;
    pandaX = 10000;
    pandaY = 10000;
  }else{
    pa = 0;
  }
  image(catchTheAnimalsBackground, adjustX(1530 / 2), adjustY(730 / 2), adjustX(1530), adjustY(730));
  image(net, adjustX(1250), adjustY(500), adjustX(650), adjustY(500));
  displayScoreOfGameFour();
  if(animalsCaught == 4){
    image(textBackground, adjustX(370), adjustY(70), adjustX(500), adjustY(100));
    push();
    textSize(adjustX(35));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Where is the zebra?", adjustX(350), adjustY(80));  
    pop();
    if(inNetHitBox(pandaX, pandaY) && gameFourGoOnce == 0){
      wrong.play();
      gameFourScore -= 100;
      gameColor = "RED";
      gameFourGoOnce++;
    }else if(!inNetHitBox(pandaX, pandaY)){
      gameColor = 220;
      gameFourGoOnce = 0;
    }
    if(inNetHitBox(zebraX, zebraY)){
      if(!mouseIsPressed){
        if(gameFourGoOnce == 0){
          correct.play();
          gameFourGoOnce++;
        }
        z = -1;
        animalsCaught++;
      }
    }
  }
  if(animalsCaught == 5){
    image(textBackground, adjustX(370), adjustY(70), adjustX(500), adjustY(100));
    push();
    textSize(adjustX(35));
    textAlign(CENTER);
    textFont("Comic Sans MS");
    stroke(0);
    strokeWeight(3);
    fill(255, 225, 183);
    text("Where is the panda?", adjustX(360), adjustY(80));  
    pop();
    if(inNetHitBox(pandaX, pandaY)){
      if(!mouseIsPressed){
        if(gameFourGoOnce == 0){
          gameFourGoOnce++;
          correct.play();
        }
        pa = -1;
        animalsCaught++;
      }
    }
  }
  if(mouseIsPressed && mouseX <= adjustX(570) && mouseX >= adjustX(360) && mouseY >= adjustY(400) && mouseY <= adjustY(600) && !(z > 0)){
    z++;
  }else if(mouseIsPressed && mouseX <= adjustX(1460) && mouseX >= adjustX(1340) && mouseY >= adjustY(460) && mouseY <= adjustY(640) && !(pa > 0)){
    pa++;
  }
  image(zebraImage, zebraX, zebraY, adjustX(450), adjustY(450));
  image(pandaImage, pandaX, pandaY, adjustX(250), adjustY(250));
}
function inNetHitBox(positionX, positionY){
  if(positionX >= adjustX(920) && positionX <= adjustX(1150) && positionY >= adjustY(420) && positionY <= adjustY(720)){
    return true;
  }else{
    return false;
  }
}
function playButton(){
  push();
  fill(60);
  circle(adjustX(1530 / 2), adjustY(730 / 2), adjustX(220));
  fill(174, 255, 96);
  circle(adjustX(1530 / 2), adjustY(730 / 2), adjustX(200));
  fill(255, 156, 167);
  stroke(255, 0, 0);
  strokeWeight(10);
  triangle(adjustX(730), adjustY(320), adjustX(730), adjustY(420), adjustX(820), adjustY(370));
  pop();
 
}
function titleCard(){
  textSize(adjustX(75));
  textAlign(CENTER);
  textFont("Comic Sans MS");
  stroke(0);
  strokeWeight(8);
  fill(255, 225, 183);
  text("Zoo Animal Adventures", adjustX(1530 / 2), adjustY(240));
}
function panda(){
  fill(255);stroke(200);
  strokeWeight(5);
  //body
  stroke(200);
  strokeWeight(5);
  circle(adjustX(1100), adjustY(500), adjustX(200));
  strokeWeight(0);
  //patterns
  fill(0);
  ellipse(adjustX(1070), adjustY(440), adjustX(100), adjustY(70));
  circle(adjustX(1045), adjustY(435), adjustX(60));
  //arms
  circle(adjustX(1135), adjustY(435), adjustX(50));
  circle(adjustX(1115), adjustY(440), adjustX(50));
  circle(adjustX(1135), adjustY(455), adjustX(45));
  circle(adjustX(1135), adjustY(465), adjustX(45));
  circle(adjustX(1125), adjustY(475), adjustX(45));
  circle(adjustX(1115), adjustY(485), adjustX(45));
  circle(adjustX(1100), adjustY(495), adjustX(45));
  circle(adjustX(1090), adjustY(505), adjustX(45));
  circle(adjustX(1080), adjustY(505), adjustX(45));
  circle(adjustX(1070), adjustY(505), adjustX(45));
  //ears
  fill(0);
  circle(adjustX(1100), adjustY(300), adjustX(50));
  circle(adjustX(980), adjustY(310), adjustX(50));
  fill(255, 204, 210);
  circle(adjustX(1100), adjustY(300), adjustX(20));
  circle(adjustX(980), adjustY(310), adjustX(20));
  //head
  fill(255);
  stroke(200);
  strokeWeight(5);
  ellipse(adjustX(1050), adjustY(370), adjustX(200), adjustY(150));
  //legs
  strokeWeight(0);
  fill(0);
  ellipse(adjustX(1040), adjustY(570), adjustX(200), adjustY(80));
  circle(adjustX(1100), adjustY(560), adjustX(100));
  ellipse(adjustX(965), adjustY(555), adjustX(60), adjustY(80));
  //nose
  fill(200);
  circle(adjustX(1047), adjustY(370), adjustX(35));
  circle(adjustX(1050), adjustY(380), adjustX(35));
  fill(0);
  circle(adjustX(1045), adjustY(370), adjustX(15));
  circle(adjustX(1050), adjustY(368), adjustX(15));
  fill(0);
  push();
  stroke(0);
  strokeWeight(5);
  line(adjustX(1049), adjustY(372), adjustX(1056), adjustY(393));
  pop();
  //eyes
  fill(0);
  circle(adjustX(1090), adjustY(350), adjustX(60));
  circle(adjustX(1000), adjustY(370), adjustX(60));
  fill(255);
  circle(adjustX(1000), adjustY(370), adjustX(30));
  circle(adjustX(1090), adjustY(350), adjustX(30));
  fill(0);
  circle(adjustX(990), adjustY(370), adjustX(20));
  circle(adjustX(1080), adjustY(350), adjustX(20));
  fill(255);
  circle(adjustX(988), adjustY(370), adjustX(7));
  circle(adjustX(1078), adjustY(350), adjustX(7));
  circle(adjustX(994), adjustY(368), adjustX(7));
  circle(adjustX(1084), adjustY(348), adjustX(7));
  //blush
  fill(255, 204, 210);
  circle(adjustX(1125), adjustY(380), adjustX(20));
  circle(adjustX(990), adjustY(410), adjustX(20));
  //tail
  fill(0);
  circle(adjustX(1190), adjustY(560), adjustX(40));
}
function cloudsAndSun(){
  //sun
  // fill(255, 255, 0);
  // stroke(255, 174, 59);
  // strokeWeight(10);
  // circle(adjustX(100), adjustY(100), adjustX(150));
  //clouds
  strokeWeight(5);
  fill(255);
  stroke(185);
  //cloud 1
  circle(adjustX(150), adjustY(180), adjustX(150));
  circle(adjustX(240), adjustY(210), adjustX(120));
  circle(adjustX(80), adjustY(210), adjustX(130));
  circle(adjustX(200), adjustY(180), adjustX(150));
  circle(adjustX(290), adjustY(210), adjustX(120));
  circle(adjustX(130), adjustY(210), adjustX(130));
  //cloud 2
  circle(adjustX(750), adjustY(80), adjustX(150));
  circle(adjustX(840), adjustY(110), adjustX(120));
  circle(adjustX(680), adjustY(110), adjustX(130));
  circle(adjustX(800), adjustY(80), adjustX(150));
  circle(adjustX(890), adjustY(110), adjustX(120));
  circle(adjustX(730), adjustY(110), adjustX(130));
  //cloud 3
  circle(adjustX(1250), adjustY(230), adjustX(150));
  circle(adjustX(1340), adjustY(260), adjustX(120));
  circle(adjustX(1180), adjustY(260), adjustX(130));
  circle(adjustX(1300), adjustY(230), adjustX(150));
  circle(adjustX(1390), adjustY(260), adjustX(120));
  circle(adjustX(1230), adjustY(260), adjustX(130));
  strokeWeight(0);




}
function fenceBars(){
  fill(0);
  let i;
  for(i = 15; i <= adjustX(1530); i += adjustX(45)){
    rect(i, adjustY(250), adjustX(15), adjustY(300));
  }
  rect(0, adjustY(250), adjustX(1530), adjustY(10));
}
function homeLake(){
  image(lakeImage, 0, laptopY(470), laptopX(400), laptopY(300));
}
function homeTree(){
  // fill(175, 110, 44);
  // stroke(139, 82, 24);
  // triangle(adjustX(250), adjustY(530), adjustX(200), adjustY(560), adjustX(340), adjustY(560));
  // rect(adjustX(230), adjustY(300), adjustX(50), adjustY(250));
  // stroke(1, 255, 7)
  // fill(116, 255, 119);
  // circle(adjustX(200), adjustY(310), adjustX(100));
  // circle(adjustX(230), adjustY(280), adjustY(100));
  // circle(adjustX(250), adjustY(280), adjustX(100));
  // circle(adjustX(270), adjustY(280), adjustX(100));
  // circle(adjustX(290), adjustY(310), adjustX(100));
  image(treeImage, laptopX(230), laptopY(340), laptopX(300), laptopY(300));
}
function homeGround(){
  push();
  fill(115, 219, 23);
  stroke(135, 253, 5);
  strokeWeight(10);
  ellipse(adjustX(200), adjustY(750), adjustX(1700), adjustY(630));
  homeTree();
  homeLake();
  stroke(255, 201, 124);
  fill(255, 225, 183);
  ellipse(adjustX(1000), adjustY(740), adjustX(1700), adjustY(630));
  image(rockImage, laptopX(450), laptopY(450), laptopX(200), laptopY(150));
  image(bambooImage, laptopX(1150), laptopY(350), laptopX(200), laptopY(400));
  pop();
}
function showCoordinates(){ //REMOVE ME
  fill(0);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}
function settingsButton(){
  push();
  stroke(200);
  strokeWeight(5);
  fill(255);
  circle(adjustX(58.85), adjustY(636.36), adjustX(90));
  image(settingsButtonIcon, laptopX(50), laptopY(550), laptopX(130), laptopY(130));
  pop();
}
function gameOneCircle(){
  push();
  let circleX;
  let circleY;
  let circleDiameter;
 
  circleX = adjustX(305);
  circleY = adjustY(280);
  circleDiameter = adjustX(220);
  strokeWeight(6);
  stroke(50);
  fill(255, 225, 183);
  circle(circleX, circleY, circleDiameter);
  textSize(adjustX(23));
  textAlign(CENTER);
  textFont("Comic Sans MS");
  stroke(0);
  strokeWeight(6);
  fill(255);
  text("Catch the Animals", adjustX(305), adjustY(280));
  pop();
}
function gameTwoCircle(){
  push();
  let circleX;
  let circleY;
  let circleDiameter;
 
  circleX = adjustX(590);
  circleY = adjustY(410);
  circleDiameter = adjustX(220);
  strokeWeight(6);
  stroke(50);
  fill(255, 225, 183);
  circle(circleX, circleY, circleDiameter);
  textSize(adjustX(23));
  textAlign(CENTER);
  textFont("Comic Sans MS");
  stroke(0);
  strokeWeight(6);
  fill(255);
  text("Tracing Letters", adjustX(595), adjustY(410));
  pop();
}
function gameThreeCircle(){
  push();
  let circleX;
  let circleY;
  let circleDiameter;
 
  circleX = adjustX(880);
  circleY = adjustY(280);
  circleDiameter = adjustX(220);
  strokeWeight(6);
  stroke(50);
  fill(255, 225, 183);
  circle(circleX, circleY, circleDiameter);
  textSize(adjustX(23));
  textAlign(CENTER);
  textFont("Comic Sans MS");
  stroke(0);
  strokeWeight(6);
  fill(255);
  text("Color the Animal", adjustX(880), adjustY(280));
  pop();
}
function gameFourCircle(){
  push();
  let circleX;
  let circleY;
  let circleDiameter;
 
  circleX = adjustX(1190);
  circleY = adjustY(410);
  circleDiameter = adjustX(220);
  strokeWeight(6);
  stroke(50);
  fill(255, 225, 183);
  circle(circleX, circleY, circleDiameter);
  textSize(adjustX(23));
  textAlign(CENTER);
  textFont("Comic Sans MS");
  stroke(0);
  strokeWeight(6);
  fill(255);
  text("Animal Matching", adjustX(1195), adjustY(410));
  pop();
}
function homeButton(){
  push();
  stroke(200);
  strokeWeight(5);
  fill(255, 0, 0);
  circle(adjustX(55), adjustY(58), adjustX(90));
  image(homeButtonIcon, laptopX(50), laptopY(50), laptopX(90), laptopY(90));
  pop();
}
function backButton(){
  push();
  stroke(200);
  strokeWeight(5);
  fill(255, 255, 0);
  circle(adjustX(55), adjustY(58), adjustX(90));
  image(backButtonIcon, laptopX(55), laptopY(58), laptopX(100), laptopY(100));
  pop();
}
function mouseClicked(){
  if(screenNum == 4 && mouseX > adjustX(8) && mouseX < adjustX(100) && mouseY > adjustY(8) && mouseY < adjustY(130)){ //HOME BUTTON
      screenNum = 3;
  }else if(screenNum == 12 && mouseX > adjustX(8) && mouseX < adjustX(100) && mouseY > adjustY(8) && mouseY < adjustY(130)){ 
      screenNum = 3;
  }else if(screenNum == 5 && mouseX > adjustX(8) && mouseX < adjustX(130) && mouseY > adjustY(8) && mouseY < adjustY(130)){ //HOME BUTTON
      screenNum = 3;
  }else if(screenNum == 12 && mouseX > laptopX(980) && mouseX < laptopX(1150) && mouseY > laptopY(485) && mouseY < laptopY(560)){ 
      screenNum = 7;
  }else if(screenNum == 5 && mouseX > adjustX(8) && mouseX < adjustX(130) && mouseY > adjustY(8) && mouseY < adjustY(130)){ //HOME BUTTON
      screenNum = 3;
  }else if(screenNum == 6 && mouseX > adjustX(8) && mouseX < adjustX(130) && mouseY > adjustY(8) && mouseY < adjustY(130)){ //HOME BUTTON
    screenNum = 3;
  }else if(screenNum == 8 && mouseX > adjustX(8) && mouseX < adjustX(130) && mouseY > adjustY(8) && mouseY < adjustY(130)){ //HOME BUTTON
      screenNum = 3;
  }else if(screenNum == 9 && mouseX > adjustX(8) && mouseX < adjustX(130) && mouseY > adjustY(8) && mouseY < adjustY(130)){ //HOME BUTTON
    screenNum = 3;
  }else if(screenNum == 10 && mouseX > adjustX(8) && mouseX < adjustX(130) && mouseY > adjustY(8) && mouseY < adjustY(130)){ //HOME BUTTON
    screenNum = 3;
  }else if(screenNum == 11 && mouseX > adjustX(8) && mouseX < adjustX(130) && mouseY > adjustY(8) && mouseY < adjustY(130)){ //HOME BUTTON
    screenNum = 3;
  }else if(screenNum == 7 && mouseX > adjustX(8) && mouseX < adjustX(130) && mouseY > adjustY(8) && mouseY < adjustY(130)){ //HOME BUTTON
      screenNum = 3;
  }else if(screenNum == 3 && mouseX > adjustX(190) && mouseX < adjustX(420) && mouseY > adjustY(160) && mouseY < adjustY(400)){ //GAME 1 BUTTON
      screenNum = 4;
  }else if(screenNum == 2 && mouseX > adjustX(8) && mouseX < adjustX(100) && mouseY > adjustY(8) && mouseY < adjustY(110)){ //HOME BUTTON
      screenNum = 1;
  }else if(screenNum == 3 && mouseX > adjustX(8) && mouseX < adjustX(100) && mouseY > adjustY(8) && mouseY < adjustY(110)){ //HOME BUTTON
      screenNum = 1;
  }else if(screenNum == 3 && mouseX > adjustX(480) && mouseX < adjustX(700) && mouseY > adjustY(290) && mouseY < adjustY(530)){ //GAME 2 BUTTON
       screenNum = 5;
  }else if(screenNum == 3 && mouseX > adjustX(770) && mouseX < adjustX(1000) && mouseY > adjustY(165) && mouseY < adjustY(400)){ //GAME 3 BUTTON
      screenNum = 6;
  }else if(screenNum == 3 && mouseX > adjustX(1000) && mouseX < adjustX(1300) && mouseY > adjustY(290) && mouseY < adjustY(530)){ //GAME 4 BUTTON
      screenNum = 12;
  }else if(screenNum == 4 && mouseX > adjustX(1225) && mouseX < adjustX(1475) && mouseY > adjustY(570) && mouseY < adjustY(650)){ //GAME 1 CONTINUE BUTTON;
      screenNum = 8;
  }else if(screenNum == 8 && mouseX > adjustX(1225) && mouseX < adjustX(1475) && mouseY > adjustY(570) && mouseY < adjustY(650)){
      screenNum = 9;
  }else if(screenNum == 9){
      screenNum = 10;
  }else if(screenNum == 1 && mouseX > adjustX(650) && mouseX < adjustX(890) && mouseY > adjustY(250) && mouseY < adjustY(480)){ //PLAY BUTTON
      screenNum = 3;
  }else if(screenNum == 1 && mouseX > adjustX(15) && mouseX < adjustX(105) && mouseY > adjustY(590) && mouseY < adjustY(690)){ //OPTIONS BUTTON
      screenNum = 2;
  }else if(screenNum == 11 && mouseX > adjustX(1225) && mouseX < adjustX(1475) && mouseY > adjustY(570) && mouseY < adjustY(650)){
    screenNum = 5;
  }
}
function adjustX(x){
  let newXVal;
  newXVal = windowWidth / (1530 / x); //1530 here is the width of my screen. The windowWidth may differ from device to device.
  return newXVal;
}
function adjustY(y){
  let newYVal;
  newYVal = windowHeight / (706 / y); //700 is the height of my screen. The windowHeight may differ from device to device.
  return newYVal;
}
function settingSoundBar(){
  push();
  let settingSoundCircleY = adjustY(225);
  fill(60);
  rectMode(CENTER);
  rect(adjustX(765), adjustY(225), adjustX(600), adjustY(25));
  if(mouseX > adjustX(460) && mouseX < adjustX(1050) && mouseY > adjustY(200) && mouseY < adjustY(240)){
    if(mouseIsPressed == true){
      i++;
      settingSoundCircleX = mouseX;
      push();
      let c = map(mouseX, laptopX(380), laptopX(890), 0, 1);
      nate_song.setVolume(c);
      wrong.setVolume(c);
      correct.setVolume(c);
      ramon_correct.setVolume(c);
      pop();
    }
  }
  if(i == 0){
    settingSoundCircleX = adjustX(1050);
  }
  fill(255);
  circle(settingSoundCircleX, settingSoundCircleY, adjustX(45));
  pop();
}
function settingMusicBar(){
  push();
  let settingMusicCircleY = adjustY(425);
  fill(60);
  rectMode(CENTER);
  rect(adjustX(765), adjustY(425), adjustX(600), adjustY(25));
  if(mouseX > adjustX(460) && mouseX < adjustX(1050) && mouseY > adjustY(400) && mouseY < adjustY(440)){
    if(mouseIsPressed == true){
      i++;
      settingMusicCircleX = mouseX;
      push();
      let c = map(mouseX, laptopX(380), laptopX(890), 0, 1);
      mainMenuMusic.setVolume(c);
      ramon_background_music.setVolume(c);
      gameBackgroundMusic.setVolume(c);
      gameSelectionMusic.setVolume(c);
      coloringMusic.setVolume(c);
      settingsMusic.setVolume(c);
      pop();
    }
  }
  if(i == 0){
    settingMusicCircleX = adjustX(1050);
  }
  fill(255);
  circle(settingMusicCircleX, settingMusicCircleY, adjustX(45));
  pop();
}
function desktopX(x){
  let newXVal;
  newXVal = windowWidth / (940 / x);
  return newXVal;
}
function desktopY(y){
  let newYVal;
  newYVal = windowHeight / (450 / y);
  return newYVal;
}
function desktopAX(x){
  let newXVal;
  newXVal = windowWidth / (1910 / x);
  return newXVal;
}
function desktopAY(y){
  let newYVal;
  newYVal = windowHeight / (915 / y);
  return newYVal;
}
function laptopX(x){
  let newXVal;
  newXVal = windowWidth / (1260 / x);
  return newXVal;
}
function laptopY(y){
  let newYVal;
  newYVal = windowHeight / (610 / y);
  return newYVal;
}