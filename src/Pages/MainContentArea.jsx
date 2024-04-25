import React, { useEffect } from "react";
import { useState } from "react";

import {
  NavLink,
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import bgNames from "../../Data/backgroundData";


import EnteranceSentence from "../components/EnteranceSentence/EnterenceSentence";
import { faPiedPiperPp } from "@fortawesome/free-brands-svg-icons";
import Sticky from "./Sticky";



export default function MainContentArea(props) {
  const { isLogin ,activeBg,setActiveBg,userData ,logout} = props;

 
  const [theme, setTheme] = useState("white");
 
  const [sidebarstatus, setSidebarStatus] = useState(false);

  function changBGColor(arr) {
    const html = document.querySelector("html");

    const whichBG = arr.split(" ");
    let result = whichBG[whichBG.length - 1];
    result = result.replace(/^\./, "");
    html.classList = "";
    html.classList.add(result);
    setActiveBg(result);
  }
  function OpenCloseBar(params) {
    params ? setSidebarStatus(false) : setSidebarStatus(true);
  }

 

  return (
    <>
      
        {/* <EnteranceSentence /> */}

        {!isLogin ? <Navigate to="/app/mainpage" /> : 
        
        <Sticky
        logout={logout}
        theme={theme}
        sidebarstatus={sidebarstatus}
        bgNames={bgNames}
        changBGColor={changBGColor}
        activeBg={activeBg}
        isLogin={isLogin}
        setTheme={setTheme}
        userData={userData}
        OpenCloseBar={OpenCloseBar}
        
        
        />
       
        
        
        }
            
            
      
     
    </>
  );
}
