import * as THREE from 'three'
import { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { LayerMaterial, Texture } from 'lamina'

export const Flower = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('https://hauntedhouse2023.netlify.app/models/flower2.glb')
  materials.green.envMapIntensity = 4
  return (
    <group>
      <instancedMesh ref={ref} args={[undefined, undefined, 40]} geometry={nodes.flower.geometry} material={materials.green}  {...props}>
      </instancedMesh>
    </group>
  )
})

useGLTF.preload('https://hauntedhouse2023.netlify.app/models/flower2.glb')