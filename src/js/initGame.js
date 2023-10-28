import * as load from './screens/load.js';
import * as compound  from './screens/compound.js';



let game;
document.addEventListener('DOMContentLoaded', init);


function init() {
  game = new PIXI.Application({
    width: 960,
    height: 920,
    backgroundAlpha: 0
  });
  document.body.appendChild(game.view);
  PIXI.Assets
    .init({manifest: '/assets/assets.json'})
    .then(load.loadScreen)
    .then(compound.loadScreen);
}


