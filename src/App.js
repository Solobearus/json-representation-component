import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

function App() {

  const [urlInput, setUrlInput] = useState('');

  const fetchJson = inputValue =>
    fetch(inputValue)
      .then(res => res.json())
      .then(res => console.log(res))

  return (
    <div className="App">
      <Header urlInput={urlInput} setUrlInput={setUrlInput} fetchJson={fetchJson}/>
    </div>
  );
}

export default App;
