import React from "react";
import "./RepresentationOfValue.css";
import JsonItem from "../JsonItem/JsonItem";

const JsonItemArrayWrapper = ({ jsonValue }) => (
  <>
    {"["}
    {jsonValue.map((item, index) => (
      <JsonItem key={index} keyOfNode={index} jsonValue={item} />
    ))}
    {"]"}
  </>
);

const JsonItemObjectWrapper = ({ jsonValue }) => (
  <>
    {"{"}
    {Object.keys(jsonValue).map((key) => (
      <JsonItem key={key} keyOfNode={key} jsonValue={jsonValue[key]} />
    ))}
    {"}"}
  </>
);

export const RepresentationOfValue = ({ typeOfJsonValue, open, jsonValue }) => {
  const representationOfValueByTypes = {
    string: () => <span className="string">{`"${jsonValue}"`}</span>,
    number: () => <span className="number">{jsonValue}</span>,
    object: () => {
      if (jsonValue === null) {
        return <span className="null">(null)</span>;
      } else {
        const isArray = Array.isArray(jsonValue);
        return open ? (
          isArray ? (
            <JsonItemArrayWrapper jsonValue={jsonValue} />
          ) : (
            <JsonItemObjectWrapper jsonValue={jsonValue} />
          )
        ) : (
          <span className="object">{isArray ? `Array(${jsonValue.length})` : `Object(${Object.keys(jsonValue).length})`}</span>
        );
      }
    },
  };

  return representationOfValueByTypes[typeOfJsonValue]();
};

export default RepresentationOfValue;
