import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Environment, Sparkles, OrbitControls } from '@react-three/drei';
import './Hero3D.css';

const AnimatedShape = () => {
    const meshRef = useRef();
    
    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            {/* Outer wireframe */}
            <Icosahedron ref={meshRef} args={[1.8, 0]}>
                <meshStandardMaterial 
                    color="#D41121" 
                    wireframe 
                    roughness={0.1}
                    metalness={0.8}
                />
            </Icosahedron>
            {/* Inner distorted crystalline core */}
            <Icosahedron args={[1.2, 2]}>
                <MeshDistortMaterial 
                    color="#1A1A1A" 
                    metalness={0.5} 
                    roughness={0.2}
                    distort={0.4}
                    speed={2}
                />
            </Icosahedron>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div className="hero-3d-container">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#D41121" />
                <directionalLight position={[-10, 0, -5]} intensity={0.8} color="#FFF" />
                <Sparkles count={150} scale={12} size={2} speed={0.4} opacity={0.3} color="#D41121" />
                
                <AnimatedShape />
                
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
