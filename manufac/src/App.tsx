import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './graph/Echart';
import ScatterChart from './graph/Scatterchart';

function App() {
  return (
    <div className="App">
      <Chart/>
      <ScatterChart/>
    </div>
  );
}

export default App;
