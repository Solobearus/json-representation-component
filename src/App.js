import React, { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import JsonItem from './components/JsonItem/JsonItem'

function App() {

  const [urlInput, setUrlInput] = useState('')
  const [jsonResponse, setJsonResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  
  const fetchJson = async (inputValue) => {
    setLoading(true);
    setError('');
    
    await fetch(inputValue)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setJsonResponse(res)})
      .catch(error => {setError("ERROR : " + error + ' --- please check that the url is valid')});

    setLoading(false);  
  }

  return (
    <div className="App" data-testid="App">
      <Header urlInput={urlInput} setUrlInput={setUrlInput} fetchJson={fetchJson} loading={loading} />
      <div className="error">{error}</div>
      <div className="JsonHolder">
        {jsonResponse && Object.keys(jsonResponse).length > 0 && <JsonItem jsonValue={jsonResponse} />}
      </div>
    </div>
  )
}

export default App;
