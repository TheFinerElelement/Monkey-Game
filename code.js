var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["11bd4e7d-aaa6-432a-ada9-e6ed6923658a","3f87252f-8213-4d92-b871-b41b3fd429a3","d5c32175-3b57-4928-bf8b-6eda914f46dc","2abf9dad-1071-47be-ba76-953adcefe037"],"propsByKey":{"11bd4e7d-aaa6-432a-ada9-e6ed6923658a":{"name":"monkey_1","sourceUrl":null,"frameSize":{"x":308,"y":257},"frameCount":1,"looping":true,"frameDelay":12,"version":"pYaYw5w4ZIgcWTupwUwze8LwBfFj42ro","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":257},"rootRelativePath":"assets/11bd4e7d-aaa6-432a-ada9-e6ed6923658a.png"},"3f87252f-8213-4d92-b871-b41b3fd429a3":{"name":"ore_ironAlt_1","sourceUrl":"assets/api/v1/animation-library/gamelab/m9x6KVw.tjQn.uHWZ7WAZptfOwgt_9mC/category_obstacles/ore_ironAlt.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"m9x6KVw.tjQn.uHWZ7WAZptfOwgt_9mC","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/m9x6KVw.tjQn.uHWZ7WAZptfOwgt_9mC/category_obstacles/ore_ironAlt.png"},"d5c32175-3b57-4928-bf8b-6eda914f46dc":{"name":"bannana_1","sourceUrl":null,"frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":12,"version":"fmgvooTEXMelqJcEmlpPeTbRaT8arboZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/d5c32175-3b57-4928-bf8b-6eda914f46dc.png"},"2abf9dad-1071-47be-ba76-953adcefe037":{"name":"meadow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png"}}};
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

var monkey = createSprite(130, 340, 40, 60);
monkey.setAnimation("monkey_1");
monkey.scale = 0.2;
var ground = createSprite(200, 375, 420, 10);
var rock = createSprite(420, 350, 40, 40);
rock.shapeColor = "Brown";
monkey.velocityY = 9;
var banana = createSprite(420, 300);
banana.setAnimation("bannana_1");
banana.scale = 0.1;
var score = 0;
function draw() {
  background("white");
  drawSprites();
  text("Banannas="+score, 125, 95);
  rock.velocityX = -7;
  banana.velocityX = -7;
  monkey.velocityY = 10;
  if (keyDown("space")&&monkey.y>=280) {
  monkey.y = monkey.y-15;
  }
  if ((rock.x) <= 0) {
    rock.x = 400;
  }
  if (monkey.isTouching(banana)) {
    banana.x = 450;
    score = score+1;
  }
  monkey.collide(ground);
  if (monkey.isTouching(rock)) {
    rock.velocityX = 0;
    banana.velocityX = 0;
    monkey.velocityY = 0;
    text("GAME OVER", 130, 45);
    textSize(50);
  }
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
