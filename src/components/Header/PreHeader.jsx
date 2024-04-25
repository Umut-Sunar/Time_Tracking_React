import React from "react";

import HamburgerIcon from "./HamburgerIcon";
import HeaderLogo from "./Logo";
import Notification from "./Notification";
import UserInfoHeader from "./UserInfo";
import UserProfileHeader from "./UserDetailsHeader";
import styled from "styled-components";


const WrapperLeft = styled.div`


width: 100px;
height: 100%;
padding: 5px;
display: flex;
gap:10px;
justify-content: center;
align-items: center;

`;
const WrapperRight = styled.div`
width: 400px;
display: flex;
gap:50px;
padding-right: 20px;
justify-content: center;
align-items: center;
`;
const Container = styled.div`

box-shadow: 0 0 1px 1px black;

display: flex;
justify-content: space-between;
width: 100%;
height: 50px;
position: fixed;
top:0px;
z-index: 100;
background-color: ${(props) => props.$theme === 'black' ? 'white' : props.$theme=== 'white' ? '#524ee1;' : 'white'  }  ;
color: ${(props) => props.$theme === 'black' ? 'black' : props.$theme=== 'white' ? 'white' : 'black'  }  ;

`;

export default function PreHeader(props) {
  const { userData, isLogin, setTheme, theme, bgNames , changBGColor,OpenCloseBar,sidebarstatus,logout } = props;

  return (
    <>
      <Container $theme={theme} >
        <WrapperLeft>
          <HamburgerIcon
          OpenCloseBar={OpenCloseBar}
          sidebarstatus={sidebarstatus}
          $theme={theme} />
          <HeaderLogo />
        </WrapperLeft>

        <WrapperRight>
          <UserInfoHeader 
          
          theme={theme}
          userData={userData} />
          <Notification  $theme={theme}/>
          <UserProfileHeader
          logout={logout}
          bgNames={bgNames}
          changBGColor={changBGColor}
          userData={userData}
          isLogin={isLogin}
          theme={theme}
          setTheme={setTheme}
          />
        </WrapperRight>
      </Container>
    </>
  );
}
