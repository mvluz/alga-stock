import React from 'react';
import Button from '../Button';
import Header from '../Header';
import './App.css';

function TestComponent () {
  return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" 
  alt="Seach icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="Alga-Stock"/>
      
      <div className="Container">
        <Button 
          onClick={() => window.alert('Alerta!')}
          appendIcon={<TestComponent/>}
        >
        Alert
        </Button>
      </div>
    </div>
  );
}

export default App;
