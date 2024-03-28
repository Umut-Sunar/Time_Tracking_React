import React from "react";
import { useState } from "react";
import BackgroundBtn from "./changeBgBtn";

export function BackgroundChange(props) {
  const { bgNames, changBGColor } = props;

//   const newBgNames = bgNames.map((color, id) => {
//    if (color === ".white") return "White";
//       if( color === ".dynamicColorful") return "Colorful";
//        if(color === ".dark") return  "Dark";
//       if(color === ".dynamicBlue") return "Blue"
//       if(color === ".yellow") return  "Yellow"
   
//   });

  const convertClassNameToName = (className) => {
         
              switch (className) {
                case '.white':
                           
                  return 'WHITE';
                case '.dynamicColorful':
                  return 'COLORFUL';
                case '.dark':
                  return 'DARK';
                case '.dynamicBlue':
                  return 'BLUE';
                case '.yellow':
                  return 'YELLOW';
                default:
                  return 'UNDEFINED';
              }
            };
          

  return (
    <div className="backgroundContainer absolute">
      {bgNames &&
        bgNames.map((eachColor, id) => {

              const name = convertClassNameToName(eachColor);

          return (
            <BackgroundBtn
              key={id}
              className={eachColor}
              changBGColor={changBGColor} 
              name={name}
            />
          );
        })}
    </div>
  );
}
