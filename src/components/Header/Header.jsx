import React from "react";
import "./Header.css";

const Header = ({ urlInput, setUrlInput, fetchJson }) => {
  return (
    <div className="header" data-testid="header">
      <div>URL:</div>
      <input className="header__input" type="text" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />
      <button
        onClick={() => {
          fetchJson(urlInput);
        }}
      >
        Fetch JSON
      </button>
    </div>
  );
};

export default Header;
