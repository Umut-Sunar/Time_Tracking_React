import React from "react";
import { useEffect, useState } from "react";

import Cards from "./src/components/SummaryCard/Cards/Cards";
import UserProfile from "./src/components/CreatorAndUserInfo/UserCard/UserCard";
import { BackgroundChange } from "./src/components/ChangeBackground/background";
import BlueElements from "./src/components/ChangeBackground/dynamicBlue";
import ColorfulElement from "./src/components/ChangeBackground/colorfulElement";
import ContentAdd from "./src/components/CreatorAndUserInfo/ContentAdd/contentAdd";

import usersData from "./Data/userData";
import cardsData from "./Data/cardData";
import colorData from "./Data/colorlist";
import bgNames from "./Data/backgroundData";
import colorHex from "./Data/colorListMatchCode";

import "./App.css";

export default function App() {
  const [userData, setUserData] = useState(usersData);
  const [cardData, setCardData] = useState(cardsData);
  const [addCardStatus, setAddCardStatus] = useState(false);
  const [activeBg, setActiveBg] = useState("dynamicBlue");



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

  function changBGColor(arr) {
    const html = document.querySelector("html");

    const whichBG = arr.split(" ");
    let result = whichBG[whichBG.length - 1];
    result = result.replace(/^\./, "");
    html.classList = "";
    html.classList.add(result);
    setActiveBg(result);
  }

  //card create fonskyionudur aslında, ismini çok yerde kullandığım
  // için değiştirmedim
  function cardColorSelection(selectedDataObj) {
    const newCardData = selectedDataObj;
    setCardData([...cardData, newCardData]);
  }



  return (
    <>
      <BackgroundChange
        bgNames={bgNames}
        changBGColor={changBGColor}
      ></BackgroundChange>

      <UserProfile userData={userData} addCard={addBtn}></UserProfile>
      {addCardStatus && (
        <ContentAdd
          closeContentCard={closeContentCard}
          // contentCreate={contentCreate}
          colorData={colorData}
          cardColorSelection={cardColorSelection}
          colorHex= {colorHex}
        ></ContentAdd>
      )}
      <Cards
        classname={"main-cards-area"}
        userData={userData}
        cardData={cardData}
      ></Cards>

      {activeBg === "dynamicBlue" ? (
        <BlueElements />
      ) : activeBg === "dynamicColorful" ? (
        <ColorfulElement />
      ) : null}
    </>
  );
}
