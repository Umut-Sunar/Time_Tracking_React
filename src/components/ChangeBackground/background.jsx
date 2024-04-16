import React from "react";
import styled from "styled-components";


import BackgroundBtn from "./changeBgBtn";

const ProfileCardLinksThemeSelect = styled.select`
  width: 80%;
  height: 30px;
  border: 1px solid black;
  background-color: white;
  overflow-y: scroll;
`;



export function BackgroundChange(props) {
  const { bgNames, changBGColor ,setTheme} = props;

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
            function changeColor(e) {
              
              
              const classColor = e.target.value;
              
              changBGColor(classColor);
            }

  return (
    <ProfileCardLinksThemeSelect name="selectedTheme" defaultValue={'BLUE'} onChange={changeColor}>
    
      {bgNames &&
        bgNames.map((eachColor, id) => {

              const name = convertClassNameToName(eachColor);

          return (
            <BackgroundBtn
              key={id}
              changBGColor={changBGColor} 
              name={name}
              value={eachColor}
              setTheme={setTheme}
            />
          );
        })}
    </ProfileCardLinksThemeSelect>
  );
}
