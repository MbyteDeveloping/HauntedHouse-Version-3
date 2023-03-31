import { useTexture, Plane, Billboard } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three'

export default function Clouds(props) {
    const cloudTexture = useTexture('https://hauntedhouse2023.netlify.app/cloud.png')
    const cloud1 = useRef()
    const cloud2 = useRef()
    const cloud3 = useRef()

    useFrame((state, delta) => {
        cloud1.current.position.x += 0.0011

        if (cloud1.current.position.x > 20.8) {
            cloud1.current.position.x = -20.9
        }

        cloud2.current.position.x -= 0.0009
        cloud2.current.position.y = 0.9 + Math.cos(state.clock.getElapsedTime() / 6) * 0.09

        if (cloud2.current.position.x < -10.5) {
            cloud2.current.position.x = 10.5
        }

        cloud3.current.position.y = -2.5 - Math.cos(state.clock.getElapsedTime() / 6) * 0.09

    })

    return (
        <Billboard
            {...props}
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} // Lock the rotation on the z axis (default=false)
        >
            <Plane ref={cloud1} position={[0, 1, 2]} scale={[6, 3, 1]}>
                <meshStandardMaterial color={new Color("#4d76a8")} alphaMap={cloudTexture} alphaToCoverage map={cloudTexture} opacity={0.5} transparent />
            </Plane>
            <Plane ref={cloud2} position={[0, 0, -3]} scale={[4, 2.5, 1]}>
                <meshStandardMaterial color={new Color("#4d76a8")} alphaMap={cloudTexture} alphaToCoverage map={cloudTexture} opacity={0.4} transparent />
            </Plane>
            <Plane ref={cloud3} position={[0, -8, 3]} scale={[4, 3, 1]}>
                <meshStandardMaterial color={new Color("#4d76a8")} alphaMap={cloudTexture} alphaToCoverage map={cloudTexture} opacity={0.48} transparent />
            </Plane>
        </Billboard>
    )
}
