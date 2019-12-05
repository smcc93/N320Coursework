var canvas = document.getElementById("renderCanvas");

var camera, scene;

//setup engine
var engine = new BABYLON.Engine(canvas, true);

scene = createScene();
engine.runRenderLoop(function() {
  scene.render();
});

function createScene() {
  var scene = new BABYLON.Scene(engine);

  //add camera
  camera = new BABYLON.ArcRotateCamera(
    "c",
    Math.PI / 2,
    Math.PI / 4,
    4,
    BABYLON.Vector3.Zero(),
    scene
  );

  var light = new BABYLON.DirectionalLight(
    "l",
    new BABYLON.Vector3(0, -0.5, 1.0),
    scene
  );

  return scene;
}
//end setup
