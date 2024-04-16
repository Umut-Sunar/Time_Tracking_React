import React from "react";

import ColorOption from "./ColorOption";

export default function ColorList(props) {
  const { colorData} = props;

  return (
    <>
      {colorData.map((eachColor, id) => (
        <ColorOption
         key={id} 
         eachColor={eachColor}
         
         />
      ))}
    </>
  );
}
