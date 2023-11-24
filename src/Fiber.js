import { useRef } from 'react'
import { ARView, ARAnchor} from 'react-three-mind'
// import Target from './targets.mind'

const Fiber = () => {
    const ref= useRef()
    return (
        <div className="fiber-container">
            <ARView
                imageTargets="./targets.mind"
                filterMinCF={1}
                filterBeta={10000}
                missTolerance={0}
                warmupTolerance={0}
            >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <ARAnchor target={0}>
                <mesh>
                    <boxGeometry args={[1, 1, 0.1]} />
                    <meshStandardMaterial color="orange" />
                </mesh>
                </ARAnchor>
            </ARView>
        </div>
    )
}

export default Fiber