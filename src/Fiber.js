import { useState, useRef, Suspense } from 'react'
import { ARView, ARAnchor } from 'react-three-mind'
// import Target from './targets.mind'
// import { useTexture } from '@react-three/drei'
// import * as THREE from 'three'
// import { useLoader } from 'react-three-fiber'

const Fiber = () => {
    // const texture = useLoader(THREE.TextureLoader, '/a1-amercia-city.jpg')
    const ref = useRef()
    const [showText, setShowText] = useState(false)
    const anchorFound = () => {
        setShowText(true)
    }
    const anchorLost = () => {
        setShowText(false)
    }
    return (
        <div className="fiber-container">
            <ARView
                ref={ref}
                imageTargets="./targets.mind"
                filterMinCF={1}
                filterBeta={10000}
                missTolerance={0}
                warmupTolerance={0}
            >
                <ambientLight />
                <pointLight position={[1, 1, 1]} />
                <ARAnchor 
                    target={0}
                    onAnchorFound={() => anchorFound()}
                    onAnchorLost={() => anchorLost()}
                >
                <mesh>
                    <boxGeometry args={[.5, .5, 1]} />
                    <meshStandardMaterial attach="material" color="orange" map={texture} />
                </mesh>
                </ARAnchor>
            </ARView>
            {showText && (
                <h1>Test Text 2</h1>
            )}
        </div>
    )
}

export default Fiber