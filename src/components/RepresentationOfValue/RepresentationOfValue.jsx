import React from "react";
import "./RepresentationOfValue.css";
import JsonItem from "../JsonItem/JsonItem";

const JsonItemArrayWrapper = ({ jsonValue }) => (
  <>
    <span className="value">[</span>
    {jsonValue.map((item, index) => (
      <JsonItem key={index} keyOfNode={index} jsonValue={item} />
    ))}
    <span>]</span>
  </>
);

const JsonItemObjectWrapper = ({ jsonValue }) => (
  <>
    <span className="value">{"{"}</span>
    {Object.keys(jsonValue).map((key) => (
      <JsonItem key={key} keyOfNode={key} jsonValue={jsonValue[key]} />
    ))}
    <span>{"}"}</span>
  </>
);

const BooleanProperty = ({ jsonValue }) => <span className="boolean value">{`${jsonValue ? "True" : "False"}`}</span>;
const NumberProperty = ({ jsonValue }) => <span className="number value">{jsonValue}</span>;
const StringProperty = ({ jsonValue }) => <span className="string value">{`"${jsonValue}"`}</span>;

const ObjectProperty = ({ jsonValue, open }) => {
  if (jsonValue === null) {
    return <span className="null value">(null)</span>;
  } else {
    const isArray = Array.isArray(jsonValue);
    return open ? (
      isArray ? (
        <JsonItemArrayWrapper jsonValue={jsonValue} />
      ) : (
        <JsonItemObjectWrapper jsonValue={jsonValue} />
      )
    ) : (
      <span className="object value">{isArray ? `Array(${jsonValue.length})` : `Object(${Object.keys(jsonValue).length})`}</span>
    );
  }
};

export const RepresentationOfValue = ({ typeOfJsonValue, open, jsonValue }) => {
  switch (typeOfJsonValue) {
    case "boolean":
      return <BooleanProperty jsonValue={jsonValue} />;
    case "string":
      return <StringProperty jsonValue={jsonValue} />;
    case "number":
      return <NumberProperty jsonValue={jsonValue} />;
    case "object":
      return <ObjectProperty jsonValue={jsonValue} open={open} />;
    default:
      return <></>;
  }
};

export default RepresentationOfValue;
