var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ba358c83-a9fd-4467-bbb1-5fa327db9fb9","fa39e5ae-c824-48f9-ab28-50f1afa490d2"],"propsByKey":{"ba358c83-a9fd-4467-bbb1-5fa327db9fb9":{"name":"bg","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"MYnY8SBVKPLaf.dRVH2IQR33TmMW5yv8","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/ba358c83-a9fd-4467-bbb1-5fa327db9fb9.png"},"fa39e5ae-c824-48f9-ab28-50f1afa490d2":{"name":"char","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":9,"looping":true,"frameDelay":12,"version":"XX2mCaWD_8Akt2GNxrp0JiLBqiuw9nwE","loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":45},"rootRelativePath":"assets/fa39e5ae-c824-48f9-ab28-50f1afa490d2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg=createSprite(200,200,400,400);
  bg.setAnimation("bg");
var char=createSprite(200,200,15,15);
  char.setAnimation("char");
function draw() {
  createEdgeSprites();
  background("white");
  
  if(keyDown("left"))
  {
    char.x-=1;
  }
  if(keyDown("right"))
  {
    char.x+=1;
  }
  
  if(char.x<=165)
  {
    char.x++;
  }
  if(char.x>=235)
  {
    char.x--;
  }
  
  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
