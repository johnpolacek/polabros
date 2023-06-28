"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface PanoramaProps {
  imageUrl: string;
  className: string;
}

const Panorama: React.FC<PanoramaProps> = ({ imageUrl, className }) => {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!refContainer.current) return;

    // Standard Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current.appendChild(renderer.domElement);

    // Create a sphere geometry and apply the panoramic texture
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // The geometry is inside out by default, so we flip it

    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(imageUrl),
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Set initial camera position
    camera.position.set(0, 0, 0);

    // Set initial camera rotation to halfway around the panorama
    camera.rotation.y = Math.PI * 0.4;

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the camera around the y-axis
      camera.rotation.y -= 0.0003;

      renderer.render(scene, camera);
    };
    animate();

    // Window resize handler
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      // Clean up on unmount
      geometry.dispose();
      material.dispose();
      scene.remove(mesh);
      renderer.dispose();
    };
  }, [imageUrl]);

  return <div className={className} ref={refContainer} />;
};

export default Panorama;
