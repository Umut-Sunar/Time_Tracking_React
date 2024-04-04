import React from "react";

import TimerAllTracker  from "../CountDown/TimerAllTracker";


export default function Timer() {
              const time = new Date();
              time.setSeconds(time.getSeconds() );
              return (
                <>
                
                  <TimerAllTracker expiryTimestamp={time} />
                
                
                </>
              );
            }