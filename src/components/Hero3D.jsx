import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, TorusKnot, MeshDistortMaterial, Float, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import './Hero3D.css';

const AnimatedComplexShape = () => {
    const groupRef = useRef();
    const materialRef = useRef();
    
    useFrame((state) => {
        const t = state.clock.elapsedTime;
        groupRef.current.rotation.x = t * 0.1;
        groupRef.current.rotation.y = t * 0.15;
        
        // Smoothly shift color on the inner sphere
        if (materialRef.current) {
            const hue = (Math.sin(t * 0.3) + 1) / 2; // oscillates 0 to 1
            materialRef.current.color.setHSL(hue, 0.8, 0.5);
            materialRef.current.emissive.setHSL(hue, 0.8, 0.2); // subtle glow matching color
        }
    });

    return (
        <group position={[2.5, 0, 0]} scale={0.75}>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                <group ref={groupRef}>
                    {/* Core Sphere - matte, no reflection, fluid color */}
                    <Sphere args={[1, 64, 64]} scale={0.8}>
                        <MeshDistortMaterial 
                            ref={materialRef}
                            roughness={1.0}
                            metalness={0.0}
                            distort={0.5}
                            speed={3}
                        />
                    </Sphere>

                    {/* Outer Torus Knot */}
                    <TorusKnot args={[1.4, 0.08, 256, 32]} scale={1.2}>
                        <meshPhysicalMaterial 
                            color="#1A1A1A" 
                            metalness={1.0} 
                            roughness={0.1}
                            clearcoat={1}
                            envMapIntensity={2}
                        />
                    </TorusKnot>

                    {/* Surrounding floating particles/fragments */}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <mesh 
                            key={i} 
                            position={[
                                (Math.random() - 0.5) * 6,
                                (Math.random() - 0.5) * 6,
                                (Math.random() - 0.5) * 6
                            ]}
                        >
                            <octahedronGeometry args={[0.08 + Math.random() * 0.1]} />
                            <meshStandardMaterial color="#D41121" emissive="#D41121" emissiveIntensity={2} />
                        </mesh>
                    ))}
                </group>
            </Float>
        </group>
    );
};

const Hero3D = () => {
    return (
        <div className="hero-3d-container">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                {/* Lighting setup */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#D41121" />
                <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
                <spotLight position={[0, 10, 0]} intensity={2} angle={0.2} penumbra={1} color="#D41121" />
                
                <Environment preset="city" />
                
                <Sparkles count={300} scale={15} size={2.5} speed={0.5} opacity={0.6} color="#D41121" />
                
                <AnimatedComplexShape />
            </Canvas>
        </div>
    );
};

export default Hero3D;
