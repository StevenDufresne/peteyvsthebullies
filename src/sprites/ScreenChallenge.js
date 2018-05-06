
export default class ScreenChallenge extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, 'need_beat'); 
    this.scene = config.scene;   
    this.scene.add.existing(this);
    this.setInteractive();

    this.screenChallengeCaption = this.scene.add.text(config.x,  config.y, "", 
      { font: "32px Arial", fill: "#fff", align: "center" }).setOrigin(0.5,0.5);

  }

  kill() {
    this.screenChallengeCaption.destroy();
    this.destroy();
  }

  setCaption(txt) {
    this.screenChallengeCaption.setText(txt);
  }
}
