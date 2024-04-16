import React from "react";
import styled from "styled-components";

const Bell = styled.img`
  width: 20px;
  height: 20px;
`;

export default function NotificationButton(props) {
const {theme} = props


  return (
    <>
     {theme==="white" ? <Bell src="src/img/bell.svg" />: <Bell src="src/img/bellwhite.svg" />} 
    </>
  );
}
