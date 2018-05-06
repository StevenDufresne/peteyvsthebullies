
export default class DashGround extends Phaser.GameObjects.TileSprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.width, config.height, 'track');    
    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);  
    this.body.immovable = true;
    this.body.allowGravity = false;

    this.body.setSize(100000, 20, true) ;
  }

}
