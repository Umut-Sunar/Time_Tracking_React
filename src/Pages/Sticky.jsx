import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";


import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding-top: 100px;

  flex-direction: column;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export default function Sticky(props) {
  const {
    theme,
    sidebarstatus,
    bgNames,
    changBGColor,
    activeBg,
    isLogin,
    setTheme,
    userData,
    OpenCloseBar,
    logout
  } = props;

  return (
    <>
      <Wrapper>
        <Header
        logout={logout}
          bgNames={bgNames}
          changBGColor={changBGColor}
          activeBg={activeBg}
          isLogin={isLogin}
          setTheme={setTheme}
          theme={theme}
          userData={userData}
          OpenCloseBar={OpenCloseBar}
          sidebarstatus={sidebarstatus}
        ></Header>

        <Sidebar
          theme={theme}
          OpenCloseBar={OpenCloseBar}
          sidebarstatus={sidebarstatus}
        />
        
      </Wrapper>
    </>
  );
}
