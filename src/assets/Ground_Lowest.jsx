/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Ground_Lowest.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Grass } from './Grass'

export default function GroundLowest(props) {
  const { nodes, materials } = useGLTF(
    'https://hauntedhouse2023.netlify.app/models/Ground_Lowest-transformed.glb'
  )
  return (
    <group {...props} dispose={null}>
      <Grass>
        <mesh
          geometry={nodes.Small_Island_Baked002.geometry}
          material={materials['Material.002']}
          position={[-1.42, -8.63, -5.25]}
          rotation={[0, -0.73, 0]}
          scale={0.49}
        />
      </Grass>
    </group>
  )
}

useGLTF.preload(
  'https://hauntedhouse2023.netlify.app/models/Ground_Lowest-transformed.glb'
)
