import React, { Children } from "react";
import './changeBgBtn.css'



export default function BackgroundBtn(props) {
  const { className, changBGColor, name} = props;
  

  function changeColor(e) {
    const classColor = e.target.className;
    changBGColor(classColor);
  }



  return (
    <button
      className={`bgBtn ${className}`}
      onClick={(event) => changeColor(event)}
  
    >{name}
    </button>
  );
}
