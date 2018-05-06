import LevelProvider from './helpers/LevelProvider';

class GameScene extends Phaser.Scene {
    constructor(test) {
      super({
        key: 'GameScene'
      });

        this.lp = new LevelProvider();
    }
    preload() {
    }
    create() {
        this.player = this.registry.get('player');


        this.addGameRow(100, 100, 'dash');

        //TEMPORARY
        this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);        

    }

    addGameRow(startX, startY, key) {

        var gc = this.add.sprite(startX,startY, 'game_container').setOrigin(0, 0);

        const levelComplete = this.player.levels[key].length;

        for(var i = 0; i < this.lp.levels[key].length; i++) {
            let asset = 'game_locked';

            if(i < levelComplete) {
                console.log(this.player.levels[key][i].award.tag)
                asset = `game_complete_${this.player.levels[key][i].award.tag}`;
            }

            if(i == (levelComplete)) {
                asset = 'game_open';
            }


            var spr = this.add.sprite((startX + 4) + (i * 49), (startY + 4), asset).setOrigin(0, 0).setInteractive();
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
