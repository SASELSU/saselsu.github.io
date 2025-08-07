import React, { useMemo, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';

// Utility: generate vine curve around a rectangle
function rectangleVineCurve(rect, wraps = 6, pointsPerWrap = 150) {
  const pts = [];
  const { width, height } = rect;
  const perimeter = 2 * (width + height);
  for (let w = 0; w < wraps; w++) {
    for (let i = 0; i <= pointsPerWrap; i++) {
      const t = i / pointsPerWrap;
      const d = ((w + t) / wraps) * perimeter;
      let x, y;
      if (d < width) {
        x = -width / 2 + d; y = -height / 2;
      } else if (d < width + height) {
        x = width / 2; y = -height / 2 + (d - width);
      } else if (d < 2 * width + height) {
        x = width / 2 - (d - (width + height)); y = height / 2;
      } else {
        x = -width / 2; y = height / 2 - (d - (2 * width + height));
      }
      const jitter = 0.1;
      pts.push(new THREE.Vector3(
        x + (Math.random() - 0.5) * jitter,
        y + (Math.random() - 0.5) * jitter,
        0
      ));
    }
  }
  return pts;
}

// Vine branch: Tube + decorations, uses partial points
function VineBranch({ points, thickness = 0.12, color = "#3b6e3b" }) {
  // Base tube geometry
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const tubeGeo = useMemo(
    () => new THREE.TubeGeometry(curve, Math.max(points.length * 2, 3), thickness, 8, false),
    [curve, thickness, points.length]
  );

  // Leaf shape geometry
  const leafShapeGeo = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(0.2, 0.6, 0.5, 0.6, 0, 1);
    s.bezierCurveTo(-0.5, 0.6, -0.2, 0.6, 0, 0);
    return new THREE.ShapeGeometry(s);
  }, []);

  // Flower geometry (5-petal + center)
  const flowerGeo = useMemo(() => {
    const petals = [];
    const petalRadius = 0.4;
    const petalSize = 0.25;
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const px = Math.cos(angle) * petalRadius;
      const py = Math.sin(angle) * petalRadius;
      const petal = new THREE.CircleGeometry(petalSize, 16);
      petal.translate(px, py, 0);
      petals.push(petal);
    }
    const geom = mergeGeometries(petals);
    const center = new THREE.CircleGeometry(0.15, 16);
    center.translate(0, 0, 0);
    return mergeGeometries([geom, center]);
  }, []);

  // Decorations: leaves and flowers
  const decorations = useMemo(() => {
    const items = [];
    points.forEach((pos, i) => {
      if (i % 15 === 0 && i > 5) {
        // Leaf
        items.push(
          <mesh
            key={`leaf${i}`}
            geometry={leafShapeGeo}
            material={new THREE.MeshLambertMaterial({ color: "#70a370", side: THREE.DoubleSide })}
            position={[pos.x, pos.y, 0]}
            rotation={[0, 0, Math.random() * Math.PI]}
            scale={0.6 + Math.random() * 0.6}
          />
        );
      }
      if (i % 50 === 0 && i > 5) {
        // Flower
        items.push(
          <mesh
            key={`flower${i}`}
            geometry={flowerGeo}
            material={new THREE.MeshPhongMaterial({ color: "#f28eb2", emissive: 0x330022, side: THREE.DoubleSide })}
            position={[pos.x, pos.y, 0]}
            rotation={[0, 0, Math.random() * Math.PI]}
            scale={1.2}
          />
        );
      }
    });
    return items;
  }, [points, leafShapeGeo, flowerGeo]);

  return (
    <group>
      <mesh geometry={tubeGeo}>
        <meshLambertMaterial color={color} />
      </mesh>
      {decorations}
    </group>
  );
}

// Animated Responsive Vine
function ResponsiveVine() {
  const { viewport } = useThree();
  const rect = useMemo(() => ({ width: viewport.width * 0.9, height: viewport.height * 0.8 }), [viewport]);
  const wraps = 6;
  const fullPoints = useMemo(() => rectangleVineCurve(rect, wraps), [rect]);

  const [visibleCount, setVisibleCount] = useState(0);
  const total = fullPoints.length;

  useFrame((_, delta) => {
    setVisibleCount((prev) => Math.min(prev + delta * 100, total));
  });

  const currentPoints = fullPoints.slice(0, Math.floor(visibleCount));

  return (
    <group>
      {/* Frame */}
      <line>
        <bufferGeometry setFromPoints={
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(-rect.width/2, -rect.height/2, 0),
            new THREE.Vector3(rect.width/2, -rect.height/2, 0),
            new THREE.Vector3(rect.width/2, rect.height/2, 0),
            new THREE.Vector3(-rect.width/2, rect.height/2, 0),
            new THREE.Vector3(-rect.width/2, -rect.height/2, 0)
          ])
        } />
        <lineBasicMaterial color="#6b4f4f" linewidth={3} />
      </line>
      {/* Growing vine */}
      {currentPoints.length > 1 && <VineBranch points={currentPoints} thickness={0.12} color="#3b6e3b" />}
    </group>
  );
}

export default function VineTree2D() {
  return (
    <Canvas orthographic camera={{ zoom: 18, position: [0, 0, 50] }} style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} />
      <ResponsiveVine />
    </Canvas>
  );
}
