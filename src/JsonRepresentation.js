import React, { useState } from 'react';
import Header from './components/Header/Header';
import './JsonRepresentation.css';
import JsonItem from './components/JsonItem/JsonItem'

function JsonRepresentation() {

  const [urlInput, setUrlInput] = useState('');
  const [jsonResponse, setJsonResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fetchJson = async (inputValue) => {
    setJsonResponse({});
    setIsLoading(true);
    setError('');
    
    await fetch(inputValue)
      .then(res => res.json())
      .then(res => setJsonResponse(res))
      .catch(error => {
        setError("ERROR : " + error + ' --- please check that the url is valid')
      });

    setIsLoading(false);  
  }

  return (
    <div className="JsonRepresentation" data-testid="JsonRepresentation">
      <Header urlInput={urlInput} setUrlInput={setUrlInput} fetchJson={fetchJson} isLoading={isLoading} />
      <div className="error">{error}</div>
      <div className="JsonHolder">
        {jsonResponse && Object.keys(jsonResponse).length > 0 && <JsonItem jsonValue={jsonResponse} />}
      </div>
    </div>
  )
}

export default JsonRepresentation;
