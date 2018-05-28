import AnimatedTiles from 'phaser-animated-tiles';
import Player from './lib/player';

class BootScene extends Phaser.Scene {
    constructor(test) {
      super({
        key: 'BootScene'
      });
    }

    preload() {
      this.load.image('dash_bg', 'assets/images/background.png');
      this.load.image('sky', 'assets/images/sky.png')
      this.load.image('track', 'assets/images/track.png');
      this.load.image('finish_line', 'assets/images/finishline.png');
      this.load.image('screen_complete', 'assets/images/screencomplete.png');
      this.load.image('screen_failure', 'assets/images/failurescreen.png');
      this.load.image('tap_control', 'assets/images/tapcontrol.png')
      this.load.image('need_beat', 'assets/images/need_beat.png')
      this.load.image('player_board', 'assets/images/player_board.png')
      this.load.image('chalkboard', 'assets/images/chalkboard.png')
      this.load.image('petey', 'assets/images/petey.png')

      //game
      this.load.image('game_container', 'assets/images/game_container.png')
      this.load.image('game_complete_bronze', 'assets/images/game_complete_bronze.png')
      this.load.image('game_complete_silver', 'assets/images/game_complete_silver.png')
      this.load.image('game_complete_gold', 'assets/images/game_complete_gold.png')


      this.load.image('game_open', 'assets/images/game_open.png')
      this.load.image('game_locked', 'assets/images/game_locked.png')

      //game sprite
      this.load.spritesheet('game_sprite', 'assets/images/gamesprite.png',
        { frameWidth: 150, frameHeight: 150 })

      //Paul character
      this.load.spritesheet('paul_run', 'assets/images/character40x40_run.png',
        { frameWidth: 40, frameHeight: 40})

      this.load.spritesheet('paul', 'assets/images/character40x40.png',
        { frameWidth: 40, frameHeight: 40})

      this.load.spritesheet('steve', 'assets/images/ninja_idle232x439.png',
        { frameWidth: 232, frameHeight: 439})

      this.load.spritesheet('steve_run', 'assets/images/ninja_run232x439.png',
        { frameWidth: 363, frameHeight: 439})

      this.load.spritesheet('power_sprite', 'assets/images/power_sprite50x50.png',
        { frameWidth: 50, frameHeight: 50 })


      this.player = new Player(this);

    }
    create() {
      this.player.save();
      this.scene.start('PlayerScene');   
    }
}

export default BootScene;
