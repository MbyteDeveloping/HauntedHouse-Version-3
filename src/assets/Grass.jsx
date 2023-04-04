import * as THREE from 'three'
import { cloneElement, useEffect, useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { Sampler } from '@react-three/drei'
import { Depth, LayerMaterial } from 'lamina'
import Perlin from 'perlin.js'
import WindLayer from './WindLayer'

Perlin.seed(Math.random())
extend({ WindLayer })

export function Grass({ children, strands = 15000, ...props }) {
  const geomRef = useRef()
  const meshRef = useRef(null)
  const windLayer = useRef(null)

  useEffect(() => {
    meshRef.current.geometry.applyMatrix4(
      new THREE.Matrix4().makeRotationX(Math.PI / 2)
    )
    meshRef.current.geometry.applyMatrix4(
      new THREE.Matrix4().makeTranslation(0, 0, 0.5)
    )
  }, [])

  useFrame(() => (windLayer.current.time += 0.003))

  return (
    <>
      <mesh ref={geomRef} {...props} visible={false}>
        <primitive
          object={children.props.geometry.toNonIndexed()}
          attach="geometry"
        />
        {/* <LayerMaterial color="#221600" lighting="physical" envMapIntensity={0.1} /> */}
      </mesh>

      <instancedMesh
        scale={1.005}
        ref={meshRef}
        args={[undefined, undefined, strands]}
        {...props}
      >
        <coneGeometry args={[0.1, 1.0, 2, 4, true, 0, Math.PI / 4]} />
        <LayerMaterial
          side={THREE.DoubleSide}
          lighting="physical"
          envMapIntensity={2}
        >
          <Depth
            colorA="#221600"
            colorB="#6f943e"
            near={0.14}
            far={1.52}
            mapping="world"
          />
          <windLayer
            args={[{ mode: 'multiply' }]}
            colorA="#ffffff"
            colorB="#acf5ce"
            noiseScale={10}
            noiseStrength={5}
            length={1.2}
            sway={0.5}
            ref={windLayer}
          />
        </LayerMaterial>
      </instancedMesh>
      <group>
        <Sampler
          transform={({ position, normal, dummy: object }) => {
            object.scale.setScalar(Math.random() * 2)
            object.scale.clampScalar(0.1, 0.19)
            object.position.copy(position)
            object.lookAt(normal.add(position))
            object.rotation.y += Math.random() - 0.5 * (Math.PI * 0.5)
            object.rotation.x += Math.random() - 0.5 * (Math.PI * 0.5)
            object.rotation.z += Math.random() - 0.5 * (Math.PI * 0.5)
            object.updateMatrix()
            return object
          }}
          // weight="normal"
          mesh={geomRef}
          instances={meshRef}
          count={strands}
        />
      </group>
    </>
  )
}
