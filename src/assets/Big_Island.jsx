/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Big_Island.glb --transform -R 3072
*/

import React, { useRef } from 'react'
import { Float, useGLTF, Sparkles, Environment, Stars } from '@react-three/drei'
import Clouds from './Clouds2'
import * as THREE from 'three'

export default function BigIsland(props) {
  const { nodes, materials } = useGLTF(
    'https://hauntedhouse2023.netlify.app/models/Big_Island-transformed.glb'
  )

  materials.Ground_Baked.envMapIntensity = 0.5
  materials.House_Baked.envMapIntensity = 0.2
  materials.DarkMetal.envMapIntensity = 2
  materials.DarkMetal.roughness = 0.2
  materials.DarkMetal.color = new THREE.Color('#282e47')

  return (
    <Float rotationIntensity={0.2}>
      <group {...props} dispose={null}>
        <group scale={1.25}>
          {<mesh geometry={nodes.Ground002.geometry} />}
          <mesh
            geometry={nodes.Ground002.geometry}
            material={materials.Ground_Baked}
          />
          <mesh
            geometry={nodes.Ground002_1.geometry}
            material={materials.House_Baked}
          />
          <mesh
            geometry={nodes.Ground002_2.geometry}
            material={materials.Window_Emission}
          />
          <mesh
            geometry={nodes.Ground002_3.geometry}
            material={materials.DarkMetal}
          />
          <mesh
            geometry={nodes.Ground002_4.geometry}
            material={materials.Ground_and_pumpkins_Baked}
          />
        </group>
        {/* <Environment preset='night' /> */}

        <Clouds scale={3} position={[-4, -2, -8]} />
      </group>
    </Float>
  )
}

useGLTF.preload(
  'https://hauntedhouse2023.netlify.app/models/Big_Island-transformed.glb'
)
