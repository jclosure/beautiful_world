// ref: http://www.yeahbutisitflash.com/?p=5226
// ref: http://www.goodboydigital.com/pixijs/examples/
// ref: https://github.com/GoodBoyDigital/pixi.js/tree/master/examples




function init(){

  var WIDTH = 1024;
  var HEIGHT = 512;
  var stage = new PIXI.Stage();

  // let pixi choose WefarL or canvas
  var renderer;
  var far, mid, close;
  var back;

  // target render to something on dom
  renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT, document.getElementById("game-canvas"));

  // or attach render to page (or some other element)
  /*document.body.appendChild(renderer.view);*/

  //sun texture
  var backTexture = PIXI.Texture.fromImage("sun1.gif");
  back = new PIXI.Sprite(backTexture, WIDTH, HEIGHT);
  back.position.x = 20;
  back.position.y = 7;

  //mountain texture
  var farTexture = PIXI.Texture.fromImage("mountain-04.jpg");
  far = new PIXI.TilingSprite(farTexture, WIDTH, HEIGHT);
  far.position.x = 0;
  far.position.y = 0;
  far.tilePosition.x = 0;
  far.tilePosition.y = 0;

  //cloud texture
  var midTexture = PIXI.Texture.fromImage("cloud1.gif");
  mid = new PIXI.Sprite(midTexture, WIDTH, HEIGHT);
  mid.position.x = WIDTH - 40;
  mid.position.y = -10;

  //girl texture
  var closeTexture = PIXI.Texture.fromImage("girl_character.gif");
  close = new PIXI.Sprite(closeTexture, WIDTH, HEIGHT);
  close.position.x = 512 - 256;
  close.position.y = 15;
  
  //add textures to stage in order from back to front
  stage.addChild(far);
  stage.addChild(back);
  stage.addChild(mid);
  stage.addChild(close);

  //render stage
  renderer.render(stage);

  //start animation loop
  requestAnimFrame(update);

  //recursive animation looper
  function update() {
    
    far.tilePosition.x -= 0.128;
    mid.position.x -= 0.37;
    //close.position.x += 0.64;

    if (mid.position.x < 0 - 512)
      mid.position.x = WIDTH + 512;

   /* if (close.position.x > WIDTH)
      close.position.x = -512;*/

    renderer.render(stage);

    requestAnimFrame(update);
  }

}





