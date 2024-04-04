import React from "react";
import "./Card.css";

function Card(props) {
  const { eachCardData } = props;

  function showTrackerDetails() {
    return null;
  }

  return (
    <>
      <div className="card-main relative">
        <div className="cardbg absolute"></div>
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
              <button className="addBtn cardBtn" onClick={showTrackerDetails}>Start</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;

//
