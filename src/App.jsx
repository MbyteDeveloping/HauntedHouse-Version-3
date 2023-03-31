import React, { useRef, useEffect } from 'react'
import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Gltf,
  ScrollControls,
  useScroll,
  Sparkles,
  Environment,
} from '@react-three/drei'
import CameraRig from './assets/CameraRig.jsx'

import {
  EffectComposer,
  Bloom,
  Vignette,
  BrightnessContrast,
  HueSaturation,
  DepthOfField,
  ChromaticAberration,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

import BigIsland from './assets/Big_Island.jsx'
import SkeletonTree from './assets/Skeleton_Tree.jsx'
import Island from './assets/Island.jsx'
import SmallIsland from './assets/Small_Island.jsx'
import Ground from './assets/Ground'
import Ground2 from './assets/Ground2.jsx'

export default function App() {
  return (
    <Canvas
      gl={{
        antialias: false,
        toneMapping: THREE.LinearToneMapping,
        alpha: false,
      }}
      shadows={false}
      camera={{ position: [5, 5, 13], fov: 45, near: 2, far: 40 }}
      dpr={[0.9, 1]}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <CameraRig>
        <Suspense>
          <BigIsland />
          <SkeletonTree />
          <Island />
          <SmallIsland />
          <Ground />
          <Ground2 />
        </Suspense>
      </CameraRig>

      <Sparkles
        position={[-2, 1.5, 4]}
        count={10}
        scale={1}
        size={3}
        speed={1}
      />
      <Sparkles
        position={[2.3, 1.8, 3.9]}
        count={14}
        scale={1}
        size={2}
        speed={0.7}
      />

      <EffectComposer>
        <Bloom
          radius={0.8}
          luminanceThreshold={0.7}
          intensity={1.3}
          mipmapBlur
        />
        <Bloom
          radius={0.9}
          luminanceThreshold={0.9}
          intensity={1.6}
          mipmapBlur
          blendFunction={BlendFunction.LIGHTEN}
        />
        <Vignette darkness={0.5} offset={0.6} />

        {/* CAN AFECT THE PERFORMANCE */}
        <DepthOfField
          focalLength={0.45}
          bokehScale={3.5}
          focusDistance={0.01}
          target={[0, 0, 4.9]}
        />
      </EffectComposer>
      <Environment preset="forest" />
    </Canvas>
  )
}

function Scene() {
  const bgColor = '#0b001c'

  return (
    <>
      <color attach="background" args={[bgColor]} />

      <directionalLight
        intensity={0.3}
        color="orange"
        position={[-50, -60, -70]}
      />
      <pointLight intensity={0.2} color="#62c9f5" position={[20, 9, 50]} />
    </>
  )
}
