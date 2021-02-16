import React from 'react';
import Button from '../Button';
import Header from '../Header';
import './App.css';

function TestComponent () {
  return <img width="16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/768px-Search_Icon.svg.png" 
  alt="Seach icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="Alga-Stock"/>
      
      <div className="Container">
        <Button 
          content="Click me"
          onClick={() => window.alert('Alerta!')}
          appendIcon={<TestComponent/>}
        />
      </div>
    </div>
  );
}

export default App;
