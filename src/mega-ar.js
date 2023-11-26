import React, { useRef, useEffect, useState } from 'react'
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod'
import * as THREE from 'three'


const MegaAR = ({ currentButton }) => {
    const containerRef = useRef(null)
    console.log(currentButton)

    useEffect(() => {
            const mindarThree = new MindARThree({
                container: containerRef.current,
                imageTargetSrc: "./targets.mind",
                filterMinCF: 0.1,
                filterBeta: 10
              });
              var material
              const {renderer, scene, camera} = mindarThree;
              const anchor = mindarThree.addAnchor(0);
              const geometry = new THREE.PlaneGeometry(1, 1.55);
              const germanTexture = new THREE.TextureLoader().load('./a1-deutsche-stade.jpg')
              const americaTexture = new THREE.TextureLoader().load('./a1-america-city.jpg')
              if (currentButton === false) {
                material = new THREE.MeshBasicMaterial( {map: americaTexture, transparent: true, opacity: 0.5} )
              } else {
                material = new THREE.MeshBasicMaterial( {map: germanTexture, transparent: true, opacity: 0.5} )
              }
              const plane = new THREE.Mesh( geometry, material )
              console.log(plane)
              anchor.group.add(plane)
              
            //   mindarThree({filterMinCF: 1})
              console.log(mindarThree)
              mindarThree.start();
              console.log(renderer)
              renderer.render(scene, camera);
              renderer.setAnimationLoop(loop => {
                // console.log(loop)
                //   console.log(renderer)
                renderer.render(scene, camera)
              });
          
              return () => {
                renderer.setAnimationLoop(null)
                if (mindarThree.controller !== undefined) {
                    console.log('controller ')
                    mindarThree.stop()
                }
                
                console.log(mindarThree)
              }
  
      }, [currentButton]);


    return (
            <div style={{ width: '100%', height: "100%"}} ref={containerRef}></div>

    )
}

export default MegaAR