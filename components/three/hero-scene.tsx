"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/components/motion/reveal";

/**
 * Slowly drifting particle field — a subtle, professional Three.js accent
 * rendered behind the hero content. Colored to match the site's teal accent.
 */

// Generated once at module scope (pure, not recomputed on renders)
const PARTICLE_COUNT = 900;
const PARTICLE_POSITIONS = (() => {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const radius = 4 + Math.random() * 6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
})();

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y = t * 0.03;
      ref.current.rotation.x = Math.sin(t * 0.1) * 0.08;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[PARTICLE_POSITIONS, PARTICLE_COUNT]}
          count={PARTICLE_COUNT}
          itemSize={3}
          array={PARTICLE_POSITIONS}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#4fa3d9"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/** Gentle floating wireframe shapes for depth and motion. */
function FloatingShape({
  position,
  speed,
  scale,
}: {
  position: [number, number, number];
  speed: number;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.x = t * speed * 0.4;
      ref.current.rotation.y = t * speed * 0.6;
      ref.current.position.y = position[1] + Math.sin(t * speed) * 0.25;
    }
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#2ec4b6" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

export default function HeroScene() {
  // Performance: skip WebGL on small screens and for reduced-motion users.
  const desktop = useMediaQuery("(min-width: 768px)");
  const motionOk = useMediaQuery("(prefers-reduced-motion: no-preference)");
  if (!desktop || !motionOk) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-[5]" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ParticleField />
        <FloatingShape position={[-5, 1.5, -2]} speed={0.5} scale={0.9} />
        <FloatingShape position={[5, -1.5, -3]} speed={0.7} scale={1.2} />
        <FloatingShape position={[4.5, 2, -4]} speed={0.3} scale={0.6} />
      </Canvas>
    </div>
  );
}
