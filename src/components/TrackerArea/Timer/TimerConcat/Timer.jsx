import * as React from "react";


import TimerAllTracker from "../CountDown/TimerAllTracker";
import TaskArea from "../../../TaskArea/TaskArea";



export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds());
  return (
    <>
      <TimerAllTracker expiryTimestamp={time} />


    <TaskArea></TaskArea>
    </>
  );
}
