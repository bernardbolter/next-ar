import React, { useRef, useEffect } from 'react'
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod'
import * as THREE from 'three'

const MegaAR = (props) => {
    const containerRef = useRef(null)
    console.log(props)

    useEffect(() => {
        // if (controller !== undefined) {
            const mindarThree = new MindARThree({
                container: containerRef.current,
                imageTargetSrc: "./targets.mind"
              });
              const {renderer, scene, camera} = mindarThree;
              const anchor = mindarThree.addAnchor(0);
              const geometry = new THREE.PlaneGeometry(1, 0.55);
              const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
              const plane = new THREE.Mesh( geometry, material );
              console.log(plane)
              anchor.group.add(plane);
          
              mindarThree.start();
              renderer.render(scene, camera);
              renderer.setAnimationLoop(loop => {
                // console.log(loop)
                //   console.log(renderer)
                renderer.render(scene, camera);
              });
          
              return () => {
                renderer.setAnimationLoop(null);
                // mindarThree.stop();
              }
        // }
  
      }, []);


    return (
        <div style={{ width: '100%', height: "100%"}} ref={containerRef}>

        </div>
    )
}

export default MegaAR