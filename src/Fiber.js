import { useState, useRef } from 'react'
import { ARView, ARAnchor, useLoader} from 'react-three-mind'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import Target from './targets.mind'

const Fiber = () => {
    const city = useLoader(TextureLoader, './a1-america-city.jpg')
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
                <pointLight position={[10, 10, 10]} />
                <ARAnchor 
                    target={0}
                    onAnchorFound={() => anchorFound()}
                    onAnchorLost={() => anchorLost()}
                >
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="orange" map={city} />
                </mesh>
                </ARAnchor>
            </ARView>
            {showText && (
                <h1>Test Text</h1>
            )}
        </div>
    )
}

export default Fiber