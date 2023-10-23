// Create a sprite
imgFooTest = PIXI.Sprite.from(gfxPath + 'icons/FooTest.png');

// center the sprite's anchor point
imgFooTest.anchor.set(0.5);

// move the sprite to the center of the screen
imgFooTest.x = game.screen.width / 2;
imgFooTest.y = game.screen.height / 2;


// Add sprite to the stage
game.stage.addChild(imgFooTest);

// Add a ticker callback to move the sprite back and forth
game.ticker.add((delta) => {
  runtime += delta;
  imgFooTest.x = imgFooTest.x + Math.cos(runtime/10) * 20;
  imgFooTest.y = imgFooTest.y + Math.cos(runtime/10) * 20;
});
