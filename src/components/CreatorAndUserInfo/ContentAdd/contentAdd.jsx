import React from "react";
import { useEffect, useState } from "react";
import ColorList from "./ColorLists";

import "./contentAdd.css";
import axios from "axios";

export default function ContentAdd(props) {
  const { closeContentCard, colorData, cardColorSelection,colorHex } = props;

  function closeContentCardAction() {
    closeContentCard(false);
  }

 

  const sendFormData = async (event) => {

    const uniqueCardID =  Math.floor(Math.random()*100000000)
    event.preventDefault();

  
    const selectedCardInfos = {
      ProjectName: event.target.ProjectName.value,
      TotalSpendingTime: event.target.TotalSpendingTime.value,
      VsLastWeek:0,
      cardColor: event.target.selectedColor.value,
    };

    //Card bilgilerini yukarı app.jsx 'e yolluyorum
     cardColorSelection(selectedCardInfos)

    
      try {
        const response = await axios.post(
          ` http://localhost:8080/createNewCard/:${uniqueCardID}`,
          selectedCardInfos
        );
        
      } catch (err) {
        console.log("gönderilirken hata: ", err);
      }
    
  };

  return (
    <>
      <div className="content-container">
        <div className="closeButton-container">
          <h1 className="AddTitle">Proje Ekle 🙌</h1>
          <div className="buton-container"></div>
          <button
            className="contentCloseButton"
            onClick={closeContentCardAction}
          >
            X
          </button>
        </div>
        <div className="insertInfo">
          <form
            className="createCardForm"
            onSubmit={(event) => sendFormData(event)}
          >
            <label htmlFor="">Proje İsmi</label>
            <input
              id="projectName"
              name="ProjectName"
              type="text"
              placeholder="Full Stack Kurs"
            />
            <label htmlFor="">Harcanan Süre (Varsa)</label>
            <input
              id="spendingTime"
              name="TotalSpendingTime"
              placeholder="01:10:05 (hh:mm:ss)"
              type="text"
            />
            <label>
              Proje Kart Rengi Seçimi:
              <select name="selectedColor">
                <ColorList
                  colorData={colorData}
                  cardColorSelection={cardColorSelection}
                />
              </select>
            </label>

            <div className="addButon-container">
              <button type="submit" className="addBtn">
                Add Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
