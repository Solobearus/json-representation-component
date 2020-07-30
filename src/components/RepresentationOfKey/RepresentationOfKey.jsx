import React from "react";
import "./RepresentationOfKey.css";

const formatKey = (keyOfNode) => (keyOfNode || keyOfNode === 0 ? `${keyOfNode} : ` : "");

export const RepresentationOfKey = ({ typeOfJsonValue, open, setOpen, keyOfNode, jsonValue }) =>
  typeOfJsonValue === "object" && jsonValue !== null && Object.keys(jsonValue).length > 0 ? (
    <span onClick={() => setOpen(!open)} className={"key"}>
      {`${open ? "-" : "+"} ${formatKey(keyOfNode)}`}
    </span>
  ) : (
    <span>{formatKey(keyOfNode)}</span>
  );

export default RepresentationOfKey;
