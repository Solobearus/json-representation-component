import React, { useState } from 'react';
import Header from './Header/Header';
import JsonItem from './components/JsonItem/JsonItem'

function App() {

  const [urlInput, setUrlInput] = useState('');
  const [jsonResponse, setJsonResponse] = useState({});

  const fetchJson = inputValue =>
    fetch(inputValue)
      .then(res => res.json())
      .then(res => setJsonResponse(res))

  return (
    <div className="App">
      <Header urlInput={urlInput} setUrlInput={setUrlInput} fetchJson={fetchJson} />
      <div className="JsonWrapper">
        {jsonResponse && Object.keys(jsonResponse).length > 0 && <JsonItem jsonValue={jsonResponse} />}
      </div>
    </div>
  );
}

export default App;
