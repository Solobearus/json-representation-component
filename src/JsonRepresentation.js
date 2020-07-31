import React, { useState } from 'react';
import Header from './components/Header/Header';
import './JsonRepresentation.css';
import JsonItem from './components/JsonItem/JsonItem'


const isValidJson = jsonValue => !!jsonValue && typeof jsonValue === 'object' && !Array.isArray(jsonValue);

function JsonRepresentation({ initialUrlInput }) {

  const [jsonResponse, setJsonResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJson = (inputValue) => {
    setJsonResponse();
    setIsLoading(true);
    setError('');

    fetch(inputValue)
      .then(res => res.json())
      .then(res => isValidJson(res) ? setJsonResponse(res) : setError("ERROR : The repsonse is not a valid json"))
      .catch(error => setError("ERROR : " + error + ' --- please check that the url is valid and that it returns a valid json'))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="jsonRepresentation" >
      <Header initialUrlInput={initialUrlInput} fetchJson={fetchJson} isLoading={isLoading} />
      <div className="error">{error}</div>
      <div className="jsonHolder">
        {isValidJson(jsonResponse) && <JsonItem jsonValue={jsonResponse} />}
      </div>
    </div>
  )
}

export default JsonRepresentation;
