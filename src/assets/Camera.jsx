import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import React, { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

/* export default function Camera(props) {
  const { nodes, animations } = useGLTF(
    'https://hauntedhouse2023.netlify.app/models/Camera.glb'
  )
  const group = useRef()
  const { actions } = useAnimations(animations, group)
  const tl = React.useRef()

  useEffect(() => {
    var Cont = { val: 0 },
      NewVal = 100

    actions.CameraAction.play()

    tl.current = gsap
      .timeline({
        duration: 7,
        ease: 'linear',
        scrollTrigger: {
          trigger: '#section1',
          start: 'top top',
          endTrigger: '#section7',
          end: 'bottom bottom',
          markers: true,
          scrub: 1,
        },
      })
      .to('.progress-bar', { marginRight: '0%', duration: 7, ease: 'none' }, 0)
      .to(
        Cont,
        {
          duration: 7,
          ease: 'none',
          val: NewVal,
          roundProps: 'val',
          onUpdate: function () {
            document.querySelector('.progress-number').innerHTML =
              Cont.val + '%'
          },
        },
        0
      )

    console.log(actions.CameraAction._mixer)
  }, []) */

export default function Camera(props) {
  const group = useRef()
  const { nodes, animations } = useGLTF(
    'https://hauntedhouse2023.netlify.app/models/Camera.glb'
  )
  const anim = useAnimations(animations, group)

  // useEffect(() => {
  //   console.log(anim.actions[anim.names])
  //   anim.actions[anim.names].play()
  // });

  // useEffect(() => {
  //   console.log(actions);
  //   actions["Animation"].play();
  // }, []);

  useEffect(() => {
    var Cont = { val: 0 },
      NewVal = 100
    const animationDuration = animations[0].duration
    const frame = animationDuration / 800
    // if it runs until the last frame, it will restart from frame 1, didn't found a solution for this yet.
    const max = animationDuration - frame
    const clip = anim.actions[anim.names]
    clip.play()
    const mixer = clip.getMixer()
    let proxy = {
      get time() {
        return mixer.time
      },
      set time(value) {
        clip.paused = false
        mixer.setTime(value)
        clip.paused = true
      },
    }

    // for some reason must be set to 0 otherwise the clip will not be properly paused.
    proxy.time = 0

    let tl = gsap.timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: '#section1',
        start: 'top top',
        endTrigger: '#section8',
        end: 'bottom bottom',
        pin: false,
        scrub: 1,
        markers: true,
        onUpdate: function () {
          console.log(proxy)
        },
      },
    })

    tl.set(proxy, { time: 1 })

    tl.to(
      proxy,
      {
        time: max,
        duration: 8,
        ease: 'none',
      },
      0
    )
      .to('.progress-bar', { width: '100%', duration: 7, ease: 'none' }, 0)
      .to(
        Cont,
        {
          duration: 7,
          ease: 'none',
          val: NewVal,
          roundProps: 'val',
          onUpdate: function () {
            document.querySelector('.progress-number').innerHTML =
              Cont.val + '%'
          },
        },
        0
      )
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={30}
          position={[9.86, 6.94, 26.72]}
          rotation={[-0.26, 0.55, 0.11]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://hauntedhouse2023.netlify.app/models/Camera.glb')
