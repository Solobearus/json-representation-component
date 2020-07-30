import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

function App() {

  const [urlInput, setUrlInput] = useState('');

  return (
    <div className="App">
      <Header urlInput={urlInput} setUrlInput={setUrlInput}/>
    </div>
  );
}

export default App;
