import { useState } from 'react'

import MindARViewer from './mindar-viewer'
import MindARThreeViewer from './mindar-three-viewer'
import Fiber from './Fiber'

import './App.css';

function App() {
  const [started, setStarted] = useState(null)

  return (
    <div className="App">
        <h1>Mega AR Tester</h1>

        <div className="control-buttons">
          {/* {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}
          {started === null && <button onClick={() => {setStarted('three')}}>Start ThreeJS version</button>} */}
          {started === null && <button onClick={() => {setStarted('fiber')}}>Start Fiber version</button>}
          {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
        </div>

        {/* {started === 'aframe' && (
          <div className="container">
            <MindARViewer/>
            <video></video>
          </div>
        )}

        {started === 'three' && (
          <div className="container">
            <MindARThreeViewer />
          </div>
        )} */}

        {started === 'fiber' && (
          <div className="container">
            <Fiber />
          </div>
        )}
    </div>
  );
}

export default App;
