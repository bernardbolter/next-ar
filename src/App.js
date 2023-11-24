import { useState } from 'react'

import MegaAR from './mega-ar'
import Frame from './frame'

import './App.css';

function App() {
  const [started, setStarted] = useState(null)

  return (
    <div className="App">
        <h1>Mega AR Tester 2</h1>

        <div className="control-buttons">
          {started === null && <button onClick={() => {setStarted('three')}}>Starte Mega AR</button>}
          {started === null && <button onClick={() => {setStarted('frame')}}>Start AFRAME AR</button>}
          {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
        </div>


        {started === 'three' && (
          <div className="container">
            <MegaAR />
          </div>
        )}

        {started === 'frame' && (
          <div className="container">
            <Frame />
            <video></video>
          </div>
        )}

    </div>
  );
}

export default App;
