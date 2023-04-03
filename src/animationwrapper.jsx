import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

export default function AnimationWrapper() {
  const { scene, camera } = useThree()
  const tl = React.useRef()
  const degToRad = Math.PI / 180

  React.useEffect(() => {
    scene.rotation.set(0 * degToRad, -30 * degToRad, 2 * degToRad)
    camera.position.set(-4, 6, 20)
    camera.rotation.set(-15 * degToRad, 0 * degToRad, -2 * degToRad)

    var Cont = { val: 0 },
      NewVal = 100

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
      .to(
        '.progress-bar',
        { marginRight: '0%', duration: 7, ease: 'linear' },
        0
      )
      .to(
        Cont,
        {
          duration: 7,
          val: NewVal,
          roundProps: 'val',
          onUpdate: function () {
            document.querySelector('.progress-number').innerHTML = Cont.val + '%'
          },
        },
        0
      )
      .to(
        camera.position,
        { x: -5, y: 5, z: 15, duration: 1, ease: 'linear' },
        0
      )
      .to(
        camera.rotation,
        {
          x: -15 * degToRad,
          y: 0 * degToRad,
          z: 0 * degToRad,
          duration: 1,
          ease: 'linear',
        },
        0
      )

      .to(
        camera.position,
        { x: 0, y: 2, z: 10, duration: 1.3, ease: 'linear' },
        1
      )
      .to(
        camera.rotation,
        {
          x: -15 * degToRad,
          y: -20 * degToRad,
          z: 0 * degToRad,
          duration: 1.3,
          ease: 'linear',
        },
        1
      )

      .to(
        camera.position,
        { x: -5, y: 2, z: 5, duration: 1, ease: 'linear' },
        2.3
      )
      .to(
        camera.rotation,
        {
          x: -15 * degToRad,
          y: 0 * degToRad,
          z: 0 * degToRad,
          duration: 1,
          ease: 'linear',
        },
        2.3
      )

      .to(camera.position, { x: 0, y: -4, duration: 1 }, 3)
      .to(camera.rotation, { y: 0 * degToRad, duration: 1 }, 3)

      .to(camera.position, { x: 0, y: -4, duration: 1 }, 4)
      .to(camera.rotation, { y: 0 * degToRad, duration: 1 }, 4)

      .to(camera.position, { x: 5, y: -1.5, duration: 1 }, 5)
      .to(
        camera.rotation,
        {
          x: -15 * degToRad,
          y: 0 * degToRad,
          z: 0 * degToRad,
          duration: 1,
          ease: 'linear',
        },
        5
      )

      .to(camera.position, { x: -10, y: 4, z: 17, duration: 1 }, 6)
      .to(
        camera.rotation,
        { x: -15 * degToRad, y: -25 * degToRad, z: -5 * degToRad, duration: 1 },
        6
      )
  }, [])

  return null
}
