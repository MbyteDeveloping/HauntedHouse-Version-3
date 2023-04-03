import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import React, { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'

export default function Camera(props) {
  const group = useRef()
  const { animations } = useGLTF(
    'https://hauntedhouse2023.netlify.app/models/Camera.glb'
  )
  const anim = useAnimations(animations, group)

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
    proxy.time = 1

    let tl = gsap.timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: '.main-wrapper',
        start: 'top top',
        end: 'bottom bottom',
        pin: false,
        scrub: 1,
        onUpdate: function () {
          /*           console.log(proxy) */
        },
      },
    })

    tl.set(proxy, { time: 1 })

    tl.to(
      proxy,
      {
        time: max,
        duration: 7,
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
      .to('#content-1', { opacity: 0, duration: 1, ease: 'Power2.Out' }, 0)
      .to('#content-2', { opacity: 1, duration: 0.8, ease: 'Power2.Out' }, 1)
      .to('#content-2', { opacity: 0, duration: 0.2 }, 1.8)
      .to('#content-3', { opacity: 1, duration: 0.8, ease: 'Power2.Out' }, 2)
      .to('#content-3', { opacity: 0, duration: 0.2 }, 2.8)
      .to('#content-4', { opacity: 1, duration: 0.8, ease: 'Power2.Out' }, 3)
      .to('#content-4', { opacity: 0, duration: 0.2 }, 3.8)
      .to('#content-5', { opacity: 1, duration: 0.8, ease: 'Power2.Out' }, 4)
      .to('#content-5', { opacity: 0, duration: 0.2 }, 4.8)
      .to('#content-6', { opacity: 1, duration: 0.8, ease: 'Power2.Out' }, 5)
      .to('#content-6', { opacity: 0, duration: 0.2 }, 5.8)
      .to('#content-7', { opacity: 1, duration: 0.8, ease: 'Power2.Out' }, 6)
      .to('#content-7', { opacity: 0, duration: 0.2 }, 6.8)
      .to('#content-8', { opacity: 1, duration: 0.8, ease: 'Power2.Out' }, 7)
      .to('#content-8', { opacity: 0, duration: 0.2 }, 7.8)
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
