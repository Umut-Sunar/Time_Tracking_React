import React from "react";
import { useEffect, useState ,forwardRef} from "react";
import ColorList from "./ColorLists";

import "./contentAdd.css";
import axios from "axios";
import api_path from "../../../../Backend/Api_path";

const ContentAdd = forwardRef((props,ref) => {
  const { closeContentCard, colorData, cardCreated, colorHex } = props;

  const [nameArea, setNameArea] = useState("");
  const [hourArea, setHourArea] = useState("");


  function closeContentCardAction() {
    closeContentCard(false);
  }

  function listenNameChange(event) {
    const upperTitle = event.target.value;
    const newArray = upperTitle.split(" ");
    const capArray = newArray.map(
      (each) => each.charAt(0).toUpperCase() + each.slice(1)
    );
    const resultText = capArray.join(" ");

    setNameArea(resultText)
   
 
  }
  function listenHourChange(event) {
    const hour = event.target.value.toUpperCase();
    setHourArea(hour);
  }

  function resetForm() {
    setTimeout(() => {

      setHourArea("");
      setNameArea("");
    },10)
   
  }
  const sendFormData = async (event) => {
    const uniqueCardID = Math.floor(Math.random() * 100000000);
    event.preventDefault();

    const selectedCardInfos = {
      ProjectName: event.target.ProjectName.value,
      TotalSpendingTime: event.target.TotalSpendingTime.value,
      VsLastWeek: 0,
      cardColor: colorHex[event.target.selectedColor.value],
      uniqueCardID: uniqueCardID,
    };

    //Card bilgilerini yukarı mainpage.jsx 'e yolluyorum
    cardCreated(selectedCardInfos);

    try {
      const response = await axios.post(
        `${api_path}/createNewCard/${uniqueCardID}`,
        selectedCardInfos
      );
      setHourArea("");
      setNameArea("");
    } catch (err) {
      console.log("gönderilirken hata: ", err);
    }
  };

  return (
    <>
      <div ref={ref} 

      className="content-container">
        <div className="closeButton-container">
          <h1 className="AddTitle">Add Project for being awesome 🙌</h1>
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
            <label htmlFor="">Project Name</label>
            <input
              id="projectName"
              name="ProjectName"
              type="text"
              placeholder="Full Stack Course"
              autoComplete="off"
              value={nameArea}
              onChange={(e) => listenNameChange(e)}
            />
            <label htmlFor="">Spending Hour (opt)</label>
            <input
              id="spendingTime"
              name="TotalSpendingTime"
              placeholder="01:10:05 (hh:mm:ss)"
              type="text"
              autoComplete="off"
              value={hourArea}
              onChange={(ev) => listenHourChange(ev)}
            />
            <label>
              Pick Project Card Color:
              <select name="selectedColor">
                <ColorList
                  colorData={colorData}
                  
                />
              </select>
            </label>

            <div className="addButon-container">
              <button type="submit" className="addBtn" onClick={resetForm}>
                Add Project
              </button>
            </div>
          </form>
        </div>
      </div>
 
 
    </>
  );
}
)

export default ContentAdd