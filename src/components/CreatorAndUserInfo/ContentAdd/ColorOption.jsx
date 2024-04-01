import React from "react";

export default function ColorOption(props) {
  const { eachColor} = props;



  return (
    <>
      <option value={eachColor} >
        {eachColor}
      </option>
    </>
  );
}
