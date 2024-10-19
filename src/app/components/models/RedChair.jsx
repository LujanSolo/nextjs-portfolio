'use client';
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function RedChair(props) {
  const { nodes, materials } = useGLTF('/models/the_matrix_red_chesterfield_chair.glb')
  return (
    <group {...props} dispose={null}
      rotation={[-5.875, 2.9, 0]}
      scale={1.75}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.677}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.Cushion}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.Wood}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/the_matrix_red_chesterfield_chair.glb')
