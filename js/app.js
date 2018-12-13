// // these need to be accessed inside more than one function so we'll declare them first
// let container;
// let camera;
// let controls;
// let renderer;
// let scene;
// let mesh;
//
// const mixers = [];
// const clock = new THREE.Clock();
// function init() {
//
//
//
//   // Get a reference to the container element that will hold our scene
//   container = document.querySelector( '#container' );
//
//   // create a Scene
//   scene = new THREE.Scene();
//   // Set the background color
//   scene.background = new THREE.Color( 0x8FBCD4 );
//
//
//   initCamera();
//   initControls();
//   initLights();
//   loadModels();
//   initRenderer();
//
//
//
// }
//
// //Calling all Functions
// init();
// render();
// update();
//
// function initCamera() {
//
//   camera = new THREE.PerspectiveCamera(
//     35, // FOV
//     container.clientWidth / container.clientHeight, // aspect
//
//     0.1, // near clipping plane
//     100, // far clipping plane
//   );
//
//   camera.position.set( -50, 50, 150 );
//
// }
//
// function initControls() {
//
//   controls = new THREE.OrbitControls( camera, container );
//
// }
//
// function initLights() {
//
//   const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
//   scene.add( ambientLight );
//
//   const frontLight = new THREE.DirectionalLight( 0xffffff, 1 );
//   frontLight.position.set( 10, 10, 10 );
//
//   const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
//   backLight.position.set( -10, 10, -10 );
//
//   scene.add( frontLight, backLight );
//
// }
//
// function loadModels() {
//
//   const objLoader = new THREE.OBJLoader();
//       objLoader.setPath('models/');
//       objLoader.load('monster.obj', function (object) {
//
//           scene.add(object);
//           object.position.y -= 60;
//
//       });
//
// }
//
//
//
// function initRenderer() {
//
//   renderer = new THREE.WebGLRenderer( { antialias: true } );
//   renderer.setSize( container.clientWidth, container.clientHeight );
//
//   renderer.setPixelRatio( window.devicePixelRatio );
//
//   // add the automatically created <canvas> element to the page
//   container.appendChild( renderer.domElement );
//
// }
//
//
// function update() {
//   // call animate recursively
//   // mesh.rotation.z += 0.01;
//   // mesh.rotation.x += 0.01;
//   // mesh.rotation.y += 0.01;
//   const delta = clock.getDelta();
//
// mixers.forEach( ( mixer ) => { mixer.update( delta ); } );
//
//   requestAnimationFrame( update );
//   renderer.render( scene, camera );
//
//   // console.log(requestAnimationFrame)
// }
//
// function render() {
//   renderer.render( scene, camera );
// }
//
// function onWindowResize() {
//   // set the aspect ratio to match the new browser window aspect ratio
//   camera.aspect = container.clientWidth / container.clientHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize( container.clientWidth, container.clientHeight );
//   //console.log( 'window resized' );
// }
//
// window.addEventListener( 'resize', onWindowResize );
