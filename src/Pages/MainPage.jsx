import React, { useRef } from "react";
import { useEffect, useState } from "react";

import Cards from "../components/SummaryCard/Cards/Cards";
import UserProfile from "../components/CreatorAndUserInfo/UserCard/UserCard";

import BlueElements from "../components/ChangeBackground/dynamicBlue";
import ColorfulElement from "../components/ChangeBackground/colorfulElement";
import ContentAdd from "../components/CreatorAndUserInfo/ContentAdd/contentAdd";
import EnteranceSentence from "../components/EnteranceSentence/EnterenceSentence";
import Timer from "../components/TrackerArea/Timer/TimerConcat/Timer";

import cardsData from "../../Data/cardData";
import colorData from "../../Data/colorlist";
import colorHex from "../../Data/colorListMatchCode";



import "./MainPage.css";
import axios from "axios";
import api_path from "../../Backend/Api_path";

export default function MainPage(props) {
  const { activeBg, userData } = props;

  //USER ID 'ye göre data getiren yer bu state
  const [cardData, setCardData] = useState(userData.projectDetails);
  const [isNewCarAdded,setIsNewCardAdded] = useState(false)
  const [addCardStatus, setAddCardStatus] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isOpenTrackerArea, setOpenTrackerArea] = useState(false);
  const [isMouseClickAddContent, setIsMouseClickAddContent] = useState(false);

  const contentCardFocus = useRef(null);


  useEffect(() => {
   
    
    const whereClick = document.body.addEventListener("mousedown", (ev) => {
      closingContentAddWithClick(ev.target, contentCardFocus);
    });

    axios.get(`${api_path}`,{withCredentials:true}).then(res => {
      
      setCardData(res.data.
        userInformation.projectDetails
        ) 


    }).catch((err ) => {console.log('Mainpage.js carddata çekilirken hata' )}) 
setIsNewCardAdded(false)

  }, [addCardStatus,isNewCarAdded]);

  function closingContentAddWithClick(element, focus) {
    const isCover = focus.current.contains(element);
    setAddCardStatus(isCover);
    setIsMouseClickAddContent(isCover);
  }

  function addBtn() {
    if (addCardStatus === false) {
      setAddCardStatus(true);
    }
  }

  function closeContentCard(boolen) {
    if (addCardStatus === true) {
      setAddCardStatus(boolen);
    }
  }

  //card create fonskyionudur aslında, ismini çok yerde kullandığım
  // için değiştirmedim

  function showRelatedTrackerDetails() {
    return;
  }

  return (
    <>
      <section className="main-section">
        <div className="main-container" id="mainSection">
         

          <div className="User-Playground">
            <UserProfile userData={userData} addCard={addBtn}></UserProfile>
            {addCardStatus && (
              <ContentAdd
                closeContentCard={closeContentCard}
                // contentCreate={contentCreate}
                colorData={colorData}
                
                colorHex={colorHex}
                ref={contentCardFocus}
                isMouseClickAddContent={isMouseClickAddContent}
                setIsNewCardAdded={setIsNewCardAdded}
              ></ContentAdd>
            )}
            <Cards
              classname={"main-cards-area"}
              userData={userData}
              cardData={cardData}
              setCardData={setCardData}
              showRelatedTrackerDetails={showRelatedTrackerDetails}
              setOpenTrackerArea={setOpenTrackerArea}
              setIsNewCardAdded={setIsNewCardAdded}
            ></Cards>
          </div>
          {activeBg === "dynamicBlue" ? (
            <BlueElements />
          ) : activeBg === "dynamicColorful" ? (
            <ColorfulElement />
          ) : null}

          <div className="records-main-section">
            <hr className="divider" />
            <div className="tracker-main-container">
              {isOpenTrackerArea ? <Timer /> : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
