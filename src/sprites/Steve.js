
export default class Steve extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, 'steve');
    this.scene = config.scene;
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.setInteractive();
    this.setScale(0.25);
    this.momentum = 0;
    this.started = false;
    this.endMomentum = config.speed;

    this.anims.load('steve');
    this.anims.load('steve_run');
    this.anims.play('steve_idle');
    this.scene.scene.bringToTop(this);

    this.accelConfig = {
      delay: 100,
      callback: this.accelTimerEvent,
      callbackScope: this,
      repeat: this.endMomentum
    }
  }

  accelTimerEvent() { 
    const mom = this.endMomentum / 100;
    this.momentum += (mom);
  }

  update(time, delta) {
    if(this.body && this.started) {
      this.body.setVelocityX(this.momentum);
      this.anims.play('steve_run', true);
    }
  }

  start() {
    this.started = true;
    this.accelTimer = this.scene.time.addEvent(this.accelConfig);
  }

  end() {
   this.started = false;
  }

}
