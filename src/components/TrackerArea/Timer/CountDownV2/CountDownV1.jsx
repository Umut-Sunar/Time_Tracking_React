import React from "react";
import { useTimer } from "react-timer-hook";
import { useEffect } from "react";

import CircleSvg from "../Circle/Circle";

export default function CounterAppCircle(props) {

              const { expiryTimestamp,hideResume,timerTime,inputValue,putRe,resumeBtn,startName,setInputValue,processStartV1Ref} = props

              const {
                totalSeconds,
                seconds,
                minutes,
                hours,
                days,
                isRunning,
                start,
                pause,
                resume,
                restart,
              } = useTimer({
                expiryTimestamp,
                // onExpire: () => console.warn("onExpire called"),
              });

              
              function starter() {


                const time = new Date();
                time.setSeconds(time.getSeconds() + timerTime * 60);
                restart(time);
                hideResume()
                setInputValue(0);

              }


              useEffect(() => {
                processStartV1Ref.current = starter() ; // Parent bileşenine starter fonksiyonunu atayın
                starter()
              }, [processStartV1Ref,timerTime]);
            
              
  return (
    <>
      <div className="counter-Area">
        <div className="timer-area">
          {/* <div className="timer-hour">
  <span className="timer-hour-area">Hour</span>
  <span className="timer-hour-">:{hours}</span>
</div> */}
          <div className="time">
            {/* <span className="timer-minutes-area"></span> */}
            <span className="time-text">{minutes}</span>
            <span style={{ fontSize: "14px" }} className="small">
              {" "}
              min{" "}
            </span>
          </div>
          <div className="time">
            {/* <span className="timer-seconds-area"></span> */}
            <span className="time-text">{seconds}</span>
            <span style={{ fontSize: "14px" }} className="small">
              {" "}
              sec
            </span>
          </div>
        </div>
        <div className="cirleSVG">
          <CircleSvg
            statu={resumeBtn}
            settedTime={timerTime}
            isRunning={isRunning}
            totalSeconds={totalSeconds}
            inputValue={inputValue}
          />
        </div>
      </div>

      <div className="buttons">
        {!isRunning ? (
          <button
            className="addBtn"
            onClick={() => {
             starter()
            }}
          >
            {startName}
          </button>
        ) : (
          <button
            className="addBtn"
            onClick={() => {
              pause();
              putRe(totalSeconds);
            }}
          >
            Pause
          </button>
        )}
        {resumeBtn ? (
          <button
            className="addBtn"
            onClick={() => {
              resume();
              hideResume();
            }}
          >
            Resume
          </button>
        ) : null}
      </div>
    </>
  );
}
