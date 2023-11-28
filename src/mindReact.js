import React, { useRef, useEffect } from 'react'
import { ARAnchor, ARView } from "react-three-mind";

function Plane(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 0.1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function MindReact() {
    const ref = useRef(null)
    useEffect(() => {
        if (ref !== null) {
            
            ref.current.startTracking()
        }
        
        
    }, [ref])
    
  return (
    <ARView
        ref={ref}
        autoplay
      imageTargets="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/card-example/card.mind"
      filterMinCF={1}
      filterBeta={10000}
      missTolerance={0}
      warmupTolerance={0}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ARAnchor 
        target={0}
        onAnchorFound={() => console.log('found')} 
        onAnchorLost={() => console.log('lost')}
        >
        <Plane />
      </ARAnchor>
    </ARView>
  );
}

export default MindReact;