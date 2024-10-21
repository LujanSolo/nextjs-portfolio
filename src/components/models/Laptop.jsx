'use client';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Laptop(props) {
  const { nodes, materials } = useGLTF('/models/dirty_sci-fi_laptop_star_wars.glb');
  const modelRef = useRef();
  
  useFrame(() => {
    modelRef.current.rotation.y += -0.003;
  })
  
  return (
    <group {...props} dispose={null}
      ref={modelRef}
      position={[0.2, 2.5, 0]}
      rotation={[.76, .5, 0]}
    >
      <group scale={0.008}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Laptop_0.geometry}
          material={materials.Laptop}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keys001_Rubber_0.geometry}
          material={materials.Rubber}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[248.603, 248.603, 156.487]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/dirty_sci-fi_laptop_star_wars.glb')
