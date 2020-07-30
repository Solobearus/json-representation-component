import React from 'react';
import ReactDOM from 'react-dom';
import JsonRepresentation from './JsonRepresentation';
import * as serviceWorker from './serviceWorker';

const initialUrlInput = `https://archive.org/advancedsearch.php?q=subject:google+sheets&output=json`;

ReactDOM.render(
  <React.StrictMode>
    <JsonRepresentation initialUrlInput={initialUrlInput} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
