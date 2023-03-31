
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"

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
}