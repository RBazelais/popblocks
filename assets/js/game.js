/* Global game */
"use strict";
var player,
    blocks,

    greenBlock,
    blueBlock,
    score,
    updateDelay,

    scoreTextValue,
    LevelTextValue,
    textStyle_Key,
    textStyle_Value,
	
	answerButtons,

    answerButtonTextStyle;

var movieImage;

var selectedMovie;

//Has to be the same name as the image file.
var options = ["Austin Powers", "Forrest Gump", "Jumanji", "Little Rascals", "Scream" ];

//Functions
var preload,
    create,
    generateBlocks,
    generateAnswerButtons,
    buttonClick,
    destroyBlock,
    getRandomInt,
    game;

var scoreText;

var Game = { preload : preload, create : create };
    
// Load all the necessary resources for the level.
function preload() {
    
    var moviePath;
            
    selectedMovie = options[getRandomInt(0, 4)];
    
    moviePath = "assets/collections/90s/Movie/" + selectedMovie + ".jpg";
    
    game.load.image('Movie', moviePath);
    
    game.load.image('greenBlock', 'assets/images/block1.png');
    game.load.image('blueBlock', 'assets/images/block2.png');
    
    game.load.image('Button', 'assets/images/Button2.png');
    
}

function create() {

    //An object for the blocks
    blocks = {};
    
    //An object fo answer buttons
    answerButtons = {};
    
    //Game Score
    score = 7500;
    
    //A variable for control over update rates
    updateDelay = 0;
    
    //Mouse Input
    game.input.mouse.capture = true;
    
    // Change background color to blue?
    game.stage.backgroundColor = '#153159';
    
    // Place image on screen
    movieImage = game.add.sprite(70, 60, 'Movie');
    movieImage.scale.setTo(0.5, 0.5);
    
    // Add text to the top of the game
    textStyle_Key = { font: "bold 18px Arial", fill: "#46c0f9", align: "center" };
    textStyle_Value = { font: "bold 20px Arial", fill: "#fff", align: "center" };
    answerButtonTextStyle = { font: "18px Arial", fill: "#ffffff", align: "center" };
    
    // Display Score
    scoreText = game.add.text(30, 20, "Score: " + score.toString(), textStyle_Value);
    
    // Level One Text - will be replaced with timer eventually
    game.add.text(500, 20, "LEVEL 1", textStyle_Key);
    
    generateBlocks();
    
    generateAnswerButtons();
}

function generateBlocks() {
    
    blocks = game.add.group();
    blocks.scale.setTo(0.255, 0.255);
    
    Game.inputEnabled = true;
    
    var block,
        blockWidth,
        blockHeight,
        x,
        y;
        
    
    blockWidth = 200;
    blockHeight = 100;
    
    y = 235;
    
    for (var i = 0; i < 15; i++) {
        
        x = 265;
        
        for (var j = 0; j < 5; j++) {
            
            if (i % 2 === 0) {
                block = game.add.button(x, y, 'greenBlock', destroyBlock);
            } else {
                block = game.add.button(x, y, 'blueBlock', destroyBlock);
            }
            
            blocks.add(block);
            x += blockWidth;
        }
        
        y += blockHeight;
        
    }
}

function generateAnswerButtons() {

    answerButtons = game.add.group();
    
    var ansButton,
        buttonText,
        buttonYPos,
        buttonYTextPos,
        x,
        y,
        a,
        b;
        
    
    buttonYPos = 350;
    buttonYTextPos = 355;
    
    x = 400;
    a = 430;
    
    y = 132;
    b = 137;
    
    for (var i = 0; i < 5; i += 1) {
        
        ansButton = game.add.button(x, y, 'Button', buttonClick);
        
        //TODO Might have to definitely change this approach
        ansButton.name = options[i];
        
        buttonText = game.add.text(a, b, options[i], answerButtonTextStyle);
        
        answerButtons.add(ansButton);
        
        y += 50;
        b += 50;
    }
    
}

function buttonClick(ansButton) {

    //You picked correctly
    if (ansButton.name === selectedMovie) {
        game.state.start('Win_State');
    } else {
        game.state.start('Lose_State');
    }
}

function destroyBlock(block) {
    
    score -= 100;
    
    //Update Score
    scoreText.setText("Score: " + score.toString());
    
    block.kill();
}

function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
