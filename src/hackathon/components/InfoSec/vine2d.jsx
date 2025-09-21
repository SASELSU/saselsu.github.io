// src/components/VineTree3D.jsx
import { useMemo, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

import {
    BoxGeometry,
    BufferGeometry,
    CatmullRomCurve3,
    CircleGeometry,
    DoubleSide,
    MeshLambertMaterial,
    MeshPhongMaterial,
    Shape,
    ShapeGeometry,
    TubeGeometry,
    Vector3
} from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

// Generate jittered points around a rectangle perimeter
function rectangleVineCurve (rect, wraps = 6, pointsPerWrap = 150) {
    const pts = [];
    if (!rect?.width || !rect.height) return pts;
    const { width, height } = rect;
    const perimeter = 2 * (width + height);

    for (let w = 0; w < wraps; w++) {
        for (let i = 0; i <= pointsPerWrap; i++) {
            const t = i / pointsPerWrap;
            const d = ((w + t) / wraps) * perimeter;
            let x, y;
            if (d < width) {
                x = -width / 2 + d;
                y = -height / 2;
            } else if (d < width + height) {
                x = width / 2;
                y = -height / 2 + (d - width);
            } else if (d < 2 * width + height) {
                x = width / 2 - (d - (width + height));
                y = height / 2;
            } else {
                x = -width / 2;
                y = height / 2 - (d - (2 * width + height));
            }
            const jitter = 0.1;
            pts.push(
                new Vector3(
                    x + (Math.random() - 0.5) * jitter,
                    y + (Math.random() - 0.5) * jitter,
                    0
                )
            );
        }
    }

    return pts;
}

// Renders a branch of vine with leaves & flowers
function VineBranch ({ points, thickness = 0.12, color = "#3b6e3b" }) {
    const curve = useMemo(() => new CatmullRomCurve3(points), [points]);
    const tubeGeo = useMemo(
        () => new TubeGeometry(curve, Math.max(points.length * 2, 3), thickness, 8, false),
        [curve, thickness, points.length]
    );

    const leafShapeGeo = useMemo(() => {
        const s = new Shape();
        s.moveTo(0, 0);
        s.bezierCurveTo(0.2, 0.6, 0.5, 0.6, 0, 1);
        s.bezierCurveTo(-0.5, 0.6, -0.2, 0.6, 0, 0);
        return new ShapeGeometry(s);
    }, []);

    const flowerGeo = useMemo(() => {
        const petals = [];
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const px = Math.cos(angle) * 0.4;
            const py = Math.sin(angle) * 0.4;
            const petal = new CircleGeometry(0.25, 16).translate(px, py, 0);
            petals.push(petal);
        }
        const petalsMerged = mergeGeometries(petals);
        const center = new CircleGeometry(0.15, 16);
        return mergeGeometries([petalsMerged, center]);
    }, []);

    const decorations = useMemo(() => {
        return points.flatMap((pos, i) => {
            const items = [];
            if (i > 5 && i % 15 === 0) {
                items.push(
                    <mesh
                        key={`leaf${i}`}
                        geometry={leafShapeGeo}
                        material={new MeshLambertMaterial({ color: "#70a370", side: DoubleSide })}
                        position={[pos.x, pos.y, 0]}
                        rotation={[0, 0, Math.random() * Math.PI]}
                        scale={0.6 + Math.random() * 0.6}
                    />
                );
            }
            if (i > 5 && i % 50 === 0) {
                items.push(
                    <mesh
                        key={`flower${i}`}
                        geometry={flowerGeo}
                        material={new MeshPhongMaterial({ color: "#f28eb2", emissive: 0x330022, side: DoubleSide })}
                        position={[pos.x, pos.y, 0]}
                        rotation={[0, 0, Math.random() * Math.PI]}
                        scale={1.2}
                    />
                );
            }
            return items;
        });
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

function ResponsiveVine () {
    const { viewport } = useThree();
    const rect = useMemo(() => ({
        width: viewport.width * 0.9,
        height: viewport.height * 0.8
    }), [viewport]);

    // Thin 3D box background
    const boxGeo = useMemo(
        () => new BoxGeometry(rect.width, rect.height, 0.2),
        [rect]
    );

    const fullPoints = useMemo(() => rectangleVineCurve(rect, 6), [rect]);
    const total = fullPoints.length;
    const [visibleCount, setVisibleCount] = useState(0);

    useFrame((_, delta) => {
        if (total > 0) {
            setVisibleCount(prev => Math.min(prev + delta * 100, total));
        }
    });

    const currentPoints = fullPoints.slice(0, Math.floor(visibleCount));

    return (
        <group>
            {/* Solid grass-green background */}
            <mesh geometry={boxGeo} position={[0, 0, -0.1]}>
                <meshBasicMaterial color="#5DA130" />
            </mesh>

            {/* Frame outline */}
            <line>
                <bufferGeometry
                    setFromPoints={
                        new BufferGeometry().setFromPoints([
                            new Vector3(-rect.width / 2, -rect.height / 2, 0),
                            new Vector3(rect.width / 2, -rect.height / 2, 0),
                            new Vector3(rect.width / 2, rect.height / 2, 0),
                            new Vector3(-rect.width / 2, rect.height / 2, 0),
                            new Vector3(-rect.width / 2, -rect.height / 2, 0)
                        ])
                    }
                />
                <lineBasicMaterial color="#6b4f4f" linewidth={3} />
            </line>

            {/* Growing vine */}
            {currentPoints.length > 1 && (
                <VineBranch points={currentPoints} thickness={0.12} color="#3b6e3b" />
            )}
        </group>
    );
}

export default function VineTree3D () {
    return (
        <Canvas
            camera={{ position: [0, 0, 60], fov: 50 }}
            style={{ width: "100%", height: "100%" }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 20]} intensity={1} />
            <group rotation={[-0.2, 0, 0]}>
                <ResponsiveVine />
            </group>
        </Canvas>
    );
}
