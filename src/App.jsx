import React from 'react'
import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Gltf, ScrollControls, useScroll, Sparkles, OrbitControls } from '@react-three/drei'
import {
  EffectComposer,
  Bloom,
  Vignette,
  BrightnessContrast,
  HueSaturation,
  DepthOfField,
  ChromaticAberration,
} from '@react-three/postprocessing'
import * as THREE from 'three'

import BigIsland from './assets/Big_Island.jsx'
import SkeletonTree from './assets/Skeleton_Tree.jsx'
import Island from './assets/Island.jsx'
import SmallIsland from './assets/Small_Island.jsx'

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <Suspense>
        <BigIsland />
        <SkeletonTree />
        <Island />
        <SmallIsland />
        <OrbitControls />
      </Suspense>

      <OrbitControls />
    </Canvas>
  )
}
