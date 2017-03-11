/*
var Lose_State = {

    preload : function() {
        // Load the needed image for this game screen.
        game.load.image('lose_state', './assets/images/lose_state.png');
    },

    create : function() {

        // Creates button to start game like in Menu
        this.add.button(0, 0, 'Go To Main Menu', this.mainMenu, this);

        // Add text with information about the score from last level
        game.add.text(205, 350, "SCORE: ", { font: "bold 34px Arial", fill: "#46c0f9", align: "center"});
        game.add.text(350, 350, score.toString(), { font: "bold 34px Arial", fill: "#ffffff", align: "center" });

    },

    mainMenu: function () {

        // Change the state 
        this.state.start('Menu');

    }

};
*/
"use strict";
var preload,
    create,
    goToMainMenu_Lose;

var Lose_State = { preload : preload, create : create };

function preload() {

    game.load.image('lose_state', './assets/images/sharedBackground.png');
}

function create() {
    
    //Adds button to continue

    game.add.image(0, 0, 'lose_state', goToMainMenu_Lose);
    
    //Text Styles
	winTextStyle = { font: "bold 28px Arial", fill: "#ffffff", align: "center"};
	winTextStyle_Answer = { font: "bold 28px Arial", fill: "#fde041", align: "center"};
	nextLevelTextStyle = { font: "bold 28px Arial", fill: "#ffffff", align: "center"};

	winTextStyle_Key = { font: "bold 28px Arial", fill: "#ffffff", align: "center"};
	winTextStyle_Val = { font: "bold 28px Arial", fill: "#fde041", align: "center"};

	//You remembered
	game.add.text(game.world.centerX - 60, 8, "Level 1", winTextStyle);
	game.add.text(game.world.centerX - 165, 62, "You Did Not Remember:", winTextStyle);
	game.add.text(game.world.centerX - 80, 96, selectedMovie.toString(), winTextStyle_Answer);

	// Add text with the score value from the last level
	game.add.text(game.world.centerX - 90, 185, "Total Score:", winTextStyle_Key);
	game.add.text(game.world.centerX - 40, 230, score.toString(), winTextStyle_Val);

	// Next Level Button
	nextLevelButton = game.add.button(game.world.centerX - 110, game.world.centerY + 175, 'Button', goToMainMenu_Lose);

	nextLevelText = game.add.text(game.world.centerX - 80, game.world.centerY + 180, "Main Menu", nextLevelTextStyle);
	
}

function goToMainMenu_Lose() {

   
    game.state.start('MainMenu');
    
}
