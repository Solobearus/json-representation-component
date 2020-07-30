import React, { useState,useEffect } from "react";
import "./Header.css";

const Header = ({ initialUrlInput, fetchJson, isLoading }) => {
  
  const [urlInput, setUrlInput] = useState("");

  useEffect(() => {
    setUrlInput(initialUrlInput);
  }, []);

  return (
    <div className="header" data-testid="header">
      <div>URL:</div>
      <input className="header__input" type="text" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />
      <button
        onClick={() => {
          fetchJson(urlInput);
        }}
      >
        {isLoading ? <div className="spinner">🧙‍♂️</div> : "Fetch JSON"}
      </button>
    </div>
  );
};

export default Header;
