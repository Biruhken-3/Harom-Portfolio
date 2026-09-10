"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/components/motion/reveal";

/**
 * Three.js motion accents for content sections — each section gets a
 * distinct, portfolio-appropriate scene:
 *  - "education": floating upward particles (knowledge rising) + orbiting ring
 *  - "experience": a rotating double helix of particles (career ascent)
 *  - "skills": a slowly turning constellation network (connected expertise)
 * All are pointer-events-none, low-opacity, teal-tinted, and GPU-cheap.
 */

function EducationScene() {
  const particles = useRef<THREE.Points>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (particles.current) {
      const pos = particles.current.geometry.attributes.position as THREE.BufferAttribute;
      const arr = pos.array as Float32Array;
      for (let i = 1; i < arr.length; i += 3) {
        arr[i] += 0.012;
        if (arr[i] > 6) arr[i] = -6;
      }
      pos.needsUpdate = true;
      particles.current.rotation.y = Math.sin(t * 0.15) * 0.2;
    }
    if (ring.current) {
      ring.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.2) * 0.15;
      ring.current.rotation.z = t * 0.2;
    }
  });

  return (
    <>
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[EDU_POSITIONS, EDU_COUNT]}
            count={EDU_COUNT}
            itemSize={3}
            array={EDU_POSITIONS}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#4fa3d9" transparent opacity={0.35} sizeAttenuation depthWrite={false} />
      </points>
      <mesh ref={ring} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[3.2, 0.015, 8, 96]} />
        <meshBasicMaterial color="#2ec4b6" transparent opacity={0.4} />
      </mesh>
    </>
  );
}

function ExperienceScene() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y = t * 0.25;
      ref.current.position.y = Math.sin(t * 0.4) * 0.2;
    }
  });

  return (
    <group ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[HELIX_POSITIONS, HELIX_COUNT]}
            count={HELIX_COUNT}
            itemSize={3}
            array={HELIX_POSITIONS}
          />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#4fa3d9" transparent opacity={0.5} sizeAttenuation depthWrite={false} />
      </points>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, (i * Math.PI) / 2]} position={[0, -2.4 + i * 1.6, 0]}>
          <torusGeometry args={[2.2 - i * 0.3, 0.012, 8, 64]} />
          <meshBasicMaterial color="#2ec4b6" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function SkillsScene() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y = t * 0.15;
      ref.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {/* Constellation nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[SKILL_POSITIONS, SKILL_COUNT]}
            count={SKILL_COUNT}
            itemSize={3}
            array={SKILL_POSITIONS}
          />
        </bufferGeometry>
        <pointsMaterial size={0.12} color="#4fa3d9" transparent opacity={0.6} sizeAttenuation depthWrite={false} />
      </points>
      {/* Connections between nearby nodes */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[SKILL_LINE_ARRAY, SKILL_LINE_COUNT]}
            count={SKILL_LINE_COUNT}
            itemSize={3}
            array={SKILL_LINE_ARRAY}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#2ec4b6" transparent opacity={0.2} />
      </lineSegments>
    </group>
  );
}

// ---- Scene data (generated once at module scope) ----

const EDU_COUNT = 400;
const EDU_POSITIONS = (() => {
  const a = new Float32Array(EDU_COUNT * 3);
  for (let i = 0; i < EDU_COUNT; i++) {
    a[i * 3] = (Math.random() - 0.5) * 14;
    a[i * 3 + 1] = (Math.random() - 0.5) * 12;
    a[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  return a;
})();

const HELIX_COUNT = 600;
const HELIX_POSITIONS = (() => {
  const a = new Float32Array(HELIX_COUNT * 3);
  for (let i = 0; i < HELIX_COUNT; i++) {
    const t = i / HELIX_COUNT;
    const angle = t * Math.PI * 8;
    const radius = 1.6;
    const strand = i % 2 === 0 ? 0 : Math.PI; // double helix strand
    a[i * 3] = Math.cos(angle + strand) * radius;
    a[i * 3 + 1] = (t - 0.5) * 9.6;
    a[i * 3 + 2] = Math.sin(angle + strand) * radius;
  }
  return a;
})();

const SKILL_COUNT = 90;
const SKILL_NODES: [number, number, number][] = [];
const SKILL_POSITIONS = (() => {
  const a = new Float32Array(SKILL_COUNT * 3);
  for (let i = 0; i < SKILL_COUNT; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 7;
    const z = (Math.random() - 0.5) * 6;
    SKILL_NODES.push([x, y, z]);
    a[i * 3] = x;
    a[i * 3 + 1] = y;
    a[i * 3 + 2] = z;
  }
  return a;
})();

const SKILL_LINES = (() => {
  const lines: number[] = [];
  for (let i = 0; i < SKILL_NODES.length; i++) {
    for (let j = i + 1; j < SKILL_NODES.length; j++) {
      const [x1, y1, z1] = SKILL_NODES[i];
      const [x2, y2, z2] = SKILL_NODES[j];
      if (Math.hypot(x1 - x2, y1 - y2, z1 - z2) < 2.2) {
        lines.push(x1, y1, z1, x2, y2, z2);
      }
    }
  }
  return { arr: new Float32Array(lines), count: lines.length / 3 };
})();
const SKILL_LINE_COUNT = SKILL_LINES.count;
const SKILL_LINE_ARRAY = SKILL_LINES.arr;

const SCENES = {
  education: EducationScene,
  experience: ExperienceScene,
  skills: SkillsScene,
} as const;

export type SceneVariant = keyof typeof SCENES;

export default function SectionScene({ variant }: { variant: SceneVariant }) {
  const Scene = SCENES[variant];
  // Performance: skip WebGL scenes on small screens and for reduced-motion users.
  const desktop = useMediaQuery("(min-width: 768px)");
  const motionOk = useMediaQuery("(prefers-reduced-motion: no-preference)");
  if (!desktop || !motionOk) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-[5] opacity-70" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  );
}
