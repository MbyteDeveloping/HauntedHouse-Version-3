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
import { getProject, val } from '@theatre/core'
import theatreState from './theatreState.json'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import CameraRig from './assets/CameraRig.jsx'
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f'

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

export default function App() {
  const sheet = getProject('Fly Through', { state: theatreState }).sheet(
    'Scene'
  )
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
          luminanceThreshold={0.39}
          intensity={1.7}
          mipmapBlur
        />
        <Bloom
          radius={0.75}
          luminanceThreshold={0.65}
          intensity={0.9}
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
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length)
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength
  })

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

      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
    </>
  )
}
