export function getPaulAnimations(scene) {
    scene.anims.create({
        key: "paul_run",
        frameRate: 8,
        frames: scene.anims.generateFrameNumbers('paul_run'),
        repeat: -1
    });  

    scene.anims.create({
        key: "paul_idle",
        frameRate: 8,
        frames: scene.anims.generateFrameNumbers('paul'),
        repeat: -1
    });  

    scene.anims.create({
        key: "steve_run",
        frameRate: 8,
        frames: scene.anims.generateFrameNumbers('steve_run'),
        repeat: -1
    });  

    scene.anims.create({
        key: "steve_idle",
        frameRate: 8,
        frames: scene.anims.generateFrameNumbers('steve'),
        repeat: -1
    });  
}