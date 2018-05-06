import Player from './lib/player';

class PlayerScene extends Phaser.Scene {
    constructor(test) {
      super({
        key: 'PlayerScene'
      });

    }

    preload() { }

    create() {
      this.player = this.registry.get('player');
      this.pboard = this.add.sprite(100,100, 'player_board').setInteractive();
      this.add.existing(this.pboard)

      this.pEndurance = this.add.text(90, 65,  this.player.endurance);
      this.pStrength = this.add.text(90, 90,  this.player.strength);
      this.pSmarts = this.add.text(90, 120,  this.player.smarts);

      this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);     

      this.pboard.on('pointerdown', this.tapped, this);
   

    }

    tapped() {
      this.scene.stop('GameScene');
      this.scene.start('GameScene');
    }

    update(time, delta) {
      if(this.startKey.isDown){
          this.scene.stop('GameScene');
          this.scene.start('GameScene');
      }
    }
}

export default PlayerScene;
