
export default class Paul extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, 'paul');
    this.scene = config.scene;
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.setInteractive();
    this.momentum = config.strength;
    this.speedFactor = 10 + (config.strength * 0.5);
    this.frictionFactor = 1.5 - (config.endurance * 0.05);
    this.setScale(3);
    this.started = false;

    this.anims.load('paul_idle');
    this.anims.load('paul_run');
    this.anims.play('paul_idle');

    this.on('pointerdown', this.tapped, this);
    this.scene.scene.bringToTop(this);
  }

  update(time, delta) {
    if(this.momentum > 0) {
      this.anims.play('paul_run', true);
      this.friction();
    } else {
      this.anims.play('paul_idle', true)
    }

    this.body.setVelocityX(this.momentum);
  }

  start() {
   this.started = true;
  }

  end() {
   this.started = false;
  }

  friction() {
    let newSteps = this.momentum - this.frictionFactor;
    this.momentum = Math.max(0, newSteps)
  }

  tapped() {
    if(this.started) {
      this.momentum += (this.speedFactor * 2);
    }
  }

}
