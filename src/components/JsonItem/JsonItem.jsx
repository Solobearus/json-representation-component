import React, { useState } from "react";
import "./JsonItem.css";
import RepresentationOfKey from "../RepresentationOfKey/RepresentationOfKey";
import RepresentationOfValue from "../RepresentationOfValue/RepresentationOfValue";

const JsonItem = ({ keyOfNode, jsonValue }) => {
  const [open, setOpen] = useState(false);

  const typeOfJsonValue = typeof jsonValue;

  return (
      <div className="jsonItem">
        <RepresentationOfKey typeOfJsonValue={typeOfJsonValue} open={open} setOpen={setOpen} keyOfNode={keyOfNode} jsonValue={jsonValue} />
        <RepresentationOfValue typeOfJsonValue={typeOfJsonValue} open={open} jsonValue={jsonValue} />
      </div>
  );
};

export default JsonItem;
