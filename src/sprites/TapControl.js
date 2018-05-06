
export default class TapControl extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, 'tap_control');    
    config.scene.add.existing(this);
    this.setInteractive();
    this.setScrollFactor(0);
  }

  pressed() {
    
  }

}
