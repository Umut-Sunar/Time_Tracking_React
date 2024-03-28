import React from "react";
import { useEffect, useState } from "react";

import Cards from "./src/components/SummaryCard/Cards/Cards";
import UserProfile from "./src/components/CreatorAndUserInfo/UserCard/UserCard";
import { BackgroundChange } from "./src/components/ChangeBackground/background";
import BlueElements from "./src/components/ChangeBackground/dynamicBlue";
import ColorfulElement from "./src/components/ChangeBackground/colorfulElement";

import usersData from "./Data/userData";
import cardsData from "./Data/cardData";
import colorData from "./Data/colorlist";
import bgNames from "./Data/backgroundData";

import "./App.css";

export default function App() {
  const [userData, setUserData] = useState(usersData);
  const [cardData, setCardData] = useState(cardsData);
  const [addCardStatus, setAddCardStatus] = useState(false);
  const [activeBg,setActiveBg] = useState('dynamicBlue')

  /* Bu bölüm useEffect ile ilgili olduğunu düşünüyorum. Bu nedenle şimdi bırakıyorum

  const userIdReach = 1;

  function filtereleme(userIdReach) {
    const filtered = cardsData.find(
      (eachdata) => eachdata.userID === userIdReach
    );

    if (filtered) {
      const result = filtered["Projects"];
      setCardData(result);
    } else {
      setCardData([])
    }
  }
  useEffect(() => {
    filtereleme(userIdReach);
  }, [userIdReach]);
*/

  function addBtn() {
    if (addCardStatus === false) {
      setAddCardStatus(true);
    }
  }

  function changBGColor(arr) {
    const html = document.querySelector("html");

    const whichBG = arr.split(" ");
    let result = whichBG[whichBG.length - 1];
    result = result.replace(/^\./, "")
    html.classList = "";
    html.classList.add(result);
    setActiveBg(result)
  }

  return (
    <>
      <BackgroundChange
        bgNames={bgNames}
        changBGColor={changBGColor}
      ></BackgroundChange>
      <UserProfile userData={userData} addCard={addBtn}></UserProfile>
      {addCardStatus && (
        <contentAdd
          closeContentCard={closeContentCard}
          contentCreate={contentCreate}
          colorData={colorData}
        ></contentAdd>
      )}
      <Cards
        classname={"main-cards-area"}
        userData={userData}
        cardData={cardData}
      ></Cards>

{ (activeBg==="dynamicBlue") ? <BlueElements/> : (activeBg==="dynamicColorful") ? <ColorfulElement/> :null }

    </>
  );
}
