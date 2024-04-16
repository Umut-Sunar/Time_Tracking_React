import React from "react";
import styled from "styled-components";



const Enterance = styled.div`

color: black;
  font-family: "Roboto Slab", serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 3.2px;
  text-align: center;
  width: 100%;
  padding: 20px;
  text-align: center;
`

const EnteranceSen = styled.h1`

width: 100%;
font-size: 40px;
overflow-wrap: break-word;
`

export default function EnteranceSentence() {


return(

<>

<Enterance>
              
              <EnteranceSen>ARE YOU ADDICTED TRACKING YOUR PRODUCTIVITY? </EnteranceSen>
              
              

              </Enterance>
</>

)


}