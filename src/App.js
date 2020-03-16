// React
import React from 'react'
// Components
import KaijuContainer from './KaijuContainer'
// Styling
import './App.css';
// Import Fetches
import * as requests from './requests'

function App() {
  return (
    <div className="App">

      {/* No need to touch anything in here, let's check out the kaiju container instead! */}

      <h1 id="title">Kaiju Tracker 怪獣ハンター</h1>
      <KaijuContainer />

    </div>
  );
}

export default App;
