//Create New Scene
var scene = new THREE.Scene();
//Create Camera FOV
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 200;
//Render Scene
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Controlling object to orbit around and zoom in
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

//Limit Camera Zooming
controls.minDistance = 100;
controls.maxDistance = 200;

//Scene/Object Lighting
var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

//Material Loading to Object
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/examples/3d-obj-loader/assets/');
mtlLoader.setPath('/models/3d-obj-loader/assets/');
mtlLoader.load('r2-d2.mtl', function (materials) {
  materials.preload();

  //Object Loader to Scene
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath('/models/3d-obj-loader/assets/');
  objLoader.load('r2-d2.obj', function (object) {

    scene.add(object);
    object.position.y -= 60;

  });

});

//Update controls in Scene - Recurring method
var start = function () {
  requestAnimationFrame( start );
  controls.update();
  renderer.render(scene, camera);
};

//Initiat Scene and Object
start();
