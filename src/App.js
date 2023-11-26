import { useState } from 'react'

import MegaAR from './mega-ar'

import './App.css';

function App() {
  const [started, setStarted] = useState(null)
  const [currentButton, setCurrentButton] = useState(false)

  return (
    <div className="App">
        <h1>Mega AR Tester 3</h1>

        <div className="control-buttons">
          {started === null && <button onClick={() => {setStarted('three')}}>Starte Mega AR</button>}
          {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
          <button onClick={() => setCurrentButton(!currentButton)}>change</button>

        </div>


        {started === 'three' && (
          <div className="container">
            <MegaAR currentButton={currentButton} />
          </div>
        )}

    </div>
  );
}

export default App;
