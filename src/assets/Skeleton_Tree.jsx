import React, { useRef } from 'react'
import { useGLTF, Float, BBAnchor } from '@react-three/drei'
import * as THREE from 'three'

export default function SkeletonTree(props) {
  const skeleton = useRef()
  const { nodes, materials } = useGLTF('models/Skeleton_Tree-transformed.glb')

  materials.Skeleton_Baked.color = new THREE.Color("black")

  return (
    <group {...props} dispose={null}>
      <group position={[4.41, -3.58, -0.51]} rotation={[Math.PI / 2, 0, -1.53]}>
        <BBAnchor anchor={[-0.01, 1.85, -0.29]} rotation={[0, Math.PI / 2, 0]} >
          <Float rotationIntensity={0.5} speed={5} floatIntensity={0}>
            <mesh ref={skeleton} position={[0, -4.8, 0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.Skeleton_Baked} >
              <primitive object={nodes.Skeleton007.geometry} />
            </mesh>
          </Float>
        </BBAnchor>
        <mesh geometry={nodes.Skeleton007_1.geometry} material={materials.Tree_Baked} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Skeleton_Tree-transformed.glb')
