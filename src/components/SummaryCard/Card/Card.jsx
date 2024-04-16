import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Card.css";
import axios from "axios";
import api_path from "../../../../Backend/Api_path";

function Card(props) {
  const { eachCardData, showRelatedTrackerDetails, setOpenTrackerArea, key2 } =
    props;

  function showTrackerDetails() {
    showRelatedTrackerDetails(eachCardData);
    setOpenTrackerArea(true);
  }

  function scrollToDivider(e) {
    const divider = document.querySelector(".divider");
    const xyPosition = divider.getBoundingClientRect();

    window.scrollTo(0, xyPosition.top);
  }

  function deleteCard() {
    axios
      .delete(`${api_path}/cardDelete/:${keys}`)
      .then((response) => response.data)
      .catch((err) => console.log("Card Silinirken hata: ", err));
  }

  return (
    <>
      <div className="card-main relative">
        <div className="cardbg absolute"></div>
        <div className="delete" onClick={deleteCard}>
          <FontAwesomeIcon className="deleteIconBtn" icon={faTrash} />
        </div>
        {eachCardData && (
          <div
            className="cardFields relative"
            style={{ "background-color": `${eachCardData.cardColor}` }}
          >
            <div className="Contentwrapper">
              <h2 className="cardTitle">{eachCardData.ProjectName}</h2>
              <div className="spendingTimeDiv">
                <p className="spendingHour">{eachCardData.TotalSpendingTime}</p>
              </div>
              <p className="weeklyChange">
                <span>Weekly Change % </span>
                <span
                  className="changeRatio"
                  style={{
                    color:
                      eachCardData.VsLastWeek > 0
                        ? "green"
                        : eachCardData.VsLastWeek === 0
                        ? "black"
                        : "red",
                  }}
                >
                  {eachCardData.VsLastWeek}
                </span>
              </p>
            </div>
            <div className="carBtn-main-container">
              <button
                className="addBtn cardBtn"
                onClick={(e) => {
                  showTrackerDetails(), scrollToDivider(e);
                }}
              >
                Start
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
