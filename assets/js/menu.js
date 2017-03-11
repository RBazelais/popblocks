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
