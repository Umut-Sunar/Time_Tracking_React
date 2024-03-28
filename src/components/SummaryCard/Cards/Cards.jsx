import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

function Cards(props) {
  const { cardData, userData } = props;

  return (
    <div className="projects" id="projectArea">
    <div className="wrapper">
      {cardData && cardData.map((each, id) => {
        return <Card key={id} eachCardData={each} userData={userData} />;
      })}
    </div>
    </div>
  );
}

export default Cards;
