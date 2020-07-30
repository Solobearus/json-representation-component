import React from "react";
import "./RepresentationOfKey.css";
export const RepresentationOfKey = ({ typeOfJsonValue, open, setOpen, keyOfNode, jsonValue}) =>
  typeOfJsonValue === "object" && jsonValue !== null ? (
    <span onClick={() => setOpen(!open)} className={"key"}>
      {`${open ? "-" : "+"} ${keyOfNode || keyOfNode === 0 ? `${keyOfNode} : ` : ""}`}
    </span>
  ) : (
    <span>{keyOfNode || keyOfNode === 0 ? `${keyOfNode} : ` : ""}</span>
  );

export default RepresentationOfKey;
