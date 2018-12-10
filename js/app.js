let container;
let camera;
let renderer;
let scene;
let mesh;

// A function to initialize or start the scene
function init(){

  // Container element that will adopt our scene
  const container = document.querySelector( '#container' );

  // create a Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 'skyblue' );

  // Create a Camera
  const fov = 35; // Camera Field of View
  const aspect = container.clientWidth / container.clientHeight;

  const near = 0.1;
  const far = 100;

  const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
  camera.position.set( 0, 0, 10 );

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const material = new THREE.MeshBasicMaterial();

  const mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  const renderer = new THREE.WebGLRenderer();

  renderer.setSize( container.clientWidth, container.clientHeight );
  renderer.setPixelRatio( window.devicePixelRatio );
  container.appendChild( renderer.domElement );
}

// function to being animation of the 3D object 
function animate(){
  renderer.render( scene, camera );
}
