
async function loadScreen() {
  await PIXI.Assets.loadBundle('load-screen');
  PIXI.Assets.load('sfx/ambient/main').then(sound => {
    sound.play({
      loop: true,
      autoplay: true,
      volume: 1.0
    });
  });
} 

export { loadScreen };
