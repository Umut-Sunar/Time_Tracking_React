import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

function Cards(props) {
  const { cardData } = props;

  return (
    <>
      <div className="projects" id="projectArea">
        <div className="wrapper">
          {cardData.length > 0 ? (
            cardData.map((each, id) => {
              return <Card key={id} eachCardData={each} />;
            })
          ) : (
            <div className="emptyWrapper">
              <img className="emptyIMG" src="src/img/Group 26753.svg" alt="" />
              <p className="emptyCardMes">
                {
                  "Looks like, no project yet  "
                } <span> {' 👈 Click on the Add buton to happen amazing things'} </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cards;
