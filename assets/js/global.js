// Initialize primary renderer
let app = new PIXI.Application({
  width: 800,
  height: 600
});
document.body.appendChild(app.view);

// Setup paths
const gfxPath = '/assets/gfx/';
const sfxPath = '/assets/sfx/';

// Initialize global variables
let elapsed = 0.0;    // Contains the total time the game is running

// Create a sprite
let imgFooTest = PIXI.Sprite.from(gfxPath + 'icons/FooTest.png');

// Add sprite to the stage
app.stage.addChild(imgFooTest);


// Add a ticker callback to move the sprite back and forth
app.ticker.add((delta) => {
  elapsed += delta;
  imgFooTest.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});

