// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let renderer;
let scene;
let mesh;

function init() {



  // Get a reference to the container element that will hold our scene
  container = document.querySelector( '#container' );

  // create a Scene
  scene = new THREE.Scene();
  // Set the background color
  scene.background = new THREE.Color( 0x8FBCD4 );


  initCamera();
  initLights();
  initMeshes();
  initRenderer();



}

function initCamera() {

  camera = new THREE.PerspectiveCamera(
    35, // FOV
    container.clientWidth / container.clientHeight, // aspect

    0.1, // near clipping plane
    100, // far clipping plane
  );

  camera.position.set( 2, 0, 10 );

}

function initLights() {

  // Create a directional light
  const light = new THREE.DirectionalLight( 0xffffff, 3.0 );

  // move the light back and up a bit
  light.position.set( 0, 3, 3 );

  // remember to add the light to the scene
  scene.add( light );

}

function initMeshes() {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const textureLoader = new THREE.TextureLoader();

  const texture = textureLoader.load( 'textures/uv_test_bw.png' );
  texture.anisotropy = 16;

  const material = new THREE.MeshStandardMaterial( {
    map: texture,
  } );

  mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

}

function initRenderer() {

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

}


function update() {
  // call animate recursively
  // mesh.rotation.z += 0.01;
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  requestAnimationFrame( update );
  renderer.render( scene, camera );

  // console.log(requestAnimationFrame)
}

function render() {
  renderer.render( scene, camera );
}

function onWindowResize() {
  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( container.clientWidth, container.clientHeight );
  //console.log( 'window resized' );
}

window.addEventListener( 'resize', onWindowResize );


//Calling all Functions
init();
render();
update();
