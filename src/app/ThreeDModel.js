import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, model, controls;
    const mount = mountRef.current;

    const init = () => {
      console.log('Initializing scene...');
      
      // Create the scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);  // Set background to black

      // Create the camera
      camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
      camera.position.set(0, 1, 3);

      // Create the renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);

      // Add OrbitControls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.enableZoom = true;

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5).normalize();
      scene.add(directionalLight);

      // Load the 3D model
      const loader = new GLTFLoader();
      loader.load('/military_laptop_1.glb', function(gltf) {
        console.log('Model loaded successfully');
        model = gltf.scene;
        scene.add(model);
      }, undefined, function(error) {
        console.error('Error loading model:', error);
      });

      // Handle window resize
      window.addEventListener('resize', onWindowResize, false);

      // Start the animation loop
      animate();
    }

    const onWindowResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += 0.01;  // Optional: Add some rotation to the model
      }
      controls.update();
      renderer.render(scene, camera);
    }

    init();

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    }
  }, []);

  return <div ref={mountRef} className="w-full h-full"></div>;
};

export default ThreeDModel;
