import Phaser from 'phaser';
import BootScene from './BootScene';
import GameScene from './GameScene';
import TitleScene from './TitleScene';
import DashScene from './DashScene';
import ChooseFriendScene from './ChooseFriendScene';
import PlayerScene from './PlayerScene';
import Settings from './constants';

var configuration = {
'canvas_width_max' : 2048,                  
'canvas_width' : 800,                      
'canvas_height_max' : 2048,             
'canvas_height' : 450,                      
'scale_ratio' : 1,                          
'aspect_ratio' : 1,                         
};

let config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: window.innerWidth ,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: [
        BootScene,
        TitleScene,
        GameScene,
        DashScene,
        ChooseFriendScene,
        PlayerScene
    ]
};

let game = new Phaser.Game(config);
