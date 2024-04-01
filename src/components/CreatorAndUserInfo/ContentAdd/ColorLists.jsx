import React from "react";

import ColorOption from "./ColorOption";

export default function ColorList(props) {
  const { colorData,cardColorSelection } = props;

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
