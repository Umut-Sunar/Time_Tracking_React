import React, { useState } from "react";
import {
  NavLink,
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";
import styled from "styled-components";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGauge, faDatabase } from '@fortawesome/free-solid-svg-icons';


const Wrapper = styled.section`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;

  gap: 20px;

  display: flex;
  justify-content: start;
  align-items: start;
`;

const Aside = styled.aside`
  width: ${(props) => (props.$sidebarstatus === true ? "275px" : "50px ")};
  height: 100vh;
  position: fixed;
  top: 40px;
  left: 0;

  background-color: rgb(82, 78, 225);

  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 20x;
  transition: width 0.5s ease-in;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  width: 100%;
  color: ${(props) =>
    props.$theme === "black"
      ? "white"
      : props.$theme === "white"
      ? "black"
      : "white"};
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${(props) =>
    props.$theme === "black"
      ? "black"
      : props.$theme === "white"
      ? "white"
      : "white"};
  width: 100%;
  text-decoration: none; // Alt çizgileri kaldır
  font-size: 18px; // Font boyutunu ayarla
  text-align: center;
  overflow: hidden; // Taşma durumunda içeriği gizle
  transition: color 0.3s ease; // Renk değişiminde yumuşak bir geçiş

  background: linear-gradient(to right, #ffff00 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.3s ease-out, color 0.3s ease;

  &:hover {
    color: black; // Hover durumunda metin rengini değiştir
    background-position: left bottom; // Hover durumunda gradient arka planı içeri alır
  }

  &.active {
    font-weight: bold;
  }
`;

const MinimalSizeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  width: 100%;
`;

const Header = styled.h2`

font-size.24px;
color:white

`;

export const Content = styled.div`
  margin-left: ${(props) => (props.$sidebarstatus ? "275px" : "50px")};
  width: calc(100% - ${(props) => (props.$sidebarstatus ? "275px" : "50px")});
  height: auto;
  overflow-y: auto; /* Dikey kaydırma */
  position: relative;
  /* İçerik bölümünün arkasında sabit bir sidebar olduğu için z-index ile onun üzerinde olmasını sağlayın */
  z-index: 1;
  transition: width 0.5s ease-in, margin-left 0.5s ease-in;
`;

export default function Sidebar(props) {
  const { theme, OpenCloseBar, sidebarstatus } = props;

  return (
    <>
      <Wrapper>
        <Aside $theme={theme} $sidebarstatus={sidebarstatus}>
          {sidebarstatus ? <Header>Timelify</Header> : <Header>T</Header>}

          <Navigation $theme={theme}>
            {sidebarstatus ? (
              <StyledNavLink $theme={theme} to={"/app/mainpage"}>
                PROJECTS
              </StyledNavLink>
            ) : (
              <>
               
                <MinimalSizeWrapper>
                  <StyledNavLink $theme={theme} to={"/app/mainpage"}>
                    <FontAwesomeIcon icon={faHouse} />{" "}
                  </StyledNavLink>{" "}
                </MinimalSizeWrapper>{" "}
              </>
            )}
            {sidebarstatus ? (
              <StyledNavLink $theme={theme} to={"/app/dashboard"}>
                DASHBOARD
              </StyledNavLink>
            ) : (
              <>
                
                <MinimalSizeWrapper>
                  
                  <StyledNavLink $theme={theme} to={"/app/dashboard"}>
                    <FontAwesomeIcon icon={faGauge} />{" "}
                  </StyledNavLink>{" "}
                </MinimalSizeWrapper>{" "}
              </>
            )}
            {sidebarstatus ? (
              <StyledNavLink $theme={theme} to={"/app/reports"}>
                REPORTS
              </StyledNavLink>
            ) : (
              <>
                {" "}
                <MinimalSizeWrapper>
                  {" "}
                  <StyledNavLink $theme={theme} to={"/app/reports"}>
                    {" "}
                    <FontAwesomeIcon icon={faDatabase} />
                  </StyledNavLink>{" "}
                </MinimalSizeWrapper>{" "}
              </>
            )}
          </Navigation>
        </Aside>
        <Content $sidebarstatus={sidebarstatus}>
          <Outlet></Outlet>
        </Content>
      </Wrapper>
    </>
  );
}
