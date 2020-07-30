import React, { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import JsonItem from './components/JsonItem/JsonItem'

function App() {

  const [urlInput, setUrlInput] = useState('https://archive.org/advancedsearch.php?q=subject:google+sheets&output=json')
  const [jsonResponse, setJsonResponse] = useState({});

  const fetchJson = (inputValue) =>
    fetch(inputValue)
      .then(res => res.json())
      .then(res => setJsonResponse(res))


  return (
    <div className="App" data-testid="App">
      <Header urlInput={urlInput} setUrlInput={setUrlInput} fetchJson={fetchJson} />
      <div className="JsonHolder">
        {jsonResponse && Object.keys(jsonResponse).length > 0 && <JsonItem jsonValue={jsonResponse} />}
      </div>
    </div>
  )
}

export default App;
