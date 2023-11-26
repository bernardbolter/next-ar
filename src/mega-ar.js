import React, { useRef, useEffect, useState } from 'react'
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod'
import * as THREE from 'three'

const Button = ({city, setCurrentButton}) => {
    console.log(city)
    return (
        <div 
            className="button"
            onClick={() => {
                setCurrentButton(city)
                console.log("set current: ", city)
            }}    
        >
            <p
                style={{ color: 'white', padding: '0 20px' }}
            >{city}</p>
        </div>
    )
}

const MegaAR = (props) => {
    const containerRef = useRef(null)
    const [currentButton, setCurrentButton] = useState('')
    console.log(props)
    console.log(currentButton)

    useEffect(() => {
            const mindarThree = new MindARThree({
                container: containerRef.current,
                imageTargetSrc: "./targets.mind"
              });
              const {renderer, scene, camera} = mindarThree;
              const anchor = mindarThree.addAnchor(0);
              const geometry = new THREE.PlaneGeometry(1, 1.55);
              const texture = new THREE.TextureLoader().load('./a1-america-city.jpg')
              const material = new THREE.MeshBasicMaterial( {map: texture, transparent: true, opacity: 0.5} )
              const plane = new THREE.Mesh( geometry, material )
              console.log(plane)
              anchor.group.add(plane)
              
              console.log(mindarThree)
              mindarThree.start();
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
  
      }, []);


    return (
        <>
            <div style={{ width: '100%', height: "100%"}} ref={containerRef}></div>
            <div 
                className="button-container"
                style={{ position: 'absolute', width: '100%', bottom: 0, left: 0, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', zIndex: 100, height: '100px', background: 'black' }}    
            >
                <Button city="berlin" setCurrentButton={setCurrentButton}/>
                <Button city="hamburg" setCurrentButton={setCurrentButton} />
            </div>
        </>
    )
}

export default MegaAR