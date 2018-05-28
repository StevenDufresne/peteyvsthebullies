import LevelProvider from './helpers/LevelProvider';

class GameScene extends Phaser.Scene {
    constructor(test) {
      super({
        key: 'GameScene'
      });

        this.lp = new LevelProvider();
    }
    preload() {}
    create() {
        this.player = this.registry.get('player');
        this.sky = this.add.tileSprite(0, 0, this.sys.game.config.width, this.sys.game.config.height, 'sky').setOrigin(0,0);


        this.addGameTitle(10, 50, "Mad Dash");
        this.addGameSubTitle(10, 90, "Take steve down in an epic race!")
        this.addGameRow(10, 120, 'dash');

        //TEMPORARY
        this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);        

    }

    addGameTitle(x, y, title) {
        var title = this.add.text(x, y, title, 
        { font: "32px Acme", fill: "#fff", align: "center" });
        this.add.existing(title);
    }

    addGameSubTitle(x, y, copy) {
        var title = this.add.text(x, y, copy, 
        { font: "16px Arial", fill: "#fff", align: "center" });
        this.add.existing(title);
    }

    addGameRow(startX, startY, key) {
        const levelComplete = this.player.levels[key].length;
        const gap = 8;

        for(var i = 0; i < this.lp.levels[key].length; i++) {
            let asset = 'game_locked';

            if(i < levelComplete) {
                asset = `game_complete_${this.player.levels[key][i].award.tag}`;
            }

            if(i == (levelComplete)) {
                asset = 'game_open';
            }


            var spr = this.add.sprite((startX) + (i * (45 + gap)), (startY), asset).setOrigin(0, 0).setInteractive();
            this.add.existing(spr);
            
            if(i <= levelComplete) {
                spr.on('pointerdown', function () {
                        this.obj.registry.set('dashLevel', this.id);
                        this.obj.scene.stop('DashScene');
                        this.obj.scene.start('DashScene');
                    }, { obj: this, id: i })
                }
            }

    }

    update(time, delta)  {
       if(this.startKey.isDown){
          this.scene.stop('PlayerScene');
          this.scene.start('PlayerScene');
      }

    }

}

export default GameScene;
