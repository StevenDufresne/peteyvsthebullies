import { getPaulAnimations } from 'helpers/animations';
import Paul from './sprites/paul';
import Steve from './sprites/steve';
import TapControl from './sprites/TapControl';
import Settings from './constants';
import DashGround from './sprites/dashground';
import ScreenComplete from './sprites/ScreenComplete';
import ScreenChallenge from './sprites/ScreenChallenge';
import DataProvider from './helpers/DataProvider';
import { displayTime } from './helpers/TimeHelper';
import LevelProvider from './helpers/LevelProvider';

class GameScene extends Phaser.Scene {
    constructor(test) {
      super({
        key: 'DashScene'
      });


      this.cdTimerConfig = {
        delay: 1000,
        callback: this.cdTimerEvent,
        callbackScope: this,
        loop: true
      }

      this.gameTimerConfig = {
        delay: 1000,
        callback: this.gameTimerEvent,
        callbackScope: this,
        loop: true
      }

      this.lp = new LevelProvider();

    }

    preload() {
      getPaulAnimations(this);
      this.levelNumber = this.registry.get('dashLevel');
      this.player = this.registry.get('player');
      this.comp = this.player.getCompletedLevels('dash');
      this.level = this.lp.getLevel('dash')[this.levelNumber];

      //Setup the level
      this.finishLine = this.level.distance;
      this.timeToBeat = this.level.time;

      this.started = false;
      this.levelWidth = 50000;


      this.countdown = 3;
      this.myTime = 0;
      this.startTime = 0;
      this.logTime = false;
      this.started = false;
      this.gameWidth = this.sys.game.config.width;
      this.gameHeight= this.sys.game.config.height;

    }

    create() {
      this.physics.world.setBounds(0, 0, this.levelWidth, this.gameHeight)


     

      this.sky = this.add.tileSprite(0, 0, this.levelWidth, this.gameHeight, 'sky').setOrigin(0,0);

      //Steve's Setup
      this.steveTrack = new DashGround({
        scene: this,
        x: 0,
        y: (this.gameHeight / 1.5)-108,
        width: this.levelWidth,
        height: 108,     
      })  

      this.steve = new Steve({
        scene: this,
        x: 0,
        y: 0,
        speed: this.level.steveVelocity
      })

      this.physics.add.collider(this.steve, this.steveTrack, this.setFriction, null, this);

      //Paul's Setup
      this.track = new DashGround({
        scene: this,
        x: 0,
        y: this.gameHeight / 1.5,
        width: this.levelWidth,
        height: 108
      })  

      this.p = new Paul({
        scene: this,
        x: 0,
        y: 0,
        strength: this.player.strength,
        endurance: this.player.endurance
      })

      this.physics.add.collider(this.p, this.track, this.setFriction, null, this);

      this.cameras.main.setBounds(0, 0, this.levelWidth, 100);
      this.cameras.main.startFollow(this.p, true);

      this.addMeterLines();

      this.screenChallenge = new ScreenChallenge({
        scene: this,
        x: this.gameWidth/2,
        y: this.gameHeight/2,
      })

      this.screenChallenge.on('pointerdown', this.startGame, this);

      this.screenChallenge.setCaption('Level: ' + (this.levelNumber + 1))


      // setup counter
      this.cd = this.add.text(0, 0, this.countdown, 
        { font: "32px Arial", fill: "#fff", align: "center" });

      Phaser.Display.Align.In.Center(this.cd, this.add.zone(this.gameWidth/2, this.gameHeight/2, this.gameWidth, this.gameHeight))
      this.cd.visible = false;


    }

    startGame(){
      this.screenChallenge.kill();
      this.cdTimer = this.time.addEvent(this.cdTimerConfig);
    }

    addMeterLines () {
      const max = 6;
      const sect = this.finishLine / max;

      for(var i = 1; i <= max; i++) {
       var line =  this.add.sprite(i * sect, this.gameHeight,'finish_line').setOrigin(0.5,1);
       line.alpha = 0.3;

       if(i == (max)) {
         line.alpha = 1;
       }
        this.add.existing(line);
      }
    }

    update(time, delta)  {

      if(this.logTime) {
        this.startTime = time;
        this.logTime = false;      
      }
      
      if(this.started ) {
        this.myTime = (time - this.startTime);
        this.showTimerScore();
      }
      
      this.steve.update(time, delta);
      this.p.update(time, delta);
    }

    gameTimerEvent(arg1, arg2) {
      if(this.p.body.x >= this.finishLine) {
        this.started = false;
        this.cameras.main.startFollow(null);
        
        this.showEndView();
      }
    }

    showEndView() {
        this.showComplete();
        this.gameTimer.remove(false);
        this.p.end();
    }

    showTimerScore() {
      var time = `${displayTime(this.myTime)}s`;
    }

    showComplete() {
      let assets = 'screen_failure'
      let text = "Oh Noy"


      if(this.p.body.x >= this.steve.body.x) {
        const award = this.lp.getDashAward(this.myTime, this.level);

        this.player.updateLevel('dash', {
          time: this.myTime,
          award: award,
        })

        assets = 'screen_complete';
        text = award.tag;
      }

      this.sc = new ScreenComplete({
        scene: this,
        x: this.gameWidth/2,
        y: this.gameHeight/2 - 100,
        asset: assets
      })

      this.sc.setCaption(text)
      this.sc.show();
    }

    showCountdown() {
      let txt = this.countdown

      if(this.countdown == 0) {
        txt = "Go"
      }

      this.cd.setText(txt);
      this.cd.visible = true;
    }

    hideCountdown() {
      this.cd.destroy();
    }

    cdTimerEvent() {
      if(this.countdown < 0) {
        this.cdTimer.remove(false);
        this.hideCountdown();
        this.started = true;
        this.logTime = true;
        this.p.start();
        this.steve.start();
        this.gameTimer = this.time.addEvent(this.gameTimerConfig);
        return;
      }

      if(this.countdown < 4) {
        this.showCountdown();
      }
    
      this.countdown--;  
    }

}


export default GameScene;
