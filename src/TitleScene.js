class TitleScene extends Phaser.Scene {
    constructor(test) {
      super({
        key: 'TitleScene'
      });
    }
    preload() {
    
    }
    create() {
        this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);        
    }

    update(time, delta) {
        if(this.startKey.isDown){
            this.scene.stop('GameScene');
            this.scene.start('GameScene');

        }
    }

}

export default TitleScene;
