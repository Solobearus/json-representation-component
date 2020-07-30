import React, { useState } from 'react';
import Header from './components/Header/Header';
import './JsonRepresentation.css';
import JsonItem from './components/JsonItem/JsonItem'

function JsonRepresentation({ initialUrlInput }) {

  const [jsonResponse, setJsonResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJson = (inputValue) => {
    setJsonResponse({});
    setIsLoading(true);
    setError('');

    const data = {
      name: 'mocked response',
      nested: {
        obj: { a: false, b: null, c: true },
        arr: [1, 2, 3],
        undef: undefined,
        arrObj: [{ c: 2, d: 3, e: { f: 5 } }, { m: 4 }]
      }
    }

    fetch(inputValue)
      .then(res => res.json())
      .then(res => setJsonResponse(data))
      .catch(error => setError("ERROR : " + error + ' --- please check that the url is valid'))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="jsonRepresentation" data-testid="jsonRepresentation">
      <Header initialUrlInput={initialUrlInput} fetchJson={fetchJson} isLoading={isLoading} />
      <div className="error">{error}</div>
      <div className="jsonHolder">
        {jsonResponse && Object.keys(jsonResponse).length > 0 && <JsonItem jsonValue={jsonResponse} />}
      </div>
    </div>
  )
}

export default JsonRepresentation;
