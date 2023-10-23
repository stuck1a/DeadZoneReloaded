// Initialize primary renderer
let game = new PIXI.Application({
  width: 1000,
  height: 700,
  backgroundAlpha: 0
});
document.body.appendChild(game.view);

// Start main background sound
PIXI.Assets.add('bg-main', sfxPath + 'background/main.mp3');
//PIXI.sound.play('bg-main');
PIXI.Assets.load( 'bg-main' ).then( sound  => {
  sound.play({
    loop: true,
    autoplay: true,
    volume: 1.0,
  });
});
