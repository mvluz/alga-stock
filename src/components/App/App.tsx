import React, { useState } from 'react';
import Button from '../Shared/Button';
import Header from '../Header';
import './App.css';
import Container from '../Shared/Container';
import Input from '../Shared/Input';

function TestComponent () {
  return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" 
  alt="Seach icon"/>
}

function App() {
  const [logradouro, setLogradouro] = useState('')

  return (
    <div className="App">
      <Header title="Alga-Stock"/>
      
      <Container>
        <Button 
          onClick={() => window.alert('Alerta!')}
          appendIcon={<TestComponent/>}
        >
        Alert
        </Button>
        <Input 
          label="Logradouro"
          placeholder="AV. Assis Brasil"
          value={logradouro}
          onChange={ e => setLogradouro(e.target.value) }
        />
      </Container>
    </div>
  );
}

export default App;
