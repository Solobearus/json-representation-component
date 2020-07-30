import React from "react";

export const RepresentationOfKey = ({ typeOfJsonValue, open, setOpen, keyOfNode }) =>
  typeOfJsonValue === "object" ? (
    <span onClick={() => setOpen(!open)} className={"key"}>
      {`${open ? "-" : "+"} ${keyOfNode || keyOfNode === 0 ? `${keyOfNode} : ` : ""}`}
    </span>
  ) : (
    <span>{keyOfNode || keyOfNode === 0 ? `${keyOfNode} :` : ""}</span>
  );

export default RepresentationOfKey;
