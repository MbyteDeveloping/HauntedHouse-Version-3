/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Small_Island.glb --transform -R 2048
*/

import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

export default function SmallIsland(props) {
  const { nodes, materials } = useGLTF(
    'https://hauntedhouse2023.netlify.app/models/Small_Island-transformed.glb'
  )
  return (
    <Float rotationIntensity={0.5} floatIntensity={2}>
      <group {...props} dispose={null}>
        <group
          position={[-1.42, -8.63, -5.25]}
          rotation={[0, -0.73, 0]}
          scale={0.49}
        >
          <mesh
            geometry={nodes.Vert020.geometry}
            material={materials['Small_Island_Baked.004']}
          />
          <mesh
            geometry={nodes.Vert020_1.geometry}
            material={materials['Material.001']}
          />
        </group>
      </group>
    </Float>
  )
}

useGLTF.preload(
  'https://hauntedhouse2023.netlify.app/models/Small_Island-transformed.glb'
)
