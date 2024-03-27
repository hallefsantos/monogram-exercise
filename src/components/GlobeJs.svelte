<script lang="ts">
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { onMount } from 'svelte'

  let canvas: HTMLDivElement

  onMount(() => {
    // Create the scene
    const scene = new THREE.Scene();

    // Create and position the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 12;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.enableZoom = false;
    controls.rotateSpeed = 1;
    controls.minPolarAngle = 1.5;
    controls.maxPolarAngle = 1.6;

    // Load the texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/texture.webp');

    // Create the sphere geometry
    // const geometry = new THREE.SphereGeometry(5, 50, 50);
    const geometry = new THREE.SphereGeometry(5, 50, 50);

    // Create the material with the texture
    const material = new THREE.MeshStandardMaterial({ map: texture });

    // Create the mesh and add it to the scene
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 4);
    scene.add(ambientLight);

    // Render loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    })
  })

</script>

<div bind:this={canvas} />