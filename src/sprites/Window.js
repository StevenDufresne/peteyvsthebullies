
export default class Window extends Phaser.GameObjects.TileSprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.width, config.height, 'chalkboard');    
    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);  
    this.body.immovable = true;
    this.body.allowGravity = false;

  }
}
