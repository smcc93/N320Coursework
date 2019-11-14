var canvas = document.getElementById("renderCanvas"); // Get the canvas element
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
var camera;

var dodecahedron,
  dodecahedron2,
  dodecahedron3,
  light,
  blueMat,
  whiteMat,
  greenMat;
var selectedMesh = null;

var scene = createScene(); //Call the createScene function

function createScene() {
  // Create the scene space
  var scene = new BABYLON.Scene(engine);

  // Add a camera to the scene and attach it to the canvas
  camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 4,
    4,
    BABYLON.Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);

  // Add lights to the scene
  var myLight = new BABYLON.DirectionalLight(
    "dir01",
    new BABYLON.Vector3(0, -0.5, 1.0),
    scene
  );

  // Add and manipulate meshes in the scene
  dodecahedron = BABYLON.MeshBuilder.CreatePolyhedron(
    "dodec",
    { type: 2, size: 0.5 },
    scene
  );
  dodecahedron2 = BABYLON.MeshBuilder.CreatePolyhedron(
    "dodec",
    { type: 2, size: 0.5 },
    scene
  );
  dodecahedron3 = BABYLON.MeshBuilder.CreatePolyhedron(
    "dodec",
    { type: 2, size: 0.5 },
    scene
  );

  dodecahedron.position = new BABYLON.Vector3(0, 0, 0);
  dodecahedron2.position = new BABYLON.Vector3(1.5, 0, 0);
  dodecahedron3.position = new BABYLON.Vector3(-1.5, 0, 0);
  // var lesserSphere = BABYLON.MeshBuilder.CreateSphere(
  //   "sphere2",
  //   { diameter: 0.2 },
  //   scene
  // );
  // lesserSphere.position.z = 1;

  // sphere.addChild(lesserSphere);
  light = new BABYLON.HemisphericLight(
    "HemiLight",
    new BABYLON.Vector3(1, 1, 0),
    scene
  );

  blueMat = new BABYLON.StandardMaterial("ground", scene);
  blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  blueMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  blueMat.emissiveColor = BABYLON.Color3.Blue();

  whiteMat = new BABYLON.StandardMaterial("ground", scene);
  whiteMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  whiteMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  whiteMat.emissiveColor = BABYLON.Color3.White();

  greenMat = new BABYLON.StandardMaterial("ground", scene);
  greenMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  greenMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  greenMat.emissiveColor = BABYLON.Color3.Green();

  return scene;
}

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
  //sphere.rotate(BABYLON.Axis.Y, .01, BABYLON.Space.WORLD);
  scene.render();
});

function checkUp() {
  console.log(selectedMesh.rotation.x);
  if (
    dodecahedron.rotation.x == dodecahedron2.rotation.x &&
    dodecahedron2.rotation.x == dodecahedron3.rotation.x
  ) {
    dodecahedron.material = greenMat;
    dodecahedron2.material = greenMat;
    dodecahedron3.material = greenMat;
    // } else {
  }
}

window.addEventListener("keydown", event => {
  if (selectedMesh) {
    if (event.keyCode == 87) {
      TweenLite.to(selectedMesh.rotation, 1, {
        x: "+=20",
        onComplete: checkUp
      });
    }
  }
});

window.addEventListener("keydown", event => {
  if (selectedMesh) {
    if (event.keyCode == 83) {
      TweenLite.to(selectedMesh.rotation, 1, {
        x: "-=20",
        onComplete: checkUp
      });
    }
  }
});

window.addEventListener("click", function() {
  // We try to pick an object
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  if (selectedMesh) {
    selectedMesh.material = whiteMat;
  }
  pickResult.pickedMesh.material = blueMat;

  selectedMesh = pickResult.pickedMesh;
});
