'use client';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function MoistureVap(props) {
  
  const { nodes, materials } = useGLTF('/models/star_wars_moisture_vaporator.glb')
  const modelRef = useRef();
  
  useFrame(() => {
    modelRef.current.rotation.y += 0.004;
  })
  
  return (
    <group {...props} dispose={null}
      scale={[.7, .7, .7]}
      position={[0, -.3, 0]}
      ref={modelRef}
    >
      <group 
        position={[-1, 0, 0]}
        name="446a0984612248098cb711a3590c5216fbx" 
        scale={0.0075}
      >
        <mesh
          name="Hoops_DefaultMaterial_0"
          castShadow
          receiveShadow
          geometry={nodes.Hoops_DefaultMaterial_0.geometry}
          material={materials.DefaultMaterial}
          position={[126.5, 75.996, 65.079]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          name="Outliers_DefaultMaterial_0"
          castShadow
          receiveShadow
          geometry={nodes.Outliers_DefaultMaterial_0.geometry}
          material={materials.DefaultMaterial}
          position={[75.176, 264.659, 43.738]}
          rotation={[-Math.PI / 2, 0, -1.965]}
          scale={100}
        />
        <mesh
          name="Main_Body_DefaultMaterial_0"
          castShadow
          receiveShadow
          geometry={nodes.Main_Body_DefaultMaterial_0.geometry}
          material={materials.DefaultMaterial}
          position={[126.759, 142.804, 63.988]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          name="Paddles_DefaultMaterial_0"
          castShadow
          receiveShadow
          geometry={nodes.Paddles_DefaultMaterial_0.geometry}
          material={materials.DefaultMaterial}
          position={[126.512, 563.447, 79.961]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          name="Details_DefaultMaterial_0"
          castShadow
          receiveShadow
          geometry={nodes.Details_DefaultMaterial_0.geometry}
          material={materials.DefaultMaterial}
          position={[123.889, 128.573, 29.178]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={77.435}
        />
        <mesh
          name="Discs_DefaultMaterial_0"
          castShadow
          receiveShadow
          geometry={nodes.Discs_DefaultMaterial_0.geometry}
          material={materials.DefaultMaterial}
          position={[126.759, 142.804, 63.988]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/star_wars_moisture_vaporator.glb')
