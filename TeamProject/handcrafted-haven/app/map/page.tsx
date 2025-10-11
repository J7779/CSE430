"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Navbar from "../components/navbar";
import styles from "../page.module.css";
import Image from "next/image";

export default function MapPage() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // Sky blue

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Land (plane with height variation)
    const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
    const material = new THREE.MeshLambertMaterial({ color: 0x8b4513 }); // Saddle brown for soil
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;

    // Add height variation to simulate terrain
    const vertices = geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i + 2] = Math.random() * 0.5; // Random height
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    scene.add(plane);

    // Add flying fairies
    const fairyMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      emissive: 0xffd700,
      emissiveIntensity: 0.5,
    }); // Gold glowing
    const fairies: {
      mesh: THREE.Mesh;
      speed: number;
      direction: THREE.Vector3;
    }[] = [];
    for (let i = 0; i < 10; i++) {
      const fairyGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const fairy = new THREE.Mesh(fairyGeometry, fairyMaterial);
      fairy.position.set(
        (Math.random() - 0.5) * 15,
        2 + Math.random() * 3,
        (Math.random() - 0.5) * 15
      );
      fairies.push({
        mesh: fairy,
        speed: 0.01 + Math.random() * 0.02,
        direction: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ).normalize(),
      });
      scene.add(fairy);
    }

    // Add houses
    const houseMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 }); // Brown for houses
    const roofMaterial = new THREE.MeshLambertMaterial({ color: 0xdc143c }); // Crimson for roofs

    // House 1
    const house1Base = new THREE.Mesh(
      new THREE.BoxGeometry(1, 0.5, 1),
      houseMaterial
    );
    house1Base.position.set(-5, 0.25, -5);
    scene.add(house1Base);
    const house1Roof = new THREE.Mesh(
      new THREE.ConeGeometry(0.8, 0.5, 4),
      roofMaterial
    );
    house1Roof.position.set(-5, 0.75, -5);
    scene.add(house1Roof);

    // House 2
    const house2Base = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.6, 0.8),
      houseMaterial
    );
    house2Base.position.set(5, 0.3, 5);
    scene.add(house2Base);
    const house2Roof = new THREE.Mesh(
      new THREE.ConeGeometry(0.9, 0.4, 4),
      roofMaterial
    );
    house2Roof.position.set(5, 0.9, 5);
    scene.add(house2Roof);

    // House 3
    const house3Base = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.4, 1.5),
      houseMaterial
    );
    house3Base.position.set(0, 0.2, -9);
    scene.add(house3Base);
    const house3Roof = new THREE.Mesh(
      new THREE.ConeGeometry(1, 0.5, 4),
      roofMaterial
    );
    house3Roof.position.set(0, 0.7, -9);
    scene.add(house3Roof);

    // Add a small road
    const roadMaterial = new THREE.MeshLambertMaterial({ color: 0x696969 }); // Dim gray for road
    const roadPoints = [
      new THREE.Vector3(-10, 0.01, 0),
      new THREE.Vector3(-5, 0.01, 2),
      new THREE.Vector3(0, 0.01, -1),
      new THREE.Vector3(5, 0.01, 3),
      new THREE.Vector3(10, 0.01, 0),
    ];
    const roadGeometry = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3(roadPoints),
      50,
      0.3,
      8,
      false
    );
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    scene.add(road);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      // Animate fairies
      fairies.forEach((fairy) => {
        fairy.mesh.position.add(
          fairy.direction.clone().multiplyScalar(fairy.speed)
        );
        // Bounce off boundaries
        if (fairy.mesh.position.x > 10 || fairy.mesh.position.x < -10)
          fairy.direction.x *= -1;
        if (fairy.mesh.position.z > 10 || fairy.mesh.position.z < -10)
          fairy.direction.z *= -1;
        if (fairy.mesh.position.y > 5 || fairy.mesh.position.y < 1)
          fairy.direction.y *= -1;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1>3D Map of Fairy Tail Land Livathina</h1>
        <div ref={mountRef} style={{ width: "100%", height: "60vh" }} />
      </main>
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Privacy Policy
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Terms of Service
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Contact Us
        </a>
      </footer>
    </div>
  );
}
