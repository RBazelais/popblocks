/*
var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('menu', './assets/images/menu.png');
    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        this.add.button(0, 0, 'menu', this.startGame, this);

    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');

    }

};
*/
"use strict";

//Declaring Functions so that the IDE stops yelling at me.
var preload,
    create,
    startGame,
    game;

var MainMenu = { preload : preload, create : create };

function preload() {
    
    game.load.image('menu', './assets/images/menu.png');
}

function create() {

    
    game.add.button(0, 0, 'menu', startGame);
}

function startGame() {

    game.state.start('Game');
    
}


