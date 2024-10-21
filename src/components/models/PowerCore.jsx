"use client";
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function PowerCore(props) {
  

  const { nodes, materials } = useGLTF('/models/sci-fi-reactor-core.glb');
  const modelRef = useRef();
  
  useFrame(() => {
    modelRef.current.rotation.y += 0.0023;
  });

  
  return (
    <group {...props} dispose={null}
      scale={[1.2, 1.2, 1.2]}
      ref={modelRef}
      rotation={[.3,0,0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.HeroModel2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.HeroModel1}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/sci-fi-reactor-core.glb')