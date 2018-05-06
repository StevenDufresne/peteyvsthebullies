
export default class ScreenComplete extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.asset); 
    this.scene = config.scene;   
    this.scene.add.existing(this);
    this.setInteractive();
    this.setScrollFactor(0);

    this.scCaption = this.scene.add.text(config.x, config.y, "shit!!!", 
    { font: "32px Arial", fill: "#fff", align: "center" })
    .setOrigin(0.5,0.5)
    .setScrollFactor(0);
    
    //Add click events
    this.on('pointerdown', this.challengeFriend, this);

    //Hide everything
    this.visible = false;
    this.scCaption.visible = false;

  }

  show() {
    this.visible = true;
    this.scCaption.visible = true;
  }

  challengeFriend() {
    this.scene.scene.start("GameScene");
  }

  setCaption(txt) {
    this.scCaption.setText(txt);
  }
}
