import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerIconStyled = styled.img`

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


<FontAwesomeIcon icon={faBars} onClick={handleStatusChange} />



</>

)


}


