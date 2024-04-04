import React, { startTransition, useState,useRef,useEffect } from "react";
import { useTimer} from "react-timer-hook";


import './TimerAllTracker.css'

import TimeSetter from "../TimeSetter";
import CountdownApp from "../CountDownV2/CountDownV2";
import CounterAppCircle from "../CountDownV2/CountDownV1";

export default function TimerAllTracker({ expiryTimestamp }) {


  const [timerTime, setTimerTime] = useState(0);
  const [integer, setInterger] = useState(false);
  const [resumeBtn, setResumeBtn] = useState(false);
  const [startName, setStartName] = useState("Start");
  const [inputValue, setInputValue] = useState(0);
  const [timerShow, setTimerShow] = useState(0);

  const starterRef = useRef(null); // Child 1'deki starter fonksiyonuna referans

  // Child 2'den çağrılacak fonksiyon
  const processStart = () => {
    if (starterRef.current) {
      starterRef.current();
    }
  };
  


  function putRe(totalSeconds) {
    if (totalSeconds > 0) {
      setStartName("Restart");
      setResumeBtn(true);
    } else if (totalSeconds === 0) {
      setStartName("Start");
      setResumeBtn(false);
    }
  }

  function hideResume() {
    setResumeBtn(false);
  }

  function readTimeValue(event) {
    const inputValue = event.target.value;
    let finalIntegerValue = null;
    if (!isNaN(inputValue)) {
      setInterger(true);
      finalIntegerValue = Number(inputValue);
    } else {
      setInterger(false);
      finalIntegerValue = 0;
    }

    setTimeout(() => {
      setTimerTime(finalIntegerValue);
    }, 10);
  }

  function setConstTime(num) {
    setTimerTime(num);
  }


  return (
    <>
    <div className="changeTimer">
      <button className=" btn" onClick={() => setTimerShow(0)}>Cycle CountDown View</button>
      <button className=" btn" onClick={() => setTimerShow(1)}>Classic CountDown View</button>
      <button className=" btn" onClick={() => setTimerShow(2)}>Count to Target</button>
      </div>
      <div className="allTimer-Wrapper">
        <div className="count-wrapper">
          {timerShow === 0 ? (
            <CounterAppCircle
              expiryTimestamp={expiryTimestamp}
              hideResume={hideResume}
              timerTime={timerTime}
              setTimerTime={setTimerTime}
              inputValue={inputValue}
              putRe={putRe}
              setInputValue={setInputValue}
              resumeBtn={resumeBtn}
              startName={startName}
              processStartV1Ref={starterRef} 

              
            />
          ) : timerShow === 1 ? (
            <CountdownApp timerTime={timerTime} />
          ) : timerShow === 2 ? (
            <p>countup</p>
          ) : (
            <p className="error">There is a problem when loading counter</p>
          )}

          <TimeSetter
            integer={integer}
            readTimeValue={readTimeValue}
            timerTime={timerTime}
            resumeBtn={resumeBtn}
            setConstTime={setConstTime}
            processStarted= {processStart}
            hideResume={hideResume}
            
          ></TimeSetter>
        </div>
      </div>
    </>
  );
}
