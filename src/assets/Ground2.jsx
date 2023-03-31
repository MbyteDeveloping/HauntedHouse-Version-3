/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Ground2.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Grass } from './Grass'

export default function round2(props) {
  const { nodes, materials } = useGLTF(
    'https://hauntedhouse2023.netlify.app/models/Ground2-transformed.glb'
  )
  return (
    <group {...props} dispose={null} scale={1.1}>
      <Grass>
        <mesh
          geometry={nodes.Ground_Baked001.geometry}
          material={materials.Material}
          scale={1.25}
        />
      </Grass>
    </group>
  )
}

useGLTF.preload(
  'https://hauntedhouse2023.netlify.app/models/Ground2-transformed.glb'
)
