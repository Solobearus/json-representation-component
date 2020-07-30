import React from "react";
import "./Header.css";

const Header = ({ urlInput, setUrlInput, fetchJson }) => {
  return (
    <div className="header" data-testid="header">
      <div>URL:</div>
      <input
        type="text"
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}
      />
      <button onClick={() => {fetchJson()}}>Fetch JSON</button>
    </div>
  );
};

export default Header;
