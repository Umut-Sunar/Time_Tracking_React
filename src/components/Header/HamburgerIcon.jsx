import React from "react";
import styled from "styled-components";


const HamburgerIconWhite = styled.img`

width: 30px;
height:30px;

`

const HamburgerIconBlack = styled.img`

width: 30px;
height:30px;

`

export default function HamburgerIcon (props) {

              const {theme,OpenCloseBar,sidebarstatus} =  props

              function handleStatusChange() {
                            OpenCloseBar(sidebarstatus);
                          }
return (

<>

{theme==='dark' ?
 <HamburgerIconBlack
 onClick={handleStatusChange}
 src="src/img/align-justify-black.svg"
/> 
: <HamburgerIconWhite
onClick={handleStatusChange}
src="src/img/align-justify-white.svg"
/>}

</>

)


}


