"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeCore({ variant = "core" }: { variant?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let coreColor = 0xff4d15;
    let emissiveColor = 0x991800;
    let ringCyan = 0x00f0ff;
    let ringViolet = 0x8b5cf6;
    let particlesColor = 0x70f3ff;

    if (variant === "mark47") {
      coreColor = 0xff3b0b;
      emissiveColor = 0xb31400;
      ringCyan = 0x00f0ff;
      particlesColor = 0xff9977;
    } else if (variant === "mark56") {
      coreColor = 0x25d366;
      emissiveColor = 0x075e54;
      ringCyan = 0x00f0ff;
      particlesColor = 0x86efac;
    } else if (variant === "mark56-voice") {
      coreColor = 0x8b5cf6;
      emissiveColor = 0x4c1d95;
      ringCyan = 0x00f0ff;
      particlesColor = 0xc084fc;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    const system = new THREE.Group();
    scene.add(system);

    const coreGeometry = new THREE.IcosahedronGeometry(0.95, 4);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: coreColor,
      emissive: emissiveColor,
      emissiveIntensity: 1.1,
      metalness: 0.5,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.15,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    system.add(core);

    const shellGeometry = new THREE.IcosahedronGeometry(1.2, 2);
    const shellMaterial = new THREE.MeshBasicMaterial({ color: coreColor, wireframe: true, transparent: true, opacity: 0.22 });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    system.add(shell);

    const innerGeometry = new THREE.IcosahedronGeometry(0.55, 2);
    const innerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.25 });
    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    system.add(inner);

    const rings = new THREE.Group();
    const ringColors = [coreColor, ringCyan, ringViolet];
    [1.5, 1.85, 2.15].forEach((radius, index) => {
      const geometry = new THREE.TorusGeometry(radius, index === 1 ? 0.01 : 0.014, 8, 160);
      const material = new THREE.MeshBasicMaterial({ color: ringColors[index], transparent: true, opacity: index === 1 ? 0.35 : 0.48 });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.set(Math.PI / (2.6 + index * 0.24), index * 0.5, index * 0.9);
      rings.add(ring);
    });
    system.add(rings);

    const nodeGroup = new THREE.Group();
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: ringCyan });
    const nodeGeometry = new THREE.SphereGeometry(0.03, 8, 8);
    for (let index = 0; index < 16; index += 1) {
      const angle = (index / 16) * Math.PI * 2;
      const radius = index % 2 === 0 ? 1.85 : 2.15;
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.45, Math.sin(angle * 2) * 0.6);
      nodeGroup.add(node);
    }
    system.add(nodeGroup);

    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(800 * 3);
    for (let index = 0; index < 800; index += 1) {
      const radius = 1.9 + Math.random() * 2.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index * 3 + 2] = radius * Math.cos(phi);
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: particlesColor, size: 0.016, transparent: true, opacity: 0.5, depthWrite: false });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const glow = new THREE.PointLight(coreColor, 25, 10, 1.4);
    glow.position.set(1.2, 0.8, 3);
    scene.add(glow);

    const cyanLight = new THREE.PointLight(ringCyan, 14, 9, 1.6);
    cyanLight.position.set(-3, -1.5, 2);
    scene.add(cyanLight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const pointer = { x: 0, y: 0 };
    const handlePointer = (event: PointerEvent) => {
      const bounds = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.6;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.4;
    };
    mount.addEventListener("pointermove", handlePointer);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startedAt = performance.now();
    let frame = 0;
    const render = () => {
      const time = (performance.now() - startedAt) / 1000;
      if (!reducedMotion) {
        core.rotation.y = time * 0.18;
        core.rotation.x = time * 0.09;
        shell.rotation.y = -time * 0.12;
        shell.rotation.z = time * 0.08;
        inner.rotation.x = -time * 0.2;
        inner.rotation.y = time * 0.16;
        rings.rotation.z = time * 0.045;
        rings.rotation.y = time * 0.035;
        nodeGroup.rotation.y = -time * 0.1;
        particles.rotation.y = time * 0.015;
        core.scale.setScalar(1 + Math.sin(time * 1.6) * 0.02);
      }
      system.rotation.y += (pointer.x - system.rotation.y) * 0.035;
      system.rotation.x += (-pointer.y - system.rotation.x) * 0.035;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      mount.removeEventListener("pointermove", handlePointer);
      coreGeometry.dispose(); coreMaterial.dispose(); shellGeometry.dispose(); shellMaterial.dispose(); innerGeometry.dispose(); innerMaterial.dispose();
      nodeGeometry.dispose(); nodeMaterial.dispose(); particlesGeometry.dispose(); particlesMaterial.dispose();
      rings.children.forEach((child) => { const mesh = child as THREE.Mesh; mesh.geometry.dispose(); (mesh.material as THREE.Material).dispose(); });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [variant]);

  return (
    <div className={`webgl-core webgl-core-${variant}`} aria-label="Mark7 Neural Visualization">
      <div ref={mountRef} className="webgl-mount" />
      
      <motion.div className="core-hud hud-top" animate={{ y: [-2, 2, -2] }} transition={{ duration: 5, repeat: Infinity }}>
        <i /> NEURAL ENGINE <b>ONLINE</b>
      </motion.div>
      <motion.div className="core-hud hud-left" animate={{ x: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity }}>
        <span>PRODUCTS LIVE</span>
        <strong>MARK 47 & MARK 56</strong>
      </motion.div>
      <motion.div className="core-hud hud-right" animate={{ y: [3, -3, 3] }} transition={{ duration: 4.8, repeat: Infinity }}>
        <span>LATENCY</span>
        <strong>&lt; 80 MS</strong>
      </motion.div>
    </div>
  );
}
