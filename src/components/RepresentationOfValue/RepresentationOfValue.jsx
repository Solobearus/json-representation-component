import React from "react";
import "./RepresentationOfValue.css";
import JsonItem from "../JsonItem/JsonItem";

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
          <>
            {isArray ? (
              <>
                {"["}
                {jsonValue.map((item, index) => (
                  <JsonItem key={index} keyOfNode={index} jsonValue={item} />
                ))}
                {"]"}
              </>
            ) : (
              <>
                {"{"}
                {Object.keys(jsonValue).map((key) => (
                  <JsonItem key={key} keyOfNode={key} jsonValue={jsonValue[key]} />
                ))}
                {"}"}
              </>
            )}
          </>
        ) : (
          <span className="object">{isArray ? `Array(${jsonValue.length})` : `Object(${Object.keys(jsonValue).length})`}</span>
        );
      }
    },
  };

  return representationOfValueByTypes[typeOfJsonValue]();
};
export default RepresentationOfValue;
