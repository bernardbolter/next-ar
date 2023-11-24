import React, { useState } from 'react'
import { ARAnchor, ARView } from "react-three-mind";

function Plane(props) {
  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Fiber() {
    const [showText, setShowText] = useState(false)

  return (
    <ARView
      imageTargets="/targets.mind"
      filterMinCF={1}
      filterBeta={10000}
      missTolerance={0}
      warmupTolerance={0}
    >
        
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
        <ARAnchor 
            target={0}
            onAnchorFound={() => setShowText(true)}
            onAnchorLost={() => setShowText(false)}
        >
        <Plane />
      </ARAnchor>
      {showText && <p>TEXT</p>}
    </ARView>
  );
}

export default Fiber;