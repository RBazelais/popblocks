"use strict";

var preload,
    create,
	textStyle_Value,
    goToMainMenu_Win;

var winTextStyle,
	winTextStyle_Answer,
	winTextStyle_Key,
	winTextStyle_Val,
	nextLevelButtonStyle,
	nextLevelTextStyle,
	nextLevelButton,
	nextLevelText;

var Win_State = { preload : preload, create : create };

function preload() {


    "use strict";

    game.load.image('win_State', './assets/images/sharedBackground.png');
	textStyle_Value = { font: "bold 34px Arial", fill: "#ffffff", align: "center" };
}

function create() {

    //Adds button to contiue

    game.add.image(0, 0, 'win_State', goToMainMenu_Win);

	//Text Styles
	winTextStyle = { font: "bold 28px Arial", fill: "#ffffff", align: "center"};
	winTextStyle_Answer = { font: "bold 28px Arial", fill: "#fde041", align: "center"};
	nextLevelTextStyle = { font: "bold 28px Arial", fill: "#ffffff", align: "center"};

	winTextStyle_Key = { font: "bold 28px Arial", fill: "#ffffff", align: "center"};
	winTextStyle_Val = { font: "bold 28px Arial", fill: "#fde041", align: "center"};

	//You remembered
	game.add.text(game.world.centerX - 55, 8, "Level 1", winTextStyle);
	game.add.text(game.world.centerX - 140, 62, "You Remembered:", winTextStyle);
	game.add.text(game.world.centerX - 70, 96, selectedMovie.toString(), winTextStyle_Answer);

	// Add text with the score value from the last level
	game.add.text(game.world.centerX - 90, 185, "Total Score:", winTextStyle_Key);
	game.add.text(game.world.centerX - 40, 230, score.toString(), winTextStyle_Val);

	// Next Level Button

	nextLevelButton = game.add.button(game.world.centerX - 110, game.world.centerY + 175, 'Button', goToMainMenu_Lose);

	nextLevelText = game.add.text(game.world.centerX - 80, game.world.centerY + 180, "Main Menu", nextLevelTextStyle);

}

function goToMainMenu_Win() {

	nextLevelButton = game.add.button(game.world.centerX - 110, game.world.centerY + 175, 'Button', this.mainMenu, this);

	nextLevelText = game.add.text(game.world.centerX - 80, game.world.centerY + 180, "Main Menu", nextLevelTextStyle);

}

function goToMainMenu_Win() {


    game.state.start('MainMenu');
}
