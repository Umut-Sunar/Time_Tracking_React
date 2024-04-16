import React from "react";

import NotificationButton from "./NotificationButton";
import styled from "styled-components";

const NotificationArea = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0px;
  left: 0px;


  display: none;
  flex-direction: column;
  gap: 3px;
  padding: 5px;

  background-color: ${props => props.theme === 'white' ? 'black' : props.theme=== 'black' ? 'white' : 'white' };

`;

const NotificationInfos = styled.p`
  font-size: 12px;
  color: ${props => props.theme === 'white' ? 'black' : props.theme=== 'black' ? 'white' : 'white' };
  
`;

export default function Notification(props) {

const {theme} = props

  return (
    <>
      <NotificationButton  theme={theme} />
      <NotificationArea  theme={theme}>
        <NotificationInfos  theme={theme}>No new notification</NotificationInfos>
      </NotificationArea>
    </>
  );
}
