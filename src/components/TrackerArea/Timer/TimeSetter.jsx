import React from "react";
import { useState } from "react";
import styled from "styled-components";

const WorkingOnQuote= styled.h4`

color:rgb(82, 78, 225);
font-size:32px;

`

export default function TimeSetter(props) {
  const {
    timerTime,
    readTimeValue,
    integer,
    hideResume,
    inputValue,
    setConstTime,
    processStarted,
  } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="time-setter-container">
      <div className="timeSetterInput">
        <div className="timeSetter">
          <input
            type="text"
            value={inputValue}
            className="timeSetter-input"
            onChange={(e) => readTimeValue(e)}
          />
          <div className="time-setter-btns">
            <button
              className="timeSettterBtn addBtn"
              style={{ width: "30px", height: "30px" }}
              onClick={() => {
                setConstTime(25);
                processStarted();
              }}
            >
              25
            </button>
            <button
              className="timeSettterBtn addBtn"
              style={{ width: "30px", height: "30px" }}
              onClick={() => {
                setConstTime(40);
                processStarted();
              }}
            >
              40
            </button>
          </div>
        </div>
        {/* {!integer ? (
      <p className="integerError">Please enter only number</p>
    ) : (
      <p className="integerError">Put your number as a minute</p>
    )} */}
      </div>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="taskName"
      >
         <WorkingOnQuote  className="taskTitle">What are you working on ? </WorkingOnQuote>
        <div className="inputArea">
          <input
            placeholder="Some development stuff baby!"
            className="task"
            type="text"
          />
          {isHovered ? (
            <button className="trackerAddbtn">
              Add
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
