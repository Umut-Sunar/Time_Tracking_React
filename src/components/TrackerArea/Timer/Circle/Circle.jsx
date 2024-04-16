import React, { useEffect, useState } from "react";
import './circle.css'

export default function CircleSvg(props) {
const {settedTime,statu,isRunning,totalSecond} = props
const [animationPlayState, setAnimationPlayState] = useState('paused');


useEffect(() => {
  // statu true ise animasyonu çalıştır, değilse duraklat
  setAnimationPlayState((!statu && isRunning)? 'running' : 'paused');
}, [statu,isRunning,totalSecond]);


  return (
    <>
      <svg
        width="150  "
        height="150"
        viewBox="0 0 250 250"
        className="circular-progress"
        style={{ 
          animationName: 'progress-animation',
          animationDuration: `${settedTime*60}s`,
          animationTimingFunction: 'linear',
          animationDelay: '0s',
          animationIterationCount: '1',
          animationFillMode: 'forwards',
          animationPlayState: animationPlayState
        }}

      >
        <circle className="bg"></circle>
        <circle className="fg"></circle>
      </svg>
    </>
  );
}
