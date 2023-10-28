
async function loadScreen(game) {
  await PIXI.Assets.loadBundle('compound-screen');
  let imgBackgroundLoading = PIXI.Assets.get('gfx/hud/bg');
  let heart = PIXI.Assets.get('sfx/ambient/main');
  let bgSound = PIXI.Assets.get('gfx/hud/bg');
  
  heart.anchor.set(0.5);
  heart.x = game.screen.width / 2;
  heart.y = game.screen.height / 2;
  imgBackgroundLoading.height = game.screen.height;
  imgBackgroundLoading.width = game.screen.width;
  
  game.stage.addChild(imgBackgroundLoading);
  game.stage.addChild(heart);
  
  let max_x = game.screen.width - heart.width / 2;
  let min_x = heart.width / 2;
  const speed = 10;
  let direction = 'right';
  
  game.ticker.add((delta) => {
    heart.x = (direction === 'right' ? heart.x + speed : heart.x - speed);
    if (heart.x >= max_x) direction = 'left';
    if (heart.x <= min_x) direction = 'right';
  });
} 
  
export { loadScreen };
