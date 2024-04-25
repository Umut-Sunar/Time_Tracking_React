import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { BackgroundChange } from "../ChangeBackground/background";
import { Link } from "react-router-dom";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const ProfileCircle = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: cornflowerblue;
  position: absolute;
`;
const ProfileCircleInnerName = styled.p`
  font-size: 14px;
  position: absolute;
  z-index: 10;
`;
const ProfileCircleWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ProfileCardWrapper = styled.div`
  position: absolute;

  flex-direction: column;
  justify-content:space-between;
  padding: 5px;
  width: 250px;
  height: 300px;

  top: 100%;
  right: 5%;
  display: flex;

  opacity: ${(props) => (props.$display === "none" ? 0 : 1)};
  visibility: ${(props) => (props.$display === "none" ? "hidden" : "visible")};
  transition: opacity 0.15s ease-in, visibility 0.15s ease-in;

  background-color: rgb(82, 78, 225);
`;

const ProfileCardLınks = styled(Link)`
  text-decoration: none;
  font-size: 12px;

  color: ${(props) =>
    props.$theme === "white"
      ? 'rgb(255, 255, 255)'
      : props.$theme === "black"
      ? '#000000'
      : "pink"};
`;

const LogoutWrapper = styled.div``;

const AllWrapper = styled.div`
  display: flex;
flex-direction: column;
  justify-content: start;
  gap:20px
`;

export default function UserProfileHeader(props) {
  const { userData, isLogin, theme, bgNames, changBGColor ,setTheme,logout} = props;
  const [shortName, setShortName] = useState("");
  const [openUserInfo, setOpenUserInfo] = useState("none");

  function toggleUserArea() {
    if (openUserInfo === "none") {
      setOpenUserInfo("flex");
    } else {
      setOpenUserInfo("none");
    }
    
  }

  useEffect(() => {

  
const namo= userData.name
    if(namo && namo.length>0){
    const names = namo.split(" ");

    const firstNameLetter = names[0][0];
    const surName = names[names.length - 1].toUpperCase();

    const surNameLetter = surName[0].toUpperCase();
    const resultShortLetters = firstNameLetter + surNameLetter;
    setShortName(resultShortLetters);
  }else {

    setShortName('SS');
  }
  }, [isLogin]);


  function handleLogout(){
    logout()
  }

  return (
    <>
      <ProfileCircleWrapper onClick={toggleUserArea}>
        <ProfileCircle />
        <ProfileCircleInnerName>{shortName}</ProfileCircleInnerName>
      </ProfileCircleWrapper>

      <ProfileCardWrapper $theme={theme} $display={openUserInfo}>
        <AllWrapper>
        <ProfileCardLınks $theme={theme} >
          {userData.name ? userData.name : 'Complete your profile '   } 
          
        </ProfileCardLınks>
        <ProfileCardLınks $theme={theme} >
          {userData.email}
        </ProfileCardLınks>

        <ProfileCardLınks $theme={theme} >
          Profile Settings
        </ProfileCardLınks>
        {/* <BackgroundChange
        setTheme={setTheme}
          bgNames={bgNames}
          changBGColor={changBGColor}
        ></BackgroundChange> */}
        <ProfileCardLınks $theme={theme} >
          UPGRADE
        </ProfileCardLınks>
        </AllWrapper>
        <LogoutWrapper>
          <ProfileCardLınks $theme={theme} onClick={handleLogout}  to='/' >
            Logout
          </ProfileCardLınks>
        </LogoutWrapper>
      </ProfileCardWrapper>
    </>
  );
}
