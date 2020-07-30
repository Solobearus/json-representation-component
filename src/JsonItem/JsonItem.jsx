import React, { useState } from "react";
import "./JsonItem.css";

const JsonItem = ({ keyOfNode, jsonValue }) => {
  const [open, setOpen] = useState(false);

  let representationOfValue = "";
  let representationOfKey = (
    <span>{keyOfNode || keyOfNode === 0 ? `${keyOfNode} :` : ""}</span>
  );

  switch (typeof jsonValue) {
    case "string":
      representationOfValue = (
        <span className="string">{`"${jsonValue}"`}</span>
      );
      break;

    case "number":
      representationOfValue = <span className="number">{jsonValue}</span>;
      break;

    case "object":
      if (jsonValue === null) {
        representationOfValue = <span className="null">(null)</span>;
      } else {
        const isArray = Array.isArray(jsonValue);

        representationOfKey = (
          <span onClick={() => setOpen(!open)} className={"key"}>
            {`${open ? "-" : "+"} ${
              keyOfNode || keyOfNode === 0 ? `${keyOfNode} : ` : ""
            }`}
          </span>
        );

        if (open) {
          representationOfValue = (
            <>
              {isArray ? "[" : "{"}
              {isArray
                ? jsonValue.map((item, index) => (
                    <JsonItem keyOfNode={index} jsonValue={item} />
                  ))
                : Object.keys(jsonValue).map((key) => (
                    <JsonItem keyOfNode={key} jsonValue={jsonValue[key]} />
                  ))}
              {isArray ? "]" : "}"}
            </>
          );
        } else {
          representationOfValue = (
            <span className="object">
              {isArray
                ? `Array(${jsonValue.length})`
                : `Object(${Object.keys(jsonValue).length})`}
            </span>
          );
        }
      }
      break;

    default:
      break;
  }

  return (
    <div className={"jsonItem"} data-testid="JsonItem">
      {representationOfKey}
      {representationOfValue}
    </div>
  );
};

export default JsonItem;
