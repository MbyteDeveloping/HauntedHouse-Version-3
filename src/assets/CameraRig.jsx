/* import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export default function CameraRig({ children }) {
  const group = useRef()

  useFrame((state, delta) => {
    // easing.damp3(
    //     state.camera.position,
    //     [5 + state.pointer.x * 2, 5 + state.pointer.y * 1.5, 15],
    //     0.55,
    //     delta
    // )
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 30, state.pointer.x / 5, 0],
      0.85,
      delta
    )
  })
  return <group ref={group}>{children}</group>
} */

/* import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export default function CameraRig({ children }) {
  const group = useRef()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mainWrapper = document.getElementById('main-wrapper')
  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = mainWrapper.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setMousePosition({ x, y })
    }
    mainWrapper.addEventListener('mousemove', handleMouseMove)
    return () => mainWrapper.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [mousePosition.y / 30, mousePosition.x / 5, 0],
      0.85,
      delta
    )
  })

  return <group ref={group}>{children}</group>
}
 */

/* import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export default function CameraRig({ children }) {
  const group = useRef()

  useEffect(() => {
    // Listen for mouse move events on the document
    document.addEventListener('mousemove', handleMouseMove)

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleMouseMove = (event) => {
    const canvas = document.querySelector('canvas')
    const canvasRect = canvas.getBoundingClientRect()

    const mouseX = event.clientX - canvasRect.left
    const mouseY = event.clientY - canvasRect.top

    // Calculate the mouse position relative to the canvas
    const pointer = {
      x: (mouseX / canvasRect.width) * 2 - 1,
      y: -(mouseY / canvasRect.height) * 2 + 1,
    }

    // Update the pointer state in the useFrame hook
    state.pointer = pointer
  }

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 30, state.pointer.x / 5, 0],
      0.85,
      delta
    )
  })

  return <group ref={group}>{children}</group>
} */

import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export default function CameraRig({ children }) {
  const group = useRef()
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Listen for mouse move events on the document
    document.addEventListener('mousemove', handleMouseMove)

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleMouseMove = (event) => {
    const canvas = document.querySelector('canvas')
    const canvasRect = canvas.getBoundingClientRect()

    const mouseX = event.clientX - canvasRect.left
    const mouseY = event.clientY - canvasRect.top

    // Calculate the mouse position relative to the canvas
    pointer.current = {
      x: (mouseX / canvasRect.width) * 2 - 1,
      y: -(mouseY / canvasRect.height) * 2 + 1,
    }
  }

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [pointer.current.y / 30, pointer.current.x / 5, 0],
      0.85,
      delta
    )
  })

  return <group ref={group}>{children}</group>
}
