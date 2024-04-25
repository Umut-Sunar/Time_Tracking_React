import React from "react";


import PreHeader from "../components/Header/PreHeader";



export default function Header(props) {

  const {bgNames,userData,changBGColor,isLogin,setTheme,theme,OpenCloseBar,sidebarstatus,logout} = props

  
  return (<>


  <PreHeader
  logout={logout}
  bgNames={bgNames}
  userData={userData}
  changBGColor={changBGColor}
  theme={theme}
  isLogin={isLogin}
  setTheme={setTheme}
  OpenCloseBar={OpenCloseBar}
  sidebarstatus={sidebarstatus}
  
  />
  



  
  </>)
}
