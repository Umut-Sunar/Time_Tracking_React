import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Auth from "./Login";
import { devices } from "../../deviceStyles/devices";
import api_path from "../../Backend/Api_path";
import { Navigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(250deg, #edac57 4.93%, #ff6462 70.99%);
  position: relative;

@media ${devices.md} {
  height: 1000px;
}

`;

const ImageContainer = styled.div`
  width: 500px;
  height: 100%;
`;

const AuthImage = styled.img`
  height: 100%;
  width: 500px;
  object-fit: cover;
`;

const AuthArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  z-index: 10;
  padding: 10px;
  gap: 30px;
  text-align: center;
  @media ${devices.lg} {
    position: absolute;
    margin-top: 60px;
    height: 600px;

  }
`;

const DynamicSlogan = styled.h1`

font-size: 36px;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  font-style: normal;
  color: black text-align= center;
  line-height: 1.4;
  transition: 0.3s ease-in;

`;

const StaticParagraf= styled.p`
font-size: 18px;
font-family: "Roboto", sans-serif;
font-weight: 500;

color: white,
text-align:center;
line-height: 1.4;

`
const TextWrapper= styled.div`


`
export default function AuthPage(props) {
  const { isLogin, isSignup, changeLoginStatu, setSignup,setUserData } = props;

  const [isActive, setIsActive] = useState(window.innerWidth > 501);
  const [dynamic, setDynamic] = useState(`Measure to Empower : Your Time, Your Growth, Your Future`);

  useEffect(() => {
    function handleChange() {
      setIsActive(window.innerWidth > 501);
    }

    window.addEventListener("resize", handleChange);

    let count = 1;
    const dynamicSentence = setInterval(() => {
      const keywords = ["Growth", "Efficiency", "Goals", "Success", "Impact"];
      let sentence = `Measure to Empower : Your Time, Your   ${keywords[count]}, Your Future`;
      setDynamic(sentence);
      
      count++;
      if (count === 4) {
        count = 0;
        return count;
      }
    }, 4000);
  }, []);

function submitAuth(gettedUserInfo){
  axios
      .post(`${api_path}/authentication`, gettedUserInfo,{ withCredentials: true})
      .then((response) => {
        
        
        changeLoginStatu(response.data.login)
        setUserData(response.data.userInformation)
        
        
        })
      .catch((err) =>
        console.log("Kullanıcı bilgileri gönderilirken hata oluştu")
      );
}



  return (
    <>
    {isLogin===true ? <Navigate to='/'  /> :
      <Wrapper className="AuthWrapper">
        {isActive ? (
          <ImageContainer>
            <AuthImage src="src/img/calisankiz.jpg" />
          </ImageContainer>
        ) : null}

        <AuthArea className="AuthArea">
        {isActive ? ( 
          <TextWrapper className="textWrapper">
          <DynamicSlogan>{dynamic}</DynamicSlogan>
          <StaticParagraf>Don't wait for change,create it!. Start transforming your life today.</StaticParagraf>
          </TextWrapper>
        ) : <TextWrapper>
        <DynamicSlogan>Timelify</DynamicSlogan>
        <StaticParagraf>Don't wait for change,create it!. Start transforming your life today.</StaticParagraf>
        </TextWrapper>}
          

          <Auth submitAuth={submitAuth} />
        </AuthArea>
      </Wrapper>
}
    </>
  );
}
