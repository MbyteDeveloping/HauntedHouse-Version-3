/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Ground_Lower.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('models/Ground_Lower-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Island_Baked.geometry}
        material={materials.Material}
        position={[-1.19, -5, 1.1]}
        rotation={[Math.PI, -0.31, Math.PI]}
        scale={0.61}
      />
    </group>
  )
}

useGLTF.preload('models/Ground_Lower-transformed.glb')
