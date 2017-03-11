var game;

var MainMenu,
    Game,
    Lose_State,
    Win_State;

// Game instance 640px wide and 480px tall:
game = new Phaser.Game(640, 480, Phaser.AUTO, '');

game.state.add('MainMenu', MainMenu);

game.state.add('Game', Game);

game.state.add('Lose_State', Lose_State);

game.state.add('Win_State', Win_State);

game.state.start('MainMenu');
