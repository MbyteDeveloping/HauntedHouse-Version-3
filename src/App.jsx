import React, { useRef, useEffect } from 'react'
import { Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

import { Sparkles, Environment, OrbitControls } from '@react-three/drei'
import CameraRig from './assets/CameraRig.jsx'
import AnimationWrapper from './animationwrapper.jsx'
import Camera from './assets/Camera.jsx'

import {
  EffectComposer,
  Bloom,
  Vignette,
  DepthOfField,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'
import { ACESFilmicToneMapping } from 'three'

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
      dpr={[0.9, 1]}
      colormanagement={ACESFilmicToneMapping}
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

      <Camera></Camera>
      {/*      <AnimationWrapper/> */}

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
      <Sparkles
        count={15}
        scale={1}
        size={6}
        speed={1}
        position={[-3, -0.5, 3]}
        color={'orange'}
      />
      <Sparkles
        count={80}
        scale={6}
        size={6}
        speed={1}
        position={[-1, -4, 0]}
        color={'orange'}
      />
      <Sparkles
        count={30}
        scale={1}
        size={10}
        speed={1}
        position={[3.549, 0, -3.18]}
        color={'orange'}
      />
      <Sparkles
        count={8}
        scale={5}
        size={10}
        speed={1}
        position={[0, 3, 3.18]}
        color={'green'}
      />
      <Sparkles
        count={30}
        scale={4}
        size={10}
        speed={1}
        position={[-1.5, -8.5, -5.4]}
        color={'orange'}
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
      <Scene></Scene>
    </Canvas>
  )
}

function Scene() {
  const bgColor = '#110038'

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
