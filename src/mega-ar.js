import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react'
import {MindARThree} from 'mind-ar/dist/mindar-image-three.prod.js';
import * as THREE from 'three'

const images = [
  { 
    name: 'germany',
    src: './a1-deutsche-stadt.jpg'
  },
  {
    name: 'america',
    src: './a1-america-city.jpg'
  }
]


const MegaAR = ({ currentButton }) => {
    const containerRef = useRef(null)
    const [material, setMaterial] = useState(new THREE.MeshBasicMaterial( {transparent: true, opacity: 0.5} ) )
    const germanTexture = new THREE.TextureLoader().load('./a1-deutsche-stadt.jpg')
    const americaTexture = new THREE.TextureLoader().load('./a1-america-city.jpg')
    // const material = new THREE.MeshBasicMaterial( {map: americaTexture, transparent: true, opacity: 0.5} )
    
    

    useEffect(() => {
      setMaterial(state => ({ ...state, map: americaTexture }) )
    }, [])
    console.log(material)
    // let mindarThree = useRef(null)
    // let mindarThree

    // useEffect(() => {
    //   mindarThree = new MindARThree({
    //     container: containerRef.current,
    //     imageTargetSrc: "./targets.mind",
    //     filterMinCF: 0.1,
    //     filterBeta: 10
    //     })
    //     const loader = new THREE.TextureLoader()
    //     const textures = loader.load()

    //     setTheScene(mindarThree.scene)
    //     mindarThree.start()
    //     console.log(theScene)
    // },[])

    // console.log(currentButton)
    // const [mindarThree, setMindarThree] = useState(null)
    // var mindarThree
    // const [mindarThree, setMindarThree] = useState(null)

    // const mindarThree = useMemo(() => {
    //     new MindARThree({
    //         container: containerRef.current,
    //         imageTargetSrc: "./targets.mind",
    //         filterMinCF: 0.1,
    //         filterBeta: 10
    //         })
    // }, [])
    // var mindarThree
    

    useEffect(() => {
      console.log(currentButton)
    
      // mindarThree.anchors[0].visible = true

              
              const mindarThree = new MindARThree({
                        container: containerRef.current,
                        imageTargetSrc: "./targets.mind",
                        filterMinCF: 0.1,
                        filterBeta: 10,
                        // uiLoading: false,
                        // uiScanning: false
                        })
              
              // var plane
              const {renderer, scene, camera} = mindarThree;
              // console.log(mindarThree)   
              
              
              const anchor = mindarThree.addAnchor(0);
              const geometry = new THREE.PlaneGeometry(1, 1.55);
             
              // if (currentButton === false) {
              //   material = new THREE.MeshBasicMaterial( {map: americaTexture, transparent: true, opacity: 0.5} )
              // } else {
              //   material = new THREE.MeshBasicMaterial( {map: germanTexture, transparent: true, opacity: 0.5} )
              // }
              const plane = new THREE.Mesh( geometry, material )
              // console.log(plane)
              anchor.group.add(plane)
              console.log(anchor)
              anchor.visible = true
              
              // mindarThree({filterMinCF: 1})
              console.log("third: ", mindarThree)
              mindarThree.start();
            //   console.log(renderer)
              // console.log(germanTexture)
              // renderer.render(scene, camera);
              renderer.setAnimationLoop(loop => {
                // console.log(renderer)
                //   console.log(renderer)
                
                renderer.render(scene, camera)
              });
          
              return () => {
                // mindarThree.stop()
                renderer.setAnimationLoop(null)
                // if (mindarThree.controller !== undefined) {
                //     console.log('controller ')
                //     mindarThree.stop()
                // }
                // mindarThree.stop()
                // }
                
                console.log("fourth: ",mindarThree)
              }
  
      }, [currentButton]);

      useEffect(() => {
        console.log("MT: ", material)
        console.log(currentButton)
        if (currentButton === true) {
          setMaterial(state => ({ ...state, map: germanTexture }))
        } else {
          setMaterial(state => ({ ...state, map: americaTexture }))
        }
      }, [currentButton])


    return (
            <div style={{ width: '100%', height: "100%"}} ref={containerRef}></div>

    )
}

export default MegaAR